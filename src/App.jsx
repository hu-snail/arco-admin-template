import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './routers';
import { GlobalContext } from '@/context';

export default function App() {
  const [lang, setLang] = useState('zh_CN');
  const [theme, setTheme] = useState('light');

  const contextVal = { lang, setLang, theme, setTheme };

  return (
    <div className="app-container">
      <GlobalContext.Provider value={contextVal}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}
