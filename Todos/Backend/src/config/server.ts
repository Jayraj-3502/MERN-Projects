import express, {
  json,
  urlencoded,
  type Request,
  type Response,
} from "express";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/", (req: Request, res: Response) => {
  res.send("This is response");
});

// app.use("api/v1/auth");
// app.use("api/v1/user");
// app.use("api/v1/todo");

export default app;
