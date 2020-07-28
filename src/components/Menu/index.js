import React from 'react'
import Logo from '../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

export default function Menu () {
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Logo WandersonFlix"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}