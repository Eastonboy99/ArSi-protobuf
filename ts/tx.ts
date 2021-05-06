/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

export interface ControllerInput {
  hardwareType: HardwareType;
  inputType: InputType;
  inputSubType: InputSubType;
  port: number;
  calibration: number[];
  labels: InputLabel[];
}

export interface TX {
  uuid: number[];
  name: string;
  controllerInputs: ControllerInput[];
  trimRange: number;
  trimStepSize: number;
}

const baseControllerInput: object = {
  hardwareType: 0,
  inputType: 0,
  inputSubType: 0,
  port: 0,
  calibration: 0,
  labels: 0,
};

export const ControllerInput = {
  encode(
    message: ControllerInput,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseControllerInput } as ControllerInput;
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

  fromJSON(object: any): ControllerInput {
    const message = { ...baseControllerInput } as ControllerInput;
    message.calibration = [];
    message.labels = [];
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
    if (object.labels !== undefined && object.labels !== null) {
      for (const e of object.labels) {
        message.labels.push(inputLabelFromJSON(e));
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
    if (message.labels) {
      obj.labels = message.labels.map((e) => inputLabelToJSON(e));
    } else {
      obj.labels = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerInput>): ControllerInput {
    const message = { ...baseControllerInput } as ControllerInput;
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

const baseTX: object = { uuid: 0, name: "", trimRange: 0, trimStepSize: 0 };

export const TX = {
  encode(message: TX, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TX {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
