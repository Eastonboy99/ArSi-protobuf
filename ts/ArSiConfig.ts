/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Packet {
  type: Packet_Commands;
  config: Packet_Config | undefined;
}

export enum Packet_Commands {
  REQUEST = 0,
  REPLY_WITH_CONFIG = 1,
  RECEIVED_VALID_CONFIG = 2,
  UNRECOGNIZED = -1,
}

export function packet_CommandsFromJSON(object: any): Packet_Commands {
  switch (object) {
    case 0:
    case "REQUEST":
      return Packet_Commands.REQUEST;
    case 1:
    case "REPLY_WITH_CONFIG":
      return Packet_Commands.REPLY_WITH_CONFIG;
    case 2:
    case "RECEIVED_VALID_CONFIG":
      return Packet_Commands.RECEIVED_VALID_CONFIG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Commands.UNRECOGNIZED;
  }
}

export function packet_CommandsToJSON(object: Packet_Commands): string {
  switch (object) {
    case Packet_Commands.REQUEST:
      return "REQUEST";
    case Packet_Commands.REPLY_WITH_CONFIG:
      return "REPLY_WITH_CONFIG";
    case Packet_Commands.RECEIVED_VALID_CONFIG:
      return "RECEIVED_VALID_CONFIG";
    default:
      return "UNKNOWN";
  }
}

export interface Packet_Config {
  version: number;
  tx: Packet_Config_TX | undefined;
  model: Packet_Config_Model | undefined;
}

export interface Packet_Config_TX {
  uuid: number[];
  name: string;
  controllerInputs: Packet_Config_TX_ControllerInput[];
  trimRange: number;
  trimStepSize: number;
}

export interface Packet_Config_TX_ControllerInput {
  hardwareType: Packet_Config_TX_ControllerInput_HardwareType;
  inputType: Packet_Config_TX_ControllerInput_InputType;
  inputSubType: Packet_Config_TX_ControllerInput_InputSubType;
  port: number;
  calibration: number[];
  labels: Packet_Config_TX_ControllerInput_InputLabel[];
}

export enum Packet_Config_TX_ControllerInput_HardwareType {
  TRANSMITTER_INPUT_NOT_USED = 0,
  ANALOG_WITH_CENTER_AUTO_RETURN = 1,
  ANALOG_WITH_CENTER = 2,
  ANALOG_NO_CENTER = 3,
  ANALOG_NO_CENTER_POSITIVE_ONLY = 4,
  ANALOG_MOMENTARY_ON_OFF = 5,
  SWITCH_ON_OFF = 6,
  SWITCH_ON_OPEN_OFF = 7,
  MOMENTARY_ON_OFF = 8,
  UNRECOGNIZED = -1,
}

export function packet_Config_TX_ControllerInput_HardwareTypeFromJSON(
  object: any
): Packet_Config_TX_ControllerInput_HardwareType {
  switch (object) {
    case 0:
    case "TRANSMITTER_INPUT_NOT_USED":
      return Packet_Config_TX_ControllerInput_HardwareType.TRANSMITTER_INPUT_NOT_USED;
    case 1:
    case "ANALOG_WITH_CENTER_AUTO_RETURN":
      return Packet_Config_TX_ControllerInput_HardwareType.ANALOG_WITH_CENTER_AUTO_RETURN;
    case 2:
    case "ANALOG_WITH_CENTER":
      return Packet_Config_TX_ControllerInput_HardwareType.ANALOG_WITH_CENTER;
    case 3:
    case "ANALOG_NO_CENTER":
      return Packet_Config_TX_ControllerInput_HardwareType.ANALOG_NO_CENTER;
    case 4:
    case "ANALOG_NO_CENTER_POSITIVE_ONLY":
      return Packet_Config_TX_ControllerInput_HardwareType.ANALOG_NO_CENTER_POSITIVE_ONLY;
    case 5:
    case "ANALOG_MOMENTARY_ON_OFF":
      return Packet_Config_TX_ControllerInput_HardwareType.ANALOG_MOMENTARY_ON_OFF;
    case 6:
    case "SWITCH_ON_OFF":
      return Packet_Config_TX_ControllerInput_HardwareType.SWITCH_ON_OFF;
    case 7:
    case "SWITCH_ON_OPEN_OFF":
      return Packet_Config_TX_ControllerInput_HardwareType.SWITCH_ON_OPEN_OFF;
    case 8:
    case "MOMENTARY_ON_OFF":
      return Packet_Config_TX_ControllerInput_HardwareType.MOMENTARY_ON_OFF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Config_TX_ControllerInput_HardwareType.UNRECOGNIZED;
  }
}

export function packet_Config_TX_ControllerInput_HardwareTypeToJSON(
  object: Packet_Config_TX_ControllerInput_HardwareType
): string {
  switch (object) {
    case Packet_Config_TX_ControllerInput_HardwareType.TRANSMITTER_INPUT_NOT_USED:
      return "TRANSMITTER_INPUT_NOT_USED";
    case Packet_Config_TX_ControllerInput_HardwareType.ANALOG_WITH_CENTER_AUTO_RETURN:
      return "ANALOG_WITH_CENTER_AUTO_RETURN";
    case Packet_Config_TX_ControllerInput_HardwareType.ANALOG_WITH_CENTER:
      return "ANALOG_WITH_CENTER";
    case Packet_Config_TX_ControllerInput_HardwareType.ANALOG_NO_CENTER:
      return "ANALOG_NO_CENTER";
    case Packet_Config_TX_ControllerInput_HardwareType.ANALOG_NO_CENTER_POSITIVE_ONLY:
      return "ANALOG_NO_CENTER_POSITIVE_ONLY";
    case Packet_Config_TX_ControllerInput_HardwareType.ANALOG_MOMENTARY_ON_OFF:
      return "ANALOG_MOMENTARY_ON_OFF";
    case Packet_Config_TX_ControllerInput_HardwareType.SWITCH_ON_OFF:
      return "SWITCH_ON_OFF";
    case Packet_Config_TX_ControllerInput_HardwareType.SWITCH_ON_OPEN_OFF:
      return "SWITCH_ON_OPEN_OFF";
    case Packet_Config_TX_ControllerInput_HardwareType.MOMENTARY_ON_OFF:
      return "MOMENTARY_ON_OFF";
    default:
      return "UNKNOWN";
  }
}

export enum Packet_Config_TX_ControllerInput_InputType {
  LOGICAL_INPUT_NOT_USED = 0,
  ANALOG = 1,
  ANALOG_MOMENTARY = 2,
  SWITCH = 3,
  BCD_SWITCH = 4,
  MOMENTARY = 5,
  TRIM = 6,
  UNRECOGNIZED = -1,
}

export function packet_Config_TX_ControllerInput_InputTypeFromJSON(
  object: any
): Packet_Config_TX_ControllerInput_InputType {
  switch (object) {
    case 0:
    case "LOGICAL_INPUT_NOT_USED":
      return Packet_Config_TX_ControllerInput_InputType.LOGICAL_INPUT_NOT_USED;
    case 1:
    case "ANALOG":
      return Packet_Config_TX_ControllerInput_InputType.ANALOG;
    case 2:
    case "ANALOG_MOMENTARY":
      return Packet_Config_TX_ControllerInput_InputType.ANALOG_MOMENTARY;
    case 3:
    case "SWITCH":
      return Packet_Config_TX_ControllerInput_InputType.SWITCH;
    case 4:
    case "BCD_SWITCH":
      return Packet_Config_TX_ControllerInput_InputType.BCD_SWITCH;
    case 5:
    case "MOMENTARY":
      return Packet_Config_TX_ControllerInput_InputType.MOMENTARY;
    case 6:
    case "TRIM":
      return Packet_Config_TX_ControllerInput_InputType.TRIM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Config_TX_ControllerInput_InputType.UNRECOGNIZED;
  }
}

export function packet_Config_TX_ControllerInput_InputTypeToJSON(
  object: Packet_Config_TX_ControllerInput_InputType
): string {
  switch (object) {
    case Packet_Config_TX_ControllerInput_InputType.LOGICAL_INPUT_NOT_USED:
      return "LOGICAL_INPUT_NOT_USED";
    case Packet_Config_TX_ControllerInput_InputType.ANALOG:
      return "ANALOG";
    case Packet_Config_TX_ControllerInput_InputType.ANALOG_MOMENTARY:
      return "ANALOG_MOMENTARY";
    case Packet_Config_TX_ControllerInput_InputType.SWITCH:
      return "SWITCH";
    case Packet_Config_TX_ControllerInput_InputType.BCD_SWITCH:
      return "BCD_SWITCH";
    case Packet_Config_TX_ControllerInput_InputType.MOMENTARY:
      return "MOMENTARY";
    case Packet_Config_TX_ControllerInput_InputType.TRIM:
      return "TRIM";
    default:
      return "UNKNOWN";
  }
}

export enum Packet_Config_TX_ControllerInput_InputSubType {
  SUB_TYPE_NOT_APPLICABLE = 0,
  UP_DOWN_BUTTONS = 1,
  INCREMENT_AND_LOOP = 2,
  DECREMENT_AND_LOOP = 3,
  SAW_TOOTH = 4,
  DOUBLE_CLICK_DECREMENT = 5,
  UNRECOGNIZED = -1,
}

export function packet_Config_TX_ControllerInput_InputSubTypeFromJSON(
  object: any
): Packet_Config_TX_ControllerInput_InputSubType {
  switch (object) {
    case 0:
    case "SUB_TYPE_NOT_APPLICABLE":
      return Packet_Config_TX_ControllerInput_InputSubType.SUB_TYPE_NOT_APPLICABLE;
    case 1:
    case "UP_DOWN_BUTTONS":
      return Packet_Config_TX_ControllerInput_InputSubType.UP_DOWN_BUTTONS;
    case 2:
    case "INCREMENT_AND_LOOP":
      return Packet_Config_TX_ControllerInput_InputSubType.INCREMENT_AND_LOOP;
    case 3:
    case "DECREMENT_AND_LOOP":
      return Packet_Config_TX_ControllerInput_InputSubType.DECREMENT_AND_LOOP;
    case 4:
    case "SAW_TOOTH":
      return Packet_Config_TX_ControllerInput_InputSubType.SAW_TOOTH;
    case 5:
    case "DOUBLE_CLICK_DECREMENT":
      return Packet_Config_TX_ControllerInput_InputSubType.DOUBLE_CLICK_DECREMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Config_TX_ControllerInput_InputSubType.UNRECOGNIZED;
  }
}

export function packet_Config_TX_ControllerInput_InputSubTypeToJSON(
  object: Packet_Config_TX_ControllerInput_InputSubType
): string {
  switch (object) {
    case Packet_Config_TX_ControllerInput_InputSubType.SUB_TYPE_NOT_APPLICABLE:
      return "SUB_TYPE_NOT_APPLICABLE";
    case Packet_Config_TX_ControllerInput_InputSubType.UP_DOWN_BUTTONS:
      return "UP_DOWN_BUTTONS";
    case Packet_Config_TX_ControllerInput_InputSubType.INCREMENT_AND_LOOP:
      return "INCREMENT_AND_LOOP";
    case Packet_Config_TX_ControllerInput_InputSubType.DECREMENT_AND_LOOP:
      return "DECREMENT_AND_LOOP";
    case Packet_Config_TX_ControllerInput_InputSubType.SAW_TOOTH:
      return "SAW_TOOTH";
    case Packet_Config_TX_ControllerInput_InputSubType.DOUBLE_CLICK_DECREMENT:
      return "DOUBLE_CLICK_DECREMENT";
    default:
      return "UNKNOWN";
  }
}

export enum Packet_Config_TX_ControllerInput_InputLabel {
  NONE = 0,
  ST = 1,
  TH = 2,
  THR = 3,
  RUD = 4,
  AIL = 5,
  ELE = 6,
  AUX = 7,
  ST_DR = 8,
  RUD_DR = 9,
  AIL_DR = 10,
  ELE_DR = 11,
  TH_DR = 12,
  THR_DR = 13,
  TH_HOLD = 14,
  GEAR = 15,
  FLAPS = 16,
  TRAINER = 17,
  SIDE_L = 18,
  SIDE_R = 19,
  POT1 = 20,
  POT2 = 21,
  POT3 = 22,
  POT4 = 23,
  POT5 = 24,
  POT6 = 25,
  POT7 = 26,
  POT8 = 27,
  POT9 = 28,
  SW1 = 29,
  SW2 = 30,
  SW3 = 31,
  SW4 = 32,
  SW5 = 33,
  SW6 = 34,
  SW7 = 35,
  SW8 = 36,
  SW9 = 37,
  UNRECOGNIZED = -1,
}

export function packet_Config_TX_ControllerInput_InputLabelFromJSON(
  object: any
): Packet_Config_TX_ControllerInput_InputLabel {
  switch (object) {
    case 0:
    case "NONE":
      return Packet_Config_TX_ControllerInput_InputLabel.NONE;
    case 1:
    case "ST":
      return Packet_Config_TX_ControllerInput_InputLabel.ST;
    case 2:
    case "TH":
      return Packet_Config_TX_ControllerInput_InputLabel.TH;
    case 3:
    case "THR":
      return Packet_Config_TX_ControllerInput_InputLabel.THR;
    case 4:
    case "RUD":
      return Packet_Config_TX_ControllerInput_InputLabel.RUD;
    case 5:
    case "AIL":
      return Packet_Config_TX_ControllerInput_InputLabel.AIL;
    case 6:
    case "ELE":
      return Packet_Config_TX_ControllerInput_InputLabel.ELE;
    case 7:
    case "AUX":
      return Packet_Config_TX_ControllerInput_InputLabel.AUX;
    case 8:
    case "ST_DR":
      return Packet_Config_TX_ControllerInput_InputLabel.ST_DR;
    case 9:
    case "RUD_DR":
      return Packet_Config_TX_ControllerInput_InputLabel.RUD_DR;
    case 10:
    case "AIL_DR":
      return Packet_Config_TX_ControllerInput_InputLabel.AIL_DR;
    case 11:
    case "ELE_DR":
      return Packet_Config_TX_ControllerInput_InputLabel.ELE_DR;
    case 12:
    case "TH_DR":
      return Packet_Config_TX_ControllerInput_InputLabel.TH_DR;
    case 13:
    case "THR_DR":
      return Packet_Config_TX_ControllerInput_InputLabel.THR_DR;
    case 14:
    case "TH_HOLD":
      return Packet_Config_TX_ControllerInput_InputLabel.TH_HOLD;
    case 15:
    case "GEAR":
      return Packet_Config_TX_ControllerInput_InputLabel.GEAR;
    case 16:
    case "FLAPS":
      return Packet_Config_TX_ControllerInput_InputLabel.FLAPS;
    case 17:
    case "TRAINER":
      return Packet_Config_TX_ControllerInput_InputLabel.TRAINER;
    case 18:
    case "SIDE_L":
      return Packet_Config_TX_ControllerInput_InputLabel.SIDE_L;
    case 19:
    case "SIDE_R":
      return Packet_Config_TX_ControllerInput_InputLabel.SIDE_R;
    case 20:
    case "POT1":
      return Packet_Config_TX_ControllerInput_InputLabel.POT1;
    case 21:
    case "POT2":
      return Packet_Config_TX_ControllerInput_InputLabel.POT2;
    case 22:
    case "POT3":
      return Packet_Config_TX_ControllerInput_InputLabel.POT3;
    case 23:
    case "POT4":
      return Packet_Config_TX_ControllerInput_InputLabel.POT4;
    case 24:
    case "POT5":
      return Packet_Config_TX_ControllerInput_InputLabel.POT5;
    case 25:
    case "POT6":
      return Packet_Config_TX_ControllerInput_InputLabel.POT6;
    case 26:
    case "POT7":
      return Packet_Config_TX_ControllerInput_InputLabel.POT7;
    case 27:
    case "POT8":
      return Packet_Config_TX_ControllerInput_InputLabel.POT8;
    case 28:
    case "POT9":
      return Packet_Config_TX_ControllerInput_InputLabel.POT9;
    case 29:
    case "SW1":
      return Packet_Config_TX_ControllerInput_InputLabel.SW1;
    case 30:
    case "SW2":
      return Packet_Config_TX_ControllerInput_InputLabel.SW2;
    case 31:
    case "SW3":
      return Packet_Config_TX_ControllerInput_InputLabel.SW3;
    case 32:
    case "SW4":
      return Packet_Config_TX_ControllerInput_InputLabel.SW4;
    case 33:
    case "SW5":
      return Packet_Config_TX_ControllerInput_InputLabel.SW5;
    case 34:
    case "SW6":
      return Packet_Config_TX_ControllerInput_InputLabel.SW6;
    case 35:
    case "SW7":
      return Packet_Config_TX_ControllerInput_InputLabel.SW7;
    case 36:
    case "SW8":
      return Packet_Config_TX_ControllerInput_InputLabel.SW8;
    case 37:
    case "SW9":
      return Packet_Config_TX_ControllerInput_InputLabel.SW9;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Config_TX_ControllerInput_InputLabel.UNRECOGNIZED;
  }
}

export function packet_Config_TX_ControllerInput_InputLabelToJSON(
  object: Packet_Config_TX_ControllerInput_InputLabel
): string {
  switch (object) {
    case Packet_Config_TX_ControllerInput_InputLabel.NONE:
      return "NONE";
    case Packet_Config_TX_ControllerInput_InputLabel.ST:
      return "ST";
    case Packet_Config_TX_ControllerInput_InputLabel.TH:
      return "TH";
    case Packet_Config_TX_ControllerInput_InputLabel.THR:
      return "THR";
    case Packet_Config_TX_ControllerInput_InputLabel.RUD:
      return "RUD";
    case Packet_Config_TX_ControllerInput_InputLabel.AIL:
      return "AIL";
    case Packet_Config_TX_ControllerInput_InputLabel.ELE:
      return "ELE";
    case Packet_Config_TX_ControllerInput_InputLabel.AUX:
      return "AUX";
    case Packet_Config_TX_ControllerInput_InputLabel.ST_DR:
      return "ST_DR";
    case Packet_Config_TX_ControllerInput_InputLabel.RUD_DR:
      return "RUD_DR";
    case Packet_Config_TX_ControllerInput_InputLabel.AIL_DR:
      return "AIL_DR";
    case Packet_Config_TX_ControllerInput_InputLabel.ELE_DR:
      return "ELE_DR";
    case Packet_Config_TX_ControllerInput_InputLabel.TH_DR:
      return "TH_DR";
    case Packet_Config_TX_ControllerInput_InputLabel.THR_DR:
      return "THR_DR";
    case Packet_Config_TX_ControllerInput_InputLabel.TH_HOLD:
      return "TH_HOLD";
    case Packet_Config_TX_ControllerInput_InputLabel.GEAR:
      return "GEAR";
    case Packet_Config_TX_ControllerInput_InputLabel.FLAPS:
      return "FLAPS";
    case Packet_Config_TX_ControllerInput_InputLabel.TRAINER:
      return "TRAINER";
    case Packet_Config_TX_ControllerInput_InputLabel.SIDE_L:
      return "SIDE_L";
    case Packet_Config_TX_ControllerInput_InputLabel.SIDE_R:
      return "SIDE_R";
    case Packet_Config_TX_ControllerInput_InputLabel.POT1:
      return "POT1";
    case Packet_Config_TX_ControllerInput_InputLabel.POT2:
      return "POT2";
    case Packet_Config_TX_ControllerInput_InputLabel.POT3:
      return "POT3";
    case Packet_Config_TX_ControllerInput_InputLabel.POT4:
      return "POT4";
    case Packet_Config_TX_ControllerInput_InputLabel.POT5:
      return "POT5";
    case Packet_Config_TX_ControllerInput_InputLabel.POT6:
      return "POT6";
    case Packet_Config_TX_ControllerInput_InputLabel.POT7:
      return "POT7";
    case Packet_Config_TX_ControllerInput_InputLabel.POT8:
      return "POT8";
    case Packet_Config_TX_ControllerInput_InputLabel.POT9:
      return "POT9";
    case Packet_Config_TX_ControllerInput_InputLabel.SW1:
      return "SW1";
    case Packet_Config_TX_ControllerInput_InputLabel.SW2:
      return "SW2";
    case Packet_Config_TX_ControllerInput_InputLabel.SW3:
      return "SW3";
    case Packet_Config_TX_ControllerInput_InputLabel.SW4:
      return "SW4";
    case Packet_Config_TX_ControllerInput_InputLabel.SW5:
      return "SW5";
    case Packet_Config_TX_ControllerInput_InputLabel.SW6:
      return "SW6";
    case Packet_Config_TX_ControllerInput_InputLabel.SW7:
      return "SW7";
    case Packet_Config_TX_ControllerInput_InputLabel.SW8:
      return "SW8";
    case Packet_Config_TX_ControllerInput_InputLabel.SW9:
      return "SW9";
    default:
      return "UNKNOWN";
  }
}

export interface Packet_Config_Model {
  uuid: number[];
  name: string;
  mixerUnits: Packet_Config_Model_MixerUnit[];
  limits: Packet_Config_Model_Limits[];
  rfProtocolType: Packet_Config_Model_RFProtocolType;
}

export enum Packet_Config_Model_RFProtocolType {
  RF_PROTOCOL_HK310 = 0,
  RF_PROTOCOL_ARSI = 1,
  UNRECOGNIZED = -1,
}

export function packet_Config_Model_RFProtocolTypeFromJSON(
  object: any
): Packet_Config_Model_RFProtocolType {
  switch (object) {
    case 0:
    case "RF_PROTOCOL_HK310":
      return Packet_Config_Model_RFProtocolType.RF_PROTOCOL_HK310;
    case 1:
    case "RF_PROTOCOL_ARSI":
      return Packet_Config_Model_RFProtocolType.RF_PROTOCOL_ARSI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Config_Model_RFProtocolType.UNRECOGNIZED;
  }
}

export function packet_Config_Model_RFProtocolTypeToJSON(
  object: Packet_Config_Model_RFProtocolType
): string {
  switch (object) {
    case Packet_Config_Model_RFProtocolType.RF_PROTOCOL_HK310:
      return "RF_PROTOCOL_HK310";
    case Packet_Config_Model_RFProtocolType.RF_PROTOCOL_ARSI:
      return "RF_PROTOCOL_ARSI";
    default:
      return "UNKNOWN";
  }
}

export interface Packet_Config_Model_MixerUnit {
  src: Packet_Config_Model_MixerUnit_SRCLabel;
  dst: Packet_Config_Model_MixerUnit_ChannelLabel;
  scalar: number;
  offset: number;
  applyTrim: boolean;
  invertSource: boolean;
  op: Packet_Config_Model_MixerUnit_OperationType;
}

export enum Packet_Config_Model_MixerUnit_SRCLabel {
  SRC_NONE = 0,
  /** IN_NONE - values from input_label_t */
  IN_NONE = 1,
  IN_ST = 2,
  IN_TH = 3,
  IN_THR = 4,
  IN_RUD = 5,
  IN_AIL = 6,
  IN_ELE = 7,
  IN_AUX = 8,
  IN_ST_DR = 9,
  IN_RUD_DR = 10,
  IN_AIL_DR = 11,
  IN_ELE_DR = 12,
  IN_TH_DR = 13,
  IN_THR_DR = 14,
  IN_TH_HOLD = 15,
  IN_GEAR = 16,
  IN_FLAPS = 17,
  IN_TRAINER = 18,
  IN_SIDE_L = 19,
  IN_SIDE_R = 20,
  IN_POT1 = 21,
  IN_POT2 = 22,
  IN_POT3 = 23,
  IN_POT4 = 24,
  IN_POT5 = 25,
  IN_POT6 = 26,
  IN_POT7 = 27,
  IN_POT8 = 28,
  IN_POT9 = 29,
  IN_SW1 = 30,
  IN_SW2 = 31,
  IN_SW3 = 32,
  IN_SW4 = 33,
  IN_SW5 = 34,
  IN_SW6 = 35,
  IN_SW7 = 36,
  IN_SW8 = 37,
  IN_SW9 = 38,
  /** CH_CH1 - values from channel_label_t */
  CH_CH1 = 39,
  CH_CH2 = 40,
  CH_CH3 = 41,
  CH_CH4 = 42,
  CH_CH5 = 43,
  CH_VIRTUAL1 = 44,
  CH_VIRTUAL2 = 45,
  CH_VIRTUAL3 = 46,
  CH_VIRTUAL4 = 47,
  CH_VIRTUAL5 = 48,
  CH_VIRTUAL6 = 49,
  CH_VIRTUAL7 = 50,
  CH_VIRTUAL8 = 51,
  CH_VIRTUAL9 = 52,
  CH_VIRTUAL10 = 53,
  CH_HIDDEN1 = 54,
  CH_HIDDEN2 = 55,
  CH_HIDDEN3 = 56,
  CH_HIDDEN4 = 57,
  CH_HIDDEN5 = 58,
  CH_HIDDEN6 = 59,
  CH_HIDDEN7 = 60,
  CH_HIDDEN8 = 61,
  CH_HIDDEN9 = 62,
  CH_HIDDEN10 = 63,
  CH_HIDDEN11 = 64,
  CH_HIDDEN12 = 65,
  CH_HIDDEN13 = 66,
  CH_HIDDEN14 = 67,
  CH_HIDDEN15 = 68,
  CH_HIDDEN16 = 69,
  CH_HIDDEN17 = 70,
  CH_HIDDEN18 = 71,
  CH_HIDDEN19 = 72,
  CH_HIDDEN20 = 73,
  CH_HIDDEN21 = 74,
  CH_HIDDEN22 = 75,
  CH_HIDDEN23 = 76,
  CH_HIDDEN24 = 77,
  CH_HIDDEN25 = 78,
  CH_HIDDEN26 = 79,
  CH_HIDDEN27 = 80,
  CH_HIDDEN28 = 81,
  CH_HIDDEN29 = 82,
  CH_HIDDEN30 = 83,
  CH_HIDDEN31 = 84,
  CH_HIDDEN32 = 85,
  CH_HIDDEN33 = 86,
  CH_HIDDEN34 = 87,
  CH_HIDDEN35 = 88,
  CH_HIDDEN36 = 89,
  CH_HIDDEN37 = 90,
  CH_HIDDEN38 = 91,
  CH_HIDDEN39 = 92,
  CH_HIDDEN40 = 93,
  CH_HIDDEN41 = 94,
  CH_HIDDEN42 = 95,
  CH_HIDDEN43 = 96,
  CH_HIDDEN44 = 97,
  CH_HIDDEN45 = 98,
  CH_HIDDEN46 = 99,
  CH_HIDDEN47 = 100,
  CH_HIDDEN48 = 101,
  CH_HIDDEN49 = 102,
  CH_HIDDEN50 = 103,
  /**
   * RF_CH1 - channel_label_t values that correspond to rf_channels
   *   (= channels after applying limts)
   */
  RF_CH1 = 104,
  RF_CH2 = 105,
  RF_CH3 = 106,
  RF_CH4 = 107,
  RF_CH5 = 108,
  UNRECOGNIZED = -1,
}

export function packet_Config_Model_MixerUnit_SRCLabelFromJSON(
  object: any
): Packet_Config_Model_MixerUnit_SRCLabel {
  switch (object) {
    case 0:
    case "SRC_NONE":
      return Packet_Config_Model_MixerUnit_SRCLabel.SRC_NONE;
    case 1:
    case "IN_NONE":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_NONE;
    case 2:
    case "IN_ST":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_ST;
    case 3:
    case "IN_TH":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_TH;
    case 4:
    case "IN_THR":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_THR;
    case 5:
    case "IN_RUD":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_RUD;
    case 6:
    case "IN_AIL":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_AIL;
    case 7:
    case "IN_ELE":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_ELE;
    case 8:
    case "IN_AUX":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_AUX;
    case 9:
    case "IN_ST_DR":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_ST_DR;
    case 10:
    case "IN_RUD_DR":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_RUD_DR;
    case 11:
    case "IN_AIL_DR":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_AIL_DR;
    case 12:
    case "IN_ELE_DR":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_ELE_DR;
    case 13:
    case "IN_TH_DR":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_TH_DR;
    case 14:
    case "IN_THR_DR":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_THR_DR;
    case 15:
    case "IN_TH_HOLD":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_TH_HOLD;
    case 16:
    case "IN_GEAR":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_GEAR;
    case 17:
    case "IN_FLAPS":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_FLAPS;
    case 18:
    case "IN_TRAINER":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_TRAINER;
    case 19:
    case "IN_SIDE_L":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SIDE_L;
    case 20:
    case "IN_SIDE_R":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SIDE_R;
    case 21:
    case "IN_POT1":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT1;
    case 22:
    case "IN_POT2":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT2;
    case 23:
    case "IN_POT3":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT3;
    case 24:
    case "IN_POT4":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT4;
    case 25:
    case "IN_POT5":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT5;
    case 26:
    case "IN_POT6":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT6;
    case 27:
    case "IN_POT7":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT7;
    case 28:
    case "IN_POT8":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT8;
    case 29:
    case "IN_POT9":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_POT9;
    case 30:
    case "IN_SW1":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW1;
    case 31:
    case "IN_SW2":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW2;
    case 32:
    case "IN_SW3":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW3;
    case 33:
    case "IN_SW4":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW4;
    case 34:
    case "IN_SW5":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW5;
    case 35:
    case "IN_SW6":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW6;
    case 36:
    case "IN_SW7":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW7;
    case 37:
    case "IN_SW8":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW8;
    case 38:
    case "IN_SW9":
      return Packet_Config_Model_MixerUnit_SRCLabel.IN_SW9;
    case 39:
    case "CH_CH1":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_CH1;
    case 40:
    case "CH_CH2":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_CH2;
    case 41:
    case "CH_CH3":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_CH3;
    case 42:
    case "CH_CH4":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_CH4;
    case 43:
    case "CH_CH5":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_CH5;
    case 44:
    case "CH_VIRTUAL1":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL1;
    case 45:
    case "CH_VIRTUAL2":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL2;
    case 46:
    case "CH_VIRTUAL3":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL3;
    case 47:
    case "CH_VIRTUAL4":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL4;
    case 48:
    case "CH_VIRTUAL5":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL5;
    case 49:
    case "CH_VIRTUAL6":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL6;
    case 50:
    case "CH_VIRTUAL7":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL7;
    case 51:
    case "CH_VIRTUAL8":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL8;
    case 52:
    case "CH_VIRTUAL9":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL9;
    case 53:
    case "CH_VIRTUAL10":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL10;
    case 54:
    case "CH_HIDDEN1":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN1;
    case 55:
    case "CH_HIDDEN2":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN2;
    case 56:
    case "CH_HIDDEN3":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN3;
    case 57:
    case "CH_HIDDEN4":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN4;
    case 58:
    case "CH_HIDDEN5":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN5;
    case 59:
    case "CH_HIDDEN6":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN6;
    case 60:
    case "CH_HIDDEN7":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN7;
    case 61:
    case "CH_HIDDEN8":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN8;
    case 62:
    case "CH_HIDDEN9":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN9;
    case 63:
    case "CH_HIDDEN10":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN10;
    case 64:
    case "CH_HIDDEN11":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN11;
    case 65:
    case "CH_HIDDEN12":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN12;
    case 66:
    case "CH_HIDDEN13":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN13;
    case 67:
    case "CH_HIDDEN14":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN14;
    case 68:
    case "CH_HIDDEN15":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN15;
    case 69:
    case "CH_HIDDEN16":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN16;
    case 70:
    case "CH_HIDDEN17":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN17;
    case 71:
    case "CH_HIDDEN18":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN18;
    case 72:
    case "CH_HIDDEN19":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN19;
    case 73:
    case "CH_HIDDEN20":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN20;
    case 74:
    case "CH_HIDDEN21":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN21;
    case 75:
    case "CH_HIDDEN22":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN22;
    case 76:
    case "CH_HIDDEN23":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN23;
    case 77:
    case "CH_HIDDEN24":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN24;
    case 78:
    case "CH_HIDDEN25":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN25;
    case 79:
    case "CH_HIDDEN26":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN26;
    case 80:
    case "CH_HIDDEN27":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN27;
    case 81:
    case "CH_HIDDEN28":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN28;
    case 82:
    case "CH_HIDDEN29":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN29;
    case 83:
    case "CH_HIDDEN30":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN30;
    case 84:
    case "CH_HIDDEN31":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN31;
    case 85:
    case "CH_HIDDEN32":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN32;
    case 86:
    case "CH_HIDDEN33":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN33;
    case 87:
    case "CH_HIDDEN34":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN34;
    case 88:
    case "CH_HIDDEN35":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN35;
    case 89:
    case "CH_HIDDEN36":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN36;
    case 90:
    case "CH_HIDDEN37":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN37;
    case 91:
    case "CH_HIDDEN38":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN38;
    case 92:
    case "CH_HIDDEN39":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN39;
    case 93:
    case "CH_HIDDEN40":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN40;
    case 94:
    case "CH_HIDDEN41":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN41;
    case 95:
    case "CH_HIDDEN42":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN42;
    case 96:
    case "CH_HIDDEN43":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN43;
    case 97:
    case "CH_HIDDEN44":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN44;
    case 98:
    case "CH_HIDDEN45":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN45;
    case 99:
    case "CH_HIDDEN46":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN46;
    case 100:
    case "CH_HIDDEN47":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN47;
    case 101:
    case "CH_HIDDEN48":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN48;
    case 102:
    case "CH_HIDDEN49":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN49;
    case 103:
    case "CH_HIDDEN50":
      return Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN50;
    case 104:
    case "RF_CH1":
      return Packet_Config_Model_MixerUnit_SRCLabel.RF_CH1;
    case 105:
    case "RF_CH2":
      return Packet_Config_Model_MixerUnit_SRCLabel.RF_CH2;
    case 106:
    case "RF_CH3":
      return Packet_Config_Model_MixerUnit_SRCLabel.RF_CH3;
    case 107:
    case "RF_CH4":
      return Packet_Config_Model_MixerUnit_SRCLabel.RF_CH4;
    case 108:
    case "RF_CH5":
      return Packet_Config_Model_MixerUnit_SRCLabel.RF_CH5;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Config_Model_MixerUnit_SRCLabel.UNRECOGNIZED;
  }
}

export function packet_Config_Model_MixerUnit_SRCLabelToJSON(
  object: Packet_Config_Model_MixerUnit_SRCLabel
): string {
  switch (object) {
    case Packet_Config_Model_MixerUnit_SRCLabel.SRC_NONE:
      return "SRC_NONE";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_NONE:
      return "IN_NONE";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_ST:
      return "IN_ST";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_TH:
      return "IN_TH";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_THR:
      return "IN_THR";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_RUD:
      return "IN_RUD";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_AIL:
      return "IN_AIL";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_ELE:
      return "IN_ELE";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_AUX:
      return "IN_AUX";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_ST_DR:
      return "IN_ST_DR";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_RUD_DR:
      return "IN_RUD_DR";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_AIL_DR:
      return "IN_AIL_DR";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_ELE_DR:
      return "IN_ELE_DR";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_TH_DR:
      return "IN_TH_DR";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_THR_DR:
      return "IN_THR_DR";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_TH_HOLD:
      return "IN_TH_HOLD";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_GEAR:
      return "IN_GEAR";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_FLAPS:
      return "IN_FLAPS";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_TRAINER:
      return "IN_TRAINER";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SIDE_L:
      return "IN_SIDE_L";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SIDE_R:
      return "IN_SIDE_R";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT1:
      return "IN_POT1";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT2:
      return "IN_POT2";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT3:
      return "IN_POT3";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT4:
      return "IN_POT4";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT5:
      return "IN_POT5";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT6:
      return "IN_POT6";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT7:
      return "IN_POT7";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT8:
      return "IN_POT8";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_POT9:
      return "IN_POT9";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW1:
      return "IN_SW1";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW2:
      return "IN_SW2";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW3:
      return "IN_SW3";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW4:
      return "IN_SW4";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW5:
      return "IN_SW5";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW6:
      return "IN_SW6";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW7:
      return "IN_SW7";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW8:
      return "IN_SW8";
    case Packet_Config_Model_MixerUnit_SRCLabel.IN_SW9:
      return "IN_SW9";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_CH1:
      return "CH_CH1";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_CH2:
      return "CH_CH2";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_CH3:
      return "CH_CH3";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_CH4:
      return "CH_CH4";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_CH5:
      return "CH_CH5";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL1:
      return "CH_VIRTUAL1";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL2:
      return "CH_VIRTUAL2";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL3:
      return "CH_VIRTUAL3";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL4:
      return "CH_VIRTUAL4";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL5:
      return "CH_VIRTUAL5";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL6:
      return "CH_VIRTUAL6";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL7:
      return "CH_VIRTUAL7";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL8:
      return "CH_VIRTUAL8";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL9:
      return "CH_VIRTUAL9";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_VIRTUAL10:
      return "CH_VIRTUAL10";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN1:
      return "CH_HIDDEN1";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN2:
      return "CH_HIDDEN2";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN3:
      return "CH_HIDDEN3";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN4:
      return "CH_HIDDEN4";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN5:
      return "CH_HIDDEN5";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN6:
      return "CH_HIDDEN6";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN7:
      return "CH_HIDDEN7";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN8:
      return "CH_HIDDEN8";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN9:
      return "CH_HIDDEN9";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN10:
      return "CH_HIDDEN10";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN11:
      return "CH_HIDDEN11";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN12:
      return "CH_HIDDEN12";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN13:
      return "CH_HIDDEN13";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN14:
      return "CH_HIDDEN14";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN15:
      return "CH_HIDDEN15";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN16:
      return "CH_HIDDEN16";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN17:
      return "CH_HIDDEN17";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN18:
      return "CH_HIDDEN18";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN19:
      return "CH_HIDDEN19";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN20:
      return "CH_HIDDEN20";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN21:
      return "CH_HIDDEN21";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN22:
      return "CH_HIDDEN22";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN23:
      return "CH_HIDDEN23";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN24:
      return "CH_HIDDEN24";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN25:
      return "CH_HIDDEN25";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN26:
      return "CH_HIDDEN26";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN27:
      return "CH_HIDDEN27";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN28:
      return "CH_HIDDEN28";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN29:
      return "CH_HIDDEN29";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN30:
      return "CH_HIDDEN30";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN31:
      return "CH_HIDDEN31";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN32:
      return "CH_HIDDEN32";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN33:
      return "CH_HIDDEN33";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN34:
      return "CH_HIDDEN34";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN35:
      return "CH_HIDDEN35";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN36:
      return "CH_HIDDEN36";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN37:
      return "CH_HIDDEN37";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN38:
      return "CH_HIDDEN38";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN39:
      return "CH_HIDDEN39";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN40:
      return "CH_HIDDEN40";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN41:
      return "CH_HIDDEN41";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN42:
      return "CH_HIDDEN42";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN43:
      return "CH_HIDDEN43";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN44:
      return "CH_HIDDEN44";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN45:
      return "CH_HIDDEN45";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN46:
      return "CH_HIDDEN46";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN47:
      return "CH_HIDDEN47";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN48:
      return "CH_HIDDEN48";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN49:
      return "CH_HIDDEN49";
    case Packet_Config_Model_MixerUnit_SRCLabel.CH_HIDDEN50:
      return "CH_HIDDEN50";
    case Packet_Config_Model_MixerUnit_SRCLabel.RF_CH1:
      return "RF_CH1";
    case Packet_Config_Model_MixerUnit_SRCLabel.RF_CH2:
      return "RF_CH2";
    case Packet_Config_Model_MixerUnit_SRCLabel.RF_CH3:
      return "RF_CH3";
    case Packet_Config_Model_MixerUnit_SRCLabel.RF_CH4:
      return "RF_CH4";
    case Packet_Config_Model_MixerUnit_SRCLabel.RF_CH5:
      return "RF_CH5";
    default:
      return "UNKNOWN";
  }
}

/** The following items must be in sequence: */
export enum Packet_Config_Model_MixerUnit_ChannelLabel {
  /** CH1 - NUMBER_OF_RF_CHANNELS channels (CH1..CHxxx) */
  CH1 = 0,
  CH2 = 1,
  CH3 = 2,
  CH4 = 3,
  CH5 = 4,
  /** VIRTUAL1 - NUMBER_OF_VIRTUAL_CHANNELS virtual channels (VIRTUAL1..VIRTUALxxx) = 5; */
  VIRTUAL1 = 6,
  VIRTUAL2 = 7,
  VIRTUAL3 = 8,
  VIRTUAL4 = 9,
  VIRTUAL5 = 10,
  VIRTUAL6 = 11,
  VIRTUAL7 = 12,
  VIRTUAL8 = 13,
  VIRTUAL9 = 14,
  VIRTUAL10 = 15,
  /**
   * HIDDEN1 - NUMBER_OF_HIDDEN_VIRTUAL_CHANNELS hidden channels to be used by the
   * complex mixer UI (HIDDEN1..HIDDENxxx)
   */
  HIDDEN1 = 16,
  HIDDEN2 = 17,
  HIDDEN3 = 18,
  HIDDEN4 = 19,
  HIDDEN5 = 20,
  HIDDEN6 = 21,
  HIDDEN7 = 22,
  HIDDEN8 = 23,
  HIDDEN9 = 24,
  HIDDEN10 = 25,
  HIDDEN11 = 26,
  HIDDEN12 = 27,
  HIDDEN13 = 28,
  HIDDEN14 = 29,
  HIDDEN15 = 30,
  HIDDEN16 = 31,
  HIDDEN17 = 32,
  HIDDEN18 = 33,
  HIDDEN19 = 34,
  HIDDEN20 = 35,
  HIDDEN21 = 36,
  HIDDEN22 = 37,
  HIDDEN23 = 38,
  HIDDEN24 = 39,
  HIDDEN25 = 40,
  HIDDEN26 = 41,
  HIDDEN27 = 42,
  HIDDEN28 = 43,
  HIDDEN29 = 44,
  HIDDEN30 = 45,
  HIDDEN31 = 46,
  HIDDEN32 = 47,
  HIDDEN33 = 48,
  HIDDEN34 = 49,
  HIDDEN35 = 50,
  HIDDEN36 = 51,
  HIDDEN37 = 52,
  HIDDEN38 = 53,
  HIDDEN39 = 54,
  HIDDEN40 = 55,
  HIDDEN41 = 56,
  HIDDEN42 = 57,
  HIDDEN43 = 58,
  HIDDEN44 = 59,
  HIDDEN45 = 60,
  HIDDEN46 = 61,
  HIDDEN47 = 62,
  HIDDEN48 = 63,
  HIDDEN49 = 64,
  HIDDEN50 = 65,
  UNRECOGNIZED = -1,
}

export function packet_Config_Model_MixerUnit_ChannelLabelFromJSON(
  object: any
): Packet_Config_Model_MixerUnit_ChannelLabel {
  switch (object) {
    case 0:
    case "CH1":
      return Packet_Config_Model_MixerUnit_ChannelLabel.CH1;
    case 1:
    case "CH2":
      return Packet_Config_Model_MixerUnit_ChannelLabel.CH2;
    case 2:
    case "CH3":
      return Packet_Config_Model_MixerUnit_ChannelLabel.CH3;
    case 3:
    case "CH4":
      return Packet_Config_Model_MixerUnit_ChannelLabel.CH4;
    case 4:
    case "CH5":
      return Packet_Config_Model_MixerUnit_ChannelLabel.CH5;
    case 6:
    case "VIRTUAL1":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL1;
    case 7:
    case "VIRTUAL2":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL2;
    case 8:
    case "VIRTUAL3":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL3;
    case 9:
    case "VIRTUAL4":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL4;
    case 10:
    case "VIRTUAL5":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL5;
    case 11:
    case "VIRTUAL6":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL6;
    case 12:
    case "VIRTUAL7":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL7;
    case 13:
    case "VIRTUAL8":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL8;
    case 14:
    case "VIRTUAL9":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL9;
    case 15:
    case "VIRTUAL10":
      return Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL10;
    case 16:
    case "HIDDEN1":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN1;
    case 17:
    case "HIDDEN2":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN2;
    case 18:
    case "HIDDEN3":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN3;
    case 19:
    case "HIDDEN4":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN4;
    case 20:
    case "HIDDEN5":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN5;
    case 21:
    case "HIDDEN6":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN6;
    case 22:
    case "HIDDEN7":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN7;
    case 23:
    case "HIDDEN8":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN8;
    case 24:
    case "HIDDEN9":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN9;
    case 25:
    case "HIDDEN10":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN10;
    case 26:
    case "HIDDEN11":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN11;
    case 27:
    case "HIDDEN12":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN12;
    case 28:
    case "HIDDEN13":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN13;
    case 29:
    case "HIDDEN14":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN14;
    case 30:
    case "HIDDEN15":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN15;
    case 31:
    case "HIDDEN16":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN16;
    case 32:
    case "HIDDEN17":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN17;
    case 33:
    case "HIDDEN18":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN18;
    case 34:
    case "HIDDEN19":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN19;
    case 35:
    case "HIDDEN20":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN20;
    case 36:
    case "HIDDEN21":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN21;
    case 37:
    case "HIDDEN22":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN22;
    case 38:
    case "HIDDEN23":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN23;
    case 39:
    case "HIDDEN24":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN24;
    case 40:
    case "HIDDEN25":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN25;
    case 41:
    case "HIDDEN26":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN26;
    case 42:
    case "HIDDEN27":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN27;
    case 43:
    case "HIDDEN28":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN28;
    case 44:
    case "HIDDEN29":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN29;
    case 45:
    case "HIDDEN30":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN30;
    case 46:
    case "HIDDEN31":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN31;
    case 47:
    case "HIDDEN32":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN32;
    case 48:
    case "HIDDEN33":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN33;
    case 49:
    case "HIDDEN34":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN34;
    case 50:
    case "HIDDEN35":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN35;
    case 51:
    case "HIDDEN36":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN36;
    case 52:
    case "HIDDEN37":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN37;
    case 53:
    case "HIDDEN38":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN38;
    case 54:
    case "HIDDEN39":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN39;
    case 55:
    case "HIDDEN40":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN40;
    case 56:
    case "HIDDEN41":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN41;
    case 57:
    case "HIDDEN42":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN42;
    case 58:
    case "HIDDEN43":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN43;
    case 59:
    case "HIDDEN44":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN44;
    case 60:
    case "HIDDEN45":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN45;
    case 61:
    case "HIDDEN46":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN46;
    case 62:
    case "HIDDEN47":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN47;
    case 63:
    case "HIDDEN48":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN48;
    case 64:
    case "HIDDEN49":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN49;
    case 65:
    case "HIDDEN50":
      return Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN50;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Config_Model_MixerUnit_ChannelLabel.UNRECOGNIZED;
  }
}

export function packet_Config_Model_MixerUnit_ChannelLabelToJSON(
  object: Packet_Config_Model_MixerUnit_ChannelLabel
): string {
  switch (object) {
    case Packet_Config_Model_MixerUnit_ChannelLabel.CH1:
      return "CH1";
    case Packet_Config_Model_MixerUnit_ChannelLabel.CH2:
      return "CH2";
    case Packet_Config_Model_MixerUnit_ChannelLabel.CH3:
      return "CH3";
    case Packet_Config_Model_MixerUnit_ChannelLabel.CH4:
      return "CH4";
    case Packet_Config_Model_MixerUnit_ChannelLabel.CH5:
      return "CH5";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL1:
      return "VIRTUAL1";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL2:
      return "VIRTUAL2";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL3:
      return "VIRTUAL3";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL4:
      return "VIRTUAL4";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL5:
      return "VIRTUAL5";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL6:
      return "VIRTUAL6";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL7:
      return "VIRTUAL7";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL8:
      return "VIRTUAL8";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL9:
      return "VIRTUAL9";
    case Packet_Config_Model_MixerUnit_ChannelLabel.VIRTUAL10:
      return "VIRTUAL10";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN1:
      return "HIDDEN1";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN2:
      return "HIDDEN2";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN3:
      return "HIDDEN3";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN4:
      return "HIDDEN4";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN5:
      return "HIDDEN5";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN6:
      return "HIDDEN6";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN7:
      return "HIDDEN7";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN8:
      return "HIDDEN8";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN9:
      return "HIDDEN9";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN10:
      return "HIDDEN10";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN11:
      return "HIDDEN11";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN12:
      return "HIDDEN12";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN13:
      return "HIDDEN13";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN14:
      return "HIDDEN14";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN15:
      return "HIDDEN15";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN16:
      return "HIDDEN16";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN17:
      return "HIDDEN17";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN18:
      return "HIDDEN18";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN19:
      return "HIDDEN19";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN20:
      return "HIDDEN20";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN21:
      return "HIDDEN21";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN22:
      return "HIDDEN22";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN23:
      return "HIDDEN23";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN24:
      return "HIDDEN24";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN25:
      return "HIDDEN25";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN26:
      return "HIDDEN26";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN27:
      return "HIDDEN27";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN28:
      return "HIDDEN28";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN29:
      return "HIDDEN29";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN30:
      return "HIDDEN30";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN31:
      return "HIDDEN31";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN32:
      return "HIDDEN32";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN33:
      return "HIDDEN33";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN34:
      return "HIDDEN34";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN35:
      return "HIDDEN35";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN36:
      return "HIDDEN36";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN37:
      return "HIDDEN37";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN38:
      return "HIDDEN38";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN39:
      return "HIDDEN39";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN40:
      return "HIDDEN40";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN41:
      return "HIDDEN41";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN42:
      return "HIDDEN42";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN43:
      return "HIDDEN43";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN44:
      return "HIDDEN44";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN45:
      return "HIDDEN45";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN46:
      return "HIDDEN46";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN47:
      return "HIDDEN47";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN48:
      return "HIDDEN48";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN49:
      return "HIDDEN49";
    case Packet_Config_Model_MixerUnit_ChannelLabel.HIDDEN50:
      return "HIDDEN50";
    default:
      return "UNKNOWN";
  }
}

export enum Packet_Config_Model_MixerUnit_OperationType {
  OP_REPLACE = 0,
  OP_ADD = 1,
  OP_MULTIPLY = 2,
  OP_MIN = 3,
  OP_MAX = 4,
  UNRECOGNIZED = -1,
}

export function packet_Config_Model_MixerUnit_OperationTypeFromJSON(
  object: any
): Packet_Config_Model_MixerUnit_OperationType {
  switch (object) {
    case 0:
    case "OP_REPLACE":
      return Packet_Config_Model_MixerUnit_OperationType.OP_REPLACE;
    case 1:
    case "OP_ADD":
      return Packet_Config_Model_MixerUnit_OperationType.OP_ADD;
    case 2:
    case "OP_MULTIPLY":
      return Packet_Config_Model_MixerUnit_OperationType.OP_MULTIPLY;
    case 3:
    case "OP_MIN":
      return Packet_Config_Model_MixerUnit_OperationType.OP_MIN;
    case 4:
    case "OP_MAX":
      return Packet_Config_Model_MixerUnit_OperationType.OP_MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Packet_Config_Model_MixerUnit_OperationType.UNRECOGNIZED;
  }
}

export function packet_Config_Model_MixerUnit_OperationTypeToJSON(
  object: Packet_Config_Model_MixerUnit_OperationType
): string {
  switch (object) {
    case Packet_Config_Model_MixerUnit_OperationType.OP_REPLACE:
      return "OP_REPLACE";
    case Packet_Config_Model_MixerUnit_OperationType.OP_ADD:
      return "OP_ADD";
    case Packet_Config_Model_MixerUnit_OperationType.OP_MULTIPLY:
      return "OP_MULTIPLY";
    case Packet_Config_Model_MixerUnit_OperationType.OP_MIN:
      return "OP_MIN";
    case Packet_Config_Model_MixerUnit_OperationType.OP_MAX:
      return "OP_MAX";
    default:
      return "UNKNOWN";
  }
}

export interface Packet_Config_Model_Limits {
  epL: number;
  epH: number;
  subtrim: number;
  limitL: number;
  limitH: number;
  failsafe: number;
  speed: number;
  invert: boolean;
}

const basePacket: object = { type: 0 };

export const Packet = {
  encode(
    message: Packet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.config !== undefined) {
      Packet_Config.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacket } as Packet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.config = Packet_Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet {
    const message = { ...basePacket } as Packet;
    if (object.type !== undefined && object.type !== null) {
      message.type = packet_CommandsFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Packet_Config.fromJSON(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },

  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = packet_CommandsToJSON(message.type));
    message.config !== undefined &&
      (obj.config = message.config
        ? Packet_Config.toJSON(message.config)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = { ...basePacket } as Packet;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Packet_Config.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },
};

const basePacket_Config: object = { version: 0 };

export const Packet_Config = {
  encode(
    message: Packet_Config,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.tx !== undefined) {
      Packet_Config_TX.encode(message.tx, writer.uint32(18).fork()).ldelim();
    }
    if (message.model !== undefined) {
      Packet_Config_Model.encode(
        message.model,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet_Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacket_Config } as Packet_Config;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.tx = Packet_Config_TX.decode(reader, reader.uint32());
          break;
        case 3:
          message.model = Packet_Config_Model.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet_Config {
    const message = { ...basePacket_Config } as Packet_Config;
    if (object.version !== undefined && object.version !== null) {
      message.version = Number(object.version);
    } else {
      message.version = 0;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Packet_Config_TX.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = Packet_Config_Model.fromJSON(object.model);
    } else {
      message.model = undefined;
    }
    return message;
  },

  toJSON(message: Packet_Config): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.tx !== undefined &&
      (obj.tx = message.tx ? Packet_Config_TX.toJSON(message.tx) : undefined);
    message.model !== undefined &&
      (obj.model = message.model
        ? Packet_Config_Model.toJSON(message.model)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Packet_Config>): Packet_Config {
    const message = { ...basePacket_Config } as Packet_Config;
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Packet_Config_TX.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = Packet_Config_Model.fromPartial(object.model);
    } else {
      message.model = undefined;
    }
    return message;
  },
};

const basePacket_Config_TX: object = {
  uuid: 0,
  name: "",
  trimRange: 0,
  trimStepSize: 0,
};

export const Packet_Config_TX = {
  encode(
    message: Packet_Config_TX,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.uuid) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.controllerInputs) {
      Packet_Config_TX_ControllerInput.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.trimRange !== 0) {
      writer.uint32(32).int32(message.trimRange);
    }
    if (message.trimStepSize !== 0) {
      writer.uint32(40).int32(message.trimStepSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet_Config_TX {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacket_Config_TX } as Packet_Config_TX;
    message.uuid = [];
    message.controllerInputs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.uuid.push(reader.uint32());
            }
          } else {
            message.uuid.push(reader.uint32());
          }
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.controllerInputs.push(
            Packet_Config_TX_ControllerInput.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.trimRange = reader.int32();
          break;
        case 5:
          message.trimStepSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet_Config_TX {
    const message = { ...basePacket_Config_TX } as Packet_Config_TX;
    message.uuid = [];
    message.controllerInputs = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      for (const e of object.uuid) {
        message.uuid.push(Number(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.controllerInputs !== undefined &&
      object.controllerInputs !== null
    ) {
      for (const e of object.controllerInputs) {
        message.controllerInputs.push(
          Packet_Config_TX_ControllerInput.fromJSON(e)
        );
      }
    }
    if (object.trimRange !== undefined && object.trimRange !== null) {
      message.trimRange = Number(object.trimRange);
    } else {
      message.trimRange = 0;
    }
    if (object.trimStepSize !== undefined && object.trimStepSize !== null) {
      message.trimStepSize = Number(object.trimStepSize);
    } else {
      message.trimStepSize = 0;
    }
    return message;
  },

  toJSON(message: Packet_Config_TX): unknown {
    const obj: any = {};
    if (message.uuid) {
      obj.uuid = message.uuid.map((e) => e);
    } else {
      obj.uuid = [];
    }
    message.name !== undefined && (obj.name = message.name);
    if (message.controllerInputs) {
      obj.controllerInputs = message.controllerInputs.map((e) =>
        e ? Packet_Config_TX_ControllerInput.toJSON(e) : undefined
      );
    } else {
      obj.controllerInputs = [];
    }
    message.trimRange !== undefined && (obj.trimRange = message.trimRange);
    message.trimStepSize !== undefined &&
      (obj.trimStepSize = message.trimStepSize);
    return obj;
  },

  fromPartial(object: DeepPartial<Packet_Config_TX>): Packet_Config_TX {
    const message = { ...basePacket_Config_TX } as Packet_Config_TX;
    message.uuid = [];
    message.controllerInputs = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      for (const e of object.uuid) {
        message.uuid.push(e);
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.controllerInputs !== undefined &&
      object.controllerInputs !== null
    ) {
      for (const e of object.controllerInputs) {
        message.controllerInputs.push(
          Packet_Config_TX_ControllerInput.fromPartial(e)
        );
      }
    }
    if (object.trimRange !== undefined && object.trimRange !== null) {
      message.trimRange = object.trimRange;
    } else {
      message.trimRange = 0;
    }
    if (object.trimStepSize !== undefined && object.trimStepSize !== null) {
      message.trimStepSize = object.trimStepSize;
    } else {
      message.trimStepSize = 0;
    }
    return message;
  },
};

const basePacket_Config_TX_ControllerInput: object = {
  hardwareType: 0,
  inputType: 0,
  inputSubType: 0,
  port: 0,
  calibration: 0,
  labels: 0,
};

export const Packet_Config_TX_ControllerInput = {
  encode(
    message: Packet_Config_TX_ControllerInput,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hardwareType !== 0) {
      writer.uint32(8).int32(message.hardwareType);
    }
    if (message.inputType !== 0) {
      writer.uint32(16).int32(message.inputType);
    }
    if (message.inputSubType !== 0) {
      writer.uint32(24).int32(message.inputSubType);
    }
    if (message.port !== 0) {
      writer.uint32(32).uint32(message.port);
    }
    writer.uint32(42).fork();
    for (const v of message.calibration) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.labels) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Packet_Config_TX_ControllerInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePacket_Config_TX_ControllerInput,
    } as Packet_Config_TX_ControllerInput;
    message.calibration = [];
    message.labels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hardwareType = reader.int32() as any;
          break;
        case 2:
          message.inputType = reader.int32() as any;
          break;
        case 3:
          message.inputSubType = reader.int32() as any;
          break;
        case 4:
          message.port = reader.uint32();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.calibration.push(reader.uint32());
            }
          } else {
            message.calibration.push(reader.uint32());
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.labels.push(reader.int32() as any);
            }
          } else {
            message.labels.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet_Config_TX_ControllerInput {
    const message = {
      ...basePacket_Config_TX_ControllerInput,
    } as Packet_Config_TX_ControllerInput;
    message.calibration = [];
    message.labels = [];
    if (object.hardwareType !== undefined && object.hardwareType !== null) {
      message.hardwareType = packet_Config_TX_ControllerInput_HardwareTypeFromJSON(
        object.hardwareType
      );
    } else {
      message.hardwareType = 0;
    }
    if (object.inputType !== undefined && object.inputType !== null) {
      message.inputType = packet_Config_TX_ControllerInput_InputTypeFromJSON(
        object.inputType
      );
    } else {
      message.inputType = 0;
    }
    if (object.inputSubType !== undefined && object.inputSubType !== null) {
      message.inputSubType = packet_Config_TX_ControllerInput_InputSubTypeFromJSON(
        object.inputSubType
      );
    } else {
      message.inputSubType = 0;
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = Number(object.port);
    } else {
      message.port = 0;
    }
    if (object.calibration !== undefined && object.calibration !== null) {
      for (const e of object.calibration) {
        message.calibration.push(Number(e));
      }
    }
    if (object.labels !== undefined && object.labels !== null) {
      for (const e of object.labels) {
        message.labels.push(
          packet_Config_TX_ControllerInput_InputLabelFromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: Packet_Config_TX_ControllerInput): unknown {
    const obj: any = {};
    message.hardwareType !== undefined &&
      (obj.hardwareType = packet_Config_TX_ControllerInput_HardwareTypeToJSON(
        message.hardwareType
      ));
    message.inputType !== undefined &&
      (obj.inputType = packet_Config_TX_ControllerInput_InputTypeToJSON(
        message.inputType
      ));
    message.inputSubType !== undefined &&
      (obj.inputSubType = packet_Config_TX_ControllerInput_InputSubTypeToJSON(
        message.inputSubType
      ));
    message.port !== undefined && (obj.port = message.port);
    if (message.calibration) {
      obj.calibration = message.calibration.map((e) => e);
    } else {
      obj.calibration = [];
    }
    if (message.labels) {
      obj.labels = message.labels.map((e) =>
        packet_Config_TX_ControllerInput_InputLabelToJSON(e)
      );
    } else {
      obj.labels = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<Packet_Config_TX_ControllerInput>
  ): Packet_Config_TX_ControllerInput {
    const message = {
      ...basePacket_Config_TX_ControllerInput,
    } as Packet_Config_TX_ControllerInput;
    message.calibration = [];
    message.labels = [];
    if (object.hardwareType !== undefined && object.hardwareType !== null) {
      message.hardwareType = object.hardwareType;
    } else {
      message.hardwareType = 0;
    }
    if (object.inputType !== undefined && object.inputType !== null) {
      message.inputType = object.inputType;
    } else {
      message.inputType = 0;
    }
    if (object.inputSubType !== undefined && object.inputSubType !== null) {
      message.inputSubType = object.inputSubType;
    } else {
      message.inputSubType = 0;
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = 0;
    }
    if (object.calibration !== undefined && object.calibration !== null) {
      for (const e of object.calibration) {
        message.calibration.push(e);
      }
    }
    if (object.labels !== undefined && object.labels !== null) {
      for (const e of object.labels) {
        message.labels.push(e);
      }
    }
    return message;
  },
};

const basePacket_Config_Model: object = {
  uuid: 0,
  name: "",
  rfProtocolType: 0,
};

export const Packet_Config_Model = {
  encode(
    message: Packet_Config_Model,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.uuid) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.mixerUnits) {
      Packet_Config_Model_MixerUnit.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.limits) {
      Packet_Config_Model_Limits.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rfProtocolType !== 0) {
      writer.uint32(40).int32(message.rfProtocolType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet_Config_Model {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacket_Config_Model } as Packet_Config_Model;
    message.uuid = [];
    message.mixerUnits = [];
    message.limits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.uuid.push(reader.uint32());
            }
          } else {
            message.uuid.push(reader.uint32());
          }
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.mixerUnits.push(
            Packet_Config_Model_MixerUnit.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.limits.push(
            Packet_Config_Model_Limits.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.rfProtocolType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet_Config_Model {
    const message = { ...basePacket_Config_Model } as Packet_Config_Model;
    message.uuid = [];
    message.mixerUnits = [];
    message.limits = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      for (const e of object.uuid) {
        message.uuid.push(Number(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.mixerUnits !== undefined && object.mixerUnits !== null) {
      for (const e of object.mixerUnits) {
        message.mixerUnits.push(Packet_Config_Model_MixerUnit.fromJSON(e));
      }
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(Packet_Config_Model_Limits.fromJSON(e));
      }
    }
    if (object.rfProtocolType !== undefined && object.rfProtocolType !== null) {
      message.rfProtocolType = packet_Config_Model_RFProtocolTypeFromJSON(
        object.rfProtocolType
      );
    } else {
      message.rfProtocolType = 0;
    }
    return message;
  },

  toJSON(message: Packet_Config_Model): unknown {
    const obj: any = {};
    if (message.uuid) {
      obj.uuid = message.uuid.map((e) => e);
    } else {
      obj.uuid = [];
    }
    message.name !== undefined && (obj.name = message.name);
    if (message.mixerUnits) {
      obj.mixerUnits = message.mixerUnits.map((e) =>
        e ? Packet_Config_Model_MixerUnit.toJSON(e) : undefined
      );
    } else {
      obj.mixerUnits = [];
    }
    if (message.limits) {
      obj.limits = message.limits.map((e) =>
        e ? Packet_Config_Model_Limits.toJSON(e) : undefined
      );
    } else {
      obj.limits = [];
    }
    message.rfProtocolType !== undefined &&
      (obj.rfProtocolType = packet_Config_Model_RFProtocolTypeToJSON(
        message.rfProtocolType
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Packet_Config_Model>): Packet_Config_Model {
    const message = { ...basePacket_Config_Model } as Packet_Config_Model;
    message.uuid = [];
    message.mixerUnits = [];
    message.limits = [];
    if (object.uuid !== undefined && object.uuid !== null) {
      for (const e of object.uuid) {
        message.uuid.push(e);
      }
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.mixerUnits !== undefined && object.mixerUnits !== null) {
      for (const e of object.mixerUnits) {
        message.mixerUnits.push(Packet_Config_Model_MixerUnit.fromPartial(e));
      }
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(Packet_Config_Model_Limits.fromPartial(e));
      }
    }
    if (object.rfProtocolType !== undefined && object.rfProtocolType !== null) {
      message.rfProtocolType = object.rfProtocolType;
    } else {
      message.rfProtocolType = 0;
    }
    return message;
  },
};

const basePacket_Config_Model_MixerUnit: object = {
  src: 0,
  dst: 0,
  scalar: 0,
  offset: 0,
  applyTrim: false,
  invertSource: false,
  op: 0,
};

export const Packet_Config_Model_MixerUnit = {
  encode(
    message: Packet_Config_Model_MixerUnit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.src !== 0) {
      writer.uint32(8).int32(message.src);
    }
    if (message.dst !== 0) {
      writer.uint32(16).int32(message.dst);
    }
    if (message.scalar !== 0) {
      writer.uint32(24).int32(message.scalar);
    }
    if (message.offset !== 0) {
      writer.uint32(32).int32(message.offset);
    }
    if (message.applyTrim === true) {
      writer.uint32(40).bool(message.applyTrim);
    }
    if (message.invertSource === true) {
      writer.uint32(48).bool(message.invertSource);
    }
    if (message.op !== 0) {
      writer.uint32(56).int32(message.op);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Packet_Config_Model_MixerUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePacket_Config_Model_MixerUnit,
    } as Packet_Config_Model_MixerUnit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.src = reader.int32() as any;
          break;
        case 2:
          message.dst = reader.int32() as any;
          break;
        case 3:
          message.scalar = reader.int32();
          break;
        case 4:
          message.offset = reader.int32();
          break;
        case 5:
          message.applyTrim = reader.bool();
          break;
        case 6:
          message.invertSource = reader.bool();
          break;
        case 7:
          message.op = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet_Config_Model_MixerUnit {
    const message = {
      ...basePacket_Config_Model_MixerUnit,
    } as Packet_Config_Model_MixerUnit;
    if (object.src !== undefined && object.src !== null) {
      message.src = packet_Config_Model_MixerUnit_SRCLabelFromJSON(object.src);
    } else {
      message.src = 0;
    }
    if (object.dst !== undefined && object.dst !== null) {
      message.dst = packet_Config_Model_MixerUnit_ChannelLabelFromJSON(
        object.dst
      );
    } else {
      message.dst = 0;
    }
    if (object.scalar !== undefined && object.scalar !== null) {
      message.scalar = Number(object.scalar);
    } else {
      message.scalar = 0;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = Number(object.offset);
    } else {
      message.offset = 0;
    }
    if (object.applyTrim !== undefined && object.applyTrim !== null) {
      message.applyTrim = Boolean(object.applyTrim);
    } else {
      message.applyTrim = false;
    }
    if (object.invertSource !== undefined && object.invertSource !== null) {
      message.invertSource = Boolean(object.invertSource);
    } else {
      message.invertSource = false;
    }
    if (object.op !== undefined && object.op !== null) {
      message.op = packet_Config_Model_MixerUnit_OperationTypeFromJSON(
        object.op
      );
    } else {
      message.op = 0;
    }
    return message;
  },

  toJSON(message: Packet_Config_Model_MixerUnit): unknown {
    const obj: any = {};
    message.src !== undefined &&
      (obj.src = packet_Config_Model_MixerUnit_SRCLabelToJSON(message.src));
    message.dst !== undefined &&
      (obj.dst = packet_Config_Model_MixerUnit_ChannelLabelToJSON(message.dst));
    message.scalar !== undefined && (obj.scalar = message.scalar);
    message.offset !== undefined && (obj.offset = message.offset);
    message.applyTrim !== undefined && (obj.applyTrim = message.applyTrim);
    message.invertSource !== undefined &&
      (obj.invertSource = message.invertSource);
    message.op !== undefined &&
      (obj.op = packet_Config_Model_MixerUnit_OperationTypeToJSON(message.op));
    return obj;
  },

  fromPartial(
    object: DeepPartial<Packet_Config_Model_MixerUnit>
  ): Packet_Config_Model_MixerUnit {
    const message = {
      ...basePacket_Config_Model_MixerUnit,
    } as Packet_Config_Model_MixerUnit;
    if (object.src !== undefined && object.src !== null) {
      message.src = object.src;
    } else {
      message.src = 0;
    }
    if (object.dst !== undefined && object.dst !== null) {
      message.dst = object.dst;
    } else {
      message.dst = 0;
    }
    if (object.scalar !== undefined && object.scalar !== null) {
      message.scalar = object.scalar;
    } else {
      message.scalar = 0;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = 0;
    }
    if (object.applyTrim !== undefined && object.applyTrim !== null) {
      message.applyTrim = object.applyTrim;
    } else {
      message.applyTrim = false;
    }
    if (object.invertSource !== undefined && object.invertSource !== null) {
      message.invertSource = object.invertSource;
    } else {
      message.invertSource = false;
    }
    if (object.op !== undefined && object.op !== null) {
      message.op = object.op;
    } else {
      message.op = 0;
    }
    return message;
  },
};

const basePacket_Config_Model_Limits: object = {
  epL: 0,
  epH: 0,
  subtrim: 0,
  limitL: 0,
  limitH: 0,
  failsafe: 0,
  speed: 0,
  invert: false,
};

export const Packet_Config_Model_Limits = {
  encode(
    message: Packet_Config_Model_Limits,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epL !== 0) {
      writer.uint32(8).int32(message.epL);
    }
    if (message.epH !== 0) {
      writer.uint32(16).int32(message.epH);
    }
    if (message.subtrim !== 0) {
      writer.uint32(24).int32(message.subtrim);
    }
    if (message.limitL !== 0) {
      writer.uint32(32).int32(message.limitL);
    }
    if (message.limitH !== 0) {
      writer.uint32(40).int32(message.limitH);
    }
    if (message.failsafe !== 0) {
      writer.uint32(48).int32(message.failsafe);
    }
    if (message.speed !== 0) {
      writer.uint32(56).uint32(message.speed);
    }
    if (message.invert === true) {
      writer.uint32(64).bool(message.invert);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Packet_Config_Model_Limits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePacket_Config_Model_Limits,
    } as Packet_Config_Model_Limits;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epL = reader.int32();
          break;
        case 2:
          message.epH = reader.int32();
          break;
        case 3:
          message.subtrim = reader.int32();
          break;
        case 4:
          message.limitL = reader.int32();
          break;
        case 5:
          message.limitH = reader.int32();
          break;
        case 6:
          message.failsafe = reader.int32();
          break;
        case 7:
          message.speed = reader.uint32();
          break;
        case 8:
          message.invert = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Packet_Config_Model_Limits {
    const message = {
      ...basePacket_Config_Model_Limits,
    } as Packet_Config_Model_Limits;
    if (object.epL !== undefined && object.epL !== null) {
      message.epL = Number(object.epL);
    } else {
      message.epL = 0;
    }
    if (object.epH !== undefined && object.epH !== null) {
      message.epH = Number(object.epH);
    } else {
      message.epH = 0;
    }
    if (object.subtrim !== undefined && object.subtrim !== null) {
      message.subtrim = Number(object.subtrim);
    } else {
      message.subtrim = 0;
    }
    if (object.limitL !== undefined && object.limitL !== null) {
      message.limitL = Number(object.limitL);
    } else {
      message.limitL = 0;
    }
    if (object.limitH !== undefined && object.limitH !== null) {
      message.limitH = Number(object.limitH);
    } else {
      message.limitH = 0;
    }
    if (object.failsafe !== undefined && object.failsafe !== null) {
      message.failsafe = Number(object.failsafe);
    } else {
      message.failsafe = 0;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = Number(object.speed);
    } else {
      message.speed = 0;
    }
    if (object.invert !== undefined && object.invert !== null) {
      message.invert = Boolean(object.invert);
    } else {
      message.invert = false;
    }
    return message;
  },

  toJSON(message: Packet_Config_Model_Limits): unknown {
    const obj: any = {};
    message.epL !== undefined && (obj.epL = message.epL);
    message.epH !== undefined && (obj.epH = message.epH);
    message.subtrim !== undefined && (obj.subtrim = message.subtrim);
    message.limitL !== undefined && (obj.limitL = message.limitL);
    message.limitH !== undefined && (obj.limitH = message.limitH);
    message.failsafe !== undefined && (obj.failsafe = message.failsafe);
    message.speed !== undefined && (obj.speed = message.speed);
    message.invert !== undefined && (obj.invert = message.invert);
    return obj;
  },

  fromPartial(
    object: DeepPartial<Packet_Config_Model_Limits>
  ): Packet_Config_Model_Limits {
    const message = {
      ...basePacket_Config_Model_Limits,
    } as Packet_Config_Model_Limits;
    if (object.epL !== undefined && object.epL !== null) {
      message.epL = object.epL;
    } else {
      message.epL = 0;
    }
    if (object.epH !== undefined && object.epH !== null) {
      message.epH = object.epH;
    } else {
      message.epH = 0;
    }
    if (object.subtrim !== undefined && object.subtrim !== null) {
      message.subtrim = object.subtrim;
    } else {
      message.subtrim = 0;
    }
    if (object.limitL !== undefined && object.limitL !== null) {
      message.limitL = object.limitL;
    } else {
      message.limitL = 0;
    }
    if (object.limitH !== undefined && object.limitH !== null) {
      message.limitH = object.limitH;
    } else {
      message.limitH = 0;
    }
    if (object.failsafe !== undefined && object.failsafe !== null) {
      message.failsafe = object.failsafe;
    } else {
      message.failsafe = 0;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = object.speed;
    } else {
      message.speed = 0;
    }
    if (object.invert !== undefined && object.invert !== null) {
      message.invert = object.invert;
    } else {
      message.invert = false;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
