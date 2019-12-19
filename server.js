const express = require('express');

const app = express();

app.get('/api/photos', (req, res) => {
    const photos = [
        {id:1, title: 'Photo one', description: 'Photo one description'},
        {id:2, title: 'Photo two', description: 'Photo two description'},
        {id:3, title: 'Photo three', description: 'Photo three description'}
    ];

    res.json(photos);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));