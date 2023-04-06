import {Wrapper, Background, BackgroundImage } from "./AuthBody.styled";

const AuthBody = ({children}) => {
    return (
        <Wrapper>
            <Background />
            {children}
            <BackgroundImage />
        </Wrapper>
    )
};

export default AuthBody;