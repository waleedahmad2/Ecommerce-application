import { styled } from "styled-components"
import { mobile } from "../Responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";


const Container = styled.div`
    width:100vw;
    height:100vh;
    //rgba(255,255,255,0.5),rgba(255,255,255,0.5)
    background: linear-gradient(rgba(0, 128, 128, 0.5), rgba(0, 128, 128, 0.5));
    background-size: cover;
    background-blend-mode: overlay;

      display:flex;
      align-items:center;
      justify-content:center;
`;

const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:white;
    ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
    font-size:24px;
    font-weight:300; 
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
`;

const Input = styled.input`
    flex:1; 
    min-width:40%;
    padding:15px;
    margin:10px 0px;
    margin-bottom:10px;
`;

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;  
    color:white;
    cursor:pointer;
    margin-bottom:10px;
    &:disabled{
        color:green;
        cursor:not-allowed;
    }
`;

const Link = styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`

const Error = styled.span`
    color:red;
`



const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password });
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUserName(e.target.value)} />
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching}>Create</Button>
                    {error && <Error>Something went wrong....</Error>}
                    <Link>DO NOT YOU REMEBER THE PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>

            </Wrapper>

        </Container>
    )
}

export default Login
