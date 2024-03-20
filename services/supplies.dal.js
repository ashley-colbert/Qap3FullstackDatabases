const dal = require("./database");

var getSupplies = function() {
  if(DEBUG) console.log("staff.dal.getSupplies()");
  return new Promise ((resolve, reject) => {
    const sql = "SELECT itemID, name, quantity, reorderPoint, department FROM Supplies"

    dal.query(sql, [], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log("inside the Supplies.dal.getSupplies() success");
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

var getSupplyById = function(id) {
  if(DEBUG) console.log("staff.dal.getSupplyById()");
  return new Promise ((resolve, reject) => {
    const sql = "SELECT itemID, name, quantity, reorderPoint, department FROM Supplies WHERE itemID = $1";

    dal.query(sql, [id], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log("inside the Supplu.dal.getSupplyById() success");
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

var addSupply = function(name, quantity, reorderPoint, department) {
  if(DEBUG) console.log("staff.dal.addSupply()");
  return new Promise ((resolve, reject) => {
    const sql = "INSERT INTO public.itemID(name, quantity, reorderPoint, department) VALUES ($1, $2, $3, $4)";

    dal.query(sql, [name, quantity, reorderPoint, department], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log(`Success: new supply added ${result.rows[0].name}`);
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}


module.exports = {
  getSupplies,
  getSupplyById,
  addSupply
}