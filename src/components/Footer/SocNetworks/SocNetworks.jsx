import { ReactComponent as Facebook } from '../../../images/icons/facebook.svg';
import { ReactComponent as Youtube } from '../../../images/icons/youtube.svg';
import { ReactComponent as Twitter } from '../../../images/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../../images/icons/instagram.svg';

import { SocLinkList } from './SocNetworks.styled';

const SocNetworks = ({ location }) => {
  return (
    <SocLinkList>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
      </li>
    </SocLinkList>
  );
};

// const SocNetworks = () => {
//   return (
//     <SocNetworksWraper>
//       <SocNetworksList>
//         <SocNetwoerksItem>
//           <Link
//             href="https://www.facebook.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FacebookStyled width="20" height="20" />
//           </Link>
//         </SocNetwoerksItem>
//         <SocNetwoerksItem>
//           <Link
// href="https://www.youtube.com/"
// target="_blank"
// rel="noopener noreferrer"
//           >
//             <YoutubeStyled width="20" height="15" />
//           </Link>
//         </SocNetwoerksItem>
//         <SocNetwoerksItem>
//           <Link
// href="https://www.twitter.com/"
// target="_blank"
// rel="noopener noreferrer"
//           >
//             <TwitterStyled width="20" height="16" />
//           </Link>
//         </SocNetwoerksItem>
//         <SocNetwoerksItem>
//           <Link
// href="https://www.twitter.com/"
// target="_blank"
// rel="noopener noreferrer"
//           >
//             <InstagramStyled width="20" height="20" />
//           </Link>
//         </SocNetwoerksItem>
//       </SocNetworksList>
//     </SocNetworksWraper>
//   );
// };

export default SocNetworks;
