import styled from 'styled-components';

import { ReactComponent as UserIcon } from '../../images/icons/user.svg';
import { ReactComponent as EmailIcon } from '../../images/icons/mail.svg';
import { ReactComponent as LockIcon } from '../../images/icons/password.svg';

export const UserIconStyled = styled(UserIcon)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  opacity: 0.8;
  pointer-events: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    left: 18px;
    width: 24px;
    height: 24px;
  }
`;

export const EmailIconStyled = styled(EmailIcon)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  opacity: 0.8;
  pointer-events: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    left: 18px;
    width: 24px;
    height: 24px;
  }
`;

export const LockIconStyled = styled(LockIcon)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  opacity: 0.8;
  pointer-events: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    left: 18px;
    width: 24px;
    height: 24px;
  }
`;
