import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('get user home!');
  console.log('get user home!');
});

router.post('/', (_req, res) => {
  res.send('post user home!');
  console.log('post user home!');
});

router.get('/:id', (_req, res) => {
  res.send('get user/:id');
  console.log('get user/:id');
});

export default router;
