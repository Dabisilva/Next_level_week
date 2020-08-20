import React from 'react'

import AuthRoutes from './auth.routes'
import UnAuthRoutes from './unAuth.routes';
import { useAuth } from '../contexts/auth';

function Routes(){
    const {signed} = useAuth()
    return signed ? <AuthRoutes/> : <UnAuthRoutes/>

}

export default Routes;