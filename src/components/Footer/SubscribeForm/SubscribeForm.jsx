import { useMedia } from 'react-use';
import {
  Form,
  FormWrap,
  TexrWrap,
  SubscribeTitle,
  SubscribeText,
  Input,
  SubscribeButton,
  MailStyled,
} from './SubscribeForm.styled';

const SubscribeForm = () => {
  const isDesktop = useMedia('(max-width: 1439px)');
  return (
    <Form action="#" autocomplete="off">
      <FormWrap>
        {!isDesktop && (
          <TexrWrap>
            <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
            <SubscribeText>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc.
            </SubscribeText>
          </TexrWrap>
        )}
        <label htmlFor="email">
          <Input
            type="email"
            name="email"
            id="emailId"
            placeholder="Enter your email address"
            pattern="/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/"
            autocomplete="email"
            required
          />
          <span>
            <MailStyled width="20" height="16" />
          </span>
        </label>
        <SubscribeButton type="submit">Subcribe</SubscribeButton>
      </FormWrap>
    </Form>
  );
};

export default SubscribeForm;
