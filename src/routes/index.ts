import homeRouter from './home';
import userRouter from './user';
import productRouter from './product';

const routerApi = (app) => {
  app.use('/', homeRouter);
  app.use('/user', userRouter);
  app.use('/product', productRouter);
};

export default routerApi;
