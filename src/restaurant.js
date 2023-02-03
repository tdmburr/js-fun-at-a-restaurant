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

function removeMenuItem(restaurant, food, itemType) {
  for (var i = 0; i < restaurant.menus[itemType].length; i++) {
    if (food === restaurant.menus[itemType][i].name) {
        restaurant.menus[itemType].splice(i, 1)
        return `No one is eating our ${food} - it has been removed from the ${itemType} menu!`
      }
    }
  return `Sorry, we don't sell ${food}, try adding a new recipe!`
}
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}