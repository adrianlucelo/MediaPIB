import styled from "styled-components";

export const Container = styled.div`
background-color: rgba(61, 63, 67, 0.8); /* Define uma cor de fundo com transparência */
    border-radius: 10px;
    padding: 10px;
    margin: auto;
    backdrop-filter: blur(40px); /* Aplica um desfoque ao fundo */

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        display: block;
    background: linear-gradient(to right, #0042ad, #000003);
    border: 0;
    color: #FFF;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 10px auto 0 auto;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.9;
    }
`;