function nameMenuItem(name) {
 console.log(name) 
 return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(food, ingredients) {  
  if (ingredients.includes(food)) {
    return ingredients
  } else {
    return ingredients.push(food)
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * .9
}

function createRecipe(title, ingredients, menuItemType) {
  var menuObject = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  } 
  return menuObject
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


