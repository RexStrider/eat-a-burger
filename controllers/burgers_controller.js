const express = require(`express`);
const router = express.Router();
const burger = require(`../models/burger`);

router.use( express.json() );

router.get('/', (req, res) => {
    burger.all(result => {
        res.json(result);
    });
});

router.post('/create', (req, res) => {
    burger.create(["burger_name", "devoured"],
    [req.body.burger_name, false],
    result => {
        res.json({message: `created ${result.affectedRows} row(s)`})
    });
});

router.put('/update/:id', (req, res) => {
    console.log("getting in the update function");

    burger.update({devoured: true},
    `id=${req.params.id}`,
    result => {
        res.json({message: `updated ${result.affectedRows} row(s)`});
    });
});

module.exports = router;