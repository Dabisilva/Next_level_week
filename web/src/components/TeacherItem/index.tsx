import React from 'react'
import imageWhats from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/57877449?s=460&u=38c139ae53da3814aa6a3cf40b293e6c898278df&v=4" alt="Davi Barbosa" />
                <div>
                    <strong>Davi Barbosa</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Várias coisas lorem ipsum bla bla
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={imageWhats} alt="" />
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem