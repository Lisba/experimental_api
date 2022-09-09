import authRouter from './auth';
import userRouter from './user';
import productRouter from './product';
import purchaseRouter from './purchase';

const routerApi = (app) => {
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/product', productRouter);
  app.use('/purchase', purchaseRouter);
};

export default routerApi;
