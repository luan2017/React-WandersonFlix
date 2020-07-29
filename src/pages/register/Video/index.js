import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'

function RegisterVideo() {
    return(
        <PageDefault>
            <h1>cadastro de Vídeo</h1>
            <Button as={Link} to="/cadastro/categoria">
               Cadastrar Categoria
             </Button>
        </PageDefault>
    )
}

export default RegisterVideo