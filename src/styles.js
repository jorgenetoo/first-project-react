import styled from "styled-components";
import Background from "./assets/Background.svg"

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
 height: 130vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%,
 rgba(255, 255, 255, 0.60) 0.85%,
 rgba(255, 255, 255, 0.15) 100%);

 padding: 50px 36px;
 display: flex;
    flex-direction: column;
    gap:5px;

    height: 100vh
`;

export const H1 = styled.h1`
color: #FFF;

text-align: center;

font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 40px;
margin-bottom: 80px;

`;

export const InputLabel = styled.p`
font-size: 20px;
color: #EEE;

font-size: 18px;
font-style: normal;
font-weight: bold;
line-height: 22px; 
letter-spacing: -0.408px;
margin-left: 25px;


`;

export const Input = styled.input` 
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px 
rgba(0, 0, 0, 0.25);

width: 342px;
height: 58px;

border: none;
outline: none;
padding-left: 25px ;

font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #FFF;


`;

export const Button = styled.button`
border-radius: 14px;
background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
color: #FFF;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 28px; 
 border-radius: none;
 cursor: pointer;

 display: flex;
 align-items: center;
 justify-content: center;
 gap:20px;
 margin-top: 45px;
 
 
&:hover {
    opacity: 0,8;
}

&:active{
    opacity: 0.5;
}
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px 
rgba(0, 0, 0, 0.25);

width: 342px;
height: 58px;

border: none;
outline: none;
padding-left: 25px ;

p{
color: #FFF;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    
}
`
