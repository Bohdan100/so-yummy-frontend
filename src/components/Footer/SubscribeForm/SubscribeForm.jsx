import {
  Form,
  FormWraper,
  SubscribeTitle,
  SubscribeText,
  Input,
  SubscribeButton,
} from './SubscribeForm.styled';

const SubscribeForm = () => {
  return (
    <Form action="#" autocomplete="off">
      <FormWraper>
        <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
        <SubscribeText>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </SubscribeText>
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
            <svg width="18" height="18">
              <use href="./images/icons.svg#icon-email-black"></use>
            </svg>
          </span>
        </label>
        <SubscribeButton type="submit">Subcribe</SubscribeButton>
      </FormWraper>
    </Form>
  );
};

export default SubscribeForm;
