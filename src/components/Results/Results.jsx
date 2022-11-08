import Modal from 'components/Modal';
import ResultsItem from 'components/Results/ResultsItem/ResultsItem';
import useTranslation from 'Hooks/useTranslations';
import ModalFaster from './ModalsContent/ModalFaster';
import ModalDone from './ModalsContent/ModalDone';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addReadingPage,
	getCurrentPlanning,
} from 'Redux/Planning/planningOperations';
import {
	selectPlanFact,
	selectPagesFinished,
	selectStats,
} from 'Redux/Planning/planningSelectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
	ResultsBox,
	ResultsTitle,
	ResultsForm,
	FormBox,
	ResultsLabel,
	ResultsInput,
	ResultsBtn,
	StatisticsPageBox,
	StatisticsPageTitle,
	ResultsPageList,
	CalenderResults,
} from './Results.styled';
import { useEffect } from 'react';
import { resetCurrentlyReading } from 'Redux/Books/booksSlice';
import { resetPagesAndPlan } from 'Redux/Planning/planningSlice';
import { normalizeDate } from 'components/Statistics/functions/functions';

export default function Results() {
	const [isShowModal, setIsShowModal] = useState(false);
	const [isShowModalEndReading, setIsShowModalEndReading] = useState(false);
	const [isDisabledBtn, setIsDisabledBtn] = useState(false);

	const data = useSelector(selectPlanFact);
	const pagesFinished = useSelector(selectPagesFinished);
	const translation = useTranslation();
	const dispatch = useDispatch();
	const dateToday = normalizeDate(Date.now())
	const stats = useSelector(selectStats)

	useEffect(() => {
		const checkTotalPlan = () => {
			const totalFinishedPages = stats?.reduce(
				(total, el) => total + el.pagesCount,
				0
			);

			if (data.length > 0 && data[data.length - 1].plan === totalFinishedPages) {
				setIsShowModalEndReading(true);
				setIsDisabledBtn(true);
			}
		};

		checkTotalPlan();
	}, [data, dispatch, stats]);

	const handleFormSubmit = e => {
		e.preventDefault();
		const inputValue = Number(e.target.elements.page.value);
		const pagesLeft = data[data.length - 1]?.plan - data[0]?.fact;

		if (Number.isNaN(inputValue)) {
			Notify.failure(`Enter numbers, please`);
			return;
		}

		if (inputValue > pagesLeft) {
			return Notify.failure(
				`${translation.results.notify1part} ${pagesLeft} ${translation.results.notify2part}`
			);
		}

		if (inputValue === 0) {
			return Notify.failure(`You have entered 0. Enter correct data`);
		}

		dispatch(addReadingPage({ pages: inputValue }));

		if (data[0].fact + inputValue < data[0].plan) {
			setIsShowModal(true);
		}
	};

	useEffect(() => {
		dispatch(getCurrentPlanning());
	}, [pagesFinished, dispatch]);

	const handleDoneBtnClick = () => {
		setIsShowModalEndReading(false);

		dispatch(resetCurrentlyReading())
		dispatch(resetPagesAndPlan());
	};

	return (
		<>
			<ResultsBox>
				<ResultsTitle>{translation.results.title}</ResultsTitle>
				<ResultsForm onSubmit={handleFormSubmit}>
					<FormBox>
						<ResultsLabel>
							{translation.results.label1}
							<ResultsInput type="text" value={dateToday} disabled />
							<CalenderResults />
						</ResultsLabel>
						<ResultsLabel>
							{translation.results.label2}
							<ResultsInput type="text" name="page" />
						</ResultsLabel>
					</FormBox>
					<ResultsBtn type="submit" disabled={isDisabledBtn}>
						{translation.results.btn}
					</ResultsBtn>
				</ResultsForm>
				<StatisticsPageBox>
					<StatisticsPageTitle>{translation.results.stat}</StatisticsPageTitle>
				</StatisticsPageBox>
				<ResultsPageList>
					{stats &&
						stats.map((el, i) => <ResultsItem key={i} data={el} />)}
				</ResultsPageList>
			</ResultsBox>
			{isShowModal && (
				<Modal onClose={() => setIsShowModal(false)}>
					<ModalFaster onClose={() => setIsShowModal(false)} />
				</Modal>
			)}
			{isShowModalEndReading && (
				<Modal
					onClose={() => setIsShowModalEndReading(false)}
					offBackdrop={isDisabledBtn}
				>
					<ModalDone onClose={handleDoneBtnClick} />
				</Modal>
			)}
		</>
	);
}
