import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send("API's purchases!");
});

export default router;
