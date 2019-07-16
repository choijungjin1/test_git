const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.static('public'))


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

router.get('/b_utilities', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_utilities.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_utilities02', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_utilities02.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_grid.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_grid02', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_grid02.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_grid03', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_grid03.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_grid04', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_grid04.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_grid05', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_grid05.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_grid06', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_grid06.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_gridproject01', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_gridproject01.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/b_gridproject01', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/b_gridproject01.html'));
//__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))