import express from "express";
import httpStatus from "http-status";
import router from "./router/index.routes.js";

const app = express();
app.use(router);
const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})