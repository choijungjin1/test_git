const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//app.use(express.static('views'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});


router.get('/bootstrap_a', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_a.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap_b', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_b.html'));
//__dirname : It will resolve to your project folder.
});
app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))