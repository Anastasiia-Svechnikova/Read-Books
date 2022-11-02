import { useSelector } from 'react-redux';
import { selectIsLightTheme } from 'Redux/Theme/themeSelectors';

const useToggleTheme = () => useSelector(selectIsLightTheme);

export default useToggleTheme;
