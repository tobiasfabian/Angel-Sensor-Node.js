/*
OPTICAL WAVEFORM CHARACTERISTIC

Characteristic UUID: 334c0be8-76f9-458b-bb2e-7df2b486b4d7

Field name
Wavelength N data point (tuple)

Format
sint24[]

Info
Array of optical signal samples, delivered as a stream of tuples. Each tuple may contain several data points, depending on the number of wavelengths supported by the sensor. This is specified by the Number Of Optical Wavelengths below. Each value in a tuple is a signed 24-bit, normalized reading of an optical sensor. Each notification will contain the maximum number of complete tuples that can be contained in the Bluetooth maximum transmission unit (MTU, typically 20 bytes). For example, for MTU of 20B, value size of 3B (24-bit), a dual wavelength sensor will produce notifications containing 20 / (3×2) = 3 tuples.

http://angelsensor.com/protocols/seraphim-sense/waveform-signal-service/
*/



function opticalWaveform(characteristic) {

  characteristic.on('read', function(data, isNotification) {

    // code from https://github.com/AngelSensor/angel-sdk/blob/86f2d7d7317bcf3991a67e1dbb0d2aefba05b79f/Android/angel-sdk/src/main/java/com/angel/sdk/ChOpticalWaveform.java
    var twoSamplesSize = 6;
    for (var i = twoSamplesSize - 1; i < data.length; i += twoSamplesSize) {
      var green = data[i-5] + data[i-4]*256 + data[i-3]*256*256;
      var blue  = data[i-2] + data[i-1]*256 + data[i]*256*256;
      // console.log(green + ', ' + blue)
    }

  });

  characteristic.notify(true, function(error) {
    console.log('Optical Waveform notification on');
  });

}



module.exports = opticalWaveform;
