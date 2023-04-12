import React from 'react';
import { createPortal } from 'react-dom';
import { BgContainerRight } from './LeafsRight.styled';
const heroRoot = document.querySelector('#hero-bg');

const LeafsRight = () => {
  return createPortal(<BgContainerRight></BgContainerRight>, heroRoot);
};

export default LeafsRight;
