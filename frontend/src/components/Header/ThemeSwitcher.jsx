import DarkModeIcon from '@mui/icons-material/DarkMode';
import { themeToggler } from '../../store/themeSlice';
import { useDispatch, useSelector } from 'react-redux';


function ThemeSwitcher() {
    const dispatch = useDispatch();
    const darkThemeMode = useSelector((state) => state.theme.isDarkTheme);

    const themeToggle = () => {
        const html = document.querySelector('html').classList;
        html.remove("light", "dark");
        if (darkThemeMode) {
            html.add("light");
        } else {
            html.add("dark");
        }
        dispatch(themeToggler());
    }
    return (
        <DarkModeIcon className="cursor-pointer" onClick={themeToggle}/>
    )
}

export default ThemeSwitcher
