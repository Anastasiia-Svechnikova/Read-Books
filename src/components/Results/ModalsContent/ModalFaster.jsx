import React from 'react';
import useTranslation from 'Hooks/useTranslations';

import {
	BtnBox,
	ModalBox,
	ModalText,
	ResultsBackBtn,
	ResultsBtn,
} from '../Results.styled';
import { ReactComponent as Ok } from 'Assets/svg/okey.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectPagesFinished,
	selectPagesTotal,
} from 'Redux/Planning/planningSelectors';
import { addReadingPage } from 'Redux/Planning/planningOperations';
import { resetCurrentlyReading } from 'Redux/Books/booksSlice';
import { resetPagesAndPlan } from 'Redux/Planning/planningSlice';

const ModalFaster = ({ onClose }) => {
	const translation = useTranslation();
	const navigate = useNavigate();
	const finished = useSelector(selectPagesFinished);
	const dispatch = useDispatch();

	const totalPages = useSelector(selectPagesTotal);

	const handleRestart = () => {
		dispatch(addReadingPage({ pages: totalPages - finished }))
			.unwrap()
			.then(() => navigate('/library'));
		dispatch(resetCurrentlyReading());
		dispatch(resetPagesAndPlan());
	};

	return (
		<ModalBox>
			<Ok />
			<ModalText>{translation.modalFaster.text}</ModalText>

			<BtnBox>
				<ResultsBackBtn type="button" onClick={handleRestart}>
					{translation.modalFaster.btnNew}
				</ResultsBackBtn>

				<ResultsBtn type="button" onClick={onClose}>
					{translation.modalFaster.btnBack}
				</ResultsBtn>
			</BtnBox>
		</ModalBox>
	);
};

export default ModalFaster;
