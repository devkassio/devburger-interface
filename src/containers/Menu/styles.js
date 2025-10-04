import styled from "styled-components";
import BannerHamburger from '../../assets/banner-hamburger.svg';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
`;

export const Banner = styled.div`
    height: 480px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


    background: url('${BannerHamburger}') no-repeat;
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;

        position: absolute;
        right: 10%;
        top: 30%;
    }

    span {
        display: block;
        color: #fff;
        font-size: 20px;
    }
    
    
`;

export const CategoryMenu = styled.div``;

export const ProductsContainer = styled.div``;

