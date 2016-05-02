/*
STEP COUNT CHARACTERISTIC

Characteristic UUID: 7a543305-6b9e-4878-ad67-29c5a9d99736

This characteristic represents the number of steps taken by the device wearer. The counter may be reset by issuing a relevant op code via the Activity Monitoring Control Point below.

http://angelsensor.com/protocols/seraphim-sense/activity-monitoring-service/
*/

function stepCount(characteristic) {

  characteristic.read(function(error, data) {
    console.log('Step Count ', data.readUInt8(0));
  });

  characteristic.on('read', function(data, isNotification) {
    if (isNotification) {
    console.log('Step Count ', data.readUInt8(0));
    }
  });
  characteristic.notify(true, function(error) {
    console.log('Step Count notification on');
  });

}



module.exports = stepCount;
