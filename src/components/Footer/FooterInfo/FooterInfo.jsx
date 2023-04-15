import { InfoList } from './FooterInfo.styled';
import { useTranslation } from 'react-i18next';

export const FooterInfo = () => {
  const { t } = useTranslation();
  return (
    <InfoList>
      <li>
        <p>{t('footer.info1')}</p>
      </li>
      <li>
        <p>{t('footer.info2')}</p>
      </li>
      <li>
        <p>{t('footer.info3')}</p>
      </li>
      <li>
        <p>{t('footer.info4')}</p>
      </li>
    </InfoList>
  );
};

export default FooterInfo;
