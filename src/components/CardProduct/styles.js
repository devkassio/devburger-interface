import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
    cursor: grab;

    div {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    p {
        font-size: 18px;
        line-height: 40px;
        width: 400px;
        margin-top: 30px;
        font-weight: 600;
        color: #9758a6;
    }

    strong {
        font-size: 20px;
        font-weight: 600;
        color: #363636;
        line-height: 20px;
    }
`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -40px;
`;