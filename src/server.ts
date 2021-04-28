import { http } from "./http";
import "./websocket/client"
import "./websocket/admin"

//sobe o servidor com http e com o websocket, pois criou o server(http)
http.listen(3333, () => console.log("Server is running on port 3333"));