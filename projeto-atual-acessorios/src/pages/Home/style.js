import styled from 'styled-components'


export const Container = styled.div`
width: 100%;

    .container{
        max-width: 98vw;
        position: absolute;
        top: 70%;
    }

    .container .carrosel{
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        
    }

    .container .carrosel::-webkit-scrollbar{
        display: none;
    }

    .container .carrosel .item{
        /* border: 2px solid white; */
        /* border-radius: 20px; */
        margin: 10px;
        padding: 10px;
        width: 280px;
        flex: none;
    }

    .container .carrosel .item .image img{
        width: 100%;
        width: 100%;
        object-fit: cover;
    }

    .buttons{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 105%;
    }

   .buttons button{
        background: none;
        border: none;
        cursor: pointer;
        /* display: flex; */
        margin: 0;
        padding: 0;
        
        

    }

    .buttons button:first-child img{
        transform: rotate(180deg);
       
    }
    .buttons button img{
        width: 10%;
        color: white;
        border: 2px solid white;
        border-radius: 30px;
    }
`
export const Caminhoes = styled.h1`
    color: red;
    font-weight: bold;
    font-style: italic;
    padding: 10px 20px;
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 40%;
    font-size: xx-large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`