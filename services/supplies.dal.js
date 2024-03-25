const dal = require("./database");

var getSupplies = function() {
  if(DEBUG) console.log("supplies.dal.getSupplies()");
  return new Promise ((resolve, reject) => {
    const sql = "SELECT \"itemID\", name, quantity, \"reorderPoint\", department FROM \"Supplies\""

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

var getItemById = function(id) {
  if(DEBUG) console.log("staff.dal.getItemById()");
  return new Promise ((resolve, reject) => {
    const sql = "SELECT \"itemID\", name, quantity, \"reorderPoint\", department FROM \"Supplies\" WHERE \"itemID\" = $1";

    dal.query(sql, [id], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log("inside the Supply.dal.getSupplyById() success");
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

var addItem = function(id, name, quantity, reorderPoint, department) {
  if(DEBUG) console.log("supplies.dal.addItem()");
  return new Promise ((resolve, reject) => {
    const sql = "INSERT INTO public.\"Supplies\"(\"itemID\", name, quantity, \"reorderPoint\", department) VALUES ($1, $2, $3, $4, $5)";

    dal.query(sql, [id, name, quantity, reorderPoint, department], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        // if(DEBUG) console.log(`Success: new supply added ${result.rows[0].name}`);
        // if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

var putItem = function(id, name, quantity, reorderPoint, department) {
  if(DEBUG) console.log("supplies.dal.putItem()");
  return new Promise(function(resolve, reject) {
    const sql = "UPDATE public.\"Supplies\" SET name=$2, quantity=$3, \"reorderPoint\"=$4, department=$5 WHERE \"itemID\"=$1;";
    dal.query(sql, [id, name, quantity, reorderPoint, department], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    });
  });
};

var patchItem = function(id, name, quantity, reorderPoint, department) {
  if(DEBUG) console.log("supplies.dal.patchItem()");
  return new Promise(function(resolve, reject) {
    const sql = "UPDATE public.\"Supplies\" SET name=$2, quantity=$3, \"reorderPoint\"=$4, department=$5 WHERE \"itemID\"=$1;";
    dal.query(sql, [id, name, quantity, reorderPoint, department], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    });
  });
};

var deleteItem = function(id) {
  if(DEBUG) console.log("supplies.dal.deleteItem()");
  return new Promise(function(resolve, reject) {
    const sql = "DELETE FROM public.\"Supplies\" WHERE \"itemID\" = $1;";
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
  getSupplies,
  getItemById,
  addItem,
  putItem,
  patchItem,
  deleteItem
}