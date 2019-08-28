Blockly.JavaScript['gps_module_neo_6m'] = function(block) {
  var dropdown_gps_module_neo_6m_serial_baud_rate = block.getFieldValue('GPS_MODULE_NEO_6M_SERIAL_BAUD_RATE');
  var dropdown_gps_module_neo_6m_serial_channel = block.getFieldValue('GPS_MODULE_NEO_6M_SERIAL_CHANNEL');
  var text_gps_module_neo_6m_rx = block.getFieldValue('GPS_MODULE_NEO_6M_RX');
  var text_gps_module_neo_6m_tx = block.getFieldValue('GPS_MODULE_NEO_6M_TX');
  // TODO: Assemble JavaScript into code variable.

  var code = `
  #EXTINC
    #include "TinyGPS++.h"
    #include <HardwareSerial.h>

    HardwareSerial SerialGPS(${parseInt(dropdown_gps_module_neo_6m_serial_channel.replace("SERIAL", ""))});
    TinyGPSPlus gps;//This is the GPS object that will pretty much do all the grunt work with the NMEA data
  #END
  #SETUP
    SerialGPS.begin(${dropdown_gps_module_neo_6m_serial_baud_rate}, SERIAL_8N1, ${text_gps_module_neo_6m_rx}, ${text_gps_module_neo_6m_tx});
  #END
  `;
  return code;
};

Blockly.JavaScript['gps_module_neo_6m_gps_data'] = function(block) {
  var variable_gps_module_neo_6m_satellite_count = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GPS_MODULE_NEO_6M_SATELLITE_COUNT'), Blockly.Variables.NAME_TYPE);
  var variable_gps_module_neo_6m_latitude = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GPS_MODULE_NEO_6M_LATITUDE'), Blockly.Variables.NAME_TYPE);
  var variable_gps_module_neo_6m_longitude = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GPS_MODULE_NEO_6M_LONGITUDE'), Blockly.Variables.NAME_TYPE);
  var variable_gps_module_neo_6m_speed_mph = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GPS_MODULE_NEO_6M_SPEED_MPH'), Blockly.Variables.NAME_TYPE);
  var variable_gps_module_neo_6m_altitude_feet = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GPS_MODULE_NEO_6M_ALTITUDE_FEET'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
  while(SerialGPS.available())
    {
      gps.encode(SerialGPS.read());
    }
    
    if(gps.location.isUpdated())
    {
      ${variable_gps_module_neo_6m_satellite_count} = gps.satellites.value();
      ${variable_gps_module_neo_6m_latitude} = gps.location.lat();
      ${variable_gps_module_neo_6m_longitude} = gps.location.lng();
      ${variable_gps_module_neo_6m_speed_mph} = gps.speed.mph();
      ${variable_gps_module_neo_6m_altitude_feet} = gps.altitude.feet();
    }
  `;
  return code;
};