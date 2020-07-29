import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function RegisterCategory() {
    return(
    <div>
        <PageDefault>
            <h1>cadastro de Categoria</h1>
            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    </div>
    )
}

export default RegisterCategory