import express, { Request, Response } from 'express';
import sendEmail from './sendEmail';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/send', async (req: Request, res: Response) => {
    const { to, subject, body } = req.body;

    if (!to || !subject || !body) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        await sendEmail(to, subject, body);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error sending email', error: error.message });
        } else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});