/*
ACCELERATION ENERGY MAGNITUDE CHARACTERISTIC

Characteristic UUID: 9e3bd0d7-bdd8-41fd-af1f-5e99679183ff

This characteristic represents the acceleration energy magnitude registered and accumulated by the tracker over a period of time. The magnitude is calculated as Euclidean norm of the XYZ acceleration components, that is sqrt(X2 + Y2 + Z2). Summing the above value at discrete intervals (sampling rate) produces the integral of acceleration magnitude over time. This value may be reset by issuing a relevant op code via the Activity Monitoring Control Point below.

http://angelsensor.com/protocols/seraphim-sense/activity-monitoring-service/

*/



function accelerationEnergyMagnitude(characteristic) {
  characteristic.on('read', function(data, isNotification) {

    // Code from  https://github.com/AngelSensor/angel-sdk/blob/86f2d7d7317bcf3991a67e1dbb0d2aefba05b79f/Android/angel-sdk/src/main/java/com/angel/sdk/ChAccelerationWaveform.java
    var sampleSize = 3;
    for (var i = sampleSize - 1; i < data.length; i += sampleSize) {
      var wave  = data[i-2] + data[i-1]*256 + data[i]*256*256;
      console.log(wave);
    }
  });

  characteristic.notify(true, function(error) {
    console.log('Acceleration Energy Magnitude notification on');
  });

}



module.exports = accelerationEnergyMagnitude;
