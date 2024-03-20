const dal = require("./database");

var getOrders = function() {
  if(DEBUG) console.log("Orders.dal.getOrders()");
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM Orders";
    dal.query(sql, [], (err, result) => {
      if (err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log("inside the Orders.dal.getOrders() success");
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
};

module.exports = {
    getOrders
}