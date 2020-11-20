import styled from 'styled-components';

export const Container = styled.div`
        position: relative;

    video{
        position: relative;
        width: 100%;
        height: 100vh;
        top: 0;
        object-fit: cover; 
        min-width: 100%;
        min-height: 100%;
    }

    div{
        /* visibility: hidden; */
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        color: #ffd770;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            padding: 0;
            margin: 0;
            font-size: 15vw;
            text-shadow: 0.1em 0.1em 0.2em black;
            
        }
        p {
            font-size: 2vw;
            font-family: 'Kaushan Script', cursive;
        }
    }
`;
