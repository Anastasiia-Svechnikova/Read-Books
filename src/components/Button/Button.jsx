import React from 'react';
import { MyButton } from './Button.styled';

const Button = ({ children, title, onClick, type, disabled, id, primary }) => {
	return (
		<MyButton
			onClick={onClick}
			type={type}
			disabled={disabled}
			id={id}
			primary={primary}
		>
			{title || children}
		</MyButton>
	);
};

export default Button;
