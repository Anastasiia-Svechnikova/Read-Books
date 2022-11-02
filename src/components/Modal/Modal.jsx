import React, { useEffect } from 'react';

import { Backdrop, ModalBox } from './Modal.styled';

function Modal({ onClose, children, offBackdrop=false }) {
	useEffect(() => {
		const handleClickDown = e => {
			if (e.code === 'Escape') {
				onClose();
			}
		};
		document.body.style.overflow = 'hidden';

		window.addEventListener('keydown', handleClickDown);
		return () => {
			document.body.style.overflow = 'auto';
			window.removeEventListener('keydown', handleClickDown);
		};
		// eslint-disable-next-line
	}, []);


	const handleBackdropClick = e => {
		if (offBackdrop) return;

		if (e.currentTarget === e.target) {
			onClose();
		}
	};

	return (
		<Backdrop onClick={handleBackdropClick}>
			<ModalBox>{children}</ModalBox>
		</Backdrop>
	);
}

export default Modal;


