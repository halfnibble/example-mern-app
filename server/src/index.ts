import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import tokyoTime from "./tokyoTime";

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("Example Express Server");
});

app.get("/time/tokyo", (req: Request, res: Response) => {
    res.send({ time: tokyoTime() });
});

app.get("/__health", (req: Request, res: Response) => {
    res.send("OK");
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
