const express = require('express');

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  // const name="Bukola";
    const profileData = {
        name: 'Bukola',
        age: 45,
        profession: 'Web Developer',
        location: 'Ekiti, Nigeria'
      };
  res.render('index', {profileData});
});

// Start the server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});