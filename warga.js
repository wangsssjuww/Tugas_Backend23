const express = require ('express'); 
const routerWrg = express.Router();
const connection = require('../kos/koss')
const connection = require('../controllers/kos')

routerWrg.get('/', (req, res) => {
    const qstring = "SELECT * FROM unitkos";
    connection.query(qstring, (err,data) => {
        if (err) {
            console.log("error:", err);
            res.status(500).send({
                message : err.message || "Terjadi kesalahan saat get data"
            });
        }
        else res.send(data)
    })
});


routerWrg.post('/', routerWrg.create)

routerWrg.get('/:kodekamar', (req, res) => {
    const qstring = `SELECT * FROM unitkos WHERE kodekamar = '${req.params.kodekamar}'`;
    connection.query(qstring, (err,data) => {
        if (err) {
            console.log("error:", err);
            res.status(500).send({
                message : err.message || "Terjadi kesalahan saat get data"
            });
        }
        else res.send(data)
    })
});

routerWrg.put('/:kodekamar', (req,res) => {
    const kodekamar = req.params.kodekamar;
    const Kos = req.body;
    const qstring = `UPDATE unitkos
                    SET unitkamar = '${Kos.unitkamar}', jumlahunit = '${Kos.jumlahunit}', type = '${Kos.type}'
                    WHERE kodekamar = '${kodekamar}'`
    connection.query(qstring, (err,data) => {
        if(err) {
            res.status(500).send({
                message: "Error updating unitkos with kodekamar" + kodekamar
            });
        }
        else if(data.affectedRows ==0){
            res.status(404),send({
                message: `Not found unitkos with kodekamar ${kodekamar}.`
            });
        }
        else {
            console.log("update unitkos: ", {kodekamar: kodekamar, ...Kos});
            res.send({kodekamar: kodekamar, ...Kos});
        }
    })
})

routerWrg.delete('/:kodekamar', (req,res) => {
    const kodekamar = req.params.kodekamar
    const qstring = `DELETE FROM Kostakaan WHERE kodekamar = '${kodekamar}'`
    connection.query(qstring, (err, data) => {
        if(err) {
            res.status(500).send({
                message: "Error deleting Kostakaan with kodekamar " + kodekamar
            });
        }
        else if (data.affectedRows == 0){
            res.status(404).send({
                message: `Not found Kostakaan with kodekamar ${kodekamar}.`
            });
        }
        else res.send(`Kostakaan dengan kodekamar = ${kodekamar} telah terhapus`)
    });
})


routerWrg.get('/', (req, res) => {
    res.send('server page')
});

routerWrg.listen(port, () => {
    console.log(`Server berjalan pada localhost:${port}`)
});

module.exports= routerWrg