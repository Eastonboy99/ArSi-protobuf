/* Automatically generated nanopb header */
/* Generated by nanopb-0.4.5 */

#ifndef PB_TX_PB_H_INCLUDED
#define PB_TX_PB_H_INCLUDED
#include <pb.h>

#if PB_PROTO_HEADER_VERSION != 40
#error Regenerate this file with the current version of nanopb generator.
#endif

/* Enum definitions */
typedef enum _HardwareType { 
    HardwareType_TRANSMITTER_INPUT_NOT_USED = 0, 
    HardwareType_ANALOG_WITH_CENTER_AUTO_RETURN = 1, 
    HardwareType_ANALOG_WITH_CENTER = 2, 
    HardwareType_ANALOG_NO_CENTER = 3, 
    HardwareType_ANALOG_NO_CENTER_POSITIVE_ONLY = 4, 
    HardwareType_ANALOG_MOMENTARY_ON_OFF = 5, 
    HardwareType_SWITCH_ON_OFF = 6, 
    HardwareType_SWITCH_ON_OPEN_OFF = 7, 
    HardwareType_MOMENTARY_ON_OFF = 8 
} HardwareType;

typedef enum _InputType { 
    InputType_LOGICAL_INPUT_NOT_USED = 0, 
    InputType_ANALOG = 1, 
    InputType_ANALOG_MOMENTARY = 2, 
    InputType_SWITCH = 3, 
    InputType_BCD_SWITCH = 4, 
    InputType_MOMENTARY = 5, 
    InputType_TRIM = 6 
} InputType;

typedef enum _InputSubType { 
    InputSubType_SUB_TYPE_NOT_APPLICABLE = 0, 
    InputSubType_UP_DOWN_BUTTONS = 1, 
    InputSubType_INCREMENT_AND_LOOP = 2, 
    InputSubType_DECREMENT_AND_LOOP = 3, 
    InputSubType_SAW_TOOTH = 4, 
    InputSubType_DOUBLE_CLICK_DECREMENT = 5 
} InputSubType;

typedef enum _InputLabel { 
    InputLabel_NONE = 0, 
    InputLabel_ST = 1, 
    InputLabel_TH = 2, 
    InputLabel_THR = 3, 
    InputLabel_RUD = 4, 
    InputLabel_AIL = 5, 
    InputLabel_ELE = 6, 
    InputLabel_AUX = 7, 
    InputLabel_ST_DR = 8, 
    InputLabel_RUD_DR = 9, 
    InputLabel_AIL_DR = 10, 
    InputLabel_ELE_DR = 11, 
    InputLabel_TH_DR = 12, 
    InputLabel_THR_DR = 13, 
    InputLabel_TH_HOLD = 14, 
    InputLabel_GEAR = 15, 
    InputLabel_FLAPS = 16, 
    InputLabel_TRAINER = 17, 
    InputLabel_SIDE_L = 18, 
    InputLabel_SIDE_R = 19, 
    InputLabel_POT1 = 20, 
    InputLabel_POT2 = 21, 
    InputLabel_POT3 = 22, 
    InputLabel_POT4 = 23, 
    InputLabel_POT5 = 24, 
    InputLabel_POT6 = 25, 
    InputLabel_POT7 = 26, 
    InputLabel_POT8 = 27, 
    InputLabel_POT9 = 28, 
    InputLabel_SW1 = 29, 
    InputLabel_SW2 = 30, 
    InputLabel_SW3 = 31, 
    InputLabel_SW4 = 32, 
    InputLabel_SW5 = 33, 
    InputLabel_SW6 = 34, 
    InputLabel_SW7 = 35, 
    InputLabel_SW8 = 36, 
    InputLabel_SW9 = 37 
} InputLabel;

/* Struct definitions */
typedef struct _ControllerInput { 
    HardwareType hardwareType; 
    InputType inputType; 
    InputSubType inputSubType; 
    uint32_t port; 
    pb_callback_t calibration; 
    pb_callback_t input_labels; 
} ControllerInput;

typedef struct _TX { 
    pb_callback_t uuid; 
    pb_callback_t name; 
    pb_callback_t controllerInputs; 
    int32_t trimRange; 
    int32_t trimStepSize; 
} TX;


/* Helper constants for enums */
#define _HardwareType_MIN HardwareType_TRANSMITTER_INPUT_NOT_USED
#define _HardwareType_MAX HardwareType_MOMENTARY_ON_OFF
#define _HardwareType_ARRAYSIZE ((HardwareType)(HardwareType_MOMENTARY_ON_OFF+1))

#define _InputType_MIN InputType_LOGICAL_INPUT_NOT_USED
#define _InputType_MAX InputType_TRIM
#define _InputType_ARRAYSIZE ((InputType)(InputType_TRIM+1))

#define _InputSubType_MIN InputSubType_SUB_TYPE_NOT_APPLICABLE
#define _InputSubType_MAX InputSubType_DOUBLE_CLICK_DECREMENT
#define _InputSubType_ARRAYSIZE ((InputSubType)(InputSubType_DOUBLE_CLICK_DECREMENT+1))

#define _InputLabel_MIN InputLabel_NONE
#define _InputLabel_MAX InputLabel_SW9
#define _InputLabel_ARRAYSIZE ((InputLabel)(InputLabel_SW9+1))


#ifdef __cplusplus
extern "C" {
#endif

/* Initializer values for message structs */
#define ControllerInput_init_default             {_HardwareType_MIN, _InputType_MIN, _InputSubType_MIN, 0, {{NULL}, NULL}, {{NULL}, NULL}}
#define TX_init_default                          {{{NULL}, NULL}, {{NULL}, NULL}, {{NULL}, NULL}, 0, 0}
#define ControllerInput_init_zero                {_HardwareType_MIN, _InputType_MIN, _InputSubType_MIN, 0, {{NULL}, NULL}, {{NULL}, NULL}}
#define TX_init_zero                             {{{NULL}, NULL}, {{NULL}, NULL}, {{NULL}, NULL}, 0, 0}

/* Field tags (for use in manual encoding/decoding) */
#define ControllerInput_hardwareType_tag         1
#define ControllerInput_inputType_tag            2
#define ControllerInput_inputSubType_tag         3
#define ControllerInput_port_tag                 4
#define ControllerInput_calibration_tag          5
#define ControllerInput_input_labels_tag         6
#define TX_uuid_tag                              1
#define TX_name_tag                              2
#define TX_controllerInputs_tag                  3
#define TX_trimRange_tag                         4
#define TX_trimStepSize_tag                      5

/* Struct field encoding specification for nanopb */
#define ControllerInput_FIELDLIST(X, a) \
X(a, STATIC,   REQUIRED, UENUM,    hardwareType,      1) \
X(a, STATIC,   REQUIRED, UENUM,    inputType,         2) \
X(a, STATIC,   REQUIRED, UENUM,    inputSubType,      3) \
X(a, STATIC,   REQUIRED, UINT32,   port,              4) \
X(a, CALLBACK, REPEATED, UINT32,   calibration,       5) \
X(a, CALLBACK, REPEATED, UENUM,    input_labels,      6)
#define ControllerInput_CALLBACK pb_default_field_callback
#define ControllerInput_DEFAULT NULL

#define TX_FIELDLIST(X, a) \
X(a, CALLBACK, REPEATED, UINT32,   uuid,              1) \
X(a, CALLBACK, REQUIRED, STRING,   name,              2) \
X(a, CALLBACK, REPEATED, MESSAGE,  controllerInputs,   3) \
X(a, STATIC,   REQUIRED, INT32,    trimRange,         4) \
X(a, STATIC,   REQUIRED, INT32,    trimStepSize,      5)
#define TX_CALLBACK pb_default_field_callback
#define TX_DEFAULT NULL
#define TX_controllerInputs_MSGTYPE ControllerInput

extern const pb_msgdesc_t ControllerInput_msg;
extern const pb_msgdesc_t TX_msg;

/* Defines for backwards compatibility with code written before nanopb-0.4.0 */
#define ControllerInput_fields &ControllerInput_msg
#define TX_fields &TX_msg

/* Maximum encoded size of messages (where known) */
/* ControllerInput_size depends on runtime parameters */
/* TX_size depends on runtime parameters */

#ifdef __cplusplus
} /* extern "C" */
#endif

#endif