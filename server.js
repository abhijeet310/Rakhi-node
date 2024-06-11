const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Function to read data from JSON file
function readData(callback) {
    fs.readFile('data.json', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        const numbers = JSON.parse(data);
        callback(null, numbers);
    });
}

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML page with dynamic content
app.get('/', (req, res) => {
    readData((err, numbers) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }

        // Serve HTML page with numbers
        const htmlPath = path.join(__dirname, 'index.html');
        fs.readFile(htmlPath, 'utf8', (err, html) => {
            if (err) {
                res.status(404).send('File Not Found');
                return;
            }

            // Replace placeholders with actual numbers
            html = html.replace(/{{morningNumber}}/g, numbers.morning); // Replace all occurrences
            html = html.replace(/{{nightNumber}}/g, numbers.night); // Replace all occurrences
            html = html.replace('{{luckyNumber}}', numbers.lucky);

            res.setHeader('Content-Type', 'text/html');
            res.send(html);
        });
    });
});

// Route for Jodi button
app.get('/jodi', (req, res) => {
    // Replace this with actual data fetching logic
    const jodiData = "Jodi Chart Data"; // Placeholder data
    res.json({ data: jodiData });
});

// Route for Panel button
app.get('/panel', (req, res) => {
    // Replace this with actual data fetching logic
    const panelData = "Panel Chart Data"; // Placeholder data
    res.json({ data: panelData });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
