const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam ="";
  
  if (!members || !Array.isArray(members)) { 
    return false; 
  }
  
  for (let i = 0; i < members.length; i++) {
   if (typeof(members[i]) === "string") {
      nameTeam += members[i].trim().substring(0,1).toUpperCase();
    } else {
      nameTeam = nameTeam;
    };
  };
  if (nameTeam === "") {
    return false;
  } else return nameTeam.split('').sort().join('');
};
