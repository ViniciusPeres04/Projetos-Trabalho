import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Container, Caminhoes } from './style'
import Header from '../../Header';


export default function Home() {

    const [dados, setDados] = useState([])
    const carrosel = useRef(null)

   useEffect(()=>{
        fetch('http://localhost:3000/static/logos.json').then((response) => response.json())
        .then(setDados)
    },[]) 

        if(!dados || !dados.length) return null

        const handleLeftClick = (e) =>{

            carrosel.current.scrollLeft -= carrosel.current.offsetWidth
        }

        const handleRightClick = (e) =>{
        
           
            carrosel.current.scrollLeft += carrosel.current.offsetWidth
        }

    return (
        <Container>
            <Header />
            <Caminhoes>Caminhões</Caminhoes>
            <div className='container'>

                <div className='carrosel' ref={carrosel}>

                    {dados.map((item)=>{
                            const {id , image} = item
                    return(

                    <div className='item' key={id}>
                        <div className='image'>
                            <img src={image} alt='volvo' />
                        </div>
                    </div>)
                    })}
                </div>
            </div>
                <div className='buttons'>
                    <button onClick={handleLeftClick}><img src='/static/imagens/SETA.png' alt='Scroll Left'/></button>
                    <button onClick={handleRightClick}><img src='/static/imagens/SETA.png' alt='Scroll Right'/></button>
                </div>
        </Container>

    );
}


