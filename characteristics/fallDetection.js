/*
FALL DETECTION CHARACTERISTIC

Characteristic UUID: 72f442a7-6ecd-4851-8858-403f0a7cab73

This characteristic is used to announce fall detection. As soon as fall is detected, the Fall Detection Flag is set and the indication procedure begins. This characterstic is then indicated to the client every second repeatedly until the Acknowledge Fall Detection op code is received via the Activity Monitoring Control Point.

http://angelsensor.com/protocols/seraphim-sense/activity-monitoring-service/
*/
function fallDetection(characteristic) {

  characteristic.read(function(error, data) {
    console.log('Fall detection ', data.readUInt8(0));
    console.log('Fall detection seconds ago', data.readUInt8(1));
  });

  characteristic.on('read', function(data, isNotification) {
    if (isNotification) {
      console.log('Fall detection ', data.readUInt8(0));
      console.log('Fall detection seconds ago', data.readUInt8(1));
    }
  });
  characteristic.notify(true, function(error) {
    console.log('Fall dectection notification on');
  });

}



module.exports = fallDetection;
