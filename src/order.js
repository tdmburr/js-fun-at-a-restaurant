function takeOrder(order, delivery) {
  if(delivery.length < 3) {
    return delivery.push(order)
  }
}

function refundOrder(orderNumber, delivery) {
  for(var i = 0; i < delivery.length; i++)
  if(orderNumber === delivery[i].orderNumber) {
    return delivery.splice(i, 1)
  }
}

function listItems(deliveryOrders) {
  var order = []
  for (var i = 0; i < deliveryOrders.length; i++) 
  order.push(deliveryOrders[i].item)
  return order.join(", ")
}

function searchOrder(order, food) {
  for(var i = 0; i < order.length; i++) 
    if (order[i].item === food) {
      return true
    }
      return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}