import * as React from 'react';
import Atual from '../imagens/ATUAL.png'
import { Logo, ProdutosDestacados, Texto } from './style'
import { Container, Informacoes, Info, Atalho, Whatsapp, Numero, 
    Telefone, Fixo, Pesquisa, Buscar, Carrinho,InformacoesBasicas,TextoInfomacao} from './style'
import { Link } from "react-router-dom"
import { SiWhatsapp } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {BsCashCoin} from 'react-icons/bs'
import {AiFillCreditCard} from 'react-icons/ai'
import  {FaTruckMoving} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import {GiGearStickPattern} from 'react-icons/gi'
import {GiVibratingSmartphone} from 'react-icons/gi'

export default function Header() {


    return (
        <Container>
            <Informacoes>
                <Info>
                    <Atalho><Link to='/produtos'>Produtos</Link></Atalho>
                    <Atalho><Link to='/fale-conosco'>Fale Conosco</Link></Atalho>
                    <Atalho><Link to='/sobre-nos'>Sobre Nós</Link></Atalho>
                    <Whatsapp>
                        <SiWhatsapp />
                    </Whatsapp>
                </Info>
                <Numero href="https://wa.me/5562982229878?text=ola" target="_blank">Whatsapp <br />(62)9 8222-9878</Numero>
                <Telefone>
                    <BsFillTelephoneFill />
                </Telefone>
                <Fixo>Telefone <br /> (62) 3519-1147</Fixo>
            </Informacoes>
            <Link to='/'> <Logo type="image" src={Atual} ></Logo></Link>
            <Pesquisa type='text/' placeholder='Pesquisar...' />
            <Buscar><BsSearch /> Buscar</Buscar>
            <Carrinho><AiOutlineShoppingCart /> Meu Carrinho</Carrinho>
            <ProdutosDestacados>
                <Texto>Caminhão</Texto>
                <Texto>Carreta</Texto>
                <Texto>Acessórios</Texto>
            </ProdutosDestacados>
            <InformacoesBasicas>
                <TextoInfomacao><BsCashCoin/>PREÇOS ESPECIAIS</TextoInfomacao>
                <TextoInfomacao><AiFillCreditCard/>VÁRIAS OPÇÕES <br/> DE PAGAMENTO</TextoInfomacao>
                <TextoInfomacao><FaTruckMoving/>PRODUTOS A PRONTA <br/>ENTREGA</TextoInfomacao>
                <TextoInfomacao><GiCarWheel/>COMPLETA LINHA <br/>DE ACESSÓRIOS</TextoInfomacao>
                <TextoInfomacao><GiGearStickPattern/>SERVIÇO DE <br/>INSTALAÇÃO</TextoInfomacao>
                <TextoInfomacao><GiVibratingSmartphone/>ATENDIMENTO <br/>DIFERENCIADO</TextoInfomacao>
            </InformacoesBasicas>
        </Container>

    );
}

