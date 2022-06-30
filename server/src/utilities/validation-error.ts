import { CustomError } from '../controllers';

export default (err: any) => (err.toString().includes('ValidationError') ? new CustomError(err.message, 400) : err);
