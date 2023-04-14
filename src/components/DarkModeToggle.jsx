import { useState, useEffect } from 'react';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const html = document.getElementsByTagName('html')[0];
      if (isDarkMode) {
        html.classList.add('dark');
        localStorage.setItem('isDarkMode', true);
      } else {
        html.classList.remove('dark');
        localStorage.setItem('isDarkMode', false);
      }
    }, [isDarkMode]);
  
    useEffect(() => {
      const storedIsDarkMode = localStorage.getItem('isDarkMode') === 'true';
      setIsDarkMode(storedIsDarkMode);
    }, []);

  return (
    <button
    onClick={() => setIsDarkMode(!isDarkMode)}
      className="px-4 py-2 rounded-md hover-btn"
    ><i className={isDarkMode ? 'fa-solid fa-sun pr-2' : `fa-solid fa-moon pr-2`}></i>
      {isDarkMode ? 'Light Mode' : `Dark Mode`}
    </button>
  );
}

export default DarkModeToggle;
