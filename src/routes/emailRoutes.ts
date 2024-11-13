import express from 'express';
import sendEmailController from '../controllers/azureController';

const router = express.Router();

router.post('/azure/send', sendEmailController);

export default router;
