import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
`

const Imagem = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`
const ContainerMenor = styled.div`
    display: flex;
    justify-items: flex-start;
`

const NNome = styled.h4`
    margin-bottom: 15px;
`

function CardPequeno(props) {
    return (
        <Container>
            <Imagem src={ props.imagem } />
            <ContainerMenor>
                <NNome>{ props.campo }</NNome>
                <p>{ props.conteudo }</p>
            </ContainerMenor>
        </Container>
    )
}

export default CardPequeno;