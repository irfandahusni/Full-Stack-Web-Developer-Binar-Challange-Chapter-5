const express = require('express');

const app = express();
const gameRouter = require('./game.routes.js')
const loginRouter = require('./login.routes.js')
const registerRouter = require('./register.routes.js')
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/game', gameRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.get('/', (req, res) => {
  res.status(200).render('./index.ejs');
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (http://localhost:${PORT})`)
})