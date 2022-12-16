const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const PORT = 3000;

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours,
        },
    });
});

app.get('/api/v1/tours/:id', (req, res) => {
    const id = req.params.id * 1;

    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid ID',
        });
    }

    const tour = tours.find((el) => el.id === id);
    res.status(200).json({
        status: 'success',
        data: {
            tour,
        },
    });
});

app.post('/api/v1/tours', (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err) => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour,
                },
            });
        }
    );
});

app.patch('/api/v1/:id', (req, res) => {
    if (req.params.id * 1 > tours.lenght) {
        res.status(404).json({
            status: 'fail',
            message: 'invalid ID',
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<tour updated!>',
        },
    });
});
app.delete(
    ('/api/v1/tours/:id',
    (req, res) => {
        if (req.params.id * 1 > tours.lenght) {
            res.status(404).json({
                status: 'fail',
                message: 'invalid ID',
            });
        }
        res.status(204).json({
            status: 'success',
            data: null,
        });
    })
);

app.listen(PORT, () => {
    console.log(`app running at PORT=${PORT}`);
});
