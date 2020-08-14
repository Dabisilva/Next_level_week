import jwt from 'jsonwebtoken'
import config from '../config/auth'



export default function genereteToken(id : Number){
    const newToken = jwt.sign({ id : id }, config.jwtSecret, {
        expiresIn: "1d"
    });
    return newToken
}