/* Automatically generated nanopb header */
/* Generated by nanopb-0.4.5 */

#ifndef PB_CONFIG_PB_H_INCLUDED
#define PB_CONFIG_PB_H_INCLUDED
#include <pb.h>
#include "tx.pb.h"
#include "model.pb.h"

#if PB_PROTO_HEADER_VERSION != 40
#error Regenerate this file with the current version of nanopb generator.
#endif

/* Struct definitions */
typedef struct _Config { 
    uint32_t version; 
    TX tx; 
    Model model; 
} Config;


#ifdef __cplusplus
extern "C" {
#endif

/* Initializer values for message structs */
#define Config_init_default                      {0, TX_init_default, Model_init_default}
#define Config_init_zero                         {0, TX_init_zero, Model_init_zero}

/* Field tags (for use in manual encoding/decoding) */
#define Config_version_tag                       1
#define Config_tx_tag                            2
#define Config_model_tag                         3

/* Struct field encoding specification for nanopb */
#define Config_FIELDLIST(X, a) \
X(a, STATIC,   REQUIRED, UINT32,   version,           1) \
X(a, STATIC,   REQUIRED, MESSAGE,  tx,                2) \
X(a, STATIC,   REQUIRED, MESSAGE,  model,             3)
#define Config_CALLBACK NULL
#define Config_DEFAULT NULL
#define Config_tx_MSGTYPE TX
#define Config_model_MSGTYPE Model

extern const pb_msgdesc_t Config_msg;

/* Defines for backwards compatibility with code written before nanopb-0.4.0 */
#define Config_fields &Config_msg

/* Maximum encoded size of messages (where known) */
#if defined(Model_size)
#define Config_size                              (816 + Model_size)
#endif

#ifdef __cplusplus
} /* extern "C" */
#endif

#endif
