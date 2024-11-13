import express from 'express';
import azureEmailController from '../controllers/azureController';
import AWSEmailController from '../controllers/awsController';

const router = express.Router();

router.post('/azure/send', azureEmailController);
router.post('/aws/send', AWSEmailController);

export default router;
