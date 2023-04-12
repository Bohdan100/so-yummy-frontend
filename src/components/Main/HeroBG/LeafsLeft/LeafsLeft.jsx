import React from 'react';
import { createPortal } from 'react-dom';
import { BgContainer } from './LeafsLeft.styled';
const heroRoot = document.querySelector('#hero-bg');

const LeafsLeft = () => {
  return createPortal(<BgContainer></BgContainer>, heroRoot);
};

export default LeafsLeft;
