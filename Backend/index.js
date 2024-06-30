import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 6006;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    // console.log('[TEST]!');
    res.send('Hello From Homepage.');
});

app.listen(PORT, () => console.log(`Server Running on port: http://locahost:${PORT}`));