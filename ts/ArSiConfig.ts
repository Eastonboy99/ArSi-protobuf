/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Config } from "./config";

export const protobufPackage = "";

export enum Commands {
  REQUEST = 0,
  REPLY_WITH_CONFIG = 1,
  RECEIVED_VALID_CONFIG = 2,
  UNRECOGNIZED = -1,
}

export function commandsFromJSON(object: any): Commands {
  switch (object) {
    case 0:
    case "REQUEST":
      return Commands.REQUEST;
    case 1:
    case "REPLY_WITH_CONFIG":
      return Commands.REPLY_WITH_CONFIG;
    case 2:
    case "RECEIVED_VALID_CONFIG":
      return Commands.RECEIVED_VALID_CONFIG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Commands.UNRECOGNIZED;
  }
}

export function commandsToJSON(object: Commands): string {
  switch (object) {
    case Commands.REQUEST:
      return "REQUEST";
    case Commands.REPLY_WITH_CONFIG:
      return "REPLY_WITH_CONFIG";
    case Commands.RECEIVED_VALID_CONFIG:
      return "RECEIVED_VALID_CONFIG";
    default:
      return "UNKNOWN";
  }
}

export interface Packet {
  type: Commands;
  config: Config | undefined;
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
      Config.encode(message.config, writer.uint32(18).fork()).ldelim();
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
          message.config = Config.decode(reader, reader.uint32());
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
      message.type = commandsFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromJSON(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },

  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = commandsToJSON(message.type));
    message.config !== undefined &&
      (obj.config = message.config ? Config.toJSON(message.config) : undefined);
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
      message.config = Config.fromPartial(object.config);
    } else {
      message.config = undefined;
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
