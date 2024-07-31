const app = require('./src/app');
const { baseWebhookURL } = require('./src/config');
require('dotenv').config();

// Start the server
const port = process.env.PORT || 3000

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  console.log('A variável blobal BASE_WEBHOOK_URL não está setada... É importante verificá-la mais tarde!');
  // process.exit(1); // Terminate the application with an error code
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('http://sitedotheg.site:4343/api-docs/#/');
})
