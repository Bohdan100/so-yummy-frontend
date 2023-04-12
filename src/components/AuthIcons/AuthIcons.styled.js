import styled from 'styled-components';

import { ReactComponent as UserIcon } from '../../images/icons/user.svg';
import { ReactComponent as EmailIcon } from '../../images/icons/mail.svg';
import { ReactComponent as LockIcon } from '../../images/icons/password.svg';
import { ReactComponent as ErrorIcon } from '../../images/icons/error-icon.svg';
import { ReactComponent as CheckIcon } from '../../images/icons/check-icon.svg';
import { ReactComponent as WarnIcon } from '../../images/icons/warn-icon.svg';

export const UserIconStyled = styled(UserIcon)`
  position: absolute;
  top: 13.5px;
  left: 14px;
  width: 18px;
  height: 18px;
  opacity: 0.8;
  pointer-events: none;
  ${p => p.color === 'normal' && `stroke: #FAFAFA30`};
  ${p => p.color === 'inValid' && `stroke: #E74A3B`};
  ${p => p.color === 'notSecure' && `stroke: #F6C23E`};
  ${p => p.color === 'valid' && `stroke: #3CBC81`};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    left: 18px;
    top: 17.5px;
    width: 24px;
    height: 24px;
  }
`;

export const EmailIconStyled = styled(EmailIcon)`
  position: absolute;
  top: 13.5px;
  left: 14px;
  width: 18px;
  height: 18px;
  opacity: 0.8;
  pointer-events: none;
  ${p => p.color === 'normal' && `stroke: #FAFAFA30`};
  ${p => p.color === 'inValid' && `stroke: #E74A3B`};
  ${p => p.color === 'notSecure' && `stroke: #F6C23E`};
  ${p => p.color === 'valid' && `stroke: #3CBC81`};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    left: 18px;
    top: 17.5px;
    width: 24px;
    height: 24px;
  }
`;

export const LockIconStyled = styled(LockIcon)`
  position: absolute;
  top: 13.5px;
  left: 14px;
  width: 18px;
  height: 18px;
  opacity: 0.8;
  pointer-events: none;
  ${p => p.color === 'normal' && `stroke: #FAFAFA30`};
  ${p => p.color === 'inValid' && `stroke: #E74A3B`};
  ${p => p.color === 'notSecure' && `stroke: #F6C23E`};
  ${p => p.color === 'valid' && `stroke: #3CBC81`};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    left: 18px;
    top: 17.5px;
    width: 24px;
    height: 24px;
  }
`;

export const ErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  top: 16px;
  right: 14px;
  width: 14px;
  height: 14px;
  pointer-events: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
    right: 18px;
    top: 20px;
  }
`;

export const CheckIconStyled = styled(CheckIcon)`
  position: absolute;
  top: 16px;
  right: 14px;
  width: 14px;
  height: 14px;
  pointer-events: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
    right: 18px;
    top: 20px;
  }
`;

export const PassWarnIconStyled = styled(WarnIcon)`
  width: 14px;
  height: 14px;
  pointer-events: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;

export const PassErrorIconStyled = styled(ErrorIcon)`
  width: 14px;
  height: 14px;
  pointer-events: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;

export const PassValidIconStyled = styled(CheckIcon)`
  width: 14px;
  height: 14px;
  pointer-events: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;
