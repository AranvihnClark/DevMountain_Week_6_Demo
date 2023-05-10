const express = require(`express`);
const app = express();

// This points our express end points to the static directory of where this file is + the public directory.
// Express wil look for "index.html" and "main.js" exactly. You have to use these names.
app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log("Running on 4000"));