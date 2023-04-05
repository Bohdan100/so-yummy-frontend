// TODO: Доп задание: реализовать темную тему (нужно сохранять в редаксе и локал сторадж  )

import { useState } from 'react';
import { TogglerWrapper, Checkbox, Label, Ball } from './ThemeToggler.styled';

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggler = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <TogglerWrapper>
      <Checkbox
        type="checkbox"
        checked={isDarkMode}
        id="theme-toggler"
        onChange={handleToggler}
      />
      <Label isDarkMode={isDarkMode} htmlFor="theme-toggler">
        <Ball />
      </Label>
    </TogglerWrapper>
  );
};

export default ThemeToggler;
