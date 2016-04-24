/*
Blood Oxygen Saturation Service
Service UUID: 902dcf38-ccc0-4902-b22c-70cab5ee5df2

http://angelsensor.com/protocols/seraphim-sense/blood-oxygen-saturation-service/
*/



function bloodOxygenSaturationMeasurementCharacteristic(characteristic) {

  characteristic.on('read', function(data, isNotification) {
    console.log('Blood Oxygen Saturation is now: ', data.readFloatBE(0) + '%');
  });

  characteristic.notify(true, function(error) {
    console.log('Blood Oxygen Saturation Measurement notification on');
  });

}



module.exports = bloodOxygenSaturationMeasurementCharacteristic;
