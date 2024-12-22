import React from 'react';
import styled, { css } from 'styled-components';
import VideoCard from '../componentes/videoCard';


const SectionContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: #fff;
  margin-bottom: 0;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
 
  ${props =>
     props.color && css`
    background-color: ${props.color};
    color:#FFF;
   `}
`;

const VideosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;



const VideoSection = ({ title, videos,color,onDelete }) => {
  console.log("Videos recibidos en VideoSection:", videos); 

  
  return (
    <SectionContainer>
      <SectionTitle color={color}>{title}</SectionTitle>
      <VideosGrid>        
        {videos.map((video ) => (
          <VideoCard 
            key={video.id}
            image={video.imagen}
            video={video.video}
            onDelete={() => onDelete(video.id)}
            onEdit={() => console.log(`Edit video ${video.id}`)}
            color={color}
          />
        ))}
      </VideosGrid>
    </SectionContainer>
  );
};

export default VideoSection;
