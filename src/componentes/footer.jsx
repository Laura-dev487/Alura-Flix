import React from 'react';
import styled from 'styled-components';
import footerImage from '../assets/Footer.png';


const FooterContainer = styled.div` 
width: 100%; 
height:90px; 
background-image: url(${footerImage});
background-size: cover;
background-position: center;
position: relative; 
margin-top: 0;
display: flex; 
align-items: flex-end;
justify-content: center;
padding: 0 20px 10px; 

@media (max-width: 768px) {
        justify-content: flex-start;
        text-align: center;
    }
`;

const FooterText = styled.div`
 position: absolute; 
 left: 20px; 
 bottom: 35px; 
 color: #fff; 
 font-size: 1.12 rem; 

`;



const Footer = () => { 
    return <FooterContainer>
        <FooterText>LauraDev-2024</FooterText>
    </FooterContainer>; 
};


export default Footer;