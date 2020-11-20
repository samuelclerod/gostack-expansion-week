import React from 'react';

import { Container } from './styles';
import backgroundVideo from '../../assets/fire.mp4';

const VideoHeader: React.FC = () => {
    return (
        <Container>
            <video autoPlay muted loop>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div>
                <h1>Empatia</h1>
                <p>A softskill que pode resolver os problemas do mundo🌎</p>
            </div>
        </Container>
    );
}

export default VideoHeader;
