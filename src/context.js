import { createContext } from 'react';

export const GlobalContext = createContext({
  lang: 'zh_CN',
  setLang: () => {},
  theme: '',
  setTheme: () => {}
});
