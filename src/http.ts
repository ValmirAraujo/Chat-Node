import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io"
import path from "path"

import "./database"; //para importar um arquivo index basta informar a pasta onde ele está
// que o JS reconhece automaticamente. E como a importação deve ser feita assim que arquivo
//se ja importado, não precisa usar o from.

import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
})

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html")
})

const http = createServer(app) // Criando protocolo http
const io = new Server(http) // Criando protocolo websocket

io.on("connection", (socket: Socket) => {
    // console.log("Se conectou", socket.id)
});

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.use(express.json()) //habilita o express para receber json

app.use(routes)

export { http, io };