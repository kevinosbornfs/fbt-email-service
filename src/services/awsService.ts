import AWS from 'aws-sdk';

const ses = new AWS.SES({
  region: process.env.AWS_REGION,
});

interface EmailParams {
  to: string | string[];
  subject: string;
  body: string;
}

const sendAWSEmail = async ({ to, subject, body }: EmailParams) => {
  try {
    const sourceEmail = process.env.SOURCE_EMAIL;

    if (!sourceEmail) {
      throw new Error('SOURCE_EMAIL environment variable is not set');
    }

    const params = {
      Source: sourceEmail, 
      Destination: {
        ToAddresses: Array.isArray(to) ? [...to] : [to],  
      },
      Message: {
        Subject: {
          Data: subject,  
        },
        Body: {
          Text: {
            Data: body,  
          },
        },
      },
    };

    const result = await ses.sendEmail(params).promise();

    return result;  
  } catch (error: any) {
    throw new Error(`Error sending email with AWS SES: ${error.message}`);
  }
};

export default sendAWSEmail;