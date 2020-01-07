const Router = require('express');
const router = Router();
const cors = require('cors');
const _ = require('underscore');

router.use(cors())

const restaurantsList = require('../data2.json')

router.get('/', (req, res) => {
    res.json(restaurantsList);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    _.each(restaurantsList, (restaurant, i) => {
        if (restaurant.id == id) {
            res.json(restaurant);
        }
    });
})

router.get('/stars/:searchValue', (req, res) => {
    const searchValue = parseInt(req.params.searchValue);

    const restaurantsFilteredByStars = _.map(restaurantsList, (restaurant) => {
        if (restaurant.stars === searchValue) {
            return restaurant;
        }
    }).filter(restaurant => restaurant != null);

    res.json(restaurantsFilteredByStars);
})

router.get('/name/:searchName', (req, res) => {

    const searchName = req.params.searchName;
    const restaurantsFilteredByName = _.map(restaurantsList, (restaurant) => {

        if (restaurant.name.toLowerCase().includes(searchName.toLowerCase())) {
            return restaurant;
        }

    }).filter(restaurant => restaurant != null);

    res.json(restaurantsFilteredByName);
})

router.post('/', (req, res) => {
    const { name, stars, price, image } = req.body

    if (name && stars && price && image) {

        const id = restaurantsList.length + 1;
        const newrestaurant = { ...req.body, id };
        console.log(newrestaurant);
        res.send('saved');
        restaurantsList.push(newrestaurant);
        res.json(restaurantsList);
    } else {
        res.send('wrong request');
    }

})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, stars, price, image } = req.body

    if (name && stars && price && image) {

        _.each(restaurantsList, (restaurant, i) => {
            if (restaurant.id == id) {
                restaurant.name = name;
                restaurant.stars = stars;
                restaurant.price = price;
                price.image = image;
            }
        });
        res.json(restaurantsList);
    } else {
        res.status(500).send('wrong request');
    }
})

router.delete('/:restaurantId', (req, res) => {

    const id = req.params.restaurantId;

    console.log(id);

    /* _.each(restaurantsList, (restaurant, i) => {

        if (restaurant.id === id) {

            restaurantsList.splice(i, 1)
        }
    }); */

    restaurantsList.findById(id, (err, restaurant) => {
        if (err) res.status(500).send('Hubo un error');

        restaurant.remove(err => {
            if (err) res.status(500).send('Hubo un error');
            res.status(200).send('El restaurant ha sido eliminado')
        })
    })

    res.send(restaurantsList);
});

module.exports = router;