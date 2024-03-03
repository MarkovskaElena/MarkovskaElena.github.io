const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let testResults = []; // Store test results in memory (replace with a database in production)

app.use(bodyParser.json());

app.post('/submit-test', (req, res) => {
  const { testName, score } = req.body;
  testResults.push({ testName, score });
  res.sendStatus(200);
});

app.get('/get-test-results', (req, res) => {
  res.json(testResults);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
