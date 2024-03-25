const dal = require("./database");

var getOrders = function() {
  if(DEBUG) console.log("Orders.dal.getOrders()");
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM \"Orders\"";
    dal.query(sql, [], (err, result) => {
      if (err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log("inside the orders.dal.getOrders() success");
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
};

var getOrderByOrderId = function(id) {
  if(DEBUG) console.log("orders.dal.getOrderByOrderId()");
  return new Promise(function(resolve, reject) {
    const sql = "SELECT \"orderID\" AS id, \"orderDate\", \"quantityOrdered\", \"staffID\", \"itemID\" FROM \"Orders\" WHERE \"orderID\" = $1";
    dal.query(sql, [id], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

var addOrder = function(id, orderDate, quantityOrdered, staffID, itemID) {
  if(DEBUG) console.log("orders.dal.addOrder()");
  return new Promise(function(resolve, reject) {
    const sql = "INSERT INTO public.\"Orders\"(\"orderID\", \"orderDate\", \"quantityOrdered\", \"staffID\", \"itemID\") \
        VALUES ($1, $2, $3, $4, $5);";
    dal.query(sql, [id, orderDate, quantityOrdered, staffID, itemID], (err, result) => {
      if (err) {
          if(DEBUG) console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
    });
  });
};

var putOrder = function(id, orderDate, quantityOrdered, staffID, itemID) {
  if(DEBUG) console.log("orders.dal.putOrder()");
  return new Promise(function(resolve, reject) {
    const sql = "UPDATE public.\"Orders\" SET \"orderDate\"=$2, \"quantityOrdered\"=$3, \"staffID\"=$4, \"itemID\"=$5 WHERE \"orderID\" =$1;";
    dal.query(sql, [id, orderDate, quantityOrdered, staffID, itemID], (err, result) => {
      if (err) {
          reject(err);
          console.log("reject")
        } else {
          resolve(result.rowCount);
          console.log("resolved");
        }
    });
  });
};

var patchOrder = function(id, orderDate, quantityOrdered, staffID, itemID) {
  if(DEBUG) console.log("orders.dal.patchOrder()");
  return new Promise(function(resolve, reject) {
    const sql = "UPDATE public.\"Orders\" SET  \"orderDate\"=$2, \"quantityOrdered\"=$3, \"staffID\"=$4, \"itemID\"=$5 WHERE \"orderID\" =$1;";
    dal.query(sql, [id, orderDate, quantityOrdered, staffID, itemID], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
          console.log("resolved");
        }
    });
  });
};

var deleteOrder = function(id) {
  if(DEBUG) console.log("orders.dal.deleteOrder()");
  return new Promise(function(resolve, reject) {
    const sql = "DELETE FROM public.\"Orders\" WHERE \"orderID\" = $1;";
    dal.query(sql, [id], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    });
  });
};

module.exports = {
    getOrders,
    getOrderByOrderId,
    addOrder,
    putOrder,
    patchOrder,
    deleteOrder
}