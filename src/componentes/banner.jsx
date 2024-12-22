import styled from "styled-components";
import banner from "../assets/banner.png";
import smallImage from "../assets/video.png";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(to top, #181818 -4%, rgba(42, 122, 228, 0.2) 100%), url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  padding: 1.25 rem;


  @media (max-width: 768px) { 
        flex-direction: column; 
        text-align: center; 
        height: auto; 
        padding: 0.62 rem;
    }

`;

const ImageContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
        width: 80%; 
        margin-bottom: 1.25 rem; 
    }

`;

const Image = styled.img`
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 123, 255, 0.5);
  max-width: 100%; 
  height: auto;
  display: block;
`;

const TitleContainer = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  cursor: default; 
  width: fit-content; 
  height: 45px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin-left: -20px;
  font-size: 2rem;
  margin: 0 auto 20px; 

  @media (min-width: 769px){
        margin-left: -20px;
        font-size: 1.5 rem;
    }
`;

const Title = styled.h2`
  background-color: #6BD1FF;
  color: white;
  padding: 5px 10px; 
  border-radius: 5px  
`;

const TextContainer = styled.div`
  width: 45%;
  color: white;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.4rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
        width: 90%; 
        margin: 0 auto; 
        text-align: center;
    }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <ImageContainer>
        <Image src={smallImage} alt="Imagen pequeña" />
      </ImageContainer>
      <TextContainer>
        <TitleContainer>
          <Title>Front End</Title> 
        </TitleContainer>
        <h3>Challenge React</h3>
        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolucion de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;