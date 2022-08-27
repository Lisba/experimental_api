import express from 'express';

const middlewaresAppInjection = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

export default middlewaresAppInjection;
