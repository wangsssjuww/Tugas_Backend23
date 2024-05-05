const connection = require('../kos/koss')

module.exports = {
    create: (req,res) => {
        const {kodekamar, unitkamar, jumlahunit, type} = req.body
    
        connection.query("INSERT INTO unitkos values (?,?,?,?) ", [kodekamar, unitkamar, jumlahunit, type ], (err) => {
            if (err) {
                console.log("error :", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat insert data"
                });
            }
            else
                res.send(req.body)
        })
    };
}