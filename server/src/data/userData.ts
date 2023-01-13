import User from '../interfaces/userInterface';

const userList: Array<User<string[]>> = [
  {
    name: 'calson',
    age: 28,
    sex: 'male',
    hobbies: ['tennis', 'coding'],
    address: {
      country: 'CA',
      province: 'ON',
      city: 'Toronto',
    },
    level: 'master',
    major: 'engineer',
  },
  {
    name: 'calson',
    age: 28,
    sex: 'female',
    hobbies: ['n/a'],
    address: {
      country: 'CA',
      province: 'AB',
      city: 'Edmonton',
    },
    level: 'master',
    major: 'engineer',
  },
];

export { userList };
