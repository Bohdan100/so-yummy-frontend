import { Link } from 'react-router-dom';
import {
  SocNetworksWraper,
  SocNetworksList,
  SocNetwoerksItem,
  FacebookStyled,
  YoutubeStyled,
  TwitterStyled,
  InstagramStyled,
} from './SocNetworks.styled';

const SocNetworks = () => {
  return (
    <SocNetworksWraper>
      <SocNetworksList>
        <SocNetwoerksItem>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookStyled width="20" height="20" />
          </Link>
        </SocNetwoerksItem>
        <SocNetwoerksItem>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeStyled width="20" height="15" />
          </Link>
        </SocNetwoerksItem>
        <SocNetwoerksItem>
          <Link
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterStyled width="20" height="16" />
          </Link>
        </SocNetwoerksItem>
        <SocNetwoerksItem>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramStyled width="20" height="20" />
          </Link>
        </SocNetwoerksItem>
      </SocNetworksList>
    </SocNetworksWraper>
  );
};

export default SocNetworks;
