import azureEmailController from '../controllers/azureController';

export default async function (context: any, req: any): Promise<void> {
    if (req.method === 'POST') {
        try {
            await azureEmailController(context, req);
            context.res = {
                status: 200,
                body: 'Email sent successfully via Azure.'
            };
        } catch (error: any) {
            context.res = {
                status: 500,
                body: `Error: ${error.message}`
            };
        }
    } else {
        context.res = {
            status: 405,
            body: 'Method Not Allowed'
        };
    }
}
