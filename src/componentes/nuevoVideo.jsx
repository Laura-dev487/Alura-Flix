import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Footer from './footer';


const FormContainer = styled(Container)`
 display: flex;
 flex-direction: column; 
 align-items: center; 
 margin-top:30px;
 background-color:#212529;
 gap:10px;
 margin-bottom:98px;
 border-radius:20px; 
 height:600px;  
`;

const FormTitle = styled.h2`
 margin-bottom: 20px;
 font-size:25px;
 color:#fff;
 margin-top:20px;
`;

const FormSubtitle = styled.h3`
 margin-bottom: 8px; 
 color: #fff;
 font-size:20px;
`;

const ButtonGroup = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
 max-width: 400px;

`;

const NuevoVideo = () => {
    const [video, setVideo] = useState({ 
    categoria: '',
    titulo: '',
    imagen: '',
    video: '',
    descripcion: ''

 });

 const [errors, setErrors] = useState({});


const handleChange = (e) => { 
    const { name, value } = e.target;
     setVideo({ ...video, [name]: value });
};

const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try {
         const response = await fetch('http://localhost:5000/videos',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(video)  
    }); 
    
    if (!response.ok) {
        throw new Error('Error creating video');
    }

    const data = await response.json();
    console.log("Respuesta del servidor (POST):", data);

    alert('Video creado con éxito');
    setVideo({ titulo: '', categoria: '', imagen: '', video: '', descripcion: '' });
  } catch (error) {
    console.error('Error creating video:', error);
}
};

const handleClear = () => {
    setVideo({ titulo: '', categoria: '', imagen: '', video: '', descripcion: '' });
};



return ( 
    <div>
    <FormContainer >        
      <FormTitle>NUEVO VIDEO</FormTitle> 
      <FormSubtitle>Complete el formulario para crear una nueva tarjeta de video</FormSubtitle>
      <TextField
      label="Título" 
      name="titulo" 
      value={video.titulo} 
      onChange={handleChange}
      margin="normal"
     
      sx={{
            width: '80%',
        '& .MuiOutlinedInput-root': {
          '& fieldset': { 
            borderColor: '#3498db',
            borderWidth: '2px'
            }, 
        '&:hover fieldset': { 
            borderColor:  '#2980b9',
            borderWidth: '2px'
            }, 
         '&.Mui-focused fieldset': { 
           borderColor: '#2980b9',
           borderWidth: '2px' 
            }            
         } ,
           '& input': { 
          color: 'white', 

         },
            '& label':{
           color: 'white'
         }
       }}
            />        
    
     <FormControl fullWidth margin="dense"sx={{ display: 'flex', width: '80%',justifyContent: 'center' }} >
     <InputLabel id="categoria-label" sx={{ color: '#fff' }}>Categoría</InputLabel>
      <Select
         labelId="categoria-label" 
         id="categoria-select"
         label="Categoría" 
         name="categoria"
         value={video.categoria}
         onChange={handleChange} 
         sx={{
          width: '100%',          
          '& .MuiOutlinedInput-root': {
            '& fieldset': { 
              borderColor:'#3498db !important', 
              borderWidth: '2px'
              }, 
          '&:hover fieldset': { 
              borderColor: '#2980b9 !important',
              borderWidth: '2px'
              }, 
           '&.Mui-focused fieldset': { 
            borderColor: '#2980b9 !important',
             borderWidth: '2px' 
              } 
           } ,
           '& input': { 
          color: '#fff', 

         },
            '& label':{
           color: '#fff'
         },
         '& .MuiSelect-select':{
          color:'#fff' 
        },
        '& .MuiSelect-icon': { 
          color: 'white', 
        },
         }}
          >
         <MenuItem value="Front End">Front End</MenuItem>
         <MenuItem value="BackEnd">BackEnd</MenuItem>
         <MenuItem value="Innovación y Gestión">Innovación y Gestión</MenuItem>
         </Select>         
      </FormControl>       
       
       <TextField
          label="Imagen (URL)" 
          name="imagen" 
          value={video.imagen}
          onChange={handleChange}
          margin="normal"
           
          sx={{ 
               width: '80%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { 
                borderColor: '#3498db',
                borderWidth: '2px'
                }, 
            '&:hover fieldset': { 
                borderColor: '#2980b9',
                borderWidth: '2px'
                }, 
             '&.Mui-focused fieldset': { 
              borderColor: '#2980b9',
               borderWidth: '2px' 
                } 
             } ,
             '& input': { 
          color: 'white', 

         },
            '& label':{
           color: 'white'
         }
           }}
       />
          <TextField 
          label="Video (URL)"
          name="video"
          value={video.video} 
          onChange={handleChange} 
          margin="normal" 
          
          sx={{ 
               width: '80%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { 
                borderColor: '#3498db',
                borderWidth: '2px'
                }, 
            '&:hover fieldset': { 
                borderColor: '#2980b9',
                borderWidth: '2px'
                }, 
             '&.Mui-focused fieldset': { 
              borderColor: '#2980b9',
               borderWidth: '2px' 
                } 
             } ,
             '& input': { 
          color: 'white', 

         },
            '& label':{
           color: 'white'
         }
           }}
        />
          <TextField
           label="Descripción"
           name="descripcion" 
           value={video.descripcion}
           onChange={handleChange}
            margin="normal"
          
            sx={{  
                 width: '80%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { 
                  borderColor: '#3498db',
                  borderWidth: '2px'
                  }, 
              '&:hover fieldset': { 
                  borderColor: '#2980b9',
                  borderWidth: '2px'
                  }, 
               '&.Mui-focused fieldset': { 
                borderColor: '#2980b9',
                 borderWidth: '2px' 
                  } 
               },
                '& input': { 
          color: 'white', 

         },
            '& label':{
           color: 'white'
         }
             }}
         />
            <ButtonGroup>
              <Button type="submit" 
               variant="outlined" 
               sx={{
                borderColor: 'blue',
                color: 'blue',
                border:'3px solid',
                backgroundColor:'#000',              
                '&:hover': {
                 backgroundColor:'darkblue',                  
                },
              }}
                           
               onClick={handleSubmit}> 
                Guardar
               </Button>
               <Button type="button"
                 variant="outlined" 
                 sx={{
                  borderColor: 'white',
                  color: 'white',
                  border:'3px solid',
                  backgroundColor:'#000',              
                  '&:hover': {
                   backgroundColor:'darkred',                  
                  },
                }}
                
                 onClick={handleClear}>
                Limpiar 
               </Button> 
               </ButtonGroup> 
               </FormContainer>
              <Footer></Footer>            
            </div>          
            );
        };
        
        
        export default NuevoVideo;
