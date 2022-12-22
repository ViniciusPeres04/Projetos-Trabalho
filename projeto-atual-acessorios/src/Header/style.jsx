import styled from 'styled-components'

export const Logo = styled.input`
    position: absolute;
    width: 10%;
    left: 6%;
    top: 5%;
`

export const Container = styled.div`
width: 100%;
`
export const Informacoes = styled.div`
background-image: linear-gradient(to right,#c0ffff, #1c31a5, #c90a02);
width: 100%;
height: 5%;
position: absolute;
top: 0;
`
export const Info = styled.div`
        display: flex;
        position: absolute;
        top: 0;
        margin-left: 50px;
        z-index: 1000;
`

export const Atalho = styled.h4`
    margin-top: 8px;
    margin-bottom: 0;
    margin-right: 20px;
    position: relative;
    top: 0;
    left: 280%;
    color: black;
    font-family: Arial, Helvetica, sans-serif;

    a{
        text-decoration: none;
        color: white;
        &:hover{
            transition: 0.4s;
            color: pink;
        }
    }
    
`

export const Whatsapp = styled.button`
    position: absolute;
    top: 2px;
    border: none;
    left: 55px;
    background: none;

    svg{
        width: 40px;
        height: 25px;
        border: none;
    }

`

export const Numero = styled.a`
    
    text-decoration: none;
    color: black;
    position: absolute;
    left: 150px;
    font-size: small;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
`

export const Telefone = styled.div`
        position: absolute;
    top: 3px;
    border: none;
    left: 20%;
    background: none;
    svg{
        width: 40px;
        height: 25px;
        border: none;
    }
`

export const Fixo = styled.h5`
    position: absolute;
    margin-top:0;
    left: 23%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: small;

`

export const Pesquisa = styled.input`
    
    position: absolute;
    top: 14%;
    left: 30%;
    background-color: white;
    width: 400px;
    height: 40px;
    border-color:black;
    border-radius: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: medium;
`

export const Buscar = styled.button`
    
        position: absolute;
        top: 14%;
        left: 61%;
        width: 8%;
        height: 7%;
        border-radius: 10px;
        background-color:  #1c31a5;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
        &:hover{
            background-color:  #ce1717a2;
            transition: 0.7s;
        }
        
        svg{
            color: white;
        }

`

export const Carrinho = styled.button`
    
    position: absolute;
    top: 15%;
    right: 12%;
    border-radius: 20px;
    border-color: white;
    background: none;
    color: white;
    display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
    svg{
        width: 40px;
        height: 30px;
        color: white;
    }
`

export const ProdutosDestacados = styled.div`
    position: absolute;
    top: 25%;
    width: 100%;
    height: 10%;
    display: flex;
    background-color: white;
    display: flex;
    align-items: center;
    background-image: linear-gradient(to right, #1c31a5, #c90a02,#c0ffff);
`

export const Texto = styled.button`
    cursor: pointer;
    margin-right: 20px;
    margin-left: 2%;
    font-size: larger;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    font-weight: bold;
    height: 45%;
    width: 10%;
    background: none;
    border: none;
    &:hover{
        color: #96d7eb;
        transition:0.6s;
    }
`

export const InformacoesBasicas = styled.div`
    
    background-color: white;
    position: absolute;
    top: 35.5%;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    background-image: linear-gradient(to right, #1c31a5, #c90a02,#c0ffff);

`

export const TextoInfomacao = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    svg{
        width: 40px;
    }

`