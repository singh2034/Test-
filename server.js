const express = require("express");
const app = express();
const port = 3000;

// GET /api/v3/app/events
app.get ('/api/v3/app/events', (req, res) => {
    const eventId = req.query.id;
    if(eventId) {
        //  Logic to retrieve a specific event by ID
        res.send(`Get event by ID: ${eventId}`);
    } else {
        const type = req.query.type;
        if (type === 'latest') {
            const limit = req.query.limit || 5;
            const page = req.query.page || 1;
            // Logic to retrieve latest events with pagination
            res.send(`Get latest events: limit=${limit}, page=${page}`);
        } else {
            // Handle other cases
            res.status(400).send('Invalid request');
        }
    }
});

// POST /api/v3/app/events
app.post(`/api/v3/app/events`, (req, res) => {
    // Logic to create a new event using the request payload
    res.send(`Create a new event`); 
});

// PUT /api/v3/app/events/:id
app.put(`/api/v3/app/events/:id`, (req, res) => {
    const eventId = req.params.id;
    // Logic to update the event with the given ID using the request payload 
    res.send(`Update event: ${eventId}`);
});

// DELETE /api/v3/app/events/:id
app.delete(`/api/v3/app/events/:id`, (req, res) => {
    const eventId = req.params.id;
    // Logic to delete the event with the given ID
    res.send (`Delete event: ${eventId}`);
});

// Start the server
app.listen(port, () => {
    console.log('server listening on port ${port}');
});