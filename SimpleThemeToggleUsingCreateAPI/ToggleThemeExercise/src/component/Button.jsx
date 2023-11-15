import { ThemeContext } from '../store/ThemeContextProvider';
import { useContext } from 'react'; 

export default function Button() {
  const themeCtxx = useContext(ThemeContext);

  return <button onClick={themeCtxx.changeLabelText}>Button</button>;
}
