/*
ACCELERATION WAVEFORM

Characterisitc UUID: 4e92f4ab-c01b-4b5a-b328-699856a7c2ee

This characteristic represents the acceleration energy magnitude registered by the tracker. The magnitude is calculated as Euclidean norm of the XYZ acceleration components, that is sqrt(X2 + Y2 + Z2).

http://angelsensor.com/protocols/seraphim-sense/waveform-signal-service/

*/



function accelerationWaveform(characteristic) {

  characteristic.on('read', function(data, isNotification) {

    // Code from  https://github.com/AngelSensor/angel-sdk/blob/86f2d7d7317bcf3991a67e1dbb0d2aefba05b79f/Android/angel-sdk/src/main/java/com/angel/sdk/ChAccelerationWaveform.java

    var sampleSize = 3;
    for (var i = sampleSize - 1; i < data.length; i += sampleSize) {
      var wave  = data[i-2] + data[i-1]*256 + data[i]*256*256;
      // console.log(wave);
    }

  });

  characteristic.notify(true, function(error) {
    console.log('Acceleration Waveform notification on');
  });

}



module.exports = accelerationWaveform;
