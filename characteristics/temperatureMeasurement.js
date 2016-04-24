/*
Name: Temperature Measurement
Type: org.bluetooth.characteristic.temperature_measurement
Assigned Number: 0x2A1C

Abstract:
The Temperature Measurement characteristic is a variable length structure containing a Flags field, a Temperature Measurement Value field and, based upon the contents of the Flags field, optionally a Time Stamp field and/or a Temperature Type field.

Summary:
The flags is the first field sent followed by the Temperature Measurement Value.

*/



function temperatureMeasurement(characteristic) {

  characteristic.on('read', function(data, isNotification) {

    // code from https://github.com/CosmicPenguin/angel-sensor/blob/master/lib/thermometer-service.js
  	var raw = data.readUInt32LE(1);
  	var exp = ((raw >> 24) & 0xFF) << 24 >> 24;
  	var mantissa = raw & 0xFFFFFF;
  	var temp = mantissa * Math.pow(10, exp);
    console.log('Temperature: ' + temp + '°C');

  });

  characteristic.notify(true, function(error) {
    console.log('Temperature Measurement notification on');
  });

}



module.exports = temperatureMeasurement;
