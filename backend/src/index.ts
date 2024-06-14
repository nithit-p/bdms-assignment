import express, { Request, Response } from "express";
import { todoRouter } from "./routes";
import { responseInterceptor } from "./middleware";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// response modify middleware
app.use(responseInterceptor);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.use("/todo", todoRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
