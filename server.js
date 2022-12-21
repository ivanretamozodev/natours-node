const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
    path: './config.env',
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app running at PORT=${PORT}`);
});
