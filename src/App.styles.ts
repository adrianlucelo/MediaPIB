import styled from "styled-components";

export const Container = styled.div`
background-color: #000000;
background-size: cover;
background-position: center;
color: #FFF;
min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: rgba(61, 61, 67, 0.8); /* Define uma cor de fundo com transparência */
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    backdrop-filter: blur(40px); /* Aplica um desfoque ao fundo */

    input[type=submit] {
        background: linear-gradient(to right, #0042ad, #000003);
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
`;