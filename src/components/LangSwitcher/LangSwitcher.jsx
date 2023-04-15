import { useTranslation } from 'react-i18next';
import { UA, GB } from 'country-flag-icons/react/1x1';
import { Flag, Container, Title, Button, Box } from './LangSwitcher.styled';

const LangSwitcher = ({position}) => {
  const { i18n } = useTranslation();

  const locales = {
    en: { title: 'EN' },
    uk: { title: 'UK' },
  };

  const flags = {
    en: <GB style={{ borderRadius: '50%' }} />,
    uk: <UA style={{ borderRadius: '50%' }} />,
  };

  const langToggler = () => {
    i18n.resolvedLanguage === 'en'
      ? i18n.changeLanguage('uk')
      : i18n.changeLanguage('en');
    };
    
  return (
    <Container position={position}>
      <Button type="submit" onClick={langToggler}>
          <Box>
            <Flag>{flags[i18n.resolvedLanguage]}</Flag>
            <Title>{locales[i18n.resolvedLanguage].title}</Title>
          </Box>
      </Button>
    </Container>
  );
};

export default LangSwitcher;
