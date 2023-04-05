import React from 'react';

// import Logo from '../../reusableComponents/Logo';
import { LogoFooter, Title, List, Item } from './ArticleFooter.styled';

const ArticleFooter = () => {
  return (
    <>
      <LogoFooter>
        {/* <Logo inv footer /> */}
        <Title>So Yummy</Title>
      </LogoFooter>
      <List>
        <Item>Database of recipes that can be replenished </Item>
        <Item>Flexible search for desired and unwanted ingredients</Item>
        <Item>Ability to add your own recipes with photos</Item>
        <Item>Convenient and easy to use</Item>
      </List>
    </>
  );
};

export default ArticleFooter;
