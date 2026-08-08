import { useContext } from 'react';
import { ThemeContext } from '../tasks/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <h2>My App</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
}

export default Navbar;