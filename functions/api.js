const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const cors = require('cors');
const fs = require("fs");

// Import Prismic client
const { createClient } = require('@prismicio/client');
app.use(cors());

// Prismic API endpoint URL
const PRISMIC_API_ENDPOINT = 'https://rmp-global.cdn.prismic.io/api/v2';

// Initialize Prismic client with access token
const client = createClient(PRISMIC_API_ENDPOINT, {
  accessToken: 'MC5aUEdWeXhBQUFDRUEwZHhU.77-977-977-9Ik9AMO-_ve-_ve-_ve-_ve-_ve-_ve-_vTc777-9W--_ve-_ve-_ve-_ve-_ve-_vRZ8Ku-_vUYRZe-_vQ'
});

// Serve static files from the ./build directory
app.use(express.static(path.resolve(__dirname, './build')));

// Route for the homepage
app.get("/", (req, res) => {
    const filepath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        // Replace the placeholder __TITLE__ with the default title for the homepage
        data = data.replace(/__TITLE__/g, "RMP Global");
        console.log("hey");
        res.send(data);
    });
});

// Route for individual blog pages
app.get("/blogs/:slug", async (req, res) => {
    const { slug } = req.params;

    try {
        // Fetch data from the Prismic API using the client
        const response = await client.getByUID('blog', slug);

        // Assuming the data you need is in response.data
        const blogData = response.data;

        // Construct the HTML content for meta tags
        const metaTags = `
            <meta name="og:title" content="${blogData.blog_title[0].text}">
            <meta name="og:description" content="${blogData.blog_description[0].text}">
            <meta name="og:image" content="${blogData.blog_image.url}">
        `;

        // Read the base HTML template
        const filepath = path.resolve(__dirname, "./build", "index.html");
        fs.readFile(filepath, "utf8", (err, data) => {
            if (err) {
                return console.log(err);
            }

            // Replace placeholder with dynamic title
            data = data.replace(/__TITLE__/g, blogData.blog_title[0].text);

            // Replace placeholder with dynamic meta tags
            data = data.replace(/<meta name="og:title" content=".*?">/, metaTags);

            res.setHeader('Cache-Control', 'no-store');

            res.send(data);
        });

    } catch (error) {
        console.error('Error fetching blog data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("*", (req, res) => {
    const filepath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        // Replace the placeholder __TITLE__ with the default title for other routes
        data = data.replace(/__TITLE__/g, "RMP Global");

        res.send(data);
    });
});

// Export the Express app instance as a serverless function
module.exports = app;
