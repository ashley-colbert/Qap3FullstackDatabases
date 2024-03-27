const dal = require("./database");


//the data access layer for the staff table - to be used in both the UI and the restfulAPI

//function to get all stall entries from the database
var getStaff = function() {
  if(DEBUG) console.log("staff.dal.getStaff()");
  return new Promise ((resolve, reject) => {
    const sql = "SELECT \"staffID\", name, \"streetAdd\", name, city, prov, phone, email FROM \"Staff\""

    dal.query(sql, [], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log("inside the Staff.dal.getStaff() success");
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

//function to get one particular entry from the database
var getStaffById = function(id) {
  if(DEBUG) console.log("staff.dal.getStaffById()");
  return new Promise ((resolve, reject) => {
    const sql = "SELECT * FROM \"Staff\" WHERE \"staffID\" = $1";

    dal.query(sql, [id], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log("inside the Staff.dal.getStaffById() success");
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

//function to add a staff member to the database
var addStaff = function(id, name, streetAdd, city, prov, phone, email) {
  if(DEBUG) console.log("staff.dal.addstaff()");
  return new Promise ((resolve, reject) => {
    const sql = "INSERT INTO public.\"Staff\"(\"staffID\", name, \"streetAdd\", city, prov, phone, email) VALUES ($1, $2, $3, $4, $5, $6, $7)";

    dal.query(sql, [id, name, streetAdd, city, prov, phone, email], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

//function to replace or 'put' an entry in the database
var putStaff = function(id, name, streetAdd, city, prov, phone, email) {
  if(DEBUG) console.log("staff.dal.putStaff()");
  return new Promise(function(resolve, reject) {
    const sql = "UPDATE public.\"Staff\" SET name=$2, \"streetAdd\"=$3, city=$4, prov=$5, phone=$6, email=$7 WHERE \"staffID\"=$1;";
    dal.query(sql, [id, name, streetAdd, city, prov, phone, email], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    });
  });
};

//function to edit or 'patch' and entry in the database
var patchStaff = function(id, name, streetAdd, city, prov, phone, email) {
  if(DEBUG) console.log("staff.dal.patchStaff()");
  return new Promise(function(resolve, reject) {
    const sql = "UPDATE public.\"Staff\" SET name=$2, \"streetAdd\"=$3, city=$4, prov=$5, phone=$6, email=$7 WHERE \"staffID\"=$1;";
    dal.query(sql, [id, name, streetAdd, city, prov, phone, email], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    });
  });
};

//function to delete an entry from the database
var deleteStaff = function(id) {
  if(DEBUG) console.log("staff.dal.deleteStaff()");
  return new Promise(function(resolve, reject) {
    const sql = "DELETE FROM public.\"Staff\" WHERE \"staffID\" = $1;";
    dal.query(sql, [id], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    });
  });
};

//exports of all functions to be used throughout the application
module.exports = {
  getStaff,
  getStaffById,
  addStaff,
  putStaff,
  patchStaff,
  deleteStaff
}