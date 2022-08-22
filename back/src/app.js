import cors from "cors";
import express from "express";
import db from "./db/index.js";
import { userRouter } from "./routers/userRouter.js";
import { reviewRouter } from "./routers/reviewRouter.js";
import { followRouter } from "./routers/followRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { likeRouter } from "./routers/likeRouter.js";
<<<<<<< HEAD
import { imgUploadRouter } from "./routers/imgUploadRouter.js";
=======
import { productRouter } from "./routers/productsRouter.js";
>>>>>>> c2b91180de82422c9028ce4535c198db906ab6d4

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("정상적으로 db에 연결되었습니다.");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("안녕하세요, SSAP 입니다.");
});

app.use(userRouter);
app.use("/logs", reviewRouter);
app.use("/follows", followRouter);
app.use("/likes", likeRouter);
<<<<<<< HEAD
app.use("/upload", imgUploadRouter);
=======
app.use("/goods", productRouter);
>>>>>>> c2b91180de82422c9028ce4535c198db906ab6d4

app.use(errorMiddleware);

export { app };
