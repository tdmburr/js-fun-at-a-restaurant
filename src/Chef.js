class Chef {
  constructor(name, restaurant) {
    this.name = name
    this.restaurant = restaurant
    
  }
  greetCustomer(name, boolean) {
    if (boolean === true) {
      return `Good morning, ${name}!`
    }
      return `Hello, ${name}!`
  }

  checkForFood(food) {
    if (food.type === "lunch" || food.name === "Kouign Amann") {
      return `Sorry, we aren't serving ${food.name} today.`
    } 
      return `Yes, we're serving ${food.name} today!`
    
  }
}

module.exports = Chef;