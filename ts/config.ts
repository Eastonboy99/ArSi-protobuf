/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { TX } from "./tx";
import { Model } from "./model";

export const protobufPackage = "";

export interface Config {
  version: number;
  tx: TX | undefined;
  model: Model | undefined;
}

const baseConfig: object = { version: 0 };

export const Config = {
  encode(
    message: Config,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
