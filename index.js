const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// home page (serve HTML file)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// version endpoint (kept from your original code)
app.get('/version', (req, res) => {
  res.send('version: v1');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

