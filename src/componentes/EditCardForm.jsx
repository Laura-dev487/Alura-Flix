import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, IconButton, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import styled from 'styled-components';
import StyledTextField from '../componentes/StyledTextField';



const StyledDialog = styled(Dialog)` 
.MuiDialog-paper {
     background-color: #ededf6;
     color: #000;
     position: relative;
     padding: 1.5rem;
     border: 4px solid #2271d1;
     z-index: 1000;
  } 
`;

const StyledDialogTitle = styled(DialogTitle)` 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    color: #000;
 `;

const StyledTextFieldContainer = styled.div`
   .MuiTextField-root {
    background-color: #333;
    color: #fff;
   }
   .MuiOutlinedInput-root {
    color: #fff;
    border-color: #2271d1; 

}
   &:hover {
        border-color: #448aff;
     }    
`;

const StyledSelect = styled(Select)` 
& .MuiSelect-select { background-color: #ededf6;
 color: #000; 
  } 
& .MuiOutlinedInput-notchedOutline {
   border-color: #2271d1; 
  }
&:hover .MuiOutlinedInput-notchedOutline {
   border-color: #2271d1;  } `

const StyledButton = styled(Button)`
margin: 0 10px; 
 &:first-child {
  color: #fff; 
 &:last-child { 
  color: #2271d1;
  
}
 } 
`; 

const EditCardForm = ({ open, handleClose, initialData, handleSave }) => {
  const [formData, setFormData] = useState({
    titulo: initialData?.titulo || '',
    categoria: initialData?.categoria || '',
    imagen: initialData?.imagen || '',
    video: initialData?.video || '',
    descripcion: initialData?.descripcion || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleClear = () => { 
    setFormData({
      titulo: '',
      categoria: '',
      imagen: '',
      video: '', 
      descripcion: ''
    });
  };
  
    const handleSubmit = () => {
    handleSave(formData);
    handleClose();
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>
        EDITAR CARD
        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
        <CloseIcon style={{ color: '#000' }} />  
        </IconButton>
        </StyledDialogTitle>
      <DialogContent>
        <StyledTextField
          margin="dense"
          name="titulo"
          label="Título"
          type="text"
          fullWidth
          value={formData.titulo}
          onChange={handleChange}
          />
         <FormControl 
          fullWidth margin="dense">
           <InputLabel style={{ color: '#000' }}>Categoría</InputLabel>
           <StyledSelect
            value={formData.categoria}
            onChange={handleChange}
            inputProps={{
            name: 'categoria', 
            id: 'categoria-select',
             }}
              >
                <MenuItem value="Front End">Front End</MenuItem>
                <MenuItem value="BackEnd">BackEnd</MenuItem>
                <MenuItem value="Innovación y Gestión">Innovación y Gestión</MenuItem>
            </StyledSelect>
          </FormControl>    
               
        <StyledTextField
          margin="dense"
          name="imagen"
          label="URL de la Imagen"
          type="text"
          fullWidth
          value={formData.imagen}
          onChange={handleChange}
        />
        <StyledTextField
          margin="dense"
          name="video"
          label="URL del Video"
          type="text"
          fullWidth
          value={formData.video}
          onChange={handleChange}
        />
        <StyledTextField
          margin="dense"
          name="descripcion"
          label="Descripción"
          type="text"
          fullWidth
          value={formData.descripcion}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
      <StyledButton onClick={handleClear} color="primary" sx={{
    backgroundColor: '#12226a',
    color: '#fff',    
    borderColor: '#3f09e2',
    borderWidth: '2px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#eb401a',
      borderColor: '#000'
    }
  }}>Limpiar</StyledButton>
  <StyledButton onClick={handleSubmit} color="primary" sx={{
    backgroundColor: '#12226a',
    color: '#fff',
    borderColor: '#3f09e2',
    borderWidth: '2px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#13ea62',
      borderColor: '#fff'
    }
  }}>Guardar</StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

export default EditCardForm;
