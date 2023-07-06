const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('frontEnd'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});