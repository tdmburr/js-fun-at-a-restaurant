function createRestaurant(name) {
  return {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []}
  }

}

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
    restaurant.menus[item.type].push(item)
  }
}

function removeMenuItem(restaurant, food, item) {
  if (item === "breakfast" || "lunch") {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (food === restaurant.menus.breakfast[i].name) {
        restaurant.menus.breakfast.splice(i, 1)
        return `No one is eating our ${food} - it has been removed from the ${item} menu!`
      }
    }
  }
  if (item === "dinner") {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (food === restaurant.menus.dinner[i].name) {
        restaurant.menus.dinner.splice(i, 1)
        return `No one is eating our ${food} - it has been removed from the ${item} menu!`
      }
    }
  }
  return `Sorry, we don't sell ${food}, try adding a new recipe!`
}
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}