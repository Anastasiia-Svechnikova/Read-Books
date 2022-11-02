import React from 'react';
import useTranslation from 'Hooks/useTranslations';

import { BtnBox, ModalBox, ModalText, ResultsBtn } from '../Results.styled';
import { ReactComponent as OkDone } from 'Assets/svg/okeyDone.svg';

const ModalDone = ({ onClose }) => {
	const translation = useTranslation();
	return (
		<ModalBox>
			<OkDone />
			<ModalText>{translation.modalDone.text}</ModalText>
			<BtnBox>
				<ResultsBtn type="button" onClick={onClose}>
					{translation.modalDone.btnDone}
				</ResultsBtn>
			</BtnBox>
		</ModalBox>
	);
};

export default ModalDone;
