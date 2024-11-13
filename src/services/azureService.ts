import axios from 'axios';
import { getAccessToken } from '../config/azureConfig';

const sendAzureEmail = async (to: string, subject: string, body: string) => {
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

    return response.status;  
  } catch (error: any) {
    throw new Error(`Error sending email: ${error.message}`);
  }
};

export default sendAzureEmail;
