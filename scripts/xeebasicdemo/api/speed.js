/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var userModule = require("modules/xee/user");

try {
  
  var user = new userModule.User({username:"USER_NAME"});
  var vehicle = user.getVehicle({plateNumber:"PLATE_NUMBER"});  
  var speedStatus = vehicle.getSpeedStatus();
  return [
    ["Label", "Value"],
    ["car speed", Number((vehicle.getSpeedStatus().VehiculeSpeed[0].value * 10).toFixed(2))]
  ];
}catch(exception) {
  return exception;
}			