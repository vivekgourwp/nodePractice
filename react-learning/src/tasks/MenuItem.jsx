// MenuItem.jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function MenuItem() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
export default MenuItem;