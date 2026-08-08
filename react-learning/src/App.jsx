// App.jsx
import { useState } from 'react';
import { ThemeContext } from './tasks/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
    </ThemeContext.Provider>
  );
}

export default App;