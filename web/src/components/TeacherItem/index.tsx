import React from 'react'
import imageWhats from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

import './styles.css'

export interface Teacher {
    avatar: string
    id: number
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string

}

interface TeacherItemProps {
    classes: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classes }) => {
    
    function createNewConnection(){

        api.post('connections', {
            user_id: classes.id
        })

    }
    return (
        <article className="teacher-item">
            <header>
                <img src={classes.avatar} alt="Davi Barbosa" />
                <div>
                    <strong>{classes.name}</strong>
                    <span>{classes.subject}</span>
                </div>
            </header>
            <p>
                {classes.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {classes.cost}</strong>
                </p>
                <a onClick={createNewConnection} href={`https://wa.me/${classes.whatsapp}`} target="_blank">
                    <img src={imageWhats} alt="" />
                    Entrar em contato
                </a>
            </footer>

        </article>
    )
}

export default TeacherItem