import { StyledDiv } from './BackgroundDots.styled';
import { selectTheme } from 'redux/Theme/themeSelectors';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';

import blackMob from '../../../images/elements/rectangle/rectangle_black_ 8Mob.png';
import greenkMob from '../../../images/elements/rectangle/rectangle_green_11Mob.png';
import whiteMob from '../../../images/elements/rectangle/rectangle _white_micro.png';

import blackTab from '../../../images/elements/rectangle//rectangle_black_8Tab.png';
import whiteTab from '../../../images/elements/rectangle/rectangle_white_small.png';
import greenkTab from '../../../images/elements/rectangle/rectangle_green_11Mob.png';
import blackDesc from '../../../images/elements/rectangle/rectangle_black_9Desc.png';
import greenkDesc from '../../../images/elements/rectangle/rectangle_green_9Desk.png';

const BackgroundDots = () => {
  const theme = useSelector(selectTheme);
  const isMobDevice = useMedia('(max-width: 766px)');
  const isTabDevice = useMedia('(min-width: 768px)');
  const isDescDevice = useMedia('(min-width: 1440px)');

  const backgroundImageMob =
    theme === 'dark'
      ? `url(${greenkMob}), url(${whiteMob}), url(${greenkMob})`
      : `url(${greenkMob}), url(${blackMob}), url(${greenkMob})`;

  const backgroundImageTab =
    theme === 'dark'
      ? `url(${greenkTab}), url(${whiteTab}), url(${greenkTab})`
      : `url(${greenkTab}), url(${blackTab}), url(${greenkTab})`;

  const backgroundImageDesc =
    theme === 'dark'
      ? `url(${greenkDesc}), url(${whiteTab}), url(${greenkDesc})`
      : `url(${greenkDesc}), url(${blackDesc}), url(${greenkDesc})`;
  return (
    <>
      {isMobDevice && <StyledDiv backgroundImage={backgroundImageMob} />}
      {isTabDevice && <StyledDiv backgroundImage={backgroundImageTab} />}
      {isDescDevice && <StyledDiv backgroundImage={backgroundImageDesc} />}
    </>
  );
};

export default BackgroundDots;
