import { ConfidentialClientApplication } from '@azure/msal-node';
import * as dotenv from 'dotenv';

dotenv.config();

const clientId = process.env.CLIENT_ID!;
const clientSecret = process.env.CLIENT_SECRET!;
const tenantId = process.env.TENANT_ID!;
const scopes = [process.env.SCOPES!];

const cca = new ConfidentialClientApplication({
  auth: {
    clientId: clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    clientSecret: clientSecret,
  },
});

export const getAccessToken = async () => {
  try {
    const response = await cca.acquireTokenByClientCredential({ scopes });
    return response?.accessToken;
  } catch (error) {
    console.error('Error acquiring token', error);
    throw error;
  }
};
