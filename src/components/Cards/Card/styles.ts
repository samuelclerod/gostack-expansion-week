import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.div)`
    height: 100vh;
    width: 100%;
    min-height: 700px;
    text-shadow: 0.1em 0.1em 0.2em black;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        padding-bottom: 80px;
        font-size: 5vw;
    }

    div{
        max-width: 900px;
        p{
            font-size: 32px;
            text-indent: 2em;
            text-align: justify;
            margin-bottom: 1em;
        }
    }

`;
