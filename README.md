# Email service
Email sending microservice using the Azure MSGraph API and Node.js

Send endpoint:

**POST**
{URL}/send

Example body:
```{
  "to": "recipient@example.com",
  "subject": "Hello from Graph API",
  "body": "This is a test email sent using Microsoft Graph API."
}```
