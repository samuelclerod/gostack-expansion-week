import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.div)`
    height: 100vh;
    width: 100%;
    min-height: 850px;
    text-shadow: 0.1em 0.1em 0.2em black;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* flex-wrap: wrap; */
    h1{
        padding: 80px 0;
        font-size: 80px;
        max-width: 900px;
    }

    div{
        max-width: 900px;
        font-size: 32px;
        text-align: justify;
        p {
            text-indent: 2em;
            & + p {
            margin-top: 25px;
            }
        }
        li + li {
            margin-top: 20px;
        }
    }

`;
