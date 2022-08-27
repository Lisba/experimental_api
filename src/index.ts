import express from 'express';
import routerApi from '@routes';
import middlewaresAppInjection from '@middlewares';
import { envVarConfig } from '@config';

const app = express();
const port = envVarConfig.port;

middlewaresAppInjection(app);
routerApi(app);

app.listen(port, () => {
  console.log(`My port: ${port}`);
});
