import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
`

export const Formulario = styled.form`

    position: relative;
    margin-top: 55%;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 50%;

    input{
        width: 200%;
        height: 20%;
        padding: 8px 0;
        margin: 8px 0;
    }
    textarea{
        width: 200%;
        padding-bottom: 100px;
    }
    label{
        color: red;
        font-size: larger;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
    }
    button{
        width: 200%;
        height: 150%;
        border-radius: 15px;
        position: relative;
        left: 2px;
        top: 10px;
        font-size: medium;
        font-style: oblique;
        font-weight: bold;
        cursor: pointer;
        color: black;
        background-image: linear-gradient(to right, #1c31a5, #c90a02,#c0ffff);
        &:hover{
            background-image: linear-gradient(to left , #1c31a5, #c90a02,#c0ffff);
        }
    }
`

export const ContatoImagem = styled.img`
    position: absolute;
    top: 45%;
    width: 100%;
    height: 60%;
`
export const Localizacao = styled.a`
    padding: 20px 80px;
    position: absolute;
    top: 120%;
    right: 25%;
    color: white;
    background-color: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    font-size: x-large;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    &:hover{
        background-color: red;
        color: white;
        transition: 1s;
    }

    svg{
      color: black;
     } 
`

export const ContatoVendedores = styled.p`
    position: absolute;
    top: 132%;
    right: 27%;
    color: red;
    font-size: xx-large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
`

export const WhatsappVendedor1 = styled.a`
        position: absolute;
        top: 145%;
        right: 30%;
        color: white;
        display: flex;
        align-items: center;
        font-size: x-large;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bold;
        &:hover{
            color: green;
            transition: 1s;
        }
    svg{
        width: 40px;
        height: 25px;
        border: none;
        color: green;
    }
`

export const WhatsappVendedor2 = styled.a`
        position: absolute;
        top: 155%;
        right: 30%;
        color: white;
        display: flex;
        align-items: center;
        font-size: x-large;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bold;
        &:hover{
            color: green;
            transition: 1s;
        }
    svg{
        width: 40px;
        height: 25px;
        border: none;
        color: green;
    }
`

export const WhatsappVendedor3 = styled.a`
        position: absolute;
        top: 165%;
        right: 30%;
        color: white;
        display: flex;
        align-items: center;
        font-size: x-large;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bold;
        &:hover{
            color: green;
            transition: 1s;
        }

    svg{
        width: 40px;
        height: 25px;
        border: none;
        color: green;
    }
`