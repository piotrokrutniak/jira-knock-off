import { createContext, useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';

type Theme = 'dark' | 'light';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeManager = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [cookies, setCookie] = useCookies(['theme']);

  useEffect(() => {
    const savedTheme = cookies.theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setCookie('theme', newTheme, { path: '/' });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);