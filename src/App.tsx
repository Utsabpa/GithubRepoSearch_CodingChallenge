import React, { useState } from 'react';
import RepositorySearch from './repository-search';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.scss';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import ThemeContext, { THEMES } from './context/theme';
import './i18n';

const App = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const toggleTheme = () => setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Using Suspense as json file be downloaded at the run time */}
      <Suspense fallback="loading...">
        <RepositorySearch />
        <ToastContainer />
      </Suspense>
    </ThemeContext.Provider>
  );
};

export default App;
