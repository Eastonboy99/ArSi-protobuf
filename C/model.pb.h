/* Automatically generated nanopb header */
/* Generated by nanopb-0.4.5 */

#ifndef PB_MODEL_PB_H_INCLUDED
#define PB_MODEL_PB_H_INCLUDED
#include <pb.h>

#if PB_PROTO_HEADER_VERSION != 40
#error Regenerate this file with the current version of nanopb generator.
#endif

/* Enum definitions */
typedef enum _SRCLabel { 
    SRCLabel_SRC_NONE = 0, 
    /* values from input_label_t */
    SRCLabel_IN_NONE = 1, 
    SRCLabel_IN_ST = 2, 
    SRCLabel_IN_TH = 3, 
    SRCLabel_IN_THR = 4, 
    SRCLabel_IN_RUD = 5, 
    SRCLabel_IN_AIL = 6, 
    SRCLabel_IN_ELE = 7, 
    SRCLabel_IN_AUX = 8, 
    SRCLabel_IN_ST_DR = 9, 
    SRCLabel_IN_RUD_DR = 10, 
    SRCLabel_IN_AIL_DR = 11, 
    SRCLabel_IN_ELE_DR = 12, 
    SRCLabel_IN_TH_DR = 13, 
    SRCLabel_IN_THR_DR = 14, 
    SRCLabel_IN_TH_HOLD = 15, 
    SRCLabel_IN_GEAR = 16, 
    SRCLabel_IN_FLAPS = 17, 
    SRCLabel_IN_TRAINER = 18, 
    SRCLabel_IN_SIDE_L = 19, 
    SRCLabel_IN_SIDE_R = 20, 
    SRCLabel_IN_POT1 = 21, 
    SRCLabel_IN_POT2 = 22, 
    SRCLabel_IN_POT3 = 23, 
    SRCLabel_IN_POT4 = 24, 
    SRCLabel_IN_POT5 = 25, 
    SRCLabel_IN_POT6 = 26, 
    SRCLabel_IN_POT7 = 27, 
    SRCLabel_IN_POT8 = 28, 
    SRCLabel_IN_POT9 = 29, 
    SRCLabel_IN_SW1 = 30, 
    SRCLabel_IN_SW2 = 31, 
    SRCLabel_IN_SW3 = 32, 
    SRCLabel_IN_SW4 = 33, 
    SRCLabel_IN_SW5 = 34, 
    SRCLabel_IN_SW6 = 35, 
    SRCLabel_IN_SW7 = 36, 
    SRCLabel_IN_SW8 = 37, 
    SRCLabel_IN_SW9 = 38, 
    /* values from channel_label_t */
    SRCLabel_CH_CH1 = 39, 
    SRCLabel_CH_CH2 = 40, 
    SRCLabel_CH_CH3 = 41, 
    SRCLabel_CH_CH4 = 42, 
    SRCLabel_CH_CH5 = 43, 
    SRCLabel_CH_VIRTUAL1 = 44, 
    SRCLabel_CH_VIRTUAL2 = 45, 
    SRCLabel_CH_VIRTUAL3 = 46, 
    SRCLabel_CH_VIRTUAL4 = 47, 
    SRCLabel_CH_VIRTUAL5 = 48, 
    SRCLabel_CH_VIRTUAL6 = 49, 
    SRCLabel_CH_VIRTUAL7 = 50, 
    SRCLabel_CH_VIRTUAL8 = 51, 
    SRCLabel_CH_VIRTUAL9 = 52, 
    SRCLabel_CH_VIRTUAL10 = 53, 
    SRCLabel_CH_HIDDEN1 = 54, 
    SRCLabel_CH_HIDDEN2 = 55, 
    SRCLabel_CH_HIDDEN3 = 56, 
    SRCLabel_CH_HIDDEN4 = 57, 
    SRCLabel_CH_HIDDEN5 = 58, 
    SRCLabel_CH_HIDDEN6 = 59, 
    SRCLabel_CH_HIDDEN7 = 60, 
    SRCLabel_CH_HIDDEN8 = 61, 
    SRCLabel_CH_HIDDEN9 = 62, 
    SRCLabel_CH_HIDDEN10 = 63, 
    SRCLabel_CH_HIDDEN11 = 64, 
    SRCLabel_CH_HIDDEN12 = 65, 
    SRCLabel_CH_HIDDEN13 = 66, 
    SRCLabel_CH_HIDDEN14 = 67, 
    SRCLabel_CH_HIDDEN15 = 68, 
    SRCLabel_CH_HIDDEN16 = 69, 
    SRCLabel_CH_HIDDEN17 = 70, 
    SRCLabel_CH_HIDDEN18 = 71, 
    SRCLabel_CH_HIDDEN19 = 72, 
    SRCLabel_CH_HIDDEN20 = 73, 
    SRCLabel_CH_HIDDEN21 = 74, 
    SRCLabel_CH_HIDDEN22 = 75, 
    SRCLabel_CH_HIDDEN23 = 76, 
    SRCLabel_CH_HIDDEN24 = 77, 
    SRCLabel_CH_HIDDEN25 = 78, 
    SRCLabel_CH_HIDDEN26 = 79, 
    SRCLabel_CH_HIDDEN27 = 80, 
    SRCLabel_CH_HIDDEN28 = 81, 
    SRCLabel_CH_HIDDEN29 = 82, 
    SRCLabel_CH_HIDDEN30 = 83, 
    SRCLabel_CH_HIDDEN31 = 84, 
    SRCLabel_CH_HIDDEN32 = 85, 
    SRCLabel_CH_HIDDEN33 = 86, 
    SRCLabel_CH_HIDDEN34 = 87, 
    SRCLabel_CH_HIDDEN35 = 88, 
    SRCLabel_CH_HIDDEN36 = 89, 
    SRCLabel_CH_HIDDEN37 = 90, 
    SRCLabel_CH_HIDDEN38 = 91, 
    SRCLabel_CH_HIDDEN39 = 92, 
    SRCLabel_CH_HIDDEN40 = 93, 
    SRCLabel_CH_HIDDEN41 = 94, 
    SRCLabel_CH_HIDDEN42 = 95, 
    SRCLabel_CH_HIDDEN43 = 96, 
    SRCLabel_CH_HIDDEN44 = 97, 
    SRCLabel_CH_HIDDEN45 = 98, 
    SRCLabel_CH_HIDDEN46 = 99, 
    SRCLabel_CH_HIDDEN47 = 100, 
    SRCLabel_CH_HIDDEN48 = 101, 
    SRCLabel_CH_HIDDEN49 = 102, 
    SRCLabel_CH_HIDDEN50 = 103, 
    /* channel_label_t values that correspond to rf_channels
   (= channels after applying limts) */
    SRCLabel_RF_CH1 = 104, 
    SRCLabel_RF_CH2 = 105, 
    SRCLabel_RF_CH3 = 106, 
    SRCLabel_RF_CH4 = 107, 
    SRCLabel_RF_CH5 = 108 
} SRCLabel;

typedef enum _ChannelLabel { /* The following items must be in sequence: */
    /* NUMBER_OF_RF_CHANNELS channels (CH1..CHxxx) */
    ChannelLabel_CH1 = 0, 
    ChannelLabel_CH2 = 1, 
    ChannelLabel_CH3 = 2, 
    ChannelLabel_CH4 = 3, 
    ChannelLabel_CH5 = 4, 
    /* NUMBER_OF_VIRTUAL_CHANNELS virtual channels (VIRTUAL1..VIRTUALxxx) = 5; */
    ChannelLabel_VIRTUAL1 = 6, 
    ChannelLabel_VIRTUAL2 = 7, 
    ChannelLabel_VIRTUAL3 = 8, 
    ChannelLabel_VIRTUAL4 = 9, 
    ChannelLabel_VIRTUAL5 = 10, 
    ChannelLabel_VIRTUAL6 = 11, 
    ChannelLabel_VIRTUAL7 = 12, 
    ChannelLabel_VIRTUAL8 = 13, 
    ChannelLabel_VIRTUAL9 = 14, 
    ChannelLabel_VIRTUAL10 = 15, 
    /* NUMBER_OF_HIDDEN_VIRTUAL_CHANNELS hidden channels to be used by the
 complex mixer UI (HIDDEN1..HIDDENxxx) */
    ChannelLabel_HIDDEN1 = 16, 
    ChannelLabel_HIDDEN2 = 17, 
    ChannelLabel_HIDDEN3 = 18, 
    ChannelLabel_HIDDEN4 = 19, 
    ChannelLabel_HIDDEN5 = 20, 
    ChannelLabel_HIDDEN6 = 21, 
    ChannelLabel_HIDDEN7 = 22, 
    ChannelLabel_HIDDEN8 = 23, 
    ChannelLabel_HIDDEN9 = 24, 
    ChannelLabel_HIDDEN10 = 25, 
    ChannelLabel_HIDDEN11 = 26, 
    ChannelLabel_HIDDEN12 = 27, 
    ChannelLabel_HIDDEN13 = 28, 
    ChannelLabel_HIDDEN14 = 29, 
    ChannelLabel_HIDDEN15 = 30, 
    ChannelLabel_HIDDEN16 = 31, 
    ChannelLabel_HIDDEN17 = 32, 
    ChannelLabel_HIDDEN18 = 33, 
    ChannelLabel_HIDDEN19 = 34, 
    ChannelLabel_HIDDEN20 = 35, 
    ChannelLabel_HIDDEN21 = 36, 
    ChannelLabel_HIDDEN22 = 37, 
    ChannelLabel_HIDDEN23 = 38, 
    ChannelLabel_HIDDEN24 = 39, 
    ChannelLabel_HIDDEN25 = 40, 
    ChannelLabel_HIDDEN26 = 41, 
    ChannelLabel_HIDDEN27 = 42, 
    ChannelLabel_HIDDEN28 = 43, 
    ChannelLabel_HIDDEN29 = 44, 
    ChannelLabel_HIDDEN30 = 45, 
    ChannelLabel_HIDDEN31 = 46, 
    ChannelLabel_HIDDEN32 = 47, 
    ChannelLabel_HIDDEN33 = 48, 
    ChannelLabel_HIDDEN34 = 49, 
    ChannelLabel_HIDDEN35 = 50, 
    ChannelLabel_HIDDEN36 = 51, 
    ChannelLabel_HIDDEN37 = 52, 
    ChannelLabel_HIDDEN38 = 53, 
    ChannelLabel_HIDDEN39 = 54, 
    ChannelLabel_HIDDEN40 = 55, 
    ChannelLabel_HIDDEN41 = 56, 
    ChannelLabel_HIDDEN42 = 57, 
    ChannelLabel_HIDDEN43 = 58, 
    ChannelLabel_HIDDEN44 = 59, 
    ChannelLabel_HIDDEN45 = 60, 
    ChannelLabel_HIDDEN46 = 61, 
    ChannelLabel_HIDDEN47 = 62, 
    ChannelLabel_HIDDEN48 = 63, 
    ChannelLabel_HIDDEN49 = 64, 
    ChannelLabel_HIDDEN50 = 65 
} ChannelLabel;

typedef enum _OperationType { 
    OperationType_OP_REPLACE = 0, 
    OperationType_OP_ADD = 1, 
    OperationType_OP_MULTIPLY = 2, 
    OperationType_OP_MIN = 3, 
    OperationType_OP_MAX = 4 
} OperationType;

typedef enum _RFProtocolType { 
    RFProtocolType_RF_PROTOCOL_HK310 = 0, 
    RFProtocolType_RF_PROTOCOL_ARSI = 1 
} RFProtocolType;

/* Struct definitions */
typedef struct _Limits { 
    int32_t ep_l; 
    int32_t ep_h; 
    int32_t subtrim; 
    int32_t limit_l; 
    int32_t limit_h; 
    int32_t failsafe; 
    bool has_speed;
    uint32_t speed; 
    bool has_invert;
    bool invert; 
} Limits;

typedef struct _MixerUnit { 
    SRCLabel src; 
    ChannelLabel dst; 
    int32_t scalar; 
    int32_t offset; 
    bool applyTrim; 
    bool has_invertSource;
    bool invertSource; 
    bool has_operationType;
    OperationType operationType; 
} MixerUnit;

typedef struct _Model { 
    pb_callback_t uuid; 
    pb_callback_t name; 
    pb_callback_t mixerUnits; 
    pb_callback_t limits; 
    RFProtocolType rfProtocolType; 
} Model;


/* Helper constants for enums */
#define _SRCLabel_MIN SRCLabel_SRC_NONE
#define _SRCLabel_MAX SRCLabel_RF_CH5
#define _SRCLabel_ARRAYSIZE ((SRCLabel)(SRCLabel_RF_CH5+1))

#define _ChannelLabel_MIN ChannelLabel_CH1
#define _ChannelLabel_MAX ChannelLabel_HIDDEN50
#define _ChannelLabel_ARRAYSIZE ((ChannelLabel)(ChannelLabel_HIDDEN50+1))

#define _OperationType_MIN OperationType_OP_REPLACE
#define _OperationType_MAX OperationType_OP_MAX
#define _OperationType_ARRAYSIZE ((OperationType)(OperationType_OP_MAX+1))

#define _RFProtocolType_MIN RFProtocolType_RF_PROTOCOL_HK310
#define _RFProtocolType_MAX RFProtocolType_RF_PROTOCOL_ARSI
#define _RFProtocolType_ARRAYSIZE ((RFProtocolType)(RFProtocolType_RF_PROTOCOL_ARSI+1))


#ifdef __cplusplus
extern "C" {
#endif

/* Initializer values for message structs */
#define MixerUnit_init_default                   {_SRCLabel_MIN, _ChannelLabel_MIN, 0, 0, 0, false, false, false, OperationType_OP_REPLACE}
#define Limits_init_default                      {0, 0, 0, 0, 0, 0, false, 0u, false, false}
#define Model_init_default                       {{{NULL}, NULL}, {{NULL}, NULL}, {{NULL}, NULL}, {{NULL}, NULL}, _RFProtocolType_MIN}
#define MixerUnit_init_zero                      {_SRCLabel_MIN, _ChannelLabel_MIN, 0, 0, 0, false, 0, false, _OperationType_MIN}
#define Limits_init_zero                         {0, 0, 0, 0, 0, 0, false, 0, false, 0}
#define Model_init_zero                          {{{NULL}, NULL}, {{NULL}, NULL}, {{NULL}, NULL}, {{NULL}, NULL}, _RFProtocolType_MIN}

/* Field tags (for use in manual encoding/decoding) */
#define Limits_ep_l_tag                          1
#define Limits_ep_h_tag                          2
#define Limits_subtrim_tag                       3
#define Limits_limit_l_tag                       4
#define Limits_limit_h_tag                       5
#define Limits_failsafe_tag                      6
#define Limits_speed_tag                         7
#define Limits_invert_tag                        8
#define MixerUnit_src_tag                        1
#define MixerUnit_dst_tag                        2
#define MixerUnit_scalar_tag                     3
#define MixerUnit_offset_tag                     4
#define MixerUnit_applyTrim_tag                  5
#define MixerUnit_invertSource_tag               6
#define MixerUnit_operationType_tag              7
#define Model_uuid_tag                           1
#define Model_name_tag                           2
#define Model_mixerUnits_tag                     3
#define Model_limits_tag                         4
#define Model_rfProtocolType_tag                 5

/* Struct field encoding specification for nanopb */
#define MixerUnit_FIELDLIST(X, a) \
X(a, STATIC,   REQUIRED, UENUM,    src,               1) \
X(a, STATIC,   REQUIRED, UENUM,    dst,               2) \
X(a, STATIC,   REQUIRED, INT32,    scalar,            3) \
X(a, STATIC,   REQUIRED, INT32,    offset,            4) \
X(a, STATIC,   REQUIRED, BOOL,     applyTrim,         5) \
X(a, STATIC,   OPTIONAL, BOOL,     invertSource,      6) \
X(a, STATIC,   OPTIONAL, UENUM,    operationType,     7)
#define MixerUnit_CALLBACK NULL
#define MixerUnit_DEFAULT (const pb_byte_t*)"\x30\x00\x00"

#define Limits_FIELDLIST(X, a) \
X(a, STATIC,   REQUIRED, INT32,    ep_l,              1) \
X(a, STATIC,   REQUIRED, INT32,    ep_h,              2) \
X(a, STATIC,   REQUIRED, INT32,    subtrim,           3) \
X(a, STATIC,   REQUIRED, INT32,    limit_l,           4) \
X(a, STATIC,   REQUIRED, INT32,    limit_h,           5) \
X(a, STATIC,   REQUIRED, INT32,    failsafe,          6) \
X(a, STATIC,   OPTIONAL, UINT32,   speed,             7) \
X(a, STATIC,   OPTIONAL, BOOL,     invert,            8)
#define Limits_CALLBACK NULL
#define Limits_DEFAULT (const pb_byte_t*)"\x38\x00\x40\x00\x00"

#define Model_FIELDLIST(X, a) \
X(a, CALLBACK, REPEATED, UINT32,   uuid,              1) \
X(a, CALLBACK, REQUIRED, STRING,   name,              2) \
X(a, CALLBACK, REPEATED, MESSAGE,  mixerUnits,        3) \
X(a, CALLBACK, REPEATED, MESSAGE,  limits,            4) \
X(a, STATIC,   REQUIRED, UENUM,    rfProtocolType,    5)
#define Model_CALLBACK pb_default_field_callback
#define Model_DEFAULT NULL
#define Model_mixerUnits_MSGTYPE MixerUnit
#define Model_limits_MSGTYPE Limits

extern const pb_msgdesc_t MixerUnit_msg;
extern const pb_msgdesc_t Limits_msg;
extern const pb_msgdesc_t Model_msg;

/* Defines for backwards compatibility with code written before nanopb-0.4.0 */
#define MixerUnit_fields &MixerUnit_msg
#define Limits_fields &Limits_msg
#define Model_fields &Model_msg

/* Maximum encoded size of messages (where known) */
/* Model_size depends on runtime parameters */
#define Limits_size                              74
#define MixerUnit_size                           32

#ifdef __cplusplus
} /* extern "C" */
#endif

#endif