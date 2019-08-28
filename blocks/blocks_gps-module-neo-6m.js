Blockly.Blocks['gps_module_neo_6m'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GPS MODULE NEO 6M");
    this.appendDummyInput()
        .appendField("SERIAL BAUD RATE")
        .appendField(new Blockly.FieldDropdown([["9600","9600"], ["14400","14400"], ["19200","19200"], ["28800","28800"], ["38400","38400"], ["57600","57600"], ["115200","115200"]]), "GPS_MODULE_NEO_6M_SERIAL_BAUD_RATE")
        .appendField(new Blockly.FieldDropdown([["Serial 1","SERIAL1"], ["Serial 2","SERIAL2"], ["option","OPTIONNAME"]]), "GPS_MODULE_NEO_6M_SERIAL_CHANNEL");
    this.appendDummyInput()
        .appendField("SERIAL CONNECT")
        .appendField("RX PIN")
        .appendField(new Blockly.FieldTextInput("0"), "GPS_MODULE_NEO_6M_RX")
        .appendField("TX PIN")
        .appendField(new Blockly.FieldTextInput("0"), "GPS_MODULE_NEO_6M_TX");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gps_module_neo_6m_gps_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GPS DATA");
    this.appendDummyInput()
        .appendField("SATELLITE COUNT : ")
        .appendField(new Blockly.FieldVariable("GPS_MODULE_NEO_6M_SATELLITE_COUNT"), "GPS_MODULE_NEO_6M_SATELLITE_COUNT");
    this.appendDummyInput()
        .appendField("LATITUDE : ")
        .appendField(new Blockly.FieldVariable("GPS_MODULE_NEO_6M_LATITUDE"), "GPS_MODULE_NEO_6M_LATITUDE");
    this.appendDummyInput()
        .appendField("LONGITUDE : ")
        .appendField(new Blockly.FieldVariable("GPS_MODULE_NEO_6M_LONGITUDE"), "GPS_MODULE_NEO_6M_LONGITUDE");
    this.appendDummyInput()
        .appendField("SPEED MPH : ")
        .appendField(new Blockly.FieldVariable("GPS_MODULE_NEO_6M_SPEED_MPH"), "GPS_MODULE_NEO_6M_SPEED_MPH");
    this.appendDummyInput()
        .appendField("ALTITUDE FEET : ")
        .appendField(new Blockly.FieldVariable("GPS_MODULE_NEO_6M_ALTITUDE_FEET"), "GPS_MODULE_NEO_6M_ALTITUDE_FEET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

