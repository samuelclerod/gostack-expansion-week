import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    /* display: flex;
    flex-direction: row; */
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
    text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;

    button{
        bottom: 5%;
        z-index: 1;
        position: absolute;
        opacity: 0.5;
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        border-radius: 50%;
        background: black;
        color: white;
        transition: opacity 0.2s;

        &:hover{
            opacity: 0.9;
        }
    }

    #leftButton {

        left: 10px;
    }

    #rightButton {
        right: 10px;
    }
`;
