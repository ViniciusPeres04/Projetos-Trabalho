import React from 'react'
import {Rodape,IconeInstagram,IconeFacebook,Endereco,Email,TelefoneFixo,ContainerFooter} from './style'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineFacebook} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'

export default function Footer() {
  return (
    <ContainerFooter>
      <Rodape>
        <IconeInstagram href='https://www.instagram.com/atualacessoriosetapecaria/' target='_blank'><FiInstagram/></IconeInstagram>
        <IconeFacebook href='https://www.facebook.com/PauloTapecariaEquipamentosEAcessorios' target='_blank'><AiOutlineFacebook/></IconeFacebook>
        <Endereco><MdLocationOn/>Av. Pedro Ludovico Teixeira N° 3.755<br/>Qd. 118 Lts 7/8 - Pq. Oeste Industrial<br/> Goiânia(GO)</Endereco>
        <Email><AiOutlineMail/> financeiro.atualacessorios@outlook.com</Email>
        <TelefoneFixo>Telefone:<br/>(62) 3519-1147<br/>(62) 3573-3235</TelefoneFixo>
      </Rodape>
    </ContainerFooter>
  )
}
