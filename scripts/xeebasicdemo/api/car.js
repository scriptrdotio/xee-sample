/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var userModule = require("modules/xee/user");

try {
  
  var user = new userModule.User({username:"USER_NAME"});
  var vehicle = user.getVehicle({plateNumber:"PLATE_NUMBER"});  
  delete vehicle.client; // remove client information from the vehicle object before sending it
  return vehicle;
}catch(exception) {
  return exception;
}			