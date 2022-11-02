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
	selectFinishedPages,
	selectPagesFinished,
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

	const finishedPages = useSelector(selectFinishedPages);
	const data = useSelector(selectPlanFact);
	const pagesFinished = useSelector(selectPagesFinished);

	const translation = useTranslation();

	const dispatch = useDispatch();
	const dateToday = normalizeDate(Date.now())

	useEffect(() => {
		const checkTotalPlan = () => {
			const totalFinishedPages = finishedPages?.reduce(
				(total, el) => total + el.pagesCount,
				0
			);

			if (data.length > 0 && data[data.length - 1].plan === totalFinishedPages) {
				setIsShowModalEndReading(true);
				setIsDisabledBtn(true);
			}
		};

		checkTotalPlan();
	}, [data, dispatch, finishedPages]);

	const handleFormSubmit = e => {
		e.preventDefault();
		const inputValue = Number(e.target.elements.page.value);
		const unreadPages = data[data.length - 1]?.plan - data[0]?.fact;

		if (Number.isNaN(inputValue)) {
			Notify.failure(`Enter numbers`);
			return;
		}

		if (inputValue > unreadPages) {
			return Notify.failure(
				`${translation.results.notify1part} ${unreadPages} ${translation.results.notify2part}`
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
					{finishedPages &&
						finishedPages.map((el, i) => <ResultsItem key={i} data={el} />)}
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
