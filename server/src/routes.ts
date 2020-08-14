import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import RegisterController from './controllers/RegisterController';
import UserController from './controllers/UserController';



const routes = express.Router();

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()
const registerController = new RegisterController()
const userController = new UserController()

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

routes.post('/register', registerController.create)
routes.get('/register', registerController.index)


routes.post('/session', userController.create)

export default routes;