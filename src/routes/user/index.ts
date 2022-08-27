import express from 'express';
const router = express.Router();
import { userService } from '@services';

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
    if (!response || Object.keys(response as string[]).length === 0) {
      res.status(404).send('Not Found');
    }
    console.log('response from route: ', response);
    res.json(response);
  } catch (error) {
    res.status(404).send();
  }
});

export default router;
