/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "";

export enum HardwareType {
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

export function hardwareTypeFromJSON(object: any): HardwareType {
  switch (object) {
    case 0:
    case "TRANSMITTER_INPUT_NOT_USED":
      return HardwareType.TRANSMITTER_INPUT_NOT_USED;
    case 1:
    case "ANALOG_WITH_CENTER_AUTO_RETURN":
      return HardwareType.ANALOG_WITH_CENTER_AUTO_RETURN;
    case 2:
    case "ANALOG_WITH_CENTER":
      return HardwareType.ANALOG_WITH_CENTER;
    case 3:
    case "ANALOG_NO_CENTER":
      return HardwareType.ANALOG_NO_CENTER;
    case 4:
    case "ANALOG_NO_CENTER_POSITIVE_ONLY":
      return HardwareType.ANALOG_NO_CENTER_POSITIVE_ONLY;
    case 5:
    case "ANALOG_MOMENTARY_ON_OFF":
      return HardwareType.ANALOG_MOMENTARY_ON_OFF;
    case 6:
    case "SWITCH_ON_OFF":
      return HardwareType.SWITCH_ON_OFF;
    case 7:
    case "SWITCH_ON_OPEN_OFF":
      return HardwareType.SWITCH_ON_OPEN_OFF;
    case 8:
    case "MOMENTARY_ON_OFF":
      return HardwareType.MOMENTARY_ON_OFF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HardwareType.UNRECOGNIZED;
  }
}

export function hardwareTypeToJSON(object: HardwareType): string {
  switch (object) {
    case HardwareType.TRANSMITTER_INPUT_NOT_USED:
      return "TRANSMITTER_INPUT_NOT_USED";
    case HardwareType.ANALOG_WITH_CENTER_AUTO_RETURN:
      return "ANALOG_WITH_CENTER_AUTO_RETURN";
    case HardwareType.ANALOG_WITH_CENTER:
      return "ANALOG_WITH_CENTER";
    case HardwareType.ANALOG_NO_CENTER:
      return "ANALOG_NO_CENTER";
    case HardwareType.ANALOG_NO_CENTER_POSITIVE_ONLY:
      return "ANALOG_NO_CENTER_POSITIVE_ONLY";
    case HardwareType.ANALOG_MOMENTARY_ON_OFF:
      return "ANALOG_MOMENTARY_ON_OFF";
    case HardwareType.SWITCH_ON_OFF:
      return "SWITCH_ON_OFF";
    case HardwareType.SWITCH_ON_OPEN_OFF:
      return "SWITCH_ON_OPEN_OFF";
    case HardwareType.MOMENTARY_ON_OFF:
      return "MOMENTARY_ON_OFF";
    default:
      return "UNKNOWN";
  }
}

export enum InputType {
  LOGICAL_INPUT_NOT_USED = 0,
  ANALOG = 1,
  ANALOG_MOMENTARY = 2,
  SWITCH = 3,
  BCD_SWITCH = 4,
  MOMENTARY = 5,
  TRIM = 6,
  UNRECOGNIZED = -1,
}

export function inputTypeFromJSON(object: any): InputType {
  switch (object) {
    case 0:
    case "LOGICAL_INPUT_NOT_USED":
      return InputType.LOGICAL_INPUT_NOT_USED;
    case 1:
    case "ANALOG":
      return InputType.ANALOG;
    case 2:
    case "ANALOG_MOMENTARY":
      return InputType.ANALOG_MOMENTARY;
    case 3:
    case "SWITCH":
      return InputType.SWITCH;
    case 4:
    case "BCD_SWITCH":
      return InputType.BCD_SWITCH;
    case 5:
    case "MOMENTARY":
      return InputType.MOMENTARY;
    case 6:
    case "TRIM":
      return InputType.TRIM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InputType.UNRECOGNIZED;
  }
}

export function inputTypeToJSON(object: InputType): string {
  switch (object) {
    case InputType.LOGICAL_INPUT_NOT_USED:
      return "LOGICAL_INPUT_NOT_USED";
    case InputType.ANALOG:
      return "ANALOG";
    case InputType.ANALOG_MOMENTARY:
      return "ANALOG_MOMENTARY";
    case InputType.SWITCH:
      return "SWITCH";
    case InputType.BCD_SWITCH:
      return "BCD_SWITCH";
    case InputType.MOMENTARY:
      return "MOMENTARY";
    case InputType.TRIM:
      return "TRIM";
    default:
      return "UNKNOWN";
  }
}

export enum InputSubType {
  SUB_TYPE_NOT_APPLICABLE = 0,
  UP_DOWN_BUTTONS = 1,
  INCREMENT_AND_LOOP = 2,
  DECREMENT_AND_LOOP = 3,
  SAW_TOOTH = 4,
  DOUBLE_CLICK_DECREMENT = 5,
  UNRECOGNIZED = -1,
}

export function inputSubTypeFromJSON(object: any): InputSubType {
  switch (object) {
    case 0:
    case "SUB_TYPE_NOT_APPLICABLE":
      return InputSubType.SUB_TYPE_NOT_APPLICABLE;
    case 1:
    case "UP_DOWN_BUTTONS":
      return InputSubType.UP_DOWN_BUTTONS;
    case 2:
    case "INCREMENT_AND_LOOP":
      return InputSubType.INCREMENT_AND_LOOP;
    case 3:
    case "DECREMENT_AND_LOOP":
      return InputSubType.DECREMENT_AND_LOOP;
    case 4:
    case "SAW_TOOTH":
      return InputSubType.SAW_TOOTH;
    case 5:
    case "DOUBLE_CLICK_DECREMENT":
      return InputSubType.DOUBLE_CLICK_DECREMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InputSubType.UNRECOGNIZED;
  }
}

export function inputSubTypeToJSON(object: InputSubType): string {
  switch (object) {
    case InputSubType.SUB_TYPE_NOT_APPLICABLE:
      return "SUB_TYPE_NOT_APPLICABLE";
    case InputSubType.UP_DOWN_BUTTONS:
      return "UP_DOWN_BUTTONS";
    case InputSubType.INCREMENT_AND_LOOP:
      return "INCREMENT_AND_LOOP";
    case InputSubType.DECREMENT_AND_LOOP:
      return "DECREMENT_AND_LOOP";
    case InputSubType.SAW_TOOTH:
      return "SAW_TOOTH";
    case InputSubType.DOUBLE_CLICK_DECREMENT:
      return "DOUBLE_CLICK_DECREMENT";
    default:
      return "UNKNOWN";
  }
}

export enum InputLabel {
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

export function inputLabelFromJSON(object: any): InputLabel {
  switch (object) {
    case 0:
    case "NONE":
      return InputLabel.NONE;
    case 1:
    case "ST":
      return InputLabel.ST;
    case 2:
    case "TH":
      return InputLabel.TH;
    case 3:
    case "THR":
      return InputLabel.THR;
    case 4:
    case "RUD":
      return InputLabel.RUD;
    case 5:
    case "AIL":
      return InputLabel.AIL;
    case 6:
    case "ELE":
      return InputLabel.ELE;
    case 7:
    case "AUX":
      return InputLabel.AUX;
    case 8:
    case "ST_DR":
      return InputLabel.ST_DR;
    case 9:
    case "RUD_DR":
      return InputLabel.RUD_DR;
    case 10:
    case "AIL_DR":
      return InputLabel.AIL_DR;
    case 11:
    case "ELE_DR":
      return InputLabel.ELE_DR;
    case 12:
    case "TH_DR":
      return InputLabel.TH_DR;
    case 13:
    case "THR_DR":
      return InputLabel.THR_DR;
    case 14:
    case "TH_HOLD":
      return InputLabel.TH_HOLD;
    case 15:
    case "GEAR":
      return InputLabel.GEAR;
    case 16:
    case "FLAPS":
      return InputLabel.FLAPS;
    case 17:
    case "TRAINER":
      return InputLabel.TRAINER;
    case 18:
    case "SIDE_L":
      return InputLabel.SIDE_L;
    case 19:
    case "SIDE_R":
      return InputLabel.SIDE_R;
    case 20:
    case "POT1":
      return InputLabel.POT1;
    case 21:
    case "POT2":
      return InputLabel.POT2;
    case 22:
    case "POT3":
      return InputLabel.POT3;
    case 23:
    case "POT4":
      return InputLabel.POT4;
    case 24:
    case "POT5":
      return InputLabel.POT5;
    case 25:
    case "POT6":
      return InputLabel.POT6;
    case 26:
    case "POT7":
      return InputLabel.POT7;
    case 27:
    case "POT8":
      return InputLabel.POT8;
    case 28:
    case "POT9":
      return InputLabel.POT9;
    case 29:
    case "SW1":
      return InputLabel.SW1;
    case 30:
    case "SW2":
      return InputLabel.SW2;
    case 31:
    case "SW3":
      return InputLabel.SW3;
    case 32:
    case "SW4":
      return InputLabel.SW4;
    case 33:
    case "SW5":
      return InputLabel.SW5;
    case 34:
    case "SW6":
      return InputLabel.SW6;
    case 35:
    case "SW7":
      return InputLabel.SW7;
    case 36:
    case "SW8":
      return InputLabel.SW8;
    case 37:
    case "SW9":
      return InputLabel.SW9;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InputLabel.UNRECOGNIZED;
  }
}

export function inputLabelToJSON(object: InputLabel): string {
  switch (object) {
    case InputLabel.NONE:
      return "NONE";
    case InputLabel.ST:
      return "ST";
    case InputLabel.TH:
      return "TH";
    case InputLabel.THR:
      return "THR";
    case InputLabel.RUD:
      return "RUD";
    case InputLabel.AIL:
      return "AIL";
    case InputLabel.ELE:
      return "ELE";
    case InputLabel.AUX:
      return "AUX";
    case InputLabel.ST_DR:
      return "ST_DR";
    case InputLabel.RUD_DR:
      return "RUD_DR";
    case InputLabel.AIL_DR:
      return "AIL_DR";
    case InputLabel.ELE_DR:
      return "ELE_DR";
    case InputLabel.TH_DR:
      return "TH_DR";
    case InputLabel.THR_DR:
      return "THR_DR";
    case InputLabel.TH_HOLD:
      return "TH_HOLD";
    case InputLabel.GEAR:
      return "GEAR";
    case InputLabel.FLAPS:
      return "FLAPS";
    case InputLabel.TRAINER:
      return "TRAINER";
    case InputLabel.SIDE_L:
      return "SIDE_L";
    case InputLabel.SIDE_R:
      return "SIDE_R";
    case InputLabel.POT1:
      return "POT1";
    case InputLabel.POT2:
      return "POT2";
    case InputLabel.POT3:
      return "POT3";
    case InputLabel.POT4:
      return "POT4";
    case InputLabel.POT5:
      return "POT5";
    case InputLabel.POT6:
      return "POT6";
    case InputLabel.POT7:
      return "POT7";
    case InputLabel.POT8:
      return "POT8";
    case InputLabel.POT9:
      return "POT9";
    case InputLabel.SW1:
      return "SW1";
    case InputLabel.SW2:
      return "SW2";
    case InputLabel.SW3:
      return "SW3";
    case InputLabel.SW4:
      return "SW4";
    case InputLabel.SW5:
      return "SW5";
    case InputLabel.SW6:
      return "SW6";
    case InputLabel.SW7:
      return "SW7";
    case InputLabel.SW8:
      return "SW8";
    case InputLabel.SW9:
      return "SW9";
    default:
      return "UNKNOWN";
  }
}

export enum SRCLabel {
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

export function sRCLabelFromJSON(object: any): SRCLabel {
  switch (object) {
    case 0:
    case "SRC_NONE":
      return SRCLabel.SRC_NONE;
    case 1:
    case "IN_NONE":
      return SRCLabel.IN_NONE;
    case 2:
    case "IN_ST":
      return SRCLabel.IN_ST;
    case 3:
    case "IN_TH":
      return SRCLabel.IN_TH;
    case 4:
    case "IN_THR":
      return SRCLabel.IN_THR;
    case 5:
    case "IN_RUD":
      return SRCLabel.IN_RUD;
    case 6:
    case "IN_AIL":
      return SRCLabel.IN_AIL;
    case 7:
    case "IN_ELE":
      return SRCLabel.IN_ELE;
    case 8:
    case "IN_AUX":
      return SRCLabel.IN_AUX;
    case 9:
    case "IN_ST_DR":
      return SRCLabel.IN_ST_DR;
    case 10:
    case "IN_RUD_DR":
      return SRCLabel.IN_RUD_DR;
    case 11:
    case "IN_AIL_DR":
      return SRCLabel.IN_AIL_DR;
    case 12:
    case "IN_ELE_DR":
      return SRCLabel.IN_ELE_DR;
    case 13:
    case "IN_TH_DR":
      return SRCLabel.IN_TH_DR;
    case 14:
    case "IN_THR_DR":
      return SRCLabel.IN_THR_DR;
    case 15:
    case "IN_TH_HOLD":
      return SRCLabel.IN_TH_HOLD;
    case 16:
    case "IN_GEAR":
      return SRCLabel.IN_GEAR;
    case 17:
    case "IN_FLAPS":
      return SRCLabel.IN_FLAPS;
    case 18:
    case "IN_TRAINER":
      return SRCLabel.IN_TRAINER;
    case 19:
    case "IN_SIDE_L":
      return SRCLabel.IN_SIDE_L;
    case 20:
    case "IN_SIDE_R":
      return SRCLabel.IN_SIDE_R;
    case 21:
    case "IN_POT1":
      return SRCLabel.IN_POT1;
    case 22:
    case "IN_POT2":
      return SRCLabel.IN_POT2;
    case 23:
    case "IN_POT3":
      return SRCLabel.IN_POT3;
    case 24:
    case "IN_POT4":
      return SRCLabel.IN_POT4;
    case 25:
    case "IN_POT5":
      return SRCLabel.IN_POT5;
    case 26:
    case "IN_POT6":
      return SRCLabel.IN_POT6;
    case 27:
    case "IN_POT7":
      return SRCLabel.IN_POT7;
    case 28:
    case "IN_POT8":
      return SRCLabel.IN_POT8;
    case 29:
    case "IN_POT9":
      return SRCLabel.IN_POT9;
    case 30:
    case "IN_SW1":
      return SRCLabel.IN_SW1;
    case 31:
    case "IN_SW2":
      return SRCLabel.IN_SW2;
    case 32:
    case "IN_SW3":
      return SRCLabel.IN_SW3;
    case 33:
    case "IN_SW4":
      return SRCLabel.IN_SW4;
    case 34:
    case "IN_SW5":
      return SRCLabel.IN_SW5;
    case 35:
    case "IN_SW6":
      return SRCLabel.IN_SW6;
    case 36:
    case "IN_SW7":
      return SRCLabel.IN_SW7;
    case 37:
    case "IN_SW8":
      return SRCLabel.IN_SW8;
    case 38:
    case "IN_SW9":
      return SRCLabel.IN_SW9;
    case 39:
    case "CH_CH1":
      return SRCLabel.CH_CH1;
    case 40:
    case "CH_CH2":
      return SRCLabel.CH_CH2;
    case 41:
    case "CH_CH3":
      return SRCLabel.CH_CH3;
    case 42:
    case "CH_CH4":
      return SRCLabel.CH_CH4;
    case 43:
    case "CH_CH5":
      return SRCLabel.CH_CH5;
    case 44:
    case "CH_VIRTUAL1":
      return SRCLabel.CH_VIRTUAL1;
    case 45:
    case "CH_VIRTUAL2":
      return SRCLabel.CH_VIRTUAL2;
    case 46:
    case "CH_VIRTUAL3":
      return SRCLabel.CH_VIRTUAL3;
    case 47:
    case "CH_VIRTUAL4":
      return SRCLabel.CH_VIRTUAL4;
    case 48:
    case "CH_VIRTUAL5":
      return SRCLabel.CH_VIRTUAL5;
    case 49:
    case "CH_VIRTUAL6":
      return SRCLabel.CH_VIRTUAL6;
    case 50:
    case "CH_VIRTUAL7":
      return SRCLabel.CH_VIRTUAL7;
    case 51:
    case "CH_VIRTUAL8":
      return SRCLabel.CH_VIRTUAL8;
    case 52:
    case "CH_VIRTUAL9":
      return SRCLabel.CH_VIRTUAL9;
    case 53:
    case "CH_VIRTUAL10":
      return SRCLabel.CH_VIRTUAL10;
    case 54:
    case "CH_HIDDEN1":
      return SRCLabel.CH_HIDDEN1;
    case 55:
    case "CH_HIDDEN2":
      return SRCLabel.CH_HIDDEN2;
    case 56:
    case "CH_HIDDEN3":
      return SRCLabel.CH_HIDDEN3;
    case 57:
    case "CH_HIDDEN4":
      return SRCLabel.CH_HIDDEN4;
    case 58:
    case "CH_HIDDEN5":
      return SRCLabel.CH_HIDDEN5;
    case 59:
    case "CH_HIDDEN6":
      return SRCLabel.CH_HIDDEN6;
    case 60:
    case "CH_HIDDEN7":
      return SRCLabel.CH_HIDDEN7;
    case 61:
    case "CH_HIDDEN8":
      return SRCLabel.CH_HIDDEN8;
    case 62:
    case "CH_HIDDEN9":
      return SRCLabel.CH_HIDDEN9;
    case 63:
    case "CH_HIDDEN10":
      return SRCLabel.CH_HIDDEN10;
    case 64:
    case "CH_HIDDEN11":
      return SRCLabel.CH_HIDDEN11;
    case 65:
    case "CH_HIDDEN12":
      return SRCLabel.CH_HIDDEN12;
    case 66:
    case "CH_HIDDEN13":
      return SRCLabel.CH_HIDDEN13;
    case 67:
    case "CH_HIDDEN14":
      return SRCLabel.CH_HIDDEN14;
    case 68:
    case "CH_HIDDEN15":
      return SRCLabel.CH_HIDDEN15;
    case 69:
    case "CH_HIDDEN16":
      return SRCLabel.CH_HIDDEN16;
    case 70:
    case "CH_HIDDEN17":
      return SRCLabel.CH_HIDDEN17;
    case 71:
    case "CH_HIDDEN18":
      return SRCLabel.CH_HIDDEN18;
    case 72:
    case "CH_HIDDEN19":
      return SRCLabel.CH_HIDDEN19;
    case 73:
    case "CH_HIDDEN20":
      return SRCLabel.CH_HIDDEN20;
    case 74:
    case "CH_HIDDEN21":
      return SRCLabel.CH_HIDDEN21;
    case 75:
    case "CH_HIDDEN22":
      return SRCLabel.CH_HIDDEN22;
    case 76:
    case "CH_HIDDEN23":
      return SRCLabel.CH_HIDDEN23;
    case 77:
    case "CH_HIDDEN24":
      return SRCLabel.CH_HIDDEN24;
    case 78:
    case "CH_HIDDEN25":
      return SRCLabel.CH_HIDDEN25;
    case 79:
    case "CH_HIDDEN26":
      return SRCLabel.CH_HIDDEN26;
    case 80:
    case "CH_HIDDEN27":
      return SRCLabel.CH_HIDDEN27;
    case 81:
    case "CH_HIDDEN28":
      return SRCLabel.CH_HIDDEN28;
    case 82:
    case "CH_HIDDEN29":
      return SRCLabel.CH_HIDDEN29;
    case 83:
    case "CH_HIDDEN30":
      return SRCLabel.CH_HIDDEN30;
    case 84:
    case "CH_HIDDEN31":
      return SRCLabel.CH_HIDDEN31;
    case 85:
    case "CH_HIDDEN32":
      return SRCLabel.CH_HIDDEN32;
    case 86:
    case "CH_HIDDEN33":
      return SRCLabel.CH_HIDDEN33;
    case 87:
    case "CH_HIDDEN34":
      return SRCLabel.CH_HIDDEN34;
    case 88:
    case "CH_HIDDEN35":
      return SRCLabel.CH_HIDDEN35;
    case 89:
    case "CH_HIDDEN36":
      return SRCLabel.CH_HIDDEN36;
    case 90:
    case "CH_HIDDEN37":
      return SRCLabel.CH_HIDDEN37;
    case 91:
    case "CH_HIDDEN38":
      return SRCLabel.CH_HIDDEN38;
    case 92:
    case "CH_HIDDEN39":
      return SRCLabel.CH_HIDDEN39;
    case 93:
    case "CH_HIDDEN40":
      return SRCLabel.CH_HIDDEN40;
    case 94:
    case "CH_HIDDEN41":
      return SRCLabel.CH_HIDDEN41;
    case 95:
    case "CH_HIDDEN42":
      return SRCLabel.CH_HIDDEN42;
    case 96:
    case "CH_HIDDEN43":
      return SRCLabel.CH_HIDDEN43;
    case 97:
    case "CH_HIDDEN44":
      return SRCLabel.CH_HIDDEN44;
    case 98:
    case "CH_HIDDEN45":
      return SRCLabel.CH_HIDDEN45;
    case 99:
    case "CH_HIDDEN46":
      return SRCLabel.CH_HIDDEN46;
    case 100:
    case "CH_HIDDEN47":
      return SRCLabel.CH_HIDDEN47;
    case 101:
    case "CH_HIDDEN48":
      return SRCLabel.CH_HIDDEN48;
    case 102:
    case "CH_HIDDEN49":
      return SRCLabel.CH_HIDDEN49;
    case 103:
    case "CH_HIDDEN50":
      return SRCLabel.CH_HIDDEN50;
    case 104:
    case "RF_CH1":
      return SRCLabel.RF_CH1;
    case 105:
    case "RF_CH2":
      return SRCLabel.RF_CH2;
    case 106:
    case "RF_CH3":
      return SRCLabel.RF_CH3;
    case 107:
    case "RF_CH4":
      return SRCLabel.RF_CH4;
    case 108:
    case "RF_CH5":
      return SRCLabel.RF_CH5;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SRCLabel.UNRECOGNIZED;
  }
}

export function sRCLabelToJSON(object: SRCLabel): string {
  switch (object) {
    case SRCLabel.SRC_NONE:
      return "SRC_NONE";
    case SRCLabel.IN_NONE:
      return "IN_NONE";
    case SRCLabel.IN_ST:
      return "IN_ST";
    case SRCLabel.IN_TH:
      return "IN_TH";
    case SRCLabel.IN_THR:
      return "IN_THR";
    case SRCLabel.IN_RUD:
      return "IN_RUD";
    case SRCLabel.IN_AIL:
      return "IN_AIL";
    case SRCLabel.IN_ELE:
      return "IN_ELE";
    case SRCLabel.IN_AUX:
      return "IN_AUX";
    case SRCLabel.IN_ST_DR:
      return "IN_ST_DR";
    case SRCLabel.IN_RUD_DR:
      return "IN_RUD_DR";
    case SRCLabel.IN_AIL_DR:
      return "IN_AIL_DR";
    case SRCLabel.IN_ELE_DR:
      return "IN_ELE_DR";
    case SRCLabel.IN_TH_DR:
      return "IN_TH_DR";
    case SRCLabel.IN_THR_DR:
      return "IN_THR_DR";
    case SRCLabel.IN_TH_HOLD:
      return "IN_TH_HOLD";
    case SRCLabel.IN_GEAR:
      return "IN_GEAR";
    case SRCLabel.IN_FLAPS:
      return "IN_FLAPS";
    case SRCLabel.IN_TRAINER:
      return "IN_TRAINER";
    case SRCLabel.IN_SIDE_L:
      return "IN_SIDE_L";
    case SRCLabel.IN_SIDE_R:
      return "IN_SIDE_R";
    case SRCLabel.IN_POT1:
      return "IN_POT1";
    case SRCLabel.IN_POT2:
      return "IN_POT2";
    case SRCLabel.IN_POT3:
      return "IN_POT3";
    case SRCLabel.IN_POT4:
      return "IN_POT4";
    case SRCLabel.IN_POT5:
      return "IN_POT5";
    case SRCLabel.IN_POT6:
      return "IN_POT6";
    case SRCLabel.IN_POT7:
      return "IN_POT7";
    case SRCLabel.IN_POT8:
      return "IN_POT8";
    case SRCLabel.IN_POT9:
      return "IN_POT9";
    case SRCLabel.IN_SW1:
      return "IN_SW1";
    case SRCLabel.IN_SW2:
      return "IN_SW2";
    case SRCLabel.IN_SW3:
      return "IN_SW3";
    case SRCLabel.IN_SW4:
      return "IN_SW4";
    case SRCLabel.IN_SW5:
      return "IN_SW5";
    case SRCLabel.IN_SW6:
      return "IN_SW6";
    case SRCLabel.IN_SW7:
      return "IN_SW7";
    case SRCLabel.IN_SW8:
      return "IN_SW8";
    case SRCLabel.IN_SW9:
      return "IN_SW9";
    case SRCLabel.CH_CH1:
      return "CH_CH1";
    case SRCLabel.CH_CH2:
      return "CH_CH2";
    case SRCLabel.CH_CH3:
      return "CH_CH3";
    case SRCLabel.CH_CH4:
      return "CH_CH4";
    case SRCLabel.CH_CH5:
      return "CH_CH5";
    case SRCLabel.CH_VIRTUAL1:
      return "CH_VIRTUAL1";
    case SRCLabel.CH_VIRTUAL2:
      return "CH_VIRTUAL2";
    case SRCLabel.CH_VIRTUAL3:
      return "CH_VIRTUAL3";
    case SRCLabel.CH_VIRTUAL4:
      return "CH_VIRTUAL4";
    case SRCLabel.CH_VIRTUAL5:
      return "CH_VIRTUAL5";
    case SRCLabel.CH_VIRTUAL6:
      return "CH_VIRTUAL6";
    case SRCLabel.CH_VIRTUAL7:
      return "CH_VIRTUAL7";
    case SRCLabel.CH_VIRTUAL8:
      return "CH_VIRTUAL8";
    case SRCLabel.CH_VIRTUAL9:
      return "CH_VIRTUAL9";
    case SRCLabel.CH_VIRTUAL10:
      return "CH_VIRTUAL10";
    case SRCLabel.CH_HIDDEN1:
      return "CH_HIDDEN1";
    case SRCLabel.CH_HIDDEN2:
      return "CH_HIDDEN2";
    case SRCLabel.CH_HIDDEN3:
      return "CH_HIDDEN3";
    case SRCLabel.CH_HIDDEN4:
      return "CH_HIDDEN4";
    case SRCLabel.CH_HIDDEN5:
      return "CH_HIDDEN5";
    case SRCLabel.CH_HIDDEN6:
      return "CH_HIDDEN6";
    case SRCLabel.CH_HIDDEN7:
      return "CH_HIDDEN7";
    case SRCLabel.CH_HIDDEN8:
      return "CH_HIDDEN8";
    case SRCLabel.CH_HIDDEN9:
      return "CH_HIDDEN9";
    case SRCLabel.CH_HIDDEN10:
      return "CH_HIDDEN10";
    case SRCLabel.CH_HIDDEN11:
      return "CH_HIDDEN11";
    case SRCLabel.CH_HIDDEN12:
      return "CH_HIDDEN12";
    case SRCLabel.CH_HIDDEN13:
      return "CH_HIDDEN13";
    case SRCLabel.CH_HIDDEN14:
      return "CH_HIDDEN14";
    case SRCLabel.CH_HIDDEN15:
      return "CH_HIDDEN15";
    case SRCLabel.CH_HIDDEN16:
      return "CH_HIDDEN16";
    case SRCLabel.CH_HIDDEN17:
      return "CH_HIDDEN17";
    case SRCLabel.CH_HIDDEN18:
      return "CH_HIDDEN18";
    case SRCLabel.CH_HIDDEN19:
      return "CH_HIDDEN19";
    case SRCLabel.CH_HIDDEN20:
      return "CH_HIDDEN20";
    case SRCLabel.CH_HIDDEN21:
      return "CH_HIDDEN21";
    case SRCLabel.CH_HIDDEN22:
      return "CH_HIDDEN22";
    case SRCLabel.CH_HIDDEN23:
      return "CH_HIDDEN23";
    case SRCLabel.CH_HIDDEN24:
      return "CH_HIDDEN24";
    case SRCLabel.CH_HIDDEN25:
      return "CH_HIDDEN25";
    case SRCLabel.CH_HIDDEN26:
      return "CH_HIDDEN26";
    case SRCLabel.CH_HIDDEN27:
      return "CH_HIDDEN27";
    case SRCLabel.CH_HIDDEN28:
      return "CH_HIDDEN28";
    case SRCLabel.CH_HIDDEN29:
      return "CH_HIDDEN29";
    case SRCLabel.CH_HIDDEN30:
      return "CH_HIDDEN30";
    case SRCLabel.CH_HIDDEN31:
      return "CH_HIDDEN31";
    case SRCLabel.CH_HIDDEN32:
      return "CH_HIDDEN32";
    case SRCLabel.CH_HIDDEN33:
      return "CH_HIDDEN33";
    case SRCLabel.CH_HIDDEN34:
      return "CH_HIDDEN34";
    case SRCLabel.CH_HIDDEN35:
      return "CH_HIDDEN35";
    case SRCLabel.CH_HIDDEN36:
      return "CH_HIDDEN36";
    case SRCLabel.CH_HIDDEN37:
      return "CH_HIDDEN37";
    case SRCLabel.CH_HIDDEN38:
      return "CH_HIDDEN38";
    case SRCLabel.CH_HIDDEN39:
      return "CH_HIDDEN39";
    case SRCLabel.CH_HIDDEN40:
      return "CH_HIDDEN40";
    case SRCLabel.CH_HIDDEN41:
      return "CH_HIDDEN41";
    case SRCLabel.CH_HIDDEN42:
      return "CH_HIDDEN42";
    case SRCLabel.CH_HIDDEN43:
      return "CH_HIDDEN43";
    case SRCLabel.CH_HIDDEN44:
      return "CH_HIDDEN44";
    case SRCLabel.CH_HIDDEN45:
      return "CH_HIDDEN45";
    case SRCLabel.CH_HIDDEN46:
      return "CH_HIDDEN46";
    case SRCLabel.CH_HIDDEN47:
      return "CH_HIDDEN47";
    case SRCLabel.CH_HIDDEN48:
      return "CH_HIDDEN48";
    case SRCLabel.CH_HIDDEN49:
      return "CH_HIDDEN49";
    case SRCLabel.CH_HIDDEN50:
      return "CH_HIDDEN50";
    case SRCLabel.RF_CH1:
      return "RF_CH1";
    case SRCLabel.RF_CH2:
      return "RF_CH2";
    case SRCLabel.RF_CH3:
      return "RF_CH3";
    case SRCLabel.RF_CH4:
      return "RF_CH4";
    case SRCLabel.RF_CH5:
      return "RF_CH5";
    default:
      return "UNKNOWN";
  }
}

/** The following items must be in sequence: */
export enum ChannelLabel {
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

export function channelLabelFromJSON(object: any): ChannelLabel {
  switch (object) {
    case 0:
    case "CH1":
      return ChannelLabel.CH1;
    case 1:
    case "CH2":
      return ChannelLabel.CH2;
    case 2:
    case "CH3":
      return ChannelLabel.CH3;
    case 3:
    case "CH4":
      return ChannelLabel.CH4;
    case 4:
    case "CH5":
      return ChannelLabel.CH5;
    case 6:
    case "VIRTUAL1":
      return ChannelLabel.VIRTUAL1;
    case 7:
    case "VIRTUAL2":
      return ChannelLabel.VIRTUAL2;
    case 8:
    case "VIRTUAL3":
      return ChannelLabel.VIRTUAL3;
    case 9:
    case "VIRTUAL4":
      return ChannelLabel.VIRTUAL4;
    case 10:
    case "VIRTUAL5":
      return ChannelLabel.VIRTUAL5;
    case 11:
    case "VIRTUAL6":
      return ChannelLabel.VIRTUAL6;
    case 12:
    case "VIRTUAL7":
      return ChannelLabel.VIRTUAL7;
    case 13:
    case "VIRTUAL8":
      return ChannelLabel.VIRTUAL8;
    case 14:
    case "VIRTUAL9":
      return ChannelLabel.VIRTUAL9;
    case 15:
    case "VIRTUAL10":
      return ChannelLabel.VIRTUAL10;
    case 16:
    case "HIDDEN1":
      return ChannelLabel.HIDDEN1;
    case 17:
    case "HIDDEN2":
      return ChannelLabel.HIDDEN2;
    case 18:
    case "HIDDEN3":
      return ChannelLabel.HIDDEN3;
    case 19:
    case "HIDDEN4":
      return ChannelLabel.HIDDEN4;
    case 20:
    case "HIDDEN5":
      return ChannelLabel.HIDDEN5;
    case 21:
    case "HIDDEN6":
      return ChannelLabel.HIDDEN6;
    case 22:
    case "HIDDEN7":
      return ChannelLabel.HIDDEN7;
    case 23:
    case "HIDDEN8":
      return ChannelLabel.HIDDEN8;
    case 24:
    case "HIDDEN9":
      return ChannelLabel.HIDDEN9;
    case 25:
    case "HIDDEN10":
      return ChannelLabel.HIDDEN10;
    case 26:
    case "HIDDEN11":
      return ChannelLabel.HIDDEN11;
    case 27:
    case "HIDDEN12":
      return ChannelLabel.HIDDEN12;
    case 28:
    case "HIDDEN13":
      return ChannelLabel.HIDDEN13;
    case 29:
    case "HIDDEN14":
      return ChannelLabel.HIDDEN14;
    case 30:
    case "HIDDEN15":
      return ChannelLabel.HIDDEN15;
    case 31:
    case "HIDDEN16":
      return ChannelLabel.HIDDEN16;
    case 32:
    case "HIDDEN17":
      return ChannelLabel.HIDDEN17;
    case 33:
    case "HIDDEN18":
      return ChannelLabel.HIDDEN18;
    case 34:
    case "HIDDEN19":
      return ChannelLabel.HIDDEN19;
    case 35:
    case "HIDDEN20":
      return ChannelLabel.HIDDEN20;
    case 36:
    case "HIDDEN21":
      return ChannelLabel.HIDDEN21;
    case 37:
    case "HIDDEN22":
      return ChannelLabel.HIDDEN22;
    case 38:
    case "HIDDEN23":
      return ChannelLabel.HIDDEN23;
    case 39:
    case "HIDDEN24":
      return ChannelLabel.HIDDEN24;
    case 40:
    case "HIDDEN25":
      return ChannelLabel.HIDDEN25;
    case 41:
    case "HIDDEN26":
      return ChannelLabel.HIDDEN26;
    case 42:
    case "HIDDEN27":
      return ChannelLabel.HIDDEN27;
    case 43:
    case "HIDDEN28":
      return ChannelLabel.HIDDEN28;
    case 44:
    case "HIDDEN29":
      return ChannelLabel.HIDDEN29;
    case 45:
    case "HIDDEN30":
      return ChannelLabel.HIDDEN30;
    case 46:
    case "HIDDEN31":
      return ChannelLabel.HIDDEN31;
    case 47:
    case "HIDDEN32":
      return ChannelLabel.HIDDEN32;
    case 48:
    case "HIDDEN33":
      return ChannelLabel.HIDDEN33;
    case 49:
    case "HIDDEN34":
      return ChannelLabel.HIDDEN34;
    case 50:
    case "HIDDEN35":
      return ChannelLabel.HIDDEN35;
    case 51:
    case "HIDDEN36":
      return ChannelLabel.HIDDEN36;
    case 52:
    case "HIDDEN37":
      return ChannelLabel.HIDDEN37;
    case 53:
    case "HIDDEN38":
      return ChannelLabel.HIDDEN38;
    case 54:
    case "HIDDEN39":
      return ChannelLabel.HIDDEN39;
    case 55:
    case "HIDDEN40":
      return ChannelLabel.HIDDEN40;
    case 56:
    case "HIDDEN41":
      return ChannelLabel.HIDDEN41;
    case 57:
    case "HIDDEN42":
      return ChannelLabel.HIDDEN42;
    case 58:
    case "HIDDEN43":
      return ChannelLabel.HIDDEN43;
    case 59:
    case "HIDDEN44":
      return ChannelLabel.HIDDEN44;
    case 60:
    case "HIDDEN45":
      return ChannelLabel.HIDDEN45;
    case 61:
    case "HIDDEN46":
      return ChannelLabel.HIDDEN46;
    case 62:
    case "HIDDEN47":
      return ChannelLabel.HIDDEN47;
    case 63:
    case "HIDDEN48":
      return ChannelLabel.HIDDEN48;
    case 64:
    case "HIDDEN49":
      return ChannelLabel.HIDDEN49;
    case 65:
    case "HIDDEN50":
      return ChannelLabel.HIDDEN50;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChannelLabel.UNRECOGNIZED;
  }
}

export function channelLabelToJSON(object: ChannelLabel): string {
  switch (object) {
    case ChannelLabel.CH1:
      return "CH1";
    case ChannelLabel.CH2:
      return "CH2";
    case ChannelLabel.CH3:
      return "CH3";
    case ChannelLabel.CH4:
      return "CH4";
    case ChannelLabel.CH5:
      return "CH5";
    case ChannelLabel.VIRTUAL1:
      return "VIRTUAL1";
    case ChannelLabel.VIRTUAL2:
      return "VIRTUAL2";
    case ChannelLabel.VIRTUAL3:
      return "VIRTUAL3";
    case ChannelLabel.VIRTUAL4:
      return "VIRTUAL4";
    case ChannelLabel.VIRTUAL5:
      return "VIRTUAL5";
    case ChannelLabel.VIRTUAL6:
      return "VIRTUAL6";
    case ChannelLabel.VIRTUAL7:
      return "VIRTUAL7";
    case ChannelLabel.VIRTUAL8:
      return "VIRTUAL8";
    case ChannelLabel.VIRTUAL9:
      return "VIRTUAL9";
    case ChannelLabel.VIRTUAL10:
      return "VIRTUAL10";
    case ChannelLabel.HIDDEN1:
      return "HIDDEN1";
    case ChannelLabel.HIDDEN2:
      return "HIDDEN2";
    case ChannelLabel.HIDDEN3:
      return "HIDDEN3";
    case ChannelLabel.HIDDEN4:
      return "HIDDEN4";
    case ChannelLabel.HIDDEN5:
      return "HIDDEN5";
    case ChannelLabel.HIDDEN6:
      return "HIDDEN6";
    case ChannelLabel.HIDDEN7:
      return "HIDDEN7";
    case ChannelLabel.HIDDEN8:
      return "HIDDEN8";
    case ChannelLabel.HIDDEN9:
      return "HIDDEN9";
    case ChannelLabel.HIDDEN10:
      return "HIDDEN10";
    case ChannelLabel.HIDDEN11:
      return "HIDDEN11";
    case ChannelLabel.HIDDEN12:
      return "HIDDEN12";
    case ChannelLabel.HIDDEN13:
      return "HIDDEN13";
    case ChannelLabel.HIDDEN14:
      return "HIDDEN14";
    case ChannelLabel.HIDDEN15:
      return "HIDDEN15";
    case ChannelLabel.HIDDEN16:
      return "HIDDEN16";
    case ChannelLabel.HIDDEN17:
      return "HIDDEN17";
    case ChannelLabel.HIDDEN18:
      return "HIDDEN18";
    case ChannelLabel.HIDDEN19:
      return "HIDDEN19";
    case ChannelLabel.HIDDEN20:
      return "HIDDEN20";
    case ChannelLabel.HIDDEN21:
      return "HIDDEN21";
    case ChannelLabel.HIDDEN22:
      return "HIDDEN22";
    case ChannelLabel.HIDDEN23:
      return "HIDDEN23";
    case ChannelLabel.HIDDEN24:
      return "HIDDEN24";
    case ChannelLabel.HIDDEN25:
      return "HIDDEN25";
    case ChannelLabel.HIDDEN26:
      return "HIDDEN26";
    case ChannelLabel.HIDDEN27:
      return "HIDDEN27";
    case ChannelLabel.HIDDEN28:
      return "HIDDEN28";
    case ChannelLabel.HIDDEN29:
      return "HIDDEN29";
    case ChannelLabel.HIDDEN30:
      return "HIDDEN30";
    case ChannelLabel.HIDDEN31:
      return "HIDDEN31";
    case ChannelLabel.HIDDEN32:
      return "HIDDEN32";
    case ChannelLabel.HIDDEN33:
      return "HIDDEN33";
    case ChannelLabel.HIDDEN34:
      return "HIDDEN34";
    case ChannelLabel.HIDDEN35:
      return "HIDDEN35";
    case ChannelLabel.HIDDEN36:
      return "HIDDEN36";
    case ChannelLabel.HIDDEN37:
      return "HIDDEN37";
    case ChannelLabel.HIDDEN38:
      return "HIDDEN38";
    case ChannelLabel.HIDDEN39:
      return "HIDDEN39";
    case ChannelLabel.HIDDEN40:
      return "HIDDEN40";
    case ChannelLabel.HIDDEN41:
      return "HIDDEN41";
    case ChannelLabel.HIDDEN42:
      return "HIDDEN42";
    case ChannelLabel.HIDDEN43:
      return "HIDDEN43";
    case ChannelLabel.HIDDEN44:
      return "HIDDEN44";
    case ChannelLabel.HIDDEN45:
      return "HIDDEN45";
    case ChannelLabel.HIDDEN46:
      return "HIDDEN46";
    case ChannelLabel.HIDDEN47:
      return "HIDDEN47";
    case ChannelLabel.HIDDEN48:
      return "HIDDEN48";
    case ChannelLabel.HIDDEN49:
      return "HIDDEN49";
    case ChannelLabel.HIDDEN50:
      return "HIDDEN50";
    default:
      return "UNKNOWN";
  }
}

export enum OperationType {
  OP_REPLACE = 0,
  OP_ADD = 1,
  OP_MULTIPLY = 2,
  OP_MIN = 3,
  OP_MAX = 4,
  UNRECOGNIZED = -1,
}

export function operationTypeFromJSON(object: any): OperationType {
  switch (object) {
    case 0:
    case "OP_REPLACE":
      return OperationType.OP_REPLACE;
    case 1:
    case "OP_ADD":
      return OperationType.OP_ADD;
    case 2:
    case "OP_MULTIPLY":
      return OperationType.OP_MULTIPLY;
    case 3:
    case "OP_MIN":
      return OperationType.OP_MIN;
    case 4:
    case "OP_MAX":
      return OperationType.OP_MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationType.UNRECOGNIZED;
  }
}

export function operationTypeToJSON(object: OperationType): string {
  switch (object) {
    case OperationType.OP_REPLACE:
      return "OP_REPLACE";
    case OperationType.OP_ADD:
      return "OP_ADD";
    case OperationType.OP_MULTIPLY:
      return "OP_MULTIPLY";
    case OperationType.OP_MIN:
      return "OP_MIN";
    case OperationType.OP_MAX:
      return "OP_MAX";
    default:
      return "UNKNOWN";
  }
}

export enum RFProtocolType {
  RF_PROTOCOL_HK310 = 0,
  RF_PROTOCOL_ARSI = 1,
  UNRECOGNIZED = -1,
}

export function rFProtocolTypeFromJSON(object: any): RFProtocolType {
  switch (object) {
    case 0:
    case "RF_PROTOCOL_HK310":
      return RFProtocolType.RF_PROTOCOL_HK310;
    case 1:
    case "RF_PROTOCOL_ARSI":
      return RFProtocolType.RF_PROTOCOL_ARSI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RFProtocolType.UNRECOGNIZED;
  }
}

export function rFProtocolTypeToJSON(object: RFProtocolType): string {
  switch (object) {
    case RFProtocolType.RF_PROTOCOL_HK310:
      return "RF_PROTOCOL_HK310";
    case RFProtocolType.RF_PROTOCOL_ARSI:
      return "RF_PROTOCOL_ARSI";
    default:
      return "UNKNOWN";
  }
}

export interface ControllerInput {
  hardwareType: HardwareType;
  inputType: InputType;
  inputSubType: InputSubType;
  port: number;
  calibration: number[];
  inputLabels: InputLabel[];
}

export interface TX {
  uuid: number[];
  name: string;
  controllerInputs: ControllerInput[];
  trimRange: number;
  trimStepSize: number;
}

export interface MixerUnit {
  src: SRCLabel;
  dst: ChannelLabel;
  scalar: number;
  offset: number;
  applyTrim: boolean;
  invertSource: boolean;
  operationType: OperationType;
}

export interface Limits {
  epL: number;
  epH: number;
  subtrim: number;
  limitL: number;
  limitH: number;
  failsafe: number;
  speed: number;
  invert: boolean;
}

export interface Model {
  uuid: number[];
  name: string;
  mixerUnits: MixerUnit[];
  limits: Limits[];
  rfProtocolType: RFProtocolType;
}

export interface Config {
  version: number;
  tx: TX | undefined;
  model: Model | undefined;
}

const baseControllerInput: object = {
  hardwareType: 0,
  inputType: 0,
  inputSubType: 0,
  port: 0,
  calibration: 0,
  inputLabels: 0,
};

export const ControllerInput = {
  encode(message: ControllerInput, writer: Writer = Writer.create()): Writer {
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
    for (const v of message.inputLabels) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ControllerInput {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseControllerInput } as ControllerInput;
    message.calibration = [];
    message.inputLabels = [];
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
              message.inputLabels.push(reader.int32() as any);
            }
          } else {
            message.inputLabels.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerInput {
    const message = { ...baseControllerInput } as ControllerInput;
    message.calibration = [];
    message.inputLabels = [];
    if (object.hardwareType !== undefined && object.hardwareType !== null) {
      message.hardwareType = hardwareTypeFromJSON(object.hardwareType);
    } else {
      message.hardwareType = 0;
    }
    if (object.inputType !== undefined && object.inputType !== null) {
      message.inputType = inputTypeFromJSON(object.inputType);
    } else {
      message.inputType = 0;
    }
    if (object.inputSubType !== undefined && object.inputSubType !== null) {
      message.inputSubType = inputSubTypeFromJSON(object.inputSubType);
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
    if (object.inputLabels !== undefined && object.inputLabels !== null) {
      for (const e of object.inputLabels) {
        message.inputLabels.push(inputLabelFromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ControllerInput): unknown {
    const obj: any = {};
    message.hardwareType !== undefined &&
      (obj.hardwareType = hardwareTypeToJSON(message.hardwareType));
    message.inputType !== undefined &&
      (obj.inputType = inputTypeToJSON(message.inputType));
    message.inputSubType !== undefined &&
      (obj.inputSubType = inputSubTypeToJSON(message.inputSubType));
    message.port !== undefined && (obj.port = message.port);
    if (message.calibration) {
      obj.calibration = message.calibration.map((e) => e);
    } else {
      obj.calibration = [];
    }
    if (message.inputLabels) {
      obj.inputLabels = message.inputLabels.map((e) => inputLabelToJSON(e));
    } else {
      obj.inputLabels = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerInput>): ControllerInput {
    const message = { ...baseControllerInput } as ControllerInput;
    message.calibration = [];
    message.inputLabels = [];
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
    if (object.inputLabels !== undefined && object.inputLabels !== null) {
      for (const e of object.inputLabels) {
        message.inputLabels.push(e);
      }
    }
    return message;
  },
};

const baseTX: object = { uuid: 0, name: "", trimRange: 0, trimStepSize: 0 };

export const TX = {
  encode(message: TX, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.uuid) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.controllerInputs) {
      ControllerInput.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.trimRange !== 0) {
      writer.uint32(32).int32(message.trimRange);
    }
    if (message.trimStepSize !== 0) {
      writer.uint32(40).int32(message.trimStepSize);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TX {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTX } as TX;
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
            ControllerInput.decode(reader, reader.uint32())
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

  fromJSON(object: any): TX {
    const message = { ...baseTX } as TX;
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
        message.controllerInputs.push(ControllerInput.fromJSON(e));
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

  toJSON(message: TX): unknown {
    const obj: any = {};
    if (message.uuid) {
      obj.uuid = message.uuid.map((e) => e);
    } else {
      obj.uuid = [];
    }
    message.name !== undefined && (obj.name = message.name);
    if (message.controllerInputs) {
      obj.controllerInputs = message.controllerInputs.map((e) =>
        e ? ControllerInput.toJSON(e) : undefined
      );
    } else {
      obj.controllerInputs = [];
    }
    message.trimRange !== undefined && (obj.trimRange = message.trimRange);
    message.trimStepSize !== undefined &&
      (obj.trimStepSize = message.trimStepSize);
    return obj;
  },

  fromPartial(object: DeepPartial<TX>): TX {
    const message = { ...baseTX } as TX;
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
        message.controllerInputs.push(ControllerInput.fromPartial(e));
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

const baseMixerUnit: object = {
  src: 0,
  dst: 0,
  scalar: 0,
  offset: 0,
  applyTrim: false,
  invertSource: false,
  operationType: 0,
};

export const MixerUnit = {
  encode(message: MixerUnit, writer: Writer = Writer.create()): Writer {
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
    if (message.operationType !== 0) {
      writer.uint32(56).int32(message.operationType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MixerUnit {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMixerUnit } as MixerUnit;
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
          message.operationType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MixerUnit {
    const message = { ...baseMixerUnit } as MixerUnit;
    if (object.src !== undefined && object.src !== null) {
      message.src = sRCLabelFromJSON(object.src);
    } else {
      message.src = 0;
    }
    if (object.dst !== undefined && object.dst !== null) {
      message.dst = channelLabelFromJSON(object.dst);
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
    if (object.operationType !== undefined && object.operationType !== null) {
      message.operationType = operationTypeFromJSON(object.operationType);
    } else {
      message.operationType = 0;
    }
    return message;
  },

  toJSON(message: MixerUnit): unknown {
    const obj: any = {};
    message.src !== undefined && (obj.src = sRCLabelToJSON(message.src));
    message.dst !== undefined && (obj.dst = channelLabelToJSON(message.dst));
    message.scalar !== undefined && (obj.scalar = message.scalar);
    message.offset !== undefined && (obj.offset = message.offset);
    message.applyTrim !== undefined && (obj.applyTrim = message.applyTrim);
    message.invertSource !== undefined &&
      (obj.invertSource = message.invertSource);
    message.operationType !== undefined &&
      (obj.operationType = operationTypeToJSON(message.operationType));
    return obj;
  },

  fromPartial(object: DeepPartial<MixerUnit>): MixerUnit {
    const message = { ...baseMixerUnit } as MixerUnit;
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
    if (object.operationType !== undefined && object.operationType !== null) {
      message.operationType = object.operationType;
    } else {
      message.operationType = 0;
    }
    return message;
  },
};

const baseLimits: object = {
  epL: 0,
  epH: 0,
  subtrim: 0,
  limitL: 0,
  limitH: 0,
  failsafe: 0,
  speed: 0,
  invert: false,
};

export const Limits = {
  encode(message: Limits, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Limits {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLimits } as Limits;
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

  fromJSON(object: any): Limits {
    const message = { ...baseLimits } as Limits;
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

  toJSON(message: Limits): unknown {
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

  fromPartial(object: DeepPartial<Limits>): Limits {
    const message = { ...baseLimits } as Limits;
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

const baseModel: object = { uuid: 0, name: "", rfProtocolType: 0 };

export const Model = {
  encode(message: Model, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.uuid) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.mixerUnits) {
      MixerUnit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limits) {
      Limits.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rfProtocolType !== 0) {
      writer.uint32(40).int32(message.rfProtocolType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModel } as Model;
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
          message.mixerUnits.push(MixerUnit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.limits.push(Limits.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Model {
    const message = { ...baseModel } as Model;
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
        message.mixerUnits.push(MixerUnit.fromJSON(e));
      }
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(Limits.fromJSON(e));
      }
    }
    if (object.rfProtocolType !== undefined && object.rfProtocolType !== null) {
      message.rfProtocolType = rFProtocolTypeFromJSON(object.rfProtocolType);
    } else {
      message.rfProtocolType = 0;
    }
    return message;
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    if (message.uuid) {
      obj.uuid = message.uuid.map((e) => e);
    } else {
      obj.uuid = [];
    }
    message.name !== undefined && (obj.name = message.name);
    if (message.mixerUnits) {
      obj.mixerUnits = message.mixerUnits.map((e) =>
        e ? MixerUnit.toJSON(e) : undefined
      );
    } else {
      obj.mixerUnits = [];
    }
    if (message.limits) {
      obj.limits = message.limits.map((e) =>
        e ? Limits.toJSON(e) : undefined
      );
    } else {
      obj.limits = [];
    }
    message.rfProtocolType !== undefined &&
      (obj.rfProtocolType = rFProtocolTypeToJSON(message.rfProtocolType));
    return obj;
  },

  fromPartial(object: DeepPartial<Model>): Model {
    const message = { ...baseModel } as Model;
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
        message.mixerUnits.push(MixerUnit.fromPartial(e));
      }
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(Limits.fromPartial(e));
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

const baseConfig: object = { version: 0 };

export const Config = {
  encode(message: Config, writer: Writer = Writer.create()): Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.tx !== undefined) {
      TX.encode(message.tx, writer.uint32(18).fork()).ldelim();
    }
    if (message.model !== undefined) {
      Model.encode(message.model, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfig } as Config;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.tx = TX.decode(reader, reader.uint32());
          break;
        case 3:
          message.model = Model.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Config {
    const message = { ...baseConfig } as Config;
    if (object.version !== undefined && object.version !== null) {
      message.version = Number(object.version);
    } else {
      message.version = 0;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TX.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = Model.fromJSON(object.model);
    } else {
      message.model = undefined;
    }
    return message;
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.tx !== undefined &&
      (obj.tx = message.tx ? TX.toJSON(message.tx) : undefined);
    message.model !== undefined &&
      (obj.model = message.model ? Model.toJSON(message.model) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Config>): Config {
    const message = { ...baseConfig } as Config;
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TX.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = Model.fromPartial(object.model);
    } else {
      message.model = undefined;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
