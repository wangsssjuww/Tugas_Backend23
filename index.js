const express = require('express')
const app = express();
const port = 5000

app.get('/', (req,res) => {
    res.send('Hai Duniaa!!')
})

app.put('/', (req, res) => {
    res.send('Put Data')
})

app.get('/siswa', (req,res) => {
    res.json(siswa)
});

app.get('/get-siswa-by-nis', (req, res) => {
    const nis = req.query.nis;

    res.send(`siswa dengan nis : ${nis} ditemumkan`)
})

app.get('/siswa/:nis', (req, res) => {
    const nis = req.params.nis;

    res.send(`siswa berprestasi dengan ${nis} ditemnukan`)
});

app.get('/siswa/:nis/:semester', (req, res) => {
    const nis = req.params.nis;
    const semester = req.params.semester;

    res.send(`nilai siswa dengan nim : ${nis} semester ${semester} ditemukan`)
})

app.post('/', (req,res) => {
    res.send('Post Data')
})

app.delete('/', (req,res) => {
    res.send('Hapus Data!')
})

app.get('/:id', (req,res) => {
    const id = req.params.id
    res.send(`Get-Home id - ${id}`)
})

app.listen(port,() => {
    console.log(`Server Berjalan pada port ${port}`);
})