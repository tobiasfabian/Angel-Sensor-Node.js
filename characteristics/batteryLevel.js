/*
Name: Battery Level
Type: org.bluetooth.characteristic.battery_level
Assigned Number: 0x2A19

Abstract:
The current charge level of a battery. 100% represents fully charged while 0% represents fully discharged.
*/



function batteryLevel(characteristic) {

  characteristic.read(function(error, data) {
    console.log('Battery Level: ', data.readUInt8(0) + '%');
  });

  characteristic.on('read', function(data, isNotification) {
    if (isNotification) {
      console.log('Battery Level: ', data.readUInt8(0) + '%');
    }
  });
  characteristic.notify(true, function(error) {
    console.log('Battery Level notification on');
  });

}



module.exports = batteryLevel;
