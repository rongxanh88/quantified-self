const Meal = require('../models/Meal');
const MealTotals = require('../models/MealTotals');
const MealsApi = require('../apis/meals-api');

const fakeMeals = [{"id":1,"name":"Breakfast","foods":[{"id":3,"name":"Chicken Burrito","calories":800},{"id":4,"name":"Grapes","calories":180},{"id":10,"name":"Cheese","calories":400}]},{"id":2,"name":"Snack","foods":[{"id":5,"name":"Blueberry Muffins","calories":450},{"id":11,"name":"Fruit Snacks","calories":120},{"id":12,"name":"Apple","calories":220}]},{"id":3,"name":"Lunch","foods":[{"id":2,"name":"Bagel Bites - Four Cheese","calories":650},{"id":8,"name":"Granola Bar","calories":200},{"id":8,"name":"Granola Bar","calories":200}]},{"id":4,"name":"Dinner","foods":[{"id":4,"name":"Grapes","calories":180},{"id":11,"name":"Fruit Snacks","calories":120},{"id":12,"name":"Apple","calories":220}]}];

const mealsCont = $('#meals .row');

const mealsHtml = () => {
  MealsApi.getMeals().then( (data) => {
    const meals = data.map( (rawMeal) => {
      meal = new Meal(rawMeal);
      mealsCont.append(meal.mealTable());
      return meal;
    });
    const mealTotals = new MealTotals({meals: meals});
    mealsCont.append(mealTotals.toHtml());
  });
}

mealsHtml();