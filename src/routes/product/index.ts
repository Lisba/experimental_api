import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('get products home!');
  console.log('get products home!');
});

router.post('/', (_req, res) => {
  res.send('post products home!');
  console.log('post products home!');
});

router.get('/:id', (_req, res) => {
  res.send('get products/:id');
  console.log('get products/:id');
});

export default router;
