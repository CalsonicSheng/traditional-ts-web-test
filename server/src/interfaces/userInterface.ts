import Address from './addressInterface';
import Education from './educationInterface';

interface User<T = any[]> extends Education {
  name: string;
  age: number;
  sex: string;
  address: Address;
  hobbies: T;
}

export default User;
