import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send("API's home!");
  console.log("API's home!");
});

export default router;
