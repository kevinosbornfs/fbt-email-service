# Email Services

This repository provides email sending services. Currently it supports the following providers to send emails through their respective APIs
- AWS SES
- Azure

## Available endpoints

POST /email/azure/send

Example request body:
```
{  
  to: "recipient@example.com",
  subject: "Test Email",
  body: "This is a test email from Azure."
}
```

POST /email/aws/send
```
{  
  to: "recipient@example.com",
  subject: "Test Email",
  body: "This is a test email from AWS SES."
}
```

## Environment Variables
- SOURCE_EMAIL

### AWS SES
- AWS_REGION
- AWS_ACCESS_KEY
- AWS_SECRET_ACCESS_KEY

### Azure
- AZURE_CLIENT_ID
- AZURE_CLIENT_SECRET
- AZURE_TENANT_ID

## Error Handling
Both services handle common error scenarios:
- Invalid email addresses
- Missing or invalid access tokens
- AWS SES API errors
