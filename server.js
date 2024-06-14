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



app.get('/jodi', (req, res) => {
    const jodiData = `
        <style>
            .modal-content {
                max-width: 80%;
                max-height: 80%;
                overflow: auto;
            }
            .table-container {
                width: 100%;
                max-height: calc(80vh - 40px); /* Adjusted for header row height */
                overflow: auto;
            }

            /* Apply styles to the table */
            table {
                border-collapse: collapse;
                width: 100%;
            }
            th, td {
                padding: 8px;
                text-align: center;
            }
            th {
                background-color: #4CAF50; /* Green */
                color: white;
            }
            tr:nth-child(even) {
                background-color: #f2f2f2; /* Light gray */
            }
            tr:hover {
                background-color: #ddd; /* Darker gray */
            }
        </style>
        <h4>RAKHI MORNING MATKA JODI 2019-2024</h4>
        <div class="table-container">
            <table border="1" style="width: 100%;">
                <thead>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>84</td>
                        <td>12</td>
                        <td>30</td>
                        <td>44</td>
                        <td>35</td>
                        <td>64</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>50</td>
                        <td>63</td>
                        <td>38</td>
                        <td>47</td>
                        <td>99</td>
                        <td>65</td>
                    </tr>
                    <tr>
                        <td>84</td>
                        <td>12</td>
                        <td>30</td>
                        <td>44</td>
                        <td>35</td>
                        <td>64</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>50</td>
                        <td>63</td>
                        <td>38</td>
                        <td>47</td>
                        <td>99</td>
                        <td>65</td>
                    </tr>
                    <tr>
                        <td>84</td>
                        <td>12</td>
                        <td>30</td>
                        <td>44</td>
                        <td>35</td>
                        <td>64</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>50</td>
                        <td>63</td>
                        <td>38</td>
                        <td>47</td>
                        <td>99</td>
                        <td>65</td>
                    </tr>
                    <tr>
                        <td>84</td>
                        <td>12</td>
                        <td>30</td>
                        <td>44</td>
                        <td>35</td>
                        <td>64</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>50</td>
                        <td>63</td>
                        <td>38</td>
                        <td>47</td>
                        <td>99</td>
                        <td>65</td>
                    </tr>
                    <tr>
                        <td>84</td>
                        <td>12</td>
                        <td>30</td>
                        <td>44</td>
                        <td>35</td>
                        <td>64</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>50</td>
                        <td>63</td>
                        <td>38</td>
                        <td>47</td>
                        <td>99</td>
                        <td>65</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    res.send(jodiData);
});

// Route for Panel button
app.get('/panel', (req, res) => {
    // Replace this with actual data fetching logic
const panelData = `
<style>
    /* Apply styles to the modal content and table container */
    .modal-content {
        max-width: 80%;
        max-height: 80%;
        overflow: auto;
    }
    .table-container {
        width: 100%;
        max-height: calc(80vh - 40px); /* Adjusted for header row height */
        overflow: auto;
    }
    /* Apply styles to the table */
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #4CAF50; /* Green */
        color: white;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2; /* Light gray */
    }
    tr:hover {
        background-color: #ddd; /* Darker gray */
    }
</style>
<h4>RAKHI MORNING MATKA PANNEL 2019-2024</h4>
<div class="table-container">
    <table border="1" style="width: 100%;">
        <thead>
            <tr>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
            </tr>
            <tr>
            <td>84</td>
            <td>12</td>
            <td>30</td>
            <td>44</td>
            <td>35</td>
            <td>64</td>
            <td>95</td>
        </tr>
        <tr>
            <td>12</td>
            <td>50</td>
            <td>63</td>
            <td>38</td>
            <td>47</td>
            <td>99</td>
            <td>65</td>
        </tr>
        <tr>
            <td>84</td>
            <td>12</td>
            <td>30</td>
            <td>44</td>
            <td>35</td>
            <td>64</td>
            <td>95</td>
        </tr>
        <tr>
            <td>12</td>
            <td>50</td>
            <td>63</td>
            <td>38</td>
            <td>47</td>
            <td>99</td>
            <td>65</td>
        </thead>
        <tbody>
            <tr>
                <td>84</td>
                <td>12</td>
                <td>30</td>
                <td>44</td>
                <td>35</td>
                <td>64</td>
                <td>95</td>
            </tr>
            <!-- Add more rows as needed -->
        </tbody>
    </table>
</div>
`;

    res.send(panelData );
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
