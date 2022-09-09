import express from 'express';
const router = express.Router();
import { userService } from '@services';
import { CustomError } from '@helpers';

router.get('/', (_req, res) => {
  const response = userService.getAll();
  res.json(response);
});

router.post('/', async (req, res) => {
  if (!req.body) {
    res.status(400).send('Bad Request');
    return;
  }
  try {
    const response = await userService.create(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).send(`Something went wrong, error ${error}`);
  }
});

router.get('/:id', (req, res) => {
  try {
    const response = userService.getById(JSON.parse(req.params.id));
    res.json(response);
  } catch (err) {
    res.status((err as CustomError).statusCode).json(err as CustomError);
  }
});

export default router;
