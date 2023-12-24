import { PrismaClient } from "@prisma/client";
import { Router, Request, Application } from "express";
import expressWs from "express-ws";
import { WebSocket } from "ws";


const prisma = new PrismaClient();
const router:any = Router();
expressWs(router);

router.ws('/', (ws: WebSocket, req: Request) => {
    ws.send('接続成功')
    console.log('接続成功');

    ws.on('message', (msg: any) => {
        ws.send(msg)
        console.log(msg)
    })
})

export default router;