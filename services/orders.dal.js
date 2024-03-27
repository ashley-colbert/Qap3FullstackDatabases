const dal = require("./database");

//the data access layer for the orders table - all functions are used in the UI and the restfulAPI

//function to get all orders from the database
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

//functions to get one particular order from the database
var getOrderByOrderId = function(id) {
  if(DEBUG) console.log("orders.dal.getOrderByOrderId()");
  return new Promise(function(resolve, reject) {
    const sql = "SELECT  \"orderID\" AS id,  \"orderDate\", \"quantityOrdered\", \"staffID\", \"itemID\" FROM \"Orders\" WHERE \"orderID\" = $1";
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


//function to add a new entry into the database
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

//function to replace or 'put' an order in the database
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

//function to edit of 'patch' an order in the database
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

//function to delete an order in the database
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

//exports of all functions to be used in the application
module.exports = {
    getOrders,
    getOrderByOrderId,
    addOrder,
    putOrder,
    patchOrder,
    deleteOrder
}