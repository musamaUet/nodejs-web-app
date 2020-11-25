const express = require("express");
const app = express();
const route = require('./routes');
const PORT = process.env.PORT || 3000;

app.use('/', route);

app.listen(PORT, () => {
    console.log(`Muhammad! App is listening on port ${PORT}`);
})

