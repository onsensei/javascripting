// Remember:
// Good modular function
// No Extra variable
// define function before using
// Output should be an array - should be an array
// name of the function should express the intent of the function

var restaurants = [
  {
    name: 'Audrey',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Company',
    place: 'central',
    cost: 1500
  },
  {
    name: 'Jone Salad',
    place: 'esplanade',
    cost: 500
  },
  {
    name: 'Swesens',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Hut',
    place: 'central',
    cost: 1500
  }
];

var acceptableCost = 1500;

function isRestaurantsCostLessThanAcceptableCost(restaurantCost, acceptableCost)
{
    return restaurantCost < acceptableCost;
}

var filteredRestaurants = restaurants.filter(function cheapRestaurant (restaurant) {
    return isRestaurantsCostLessThanAcceptableCost(restaurant.cost, acceptableCost);
});

console.log(filteredRestaurants);
