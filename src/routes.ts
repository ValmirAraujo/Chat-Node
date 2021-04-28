import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/**
 * Tipo de parametros
 * Routes Params => Parametros de rotas
 * Ex: http://localhost:3333/settings/1 (1 o 1 é o parametro sendo passado na rota)
 * Query Params => Filtros e buscas
 * Ex: http://localhost:3333/settings/1?search=algumacoisa&chave=valor (mais de um parametro 
 * com chave-valor sendo passado na rota)
 * Body Params => usando muito em inserções, alterações, etc...
 * Ex: são passados no formato Json {}
 */
// A própria função create é o valor sendo passado, por isso ñ utiliza os parenteses.
/**
 * Se por outro lado você utiliza-se settingsController.create(), 
 * você estaria invocando a função, e atribuindo o retorno de create à 
 * propriedade do post. Ou seja, o port ali so receberia o retorno da função
 * creat, mas nesse argumento ele espera uma função, ai teria q criar uma arrow function
 * e no retorno dela chamaria o creat() para assim pegar o retorno da creat(), alem de 
 * ter que passar os parametros.
 */

routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUsername)
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes };
