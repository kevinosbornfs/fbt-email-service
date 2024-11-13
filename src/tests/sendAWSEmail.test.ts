// import AWS from 'aws-sdk';
// import sendAzureEmail from '../services/azureService';

// jest.mock('aws-sdk');

// describe('sendAWSEmail', () => {
//   it('should send an email successfully', async () => {
//     AWS.SES.prototype.sendAWSEmail.mockResolvedValue({ StatusCode: 200 });

//     const result = await sendAWSEmail({
//       to: 'test@example.com',
//       subject: 'Test Subject',
//       body: 'Test Body',
//     });

//     expect(result.StatusCode).toBe(200);  
//   });

//   it('should throw an error if sending email fails', async () => {
//     AWS.SES.prototype.sendAWSEmail.mockRejectedValue(new Error('API request failed'));

//     await expect(sendAWSEmail({
//       to: 'test@example.com',
//       subject: 'Test Subject',
//       body: 'Test Body',
//     })).rejects.toThrow('Error sending email with AWS SES: API request failed');
//   });
// });
