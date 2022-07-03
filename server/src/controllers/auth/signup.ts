import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcrypt';
import { Roles, Users } from '../../database/models';
import { CustomError } from '../error';
import {
  sendEmail,
  signToken,
  signupSchema,
  validateError,
} from '../../utilities';

export default async ({ body }: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = body;

  try {
    await signupSchema.validateAsync(body);
    const userExists = await Users.findOne({ where: { email } });
    if (userExists) throw new CustomError('User already exists', 409);
    const hashedPassword = await hash(password, 10);
    const { dataValues: { id: roleId, name: role } }: any = await Roles.create({ name: 'artist' });
    const { dataValues: { id: userId } }: any = await Users.create({
      username,
      email,
      roleId,
      password: hashedPassword,
    });
    const token = await signToken({
      id: userId,
      username,
      email,
      role,
    });
    await sendEmail(email, 'Welcome to the app', `<h1>Welcome to the app, ${username}!</h1><p>please verify your account by clicking on <a href="http://localhost:5000/api/v1/auth/verify-email/${token}">this link</a></p>`);
    res
      .cookie('access_token', token)
      .status(201)
      .json({ message: 'Confirmation email sent successfully' });
  } catch (err: any) {
    next(validateError(err));
  }
};
