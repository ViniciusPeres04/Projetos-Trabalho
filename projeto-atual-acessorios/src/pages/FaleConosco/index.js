import * as React from 'react';
import { Container, ContatoImagem, ContatoVendedores, Formulario, Localizacao, WhatsappVendedor1, WhatsappVendedor2, WhatsappVendedor3} from './style'
import { SiWhatsapp } from 'react-icons/si'
import Contato from '../../imagens/CONTATO.png'
import { MdLocationOn } from 'react-icons/md'
import Footer from '../../Footer';
import Header from '../../Header';



export default function FaleConosco() {


    return (
        <Container>
            <Header/>
            <ContatoImagem src={Contato} />
            <Localizacao href='https://goo.gl/maps/T62X7wtpHWx62yAT9' target='_blank'><MdLocationOn />Localização</Localizacao>
            <ContatoVendedores>Entre em contato:</ContatoVendedores>
            <div>
                <WhatsappVendedor1 href='https://wa.me/5562991065743?text=Ol%C3%A1%2C+quero+mais+informa%C3%A7%C3%B5es%21' target='_blank'><SiWhatsapp/>(62)9 9106-5743</WhatsappVendedor1>
                <WhatsappVendedor2 href='https://wa.me/5562991190570?text=Ol%C3%A1%2C+quero+mais+informa%C3%A7%C3%B5es%21' target='_blank'><SiWhatsapp/>(62)9 9119-0570</WhatsappVendedor2>
                <WhatsappVendedor3 href='https://wa.me/5562991514655?text=Ol%C3%A1%2C+quero+mais+informa%C3%A7%C3%B5es%21' target='_blank'><SiWhatsapp/>(62)9 9151-4655</WhatsappVendedor3>
            </div>

            <Formulario action="https://formsubmit.co/viniciusfula0409@gmail.com" method='POST'>
                <label htmlFor='name'>Nome*</label>
                <input name='name' id='name' required placeholder='Matheus'/>
                <label htmlFor='email'>Email*</label>
                <input type="email" name="email" id='email' required placeholder='Exemplo@gmail.com'/>
                <label htmlFor='number'>Telefone*</label>
                <input type="text" name='telefone' id='number' required placeholder='(00)0 0000-0000' maxLength={15}/>
                <label htmlFor='message'>Mensagem</label>
                <textarea name='mensagem' id='message' required placeholder='Escreva sua dúvida...'></textarea>
                <button type="submit">ENVIAR MENSAGEM</button>
            </Formulario>
            <Footer/>
        </Container>

    );
}

