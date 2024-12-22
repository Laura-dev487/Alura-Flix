import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';
import logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';


const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  width:100%;
  box-sizing:border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const LogoImage = styled.img`
`;

const CustomButton = styled.button`
  background-color: #0b0101;
  color: #3f09e2;
  border: 3px solid;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #6b6e72;
  } 
`;

const ButtonContainer = styled.div` 
 display: flex;
 gap: 20px;
 
 `;

const Header = () => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
     <LogoImage src={logo} alt="Logo de Aluraflix" /> 
      <ButtonContainer>
        <MuiButton variant="outlined"
        sx={{
           borderColor: '#3f09e2', 
           backgroundColor: '#0b0101', 
           color: '#3f09e2',
            border: '3px solid', 
            '&:hover': {
            backgroundColor: '#6b6e72',
            color: '#3f09e2'
            }
          }}                   
            onClick={handleHomeClick}> 
            Home 
        </MuiButton>
         <MuiButton
         variant="outlined" 
       sx={{
         borderColor: '#3f09e2',
         backgroundColor: '#0b0101',
         color: '#3f09e2',
         border: '3px solid',
        '&:hover': {
         backgroundColor:'#6b6e72',
         color: '##3f09e2',
        },
      }}
        component={Link} to="/nuevo-video">
        Nuevo Video
      </MuiButton>          
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;