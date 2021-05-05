/* Automatically generated nanopb header */
/* Generated by nanopb-0.4.5 */

#ifndef PB_ARSICONFIG_PB_H_INCLUDED
#define PB_ARSICONFIG_PB_H_INCLUDED
#include <pb.h>
#include "config.pb.h"

#if PB_PROTO_HEADER_VERSION != 40
#error Regenerate this file with the current version of nanopb generator.
#endif

/* Enum definitions */
typedef enum _Commands { 
    Commands_REQUEST = 0, 
    Commands_REPLY_WITH_CONFIG = 1, 
    Commands_RECEIVED_VALID_CONFIG = 2 
} Commands;

/* Struct definitions */
typedef struct _Packet { 
    Commands type; 
    bool has_config;
    Config config; 
} Packet;


/* Helper constants for enums */
#define _Commands_MIN Commands_REQUEST
#define _Commands_MAX Commands_RECEIVED_VALID_CONFIG
#define _Commands_ARRAYSIZE ((Commands)(Commands_RECEIVED_VALID_CONFIG+1))


#ifdef __cplusplus
extern "C" {
#endif

/* Initializer values for message structs */
#define Packet_init_default                      {_Commands_MIN, false, Config_init_default}
#define Packet_init_zero                         {_Commands_MIN, false, Config_init_zero}

/* Field tags (for use in manual encoding/decoding) */
#define Packet_type_tag                          1
#define Packet_config_tag                        2

/* Struct field encoding specification for nanopb */
#define Packet_FIELDLIST(X, a) \
X(a, STATIC,   REQUIRED, UENUM,    type,              1) \
X(a, STATIC,   OPTIONAL, MESSAGE,  config,            2)
#define Packet_CALLBACK NULL
#define Packet_DEFAULT NULL
#define Packet_config_MSGTYPE Config

extern const pb_msgdesc_t Packet_msg;

/* Defines for backwards compatibility with code written before nanopb-0.4.0 */
#define Packet_fields &Packet_msg

/* Maximum encoded size of messages (where known) */
#if defined(Config_size)
#define Packet_size                              (8 + Config_size)
#endif

#ifdef __cplusplus
} /* extern "C" */
#endif

#endif
