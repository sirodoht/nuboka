const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<pre>' + JSON.stringify(req.headers, null, 4) + '</pre>');
});

app.listen(port, () => console.log(`nuboka listening on port ${port}!`));
