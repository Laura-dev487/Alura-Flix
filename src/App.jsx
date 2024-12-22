import GlobalStyle from './globalStyles';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/header';
import Banner from './componentes/banner';
import VideoSection from './componentes/videoSection';
import Footer from './componentes/footer';
import NuevoVideo from './componentes/nuevoVideo';


function App() {
  
  const [videos, setVideos] = useState({
    "Front End": [],
    "BackEnd": [],
    "Innovación y Gestión": [], 
  });
 
  const handleDeleteVideo = async (videoId) => {
    try {
            
      console.log(`Attempting to delete video ${videoId}`);
      const response = await fetch (`http://localhost:5000/videos/${videoId}`,{
      method: 'DELETE'
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error deleting video: ${response.status} - ${errorText}`);
      }

      setVideos(prevVideos => {
        const updatedVideos = { ...prevVideos };
        for (const categoria in updatedVideos) {
            updatedVideos[categoria] = updatedVideos[categoria].filter(video => video.id !== videoId);
        }
        return updatedVideos;
    });

      } catch (error) {
      console.error('Error deleting video:', error); 
  }
};


const handleAddVideo = async (newVideo) => {
  try {
    const response = await fetch('http://localhost:5000/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newVideo),
    });

    if (!response.ok) {
      throw new Error('Error creating video:${response.status} - ${errorText} ');
    }

    const data = await response.json();
    setVideos(prevVideos => ({
      ...prevVideos,
      [newVideo.categoria]: [...prevVideos[newVideo.categoria], data] 
  }));  
    
    alert('Video creado con éxito');
  } catch (error) {
    alert(`Error al crear el video: ${error.message}`)
  }
};

useEffect(() => {
  console.log("Estado 'videos' ACTUALIZADO (useEffect):", videos);
}, [videos]);

  
useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await fetch('http://localhost:5000/videos');
          if (!response.ok) {
              throw new Error(`Error fetching data: ${response.status}`);
          }
          const data = await response.json();
          console.log("Datos del backend DESPUÉS del cambio en db.json:", data); 
          
          const categorizedVideos = data.reduce((acc, video) => {
              if (acc[video.categoria]) {
                  acc[video.categoria].push(video);
              } else {
                  acc[video.categoria] = [video];
              }
              return acc;
          }, { "Front End": [], "BackEnd": [], "Innovación y Gestión": [] });
          setVideos(categorizedVideos);
      } catch (error) {
          console.error('Error fetching data from API:', error);
      }
  };

  fetchData();
}, []);

const getVideosByCategoria = (categoria) => {
  return videos[categoria] || []; 
};


  return (
    <Router>
    <div style={{ margin: 0, padding: 0, backgroundColor: '#000' }} >
       <GlobalStyle />
      <Header/>
      <Routes>
      <Route path="/" element={
         <>
      <Banner/>
      <VideoSection
       title="Front End"
       videos={getVideosByCategoria("Front End")}
       color="#6BD1FF"
       onDelete={handleDeleteVideo}
        />
      <VideoSection
       title="BackEnd" 
       videos={getVideosByCategoria("BackEnd")}
       color="#00C86F"
       onDelete={handleDeleteVideo}
         />
      <VideoSection 
      title="Innovación y Gestión"
      videos={getVideosByCategoria("Innovación y Gestión")}
      color="#FFBA05"
      onDelete={handleDeleteVideo}
      />
     <Footer />
     </> 
     } /> 
     
     <Route path="/nuevo-video"
     element={<NuevoVideo onAddVideo={handleAddVideo} />} />
      </Routes> 
      </div> 
      </Router> 
      ); 
    }

export default App
