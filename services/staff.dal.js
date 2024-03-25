const dal = require("./database");

var getStaff = function() {
  if(DEBUG) console.log("staff.dal.getStaff()");
  return new Promise ((resolve, reject) => {
    const sql = "SELECT \"staffID\", name, \"streetAdd\", city, prov, phone, email FROM \"Staff\""

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

var getStaffById = function(staffID) {
  if(DEBUG) console.log("staff.dal.getStaffById()");
  return new Promise ((resolve, reject) => {
    const sql = "SELECT \"staffID\", name, \"streetAdd\", city, prov, phone, email FROM \"Staff\" WHERE \"staffID\" = 5";

    dal.query(sql, [staffID], (err, result) => {
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

var addStaffMember = function(name, streetAdd, city, prov, phone, email) {
  if(DEBUG) console.log("staff.dal.addStaffMember()");
  return new Promise ((resolve, reject) => {
    const sql = "INSERT INTO public.\"staffID\"(name, \"streetAdd\", city, prov, phone, email) VALUES ($1, $2, $3, $4, $5, $6)";

    dal.query(sql, [name, streetAdd, city, prov, phone, email], (err, result) => {
      if(err) {
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        if(DEBUG) console.log(`Success: new staff member ${result.rows[0].name}`);
        if(DEBUG) console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

var putStaff = function(staffID, name, streetAdd, city, prov, phone, email) {
  if(DEBUG) console.log("staff.pg.dal.putStaff()");
  return new Promise(function(resolve, reject) {
    const sql = "UPDATE public.\"Staff\" SET name=$2, \"streetAdd\"=$3, city=$4, prov=$5, phone=$6, email=$7 WHERE \"staffID\"=$1;";
    dal.query(sql, [staffID, name, streetAdd, city, prov, phone, email], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    });
  });
};

module.exports = {
  getStaff,
  getStaffById,
  addStaffMember,
  putStaff
}