import express from 'express';
const router = express.Router();

router.post('/', (_req, res) => {
  res.send('login');
});

router.post('/password/recover', (_req, res) => {
  res.send('password email sent');
});

router.patch('/password/recover', (_req, res) => {
  res.send('password edited');
});

router.patch('/refresh-token', (_req, res) => {
  res.send('new access and refresh tokens');
});

export default router;
