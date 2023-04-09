// TODO: Доп задание: реализовать темную тему (нужно сохранять в редаксе и локал сторадж  )

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from 'redux/Theme/themeSelectors';
import { setTheme } from 'redux/Theme/themeSlice';
import { TogglerWrapper, Checkbox, Label, Ball } from './ThemeToggler.styled';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const themeFromGlobalState = useSelector(selectTheme);
  const [mode, setMode] = useState(themeFromGlobalState ?? 'light');

  const handleToggler = () => {
    const newTheme = themeFromGlobalState === 'light' ? 'dark' : 'light';
    setMode(newTheme);
    dispatch(setTheme(newTheme));
  };
  return (
    <TogglerWrapper>
      <Checkbox
        type="checkbox"
        checked={mode === 'dark'}
        id="theme-toggler"
        onChange={handleToggler}
      />
      <Label mode={mode} htmlFor="theme-toggler">
        <Ball />
      </Label>
    </TogglerWrapper>
  );
};

export default ThemeToggler;
