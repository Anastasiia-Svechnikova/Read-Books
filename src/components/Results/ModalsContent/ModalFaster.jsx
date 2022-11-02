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

const ModalFaster = ({ onClose }) => {
	const translation = useTranslation();
	const navigate = useNavigate();

	return (
		<ModalBox>
			<Ok />
			<ModalText>{translation.modalFaster.text}</ModalText>

			<BtnBox>
				<ResultsBtn type="button" onClick={() => navigate('/library')}>
					{translation.modalFaster.btnNew}
				</ResultsBtn>
				<ResultsBackBtn type="button" onClick={onClose}>
					{translation.modalFaster.btnBack}
				</ResultsBackBtn>
			</BtnBox>
		</ModalBox>
	);
};

export default ModalFaster;
