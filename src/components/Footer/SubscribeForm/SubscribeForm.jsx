import { useMedia } from 'react-use';
import { Formik, Form, Field } from 'formik';
import { subscripbeValidationSchema } from 'helpers/subscripbeValidationSchema';
import { useAuth } from 'hooks';
import {
  InputWrapper,
  Input,
  MailIconStyled,
  ErrMsg,
} from './SubscribeForm.styled';

const SubscribeForm = () => {
  const isMobile = useMedia('(max-width: 1439px)');
  const { user } = useAuth();
  console.log(user);

  const handleSubmit = () => {};
  return (
    <>
      {!isMobile && (
        <div>
          <h3>Subscribe to our Newsletter</h3>
          <p>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </p>
        </div>
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
          <Form>
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
                    ? '1px solid #E74A3B'
                    : props.touched.email && props.isValid
                    ? '1px solid #3CBC81'
                    : '1px solid #FAFAFA'
                }
              />
            </InputWrapper>

            {props.errors.email && props.touched.email ? (
              <ErrMsg>{props.errors.email}</ErrMsg>
            ) : null}

            <button>Subcribe</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SubscribeForm;
