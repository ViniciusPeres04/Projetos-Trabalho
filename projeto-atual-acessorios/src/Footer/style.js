import styled from 'styled-components'

export const ContainerFooter = styled.div`
    position: relative;
`

export const Rodape = styled.div`
    background-image: linear-gradient(to right , gray, white);
    width: 100%;
    position: relative;
    margin-bottom: 0;
    padding: 60px 0;
    margin-top: 10%;
    display: flex;

`

export const IconeInstagram = styled.a`
    
    svg{
        width: 20%;
        height: 30%;
        margin: 15px;
        display: flex;
        position: absolute;
        color: black;
        text-decoration: none;
        bottom: 50px;
        right: 85%;
    }
`

export const IconeFacebook = styled.a`
    svg{
        width: 20%;
        height: 30%;
        margin: 15px;
        display: flex;
        position: absolute;
        color: black;
        text-decoration: none;
        bottom: 10px;
        right: 85%; 
    }
`

export const Endereco = styled.p`
        display: flex;
        position: absolute;
        bottom: 20px;
        right: 60%;
        font-size: medium;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold;
        svg{
            color: black;
        }
`

export const Email = styled.p`
        display: flex;
        position: absolute;
        bottom: 35px;
        right: 25%;
        align-items: center;
        font-size: larger;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
    svg{
        width: 20%;
        height: 30%;
        margin-right: 5px;
        display: flex;
        color: black;
        text-decoration: none;
        bottom: 30px;
        right: 40%; 
    }
`

export const TelefoneFixo = styled.p`
        display: flex;
        position: absolute;
        bottom: 15px;
        right: 5%;
        align-items: center;
        font-size: larger;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold;
`