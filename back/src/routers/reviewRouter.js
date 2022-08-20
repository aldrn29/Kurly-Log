import { Router } from "express";
import { ReviewService } from "../services/reviewService";
import loginRequired from "../middlewares/loginRequired";

const reviewRouter = Router();

// 상품의 리뷰전체 가져오기
reviewRouter.get("/:product_id", async (req, res, next) => {
  try {
    const productId = req.params.product_id;

    const reviews = await ReviewService.getReviews(productId);

    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
  }
});

// 컬리로그 작성하기
reviewRouter.post("/:product_id", loginRequired, async (req, res, next) => {
  try {
    const productId = req.params.product_id;
    const userId = req.currentUserId;
    const createdAt = new Date();
    const { score, good, bad, title, image, content } = req.body;
    const imageArray = [image];
    const newReview = {
      product_id: productId,
      user_id: userId,
      score,
      good,
      bad,
      title,
      image: imageArray,
      content,
      created_at: createdAt,
    };

    const createdReview = await ReviewService.postReviews({ newReview });
    res.status(201).json(createdReview);
  } catch (error) {
    console.log(error);
  }
});

// 유저의 컬리로그 조회하기
reviewRouter.get("/user/:user_id", async (req, res, next) => {
  try {
    const userId = req.params.user_id;

    const logs = await ReviewService.getLogs(userId);

    res.status(200).json(logs);
  } catch (error) {
    console.log(error);
  }
});

export { reviewRouter };
