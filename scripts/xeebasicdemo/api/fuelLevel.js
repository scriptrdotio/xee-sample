/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var userModule = require("modules/xee/user");

try {
  
  var user = new userModule.User({username:"USER_NAME"});
  var vehicle = user.getVehicle({plateNumber:"PLATE_NUMBER"});  
  return [
  	  ["Label", "Value"],
      ["fuellevel", Number(vehicle.getFuelLevel().value.toFixed(2))],
    ];
}catch(exception) {
  return exception;
}			