import { Request, Response, NextFunction } from 'express';
import { Users } from '../../database/models';
import { verifyToken } from '../../utilities/jwt';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { token }: any = req.params;

  try {
    const { id: userId }: any = await verifyToken(token);

    const userExists = await Users.findOne({ where: { id: userId } });
    if (!userExists) res.json({ message: 'No data' });
    const [userVerified] = await Users.update({ isVerified: true }, { where: { id: userId } });
    if (userVerified) return res.status(302).redirect('http://localhost:3000');
    return res.json({ message: 'User already verified' });
  } catch (err) {
    return next(err);
  }
};
