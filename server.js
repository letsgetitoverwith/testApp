const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: 'https://placeholder.netlify.app', // Use a placeholder URL for now
  methods: 'POST',
  optionsSuccessStatus: 200,
};


app.use(cors(corsOptions));
app.use(express.json());
console.log("updated");

app.post('/submit', async (req, res) => {
  const formData = req.body;
  const fileName = 'form-data.json';
  try {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    await fs.appendFile(fileName, `Current Time: ${hours}:${minutes}:${seconds}\n${JSON.stringify(formData)}\n`);
    res.status(200).send('Form data saved successfully.');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error saving form data.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on https://74.110.105.96:${PORT}`);
});
