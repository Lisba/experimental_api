type db = {
  users: user[];
  products: products[];
  purchases: purchases[];
};

export type user = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type products = {
  id: number;
  name: string;
  price: number;
};

type purchases = {
  id: number;
  productId: number;
  userId: number;
  date: string;
};

const database: db = {
  users: [
    { id: 1, name: 'Lisbaldy', email: 'lisbaldy@mail.com', password: '123 .34' },
    { id: 2, name: 'Jesus', email: 'jesus@mail.com', password: '345 .34' },
    { id: 3, name: 'Alberto', email: 'alberto@mail.com', password: '342 .345' },
    { id: 4, name: 'Carmen', email: 'carmen@mail.com', password: '876 .23' },
    { id: 5, name: 'Maria', email: 'maria@mail.com', password: '569 .78' },
    { id: 6, name: 'Javier', email: 'javier@mail.com', password: '1234 .67' },
    { id: 7, name: 'Ernesto', email: 'ernesto@mail.com', password: '12367 .45' },
    { id: 8, name: 'Marcos', email: 'marcos@mail.com', password: '123803 .23' },
  ],
  products: [
    { id: 1, name: 'taladro', price: 40.5 },
    { id: 2, name: 'destornillador estria', price: 7.34 },
    { id: 3, name: 'destornillador pala', price: 7.34 },
    { id: 4, name: 'medidor', price: 20.4 },
    { id: 5, name: 'amperimetro', price: 30.45 },
    { id: 6, name: 'voltimetro', price: 30.56 },
  ],
  purchases: [
    { id: 1, productId: 1, userId: 2, date: '12-04-2021' },
    { id: 2, productId: 5, userId: 3, date: '24-05-2022' },
    { id: 3, productId: 4, userId: 5, date: '18-06-2021' },
    { id: 4, productId: 6, userId: 8, date: '11-08-2022' },
    { id: 5, productId: 2, userId: 7, date: '29-07-2022' },
  ],
};

export default database;
