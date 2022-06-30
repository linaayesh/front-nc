import { verify, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { env: { JWT_SECRET } } = process;

export default (token: string) => new Promise((resolve, reject) => {
  verify(token, JWT_SECRET as Secret, (err, match) => {
    if (err) return reject(err);
    return resolve(match);
  });
});
