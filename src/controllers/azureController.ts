import { Request, Response } from 'express';
import sendEmail from '../services/azureService';

const sendEmailController = async (req: Request, res: Response) => {
  const { to, subject, body } = req.body; 

  try {
    const status = await sendEmail(to, subject, body);

    res.status(200).json({
      message: 'Email sent successfully',
      status: status,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to send email',
      error: error.message,
    });
  }
};

export default sendEmailController;
