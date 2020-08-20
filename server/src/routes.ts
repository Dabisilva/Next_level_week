import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import RegisterController from './controllers/RegisterController';
import UserController from './controllers/UserController';
import ProffysController from './controllers/ProffysController';
import UserTeacherController from './controllers/UserTeacherController';
import ScheduleController from './controllers/ScheduleController';
import FavoriteController from './controllers/FavoriteController';



const routes = express.Router();

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()
const registerController = new RegisterController()
const userController = new UserController()
const proffyController = new ProffysController()
const userTeacherController = new UserTeacherController()
const scheduleController = new ScheduleController()
const favoriteController = new FavoriteController()


routes.get('/proffy/:id', userTeacherController.index)
routes.post('/proffy/create', userTeacherController.create)

routes.get('/proffys', proffyController.index)

routes.post('/classes/:id', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

routes.post('/register', registerController.create)
routes.get('/register', registerController.index)
routes.patch('/update/:id', registerController.update)

routes.post('/session', userController.create)

routes.get('/schedule/:id', scheduleController.index)
routes.delete('/schedule/del/:id', scheduleController.delete)


routes.post('/favorite/:id', favoriteController.create)
routes.get('/favorite/list/:id', favoriteController.index)
routes.delete('/favorite/del/:id', favoriteController.delete)

export default routes;