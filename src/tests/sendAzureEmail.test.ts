// import axios from 'axios';
// import sendAzureEmail from '../services/azureService';

// jest.mock('axios');

// describe('sendEmail - Azure', () => {
  
//   it('should send an email successfully', async () => {
//     axios.post.mockResolvedValue({
//       status: 202,  
//       data: { message: 'Email sent successfully' },
//     });

//     const result = await sendAzureEmail({
//       to: 'test@example.com',
//       subject: 'Test Subject',
//       body: 'Test Body',
//     });

//     expect(result.status).toBe(202); 
//     expect(result.data.message).toBe('Email sent successfully');
//     expect(axios.post).toHaveBeenCalledWith(
//       'https://graph.microsoft.com/v1.0/me/sendMail',
//       expect.objectContaining({
//         message: expect.objectContaining({
//           subject: 'Test Subject',
//           body: expect.objectContaining({
//             content: 'Test Body',
//           }),
//           toRecipients: [
//             {
//               emailAddress: {
//                 address: 'test@example.com',
//               },
//             },
//           ],
//         }),
//       }),
//       expect.objectContaining({
//         headers: expect.objectContaining({
//           Authorization: expect.any(String),
//           'Content-Type': 'application/json',
//         }),
//       })
//     );
//   });

//   it('should throw an error if sending email fails', async () => {
//     // Mock the failed response from Microsoft Graph API
//     axios.post.mockRejectedValue(new Error('Request failed: Unauthorized'));

//     await expect(sendAzureEmail({
//       to: 'test@example.com',
//       subject: 'Test Subject',
//       body: 'Test Body',
//     })).rejects.toThrow('Error sending email: Request failed: Unauthorized');
//   });

//   it('should throw an error if no access token is provided', async () => {
//     jest.spyOn(require('../config/azureConfig'), 'getAccessToken').mockRejectedValue(new Error('No access token'));

//     await expect(sendEmail({
//       to: 'test@example.com',
//       subject: 'Test Subject',
//       body: 'Test Body',
//     })).rejects.toThrow('Error sending email: No access token');
//   });

//   it('should throw an error if invalid email address is provided', async () => {
//     axios.post.mockRejectedValue({
//       response: {
//         status: 400,  
//         data: {
//           error: {
//             message: 'Invalid email address',
//           },
//         },
//       },
//     });

//     await expect(sendEmail({
//       to: 'invalid-email',
//       subject: 'Test Subject',
//       body: 'Test Body',
//     })).rejects.toThrow('Error sending email: Invalid email address');
//   });
// });
