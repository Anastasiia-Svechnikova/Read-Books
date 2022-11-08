import useTranslation from 'Hooks/useTranslations';
import Button from 'components/Button/Button';

import React, { useEffect, useState } from 'react';
import { ReactComponent as BackArrow } from 'Assets/svg/backArrow.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
	Title,
	Select,
	DateContainer,
	SelectContainer,
	Arrow,
	CalenderThumb,
	DateIcon,
} from './MyTraining.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooksThunk } from 'Redux/Books/booksOperations';
import { startPlanning } from 'Redux/Planning/planningOperations';
import { selectPlanningBooks } from 'Redux/Planning/planningSelectors';
import { Application, DatePicker } from 'react-rainbow-components';
import { BackBtn } from 'components/Library/LibraryForm/LibraryForm.styled';

const MyTraining = ({ handleMyTrainingOpen = null, isMobile = false }) => {
	const translation = useTranslation();

	const books = useSelector(state => state.books.books.goingToRead);
	const accessToken = useSelector(state => state.auth.accessToken);
	const selectedBooks = useSelector(selectPlanningBooks);
	const ids = selectedBooks.map(({_id})=>_id)
	const dispatch = useDispatch();
	const currentDate = new Date()
	const dateToday = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate().toString().padStart(2,'0')}`
	const [startValue, setStartValue] = useState('');
	const [endValue, setEndValue] = useState('');

	useEffect(() => {
		if (accessToken) {
			dispatch(getUserBooksThunk());
		}
	}, [accessToken, dispatch]);

	const onSubmit = e => {
		e.preventDefault();
		const clone = selectedBooks.some(({_id}) => _id === e.currentTarget.elements.select.value);
		if (startValue === '' || endValue === '') {
			return Notify.warning(`${translation.myTraining.warningFields}`);
		}
		if (clone) {
			Notify.warning(`${translation.myTraining.warningAdded}`);
			return;
		}
		const value = e.currentTarget.elements.select.value;
		
		dispatch(
			startPlanning({
				startDate: startValue,
				endDate: endValue,
				books: [...ids, value],
			})
		);
		isMobile && handleMyTrainingOpen();
	};
	const handleChangeStart = value => {
		const userDate = value.toLocaleDateString().split('.').reverse().join('-');
		setStartValue(userDate);
	};
	const handleChangeEnd = value => {
		const userDate = value.toLocaleDateString().split('.').reverse().join('-');
		setEndValue(userDate);
	};
	const theme = {
		rainbow: {
			palette: {
				brand: '#fb8c43',

			},

		},
	};
	return (
		<>
			{isMobile && (
				<BackBtn
					type="button"
					onClick={handleMyTrainingOpen}
					aria-label="Return button"
				>
					<BackArrow width="24" height="24" />
				</BackBtn>
			)}
			<Title>{translation.myTraining.title}</Title>
			<form action="" onSubmit={onSubmit}>
				<DateContainer>
					<CalenderThumb>
						<Application theme={theme}>
							<DatePicker
								value={startValue}
								placeholder={translation.myTraining.start}
								minDate={new Date(dateToday)}
								maxDate={new Date(dateToday)}
								onChange={handleChangeStart}
								required={true}
								icon={<Arrow />}
								variant="single"
								isCentered={true}
							/>
						</Application>
						<DateIcon />
					</CalenderThumb>
					<CalenderThumb>
						<Application theme={theme}>
							<DatePicker
								theme='dark'
								value={endValue}
								placeholder={translation.myTraining.end}
								minDate={new Date(dateToday)}
								onChange={handleChangeEnd}
								required={true}
								icon={<Arrow />}
								variant="double"
								isCentered={true}
								 borderRadius="square"
							/>
						</Application>
						<DateIcon />
					</CalenderThumb>
				</DateContainer>
				<SelectContainer>
					<Select name="select" aria-label="Select training">
						<option disabled={true}>{translation.myTraining.option}</option>
						{books.map(({ title, _id }) => {
							return (
								<option key={_id} value={_id}>
									{title}
								</option>
							);
						})}
					</Select>
					<Button type={'submit'} aria-label="Add training button">
						{translation.myTraining.btn}
					</Button>
				</SelectContainer>
			</form>
		</>
	);
};

export default MyTraining;
