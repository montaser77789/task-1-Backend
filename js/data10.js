const fs = require("fs");
///////////CREATE
const addPerson = (id, fname, lname,age,city) => {
  const allData = loadData();
  const duplactedId = allData.filter((user) => {
    return user.id === id;
  });
  if (duplactedId.length === 0) {
    allData.push({
      id: id,
      firstname: fname,
      lastname: lname,
      age:age,
      city:city
    });
    saveAllData(allData);
  } else {
    console.log("error");
  }
};
///////////////////////////// DELETE
const deletUser = (id) => {
  const dataObj = loadData();
  const data = dataObj.filter((user) => user.id !== id);
  saveAllData(data);
};

///////////////////////////////////////////////READ
const readDAta = (id) => {
  const dataObj = loadData();
  const data = dataObj.find((user) => user.id === id);
  if(data){
    console.log(data);
  }else{
    console.log("error");
  }
};
///////////////////////////LIST
const getAllUser = () => {
  const allUser = loadData();
  allUser.forEach((user) => {
    console.log( `${user.firstname }  ${user.lastname}`) ;
  });
};

const loadData = () => {
  try {
    const Datajson = fs.readFileSync("data10.json").toString();
    return JSON.parse(Datajson);
  } catch {
    return [];
  }
};
const saveAllData = (AllData) => {
  const saveData = JSON.stringify(AllData);
  fs.writeFileSync("data10.json", saveData);
};

module.exports = {
  addPerson,
  deletUser,
  readDAta,
  getAllUser,
};
