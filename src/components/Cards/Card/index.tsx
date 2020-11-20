import React, { MouseEventHandler } from 'react';
import { Container } from './styles';
import { FiArrowRight } from 'react-icons/fi';

interface CardProps {
    title: string;
    style: object;
}

const Card: React.FC<CardProps> = ({ children, title, style }) => {
    return (
        <Container style={style}>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </Container>
    )
}

export default Card;