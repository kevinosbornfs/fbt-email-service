import { Request, Response } from 'express';
import sendEmail from '../services/awsService';

const AWSEmailController = async (req: Request, res: Response) => {
  const { to, subject, body } = req.body;

  try {
    const result = await sendEmail({ to, subject, body });

    if (result.MessageId) {
      res.status(200).json({
        message: 'Email sent successfully',
        messageId: result.MessageId,  
      });
    } else {
      throw new Error('No MessageId returned in response');
    }
  } catch (error: any) {
    console.error('Error sending email:', error); 
    res.status(500).json({
      message: 'Failed to send email',
      error: error.message,
    });
  }
};

export default AWSEmailController;
