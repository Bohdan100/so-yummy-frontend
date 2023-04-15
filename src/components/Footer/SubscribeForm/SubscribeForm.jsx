import { useMedia } from 'react-use';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { subscripbeValidationSchema } from 'helpers/subscripbeValidationSchema';
import { useAuth } from 'hooks';
import { subscribeUser } from '../../../services/subscribe-API.js';
import {
  FormStyled,
  InputWrapper,
  Input,
  MailIconStyled,
  ErrMsg,
  SubscribeBtn,
  SubscribeWrapper,
  SubscribeTitle,
  SubscribeText,
} from './SubscribeForm.styled';

const SubscribeForm = () => {
  const isMobile = useMedia('(max-width: 1439px)');
  const { user } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = async values => {
    try {
      await subscribeUser({ email: values.email });
      toast.success(t('subscribe.success'));
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(t('subscribe.error409'));
      } else {
        toast.error(t('subscribe.error'));
      }
    }
  };

  return (
    <div>
      {!isMobile && (
        <SubscribeWrapper>
          <SubscribeTitle>{t('subscribe.title')}</SubscribeTitle>
          <SubscribeText>{t('subscribe.description')}</SubscribeText>
        </SubscribeWrapper>
      )}

      <Formik
        initialValues={{
          email: user.email || '',
        }}
        validationSchema={subscripbeValidationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <FormStyled>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder={t('subscribe.placeholder')}
                border={
                  props.touched.email && props.errors.email
                    ? '1px solid #E74A3B'
                    : props.touched.email && props.isValid
                    ? '1px solid #3CBC81'
                    : '1px solid rgba(255, 255, 255, 0.3)'
                }
                onBlur={() => {
                  props.setTouched({
                    email: true,
                  });
                }}
                onChange={event => {
                  props.setTouched({
                    email: true,
                  });
                  props.setFieldValue('email', event.target.value);
                }}
              />
              <MailIconStyled
                stroke={
                  props.touched.email && props.errors.email
                    ? '#E74A3B'
                    : props.touched.email && props.isValid
                    ? '#3CBC81'
                    : '#FAFAFA'
                }
              />

              {props.errors.email && props.touched.email ? (
                <ErrMsg>{props.errors.email}</ErrMsg>
              ) : null}
            </InputWrapper>

            <SubscribeBtn type="submit" disabled={!props.isValid}>
              {t('subscribe.btn')}
            </SubscribeBtn>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default SubscribeForm;
