import { Router } from 'express';

import { signupHandler, verifyEmailHandler } from '../../controllers';

const router = Router();

router.post('/signup', signupHandler);
router.get('/verify-email/:token', verifyEmailHandler);

export default router;
