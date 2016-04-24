/*
WAVEFORM SIGNAL FEATURE

Characterisitc UUID: 4cb32ae6-0cfe-47dc-a4f6-59f52cdc2910

http://angelsensor.com/protocols/seraphim-sense/waveform-signal-service/

*/



function waveformSignalFeature(characteristic) {

  characteristic.read(function(error, data){
    // console.log('Number Of Optical Wavelengths: ' + data.readUInt8(1));
    // TODO: Optical Wavelengths, Acceleration Sampling Rate, Acceleration Scale Range
    // compare to: https://github.com/AngelSensor/angel-sdk/blob/b7459d9c86c6a5c72d8e58b696345b642286b876/iOS/SDK/Services/WaveformSignal/ANWaveformSignalFeatureCharacteristic.m
  });

}



module.exports = waveformSignalFeature;
