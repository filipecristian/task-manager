const app = require('./src/app');

const port = 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
    console.log(`Listening server on http://${hostname}:${port}`);
});
