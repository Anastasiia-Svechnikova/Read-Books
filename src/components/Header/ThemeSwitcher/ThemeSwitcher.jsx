import useToggleTheme from 'Hooks/useToggleTheme';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'Redux/Theme/themeSlice';
import { ThemeButton, LightIcon, DarkIcon } from './ThemeSwitcher.styled';

const ThemeSwitcher = () => {
	const isLightTheme = useToggleTheme();
	const [checked, setChecked] = useState(isLightTheme);
	const dispatch = useDispatch();
	const handleSubmit = () => {
		setChecked(prevState => !prevState);
	};
	useEffect(() => {
		dispatch(toggleTheme(checked));
	}, [checked, dispatch]);

	return (
		<form onSubmit={handleSubmit}>
			<ThemeButton type="submit" aria-label="theme mode: day and night">
				{checked ? (
					<LightIcon width={22} height={22} />
				) : (
					<DarkIcon width={22} height={22} />
				)}
			</ThemeButton>
		</form>
	);
};

export default ThemeSwitcher;
