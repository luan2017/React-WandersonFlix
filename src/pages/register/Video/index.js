import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'

function RegisterVideo() {
    return(
        <PageDefault>
            <h1>cadastro de Vídeo</h1>

            <Link to="/cadastro/categoria">
              <Button>
                Cadastrar Categoria
              </Button>
            </Link>
        </PageDefault>
    )
}

export default RegisterVideo