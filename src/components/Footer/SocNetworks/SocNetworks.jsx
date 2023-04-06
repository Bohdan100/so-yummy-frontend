import { ReactComponent as Facebook } from '../../../images/icons/facebook.svg';
import { ReactComponent as Youtube } from '../../../images/icons/youtube.svg';
import { ReactComponent as Twitter } from '../../../images/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../../images/icons/instagram.svg';
import {
  SocNetworksWraper,
  SocNetworksList,
  SocNetwoerksItem,
} from './SocNetworks.styled';

const SocNetworks = () => {
  return (
    <SocNetworksWraper>
      <SocNetworksList>
        <SocNetwoerksItem>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook width="20" height="20" />
          </a>
        </SocNetwoerksItem>
        <SocNetwoerksItem>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube width="20" height="15" />
          </a>
        </SocNetwoerksItem>
        <SocNetwoerksItem>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter width="20" height="16" />
          </a>
        </SocNetwoerksItem>
        <SocNetwoerksItem>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </SocNetwoerksItem>
      </SocNetworksList>
    </SocNetworksWraper>
  );
};

export default SocNetworks;
