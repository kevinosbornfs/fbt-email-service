import axios from 'axios';
import { getAccessToken } from './auth';

const sendEmail = async (to: string, subject: string, body: string) => {
  try {
    const accessToken = await getAccessToken();

    const emailMessage = {
      message: {
        subject: subject,
        body: {
          contentType: 'Text',
          content: body,
        },
        toRecipients: [
          {
            emailAddress: {
              address: to,
            },
          },
        ],
      },
    };

    const response = await axios.post(
      'https://graph.microsoft.com/v1.0/me/sendMail',
      emailMessage,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Email sent successfully:', response.status);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;