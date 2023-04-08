// TODO: добисать логику на подписку - handleSubmit

import { useMedia } from 'react-use';
import { Formik } from 'formik';
import { subscripbeValidationSchema } from 'helpers/subscripbeValidationSchema';
import { useAuth } from 'hooks';
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

  // const handleSubmit = () => {};
  return (
    <div>
      {!isMobile && (
        <SubscribeWrapper>
          <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
          <SubscribeText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </SubscribeText>
        </SubscribeWrapper>
      )}

      <Formik
        initialValues={{
          email: user.email || '',
        }}
        validationSchema={subscripbeValidationSchema}
        // onSubmit={(values, actions) => {
        //   handleSubmit(values);
        //   actions.setSubmitting(false);
        //   actions.resetForm();
        // }}
      >
        {props => (
          <FormStyled>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={props.values.email}
                border={
                  props.touched.email && props.errors.email
                    ? '1px solid #E74A3B'
                    : props.touched.email && props.isValid
                    ? '1px solid #3CBC81'
                    : '1px solid #FAFAFA'
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
              Subcribe
            </SubscribeBtn>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default SubscribeForm;
