import express from 'express';
import route from './route';

const app = express()
app.get('/', (req, res) => res.send("Hello World"))
app.use('/api', route)
app.listen(3000, () => console.log(`Example app listening on port 3000`))