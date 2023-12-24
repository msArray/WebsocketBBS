import express, { Request, Response } from "express";
import expressWs from "express-ws";
import userController from "./controllers/user/userController";
import messageController from "./controllers/ws/messageController"

const app = express();
expressWs(app);

app.use(express.json());
app.use("/users", userController);
app.use("/ws", messageController);

app.get("/", (req: Request, res: Response) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello express\n");
});


export default app;