/*
Name: Heart Rate Measurement
Type: org.bluetooth.characteristic.heart_rate_measurement
Assigned Number: 0x2A37
*/

function heartRateMeasurement(characteristic) {

  characteristic.on('read', function(data, isNotification) {
    console.log('Heart Rate Measurement: ' + data.readUInt16LE(1) + 'bpm');
  });

  characteristic.notify(true, function(error) {
    console.log('Heart Rate Measurement notification on');
  });

}

module.exports = heartRateMeasurement;
