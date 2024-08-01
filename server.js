const app = require('./src/app');
const https = require('https');
const fs = require('fs');
const { baseWebhookURL } = require('./src/config');
require('dotenv').config();

const privateKey = fs.readFileSync('./certificados/private.key', 'utf8');
const certificate = fs.readFileSync('./certificados/certificate.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Start the server
const port = process.env.PORT || 3000

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  console.log('A variável blobal BASE_WEBHOOK_URL não está setada... É importante verificá-la mais tarde!');
  // process.exit(1); // Terminate the application with an error code
}

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('https://sitedotheg.site:4343/api-docs/');
});