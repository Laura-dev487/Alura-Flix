import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrash, FaEdit } from 'react-icons/fa'; 
import EditCardForm from './EditCardForm';
import { createPortal } from 'react-dom';

const Card = styled.div`
  border: 5px solid ${props => props.color};
  border-radius: 5px;
  overflow: hidden;
  width: 350px;
  margin: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

const CardImageContainer = styled.div` 
  cursor: pointer;
  &:hover {
    opacity: 0.8; 
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9;
  color: #000;
`;

const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  color: #000;
`;

const Text = styled.span`
  margin-left: 5px;
`;

const VideoCard = ({id, image,title,categoria,video,descripcion, onDelete, onEdit,color }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleEditOpen = () => { 
    setIsEditOpen(true);
  };
   
  const handleEditClose = () => {
     setIsEditOpen(false);
  };
  
  const handleSave = (updatedData) => { 
    onEdit(updatedData);
 };

   const handleImageError = () => {
     setImageError(true);
};

const handleImageClick = () => {
  if (video) {
      window.location.href = video;     
      
  } else {
      console.error("No se proporcionó una URL de video para esta tarjeta.");
  }
};
   
  return (
    <><Card color={color}>
       <CardImageContainer onClick={handleImageClick}>
      <CardImage src={image} 
      alt="Video thumbnail" 
      onError={() => console.log("Error al cargar la imagen:", image)}
      />
      </CardImageContainer>
      <CardFooter>
      <IconContainer onClick={() => onDelete(id)}>
          <FaTrash />
          <Text>Borrar</Text>
        </IconContainer>
        <IconContainer onClick={handleEditOpen}>
          <FaEdit />
          <Text>Editar</Text>
        </IconContainer>
      </CardFooter>
    </Card>
    {isEditOpen && createPortal(
        <EditCardForm
          open={isEditOpen}
          handleClose={handleEditClose}
          initialData={{ title, categoria, imagen: image, video, descripcion }}
          handleSave={handleSave}
        />,
        document.body
      )}
    </>
  );
};


export default VideoCard;
