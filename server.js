const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app running at PORT=${PORT}`);
});
