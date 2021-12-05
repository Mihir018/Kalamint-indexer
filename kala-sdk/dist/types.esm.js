export default {
    "scalars": [
        0,
        1,
        2,
        4,
        14,
        22,
        31,
        40,
        56,
        71,
        72,
        82,
        90,
        91,
        101
    ],
    "types": {
        "Boolean": {},
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                2
            ],
            "_gt": [
                2
            ],
            "_gte": [
                2
            ],
            "_in": [
                2
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                2
            ],
            "_lte": [
                2
            ],
            "_neq": [
                2
            ],
            "_nin": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                4
            ],
            "_gt": [
                4
            ],
            "_gte": [
                4
            ],
            "_ilike": [
                4
            ],
            "_in": [
                4
            ],
            "_iregex": [
                4
            ],
            "_is_null": [
                0
            ],
            "_like": [
                4
            ],
            "_lt": [
                4
            ],
            "_lte": [
                4
            ],
            "_neq": [
                4
            ],
            "_nilike": [
                4
            ],
            "_nin": [
                4
            ],
            "_niregex": [
                4
            ],
            "_nlike": [
                4
            ],
            "_nregex": [
                4
            ],
            "_nsimilar": [
                4
            ],
            "_regex": [
                4
            ],
            "_similar": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "auction": {
            "id": [
                22
            ],
            "price": [
                22
            ],
            "trader": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "auction_aggregate": {
            "aggregate": [
                8
            ],
            "nodes": [
                6
            ],
            "__typename": [
                4
            ]
        },
        "auction_aggregate_fields": {
            "avg": [
                9
            ],
            "count": [
                2,
                {
                    "columns": [
                        14,
                        "[auction_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                11
            ],
            "min": [
                12
            ],
            "stddev": [
                15
            ],
            "stddev_pop": [
                16
            ],
            "stddev_samp": [
                17
            ],
            "sum": [
                18
            ],
            "var_pop": [
                19
            ],
            "var_samp": [
                20
            ],
            "variance": [
                21
            ],
            "__typename": [
                4
            ]
        },
        "auction_avg_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "auction_bool_exp": {
            "_and": [
                10
            ],
            "_not": [
                10
            ],
            "_or": [
                10
            ],
            "id": [
                23
            ],
            "price": [
                23
            ],
            "trader": [
                5
            ],
            "__typename": [
                4
            ]
        },
        "auction_max_fields": {
            "id": [
                22
            ],
            "price": [
                22
            ],
            "trader": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "auction_min_fields": {
            "id": [
                22
            ],
            "price": [
                22
            ],
            "trader": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "auction_order_by": {
            "id": [
                90
            ],
            "price": [
                90
            ],
            "trader": [
                90
            ],
            "__typename": [
                4
            ]
        },
        "auction_select_column": {},
        "auction_stddev_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "auction_stddev_pop_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "auction_stddev_samp_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "auction_sum_fields": {
            "id": [
                22
            ],
            "price": [
                22
            ],
            "__typename": [
                4
            ]
        },
        "auction_var_pop_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "auction_var_samp_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "auction_variance_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "bigint": {},
        "bigint_comparison_exp": {
            "_eq": [
                22
            ],
            "_gt": [
                22
            ],
            "_gte": [
                22
            ],
            "_in": [
                22
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                22
            ],
            "_lte": [
                22
            ],
            "_neq": [
                22
            ],
            "_nin": [
                22
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_contract": {
            "address": [
                4
            ],
            "created_at": [
                91
            ],
            "name": [
                4
            ],
            "typename": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_contract_aggregate": {
            "aggregate": [
                26
            ],
            "nodes": [
                24
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_contract_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        31,
                        "[dipdup_contract_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                28
            ],
            "min": [
                29
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_contract_bool_exp": {
            "_and": [
                27
            ],
            "_not": [
                27
            ],
            "_or": [
                27
            ],
            "address": [
                5
            ],
            "created_at": [
                92
            ],
            "name": [
                5
            ],
            "typename": [
                5
            ],
            "updated_at": [
                92
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_contract_max_fields": {
            "address": [
                4
            ],
            "created_at": [
                91
            ],
            "name": [
                4
            ],
            "typename": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_contract_min_fields": {
            "address": [
                4
            ],
            "created_at": [
                91
            ],
            "name": [
                4
            ],
            "typename": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_contract_order_by": {
            "address": [
                90
            ],
            "created_at": [
                90
            ],
            "name": [
                90
            ],
            "typename": [
                90
            ],
            "updated_at": [
                90
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_contract_select_column": {},
        "dipdup_head": {
            "created_at": [
                91
            ],
            "hash": [
                4
            ],
            "level": [
                2
            ],
            "name": [
                4
            ],
            "timestamp": [
                91
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_aggregate": {
            "aggregate": [
                34
            ],
            "nodes": [
                32
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_aggregate_fields": {
            "avg": [
                35
            ],
            "count": [
                2,
                {
                    "columns": [
                        40,
                        "[dipdup_head_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                37
            ],
            "min": [
                38
            ],
            "stddev": [
                41
            ],
            "stddev_pop": [
                42
            ],
            "stddev_samp": [
                43
            ],
            "sum": [
                44
            ],
            "var_pop": [
                45
            ],
            "var_samp": [
                46
            ],
            "variance": [
                47
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_avg_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_bool_exp": {
            "_and": [
                36
            ],
            "_not": [
                36
            ],
            "_or": [
                36
            ],
            "created_at": [
                92
            ],
            "hash": [
                5
            ],
            "level": [
                3
            ],
            "name": [
                5
            ],
            "timestamp": [
                92
            ],
            "updated_at": [
                92
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_max_fields": {
            "created_at": [
                91
            ],
            "hash": [
                4
            ],
            "level": [
                2
            ],
            "name": [
                4
            ],
            "timestamp": [
                91
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_min_fields": {
            "created_at": [
                91
            ],
            "hash": [
                4
            ],
            "level": [
                2
            ],
            "name": [
                4
            ],
            "timestamp": [
                91
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_order_by": {
            "created_at": [
                90
            ],
            "hash": [
                90
            ],
            "level": [
                90
            ],
            "name": [
                90
            ],
            "timestamp": [
                90
            ],
            "updated_at": [
                90
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_select_column": {},
        "dipdup_head_stddev_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_stddev_pop_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_stddev_samp_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_sum_fields": {
            "level": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_var_pop_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_var_samp_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_head_variance_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index": {
            "config_hash": [
                4
            ],
            "created_at": [
                91
            ],
            "level": [
                2
            ],
            "name": [
                4
            ],
            "status": [
                4
            ],
            "template": [
                4
            ],
            "template_values": [
                72,
                {
                    "path": [
                        4
                    ]
                }
            ],
            "type": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_aggregate": {
            "aggregate": [
                50
            ],
            "nodes": [
                48
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_aggregate_fields": {
            "avg": [
                51
            ],
            "count": [
                2,
                {
                    "columns": [
                        56,
                        "[dipdup_index_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                53
            ],
            "min": [
                54
            ],
            "stddev": [
                57
            ],
            "stddev_pop": [
                58
            ],
            "stddev_samp": [
                59
            ],
            "sum": [
                60
            ],
            "var_pop": [
                61
            ],
            "var_samp": [
                62
            ],
            "variance": [
                63
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_avg_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_bool_exp": {
            "_and": [
                52
            ],
            "_not": [
                52
            ],
            "_or": [
                52
            ],
            "config_hash": [
                5
            ],
            "created_at": [
                92
            ],
            "level": [
                3
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "template": [
                5
            ],
            "template_values": [
                73
            ],
            "type": [
                5
            ],
            "updated_at": [
                92
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_max_fields": {
            "config_hash": [
                4
            ],
            "created_at": [
                91
            ],
            "level": [
                2
            ],
            "name": [
                4
            ],
            "status": [
                4
            ],
            "template": [
                4
            ],
            "type": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_min_fields": {
            "config_hash": [
                4
            ],
            "created_at": [
                91
            ],
            "level": [
                2
            ],
            "name": [
                4
            ],
            "status": [
                4
            ],
            "template": [
                4
            ],
            "type": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_order_by": {
            "config_hash": [
                90
            ],
            "created_at": [
                90
            ],
            "level": [
                90
            ],
            "name": [
                90
            ],
            "status": [
                90
            ],
            "template": [
                90
            ],
            "template_values": [
                90
            ],
            "type": [
                90
            ],
            "updated_at": [
                90
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_select_column": {},
        "dipdup_index_stddev_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_stddev_pop_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_stddev_samp_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_sum_fields": {
            "level": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_var_pop_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_var_samp_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_index_variance_fields": {
            "level": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_schema": {
            "created_at": [
                91
            ],
            "hash": [
                4
            ],
            "name": [
                4
            ],
            "reindex": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_schema_aggregate": {
            "aggregate": [
                66
            ],
            "nodes": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_schema_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        71,
                        "[dipdup_schema_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                68
            ],
            "min": [
                69
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_schema_bool_exp": {
            "_and": [
                67
            ],
            "_not": [
                67
            ],
            "_or": [
                67
            ],
            "created_at": [
                92
            ],
            "hash": [
                5
            ],
            "name": [
                5
            ],
            "reindex": [
                5
            ],
            "updated_at": [
                92
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_schema_max_fields": {
            "created_at": [
                91
            ],
            "hash": [
                4
            ],
            "name": [
                4
            ],
            "reindex": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_schema_min_fields": {
            "created_at": [
                91
            ],
            "hash": [
                4
            ],
            "name": [
                4
            ],
            "reindex": [
                4
            ],
            "updated_at": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_schema_order_by": {
            "created_at": [
                90
            ],
            "hash": [
                90
            ],
            "name": [
                90
            ],
            "reindex": [
                90
            ],
            "updated_at": [
                90
            ],
            "__typename": [
                4
            ]
        },
        "dipdup_schema_select_column": {},
        "jsonb": {},
        "jsonb_comparison_exp": {
            "_contained_in": [
                72
            ],
            "_contains": [
                72
            ],
            "_eq": [
                72
            ],
            "_gt": [
                72
            ],
            "_gte": [
                72
            ],
            "_has_key": [
                4
            ],
            "_has_keys_all": [
                4
            ],
            "_has_keys_any": [
                4
            ],
            "_in": [
                72
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                72
            ],
            "_lte": [
                72
            ],
            "_neq": [
                72
            ],
            "_nin": [
                72
            ],
            "__typename": [
                4
            ]
        },
        "meta": {
            "category": [
                4
            ],
            "collection_id": [
                2
            ],
            "collection_name": [
                4
            ],
            "creator": [
                4
            ],
            "creator_name": [
                4
            ],
            "creator_royalty": [
                2
            ],
            "decimals": [
                2
            ],
            "edition_number": [
                2
            ],
            "editions": [
                2
            ],
            "id": [
                4
            ],
            "ipfs_hash": [
                4
            ],
            "keywords": [
                4
            ],
            "name": [
                4
            ],
            "on_auction": [
                4
            ],
            "on_sale": [
                4
            ],
            "owner": [
                4
            ],
            "price": [
                4
            ],
            "symbol": [
                4
            ],
            "token_id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "meta_aggregate": {
            "aggregate": [
                76
            ],
            "nodes": [
                74
            ],
            "__typename": [
                4
            ]
        },
        "meta_aggregate_fields": {
            "avg": [
                77
            ],
            "count": [
                2,
                {
                    "columns": [
                        82,
                        "[meta_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                79
            ],
            "min": [
                80
            ],
            "stddev": [
                83
            ],
            "stddev_pop": [
                84
            ],
            "stddev_samp": [
                85
            ],
            "sum": [
                86
            ],
            "var_pop": [
                87
            ],
            "var_samp": [
                88
            ],
            "variance": [
                89
            ],
            "__typename": [
                4
            ]
        },
        "meta_avg_fields": {
            "collection_id": [
                1
            ],
            "creator_royalty": [
                1
            ],
            "decimals": [
                1
            ],
            "edition_number": [
                1
            ],
            "editions": [
                1
            ],
            "token_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "meta_bool_exp": {
            "_and": [
                78
            ],
            "_not": [
                78
            ],
            "_or": [
                78
            ],
            "category": [
                5
            ],
            "collection_id": [
                3
            ],
            "collection_name": [
                5
            ],
            "creator": [
                5
            ],
            "creator_name": [
                5
            ],
            "creator_royalty": [
                3
            ],
            "decimals": [
                3
            ],
            "edition_number": [
                3
            ],
            "editions": [
                3
            ],
            "id": [
                5
            ],
            "ipfs_hash": [
                5
            ],
            "keywords": [
                5
            ],
            "name": [
                5
            ],
            "on_auction": [
                5
            ],
            "on_sale": [
                5
            ],
            "owner": [
                5
            ],
            "price": [
                5
            ],
            "symbol": [
                5
            ],
            "token_id": [
                3
            ],
            "__typename": [
                4
            ]
        },
        "meta_max_fields": {
            "category": [
                4
            ],
            "collection_id": [
                2
            ],
            "collection_name": [
                4
            ],
            "creator": [
                4
            ],
            "creator_name": [
                4
            ],
            "creator_royalty": [
                2
            ],
            "decimals": [
                2
            ],
            "edition_number": [
                2
            ],
            "editions": [
                2
            ],
            "id": [
                4
            ],
            "ipfs_hash": [
                4
            ],
            "keywords": [
                4
            ],
            "name": [
                4
            ],
            "on_auction": [
                4
            ],
            "on_sale": [
                4
            ],
            "owner": [
                4
            ],
            "price": [
                4
            ],
            "symbol": [
                4
            ],
            "token_id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "meta_min_fields": {
            "category": [
                4
            ],
            "collection_id": [
                2
            ],
            "collection_name": [
                4
            ],
            "creator": [
                4
            ],
            "creator_name": [
                4
            ],
            "creator_royalty": [
                2
            ],
            "decimals": [
                2
            ],
            "edition_number": [
                2
            ],
            "editions": [
                2
            ],
            "id": [
                4
            ],
            "ipfs_hash": [
                4
            ],
            "keywords": [
                4
            ],
            "name": [
                4
            ],
            "on_auction": [
                4
            ],
            "on_sale": [
                4
            ],
            "owner": [
                4
            ],
            "price": [
                4
            ],
            "symbol": [
                4
            ],
            "token_id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "meta_order_by": {
            "category": [
                90
            ],
            "collection_id": [
                90
            ],
            "collection_name": [
                90
            ],
            "creator": [
                90
            ],
            "creator_name": [
                90
            ],
            "creator_royalty": [
                90
            ],
            "decimals": [
                90
            ],
            "edition_number": [
                90
            ],
            "editions": [
                90
            ],
            "id": [
                90
            ],
            "ipfs_hash": [
                90
            ],
            "keywords": [
                90
            ],
            "name": [
                90
            ],
            "on_auction": [
                90
            ],
            "on_sale": [
                90
            ],
            "owner": [
                90
            ],
            "price": [
                90
            ],
            "symbol": [
                90
            ],
            "token_id": [
                90
            ],
            "__typename": [
                4
            ]
        },
        "meta_select_column": {},
        "meta_stddev_fields": {
            "collection_id": [
                1
            ],
            "creator_royalty": [
                1
            ],
            "decimals": [
                1
            ],
            "edition_number": [
                1
            ],
            "editions": [
                1
            ],
            "token_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "meta_stddev_pop_fields": {
            "collection_id": [
                1
            ],
            "creator_royalty": [
                1
            ],
            "decimals": [
                1
            ],
            "edition_number": [
                1
            ],
            "editions": [
                1
            ],
            "token_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "meta_stddev_samp_fields": {
            "collection_id": [
                1
            ],
            "creator_royalty": [
                1
            ],
            "decimals": [
                1
            ],
            "edition_number": [
                1
            ],
            "editions": [
                1
            ],
            "token_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "meta_sum_fields": {
            "collection_id": [
                2
            ],
            "creator_royalty": [
                2
            ],
            "decimals": [
                2
            ],
            "edition_number": [
                2
            ],
            "editions": [
                2
            ],
            "token_id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "meta_var_pop_fields": {
            "collection_id": [
                1
            ],
            "creator_royalty": [
                1
            ],
            "decimals": [
                1
            ],
            "edition_number": [
                1
            ],
            "editions": [
                1
            ],
            "token_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "meta_var_samp_fields": {
            "collection_id": [
                1
            ],
            "creator_royalty": [
                1
            ],
            "decimals": [
                1
            ],
            "edition_number": [
                1
            ],
            "editions": [
                1
            ],
            "token_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "meta_variance_fields": {
            "collection_id": [
                1
            ],
            "creator_royalty": [
                1
            ],
            "decimals": [
                1
            ],
            "edition_number": [
                1
            ],
            "editions": [
                1
            ],
            "token_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "order_by": {},
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                91
            ],
            "_gt": [
                91
            ],
            "_gte": [
                91
            ],
            "_in": [
                91
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                91
            ],
            "_lte": [
                91
            ],
            "_neq": [
                91
            ],
            "_nin": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "token": {
            "collection": [
                4
            ],
            "creator": [
                4
            ],
            "id": [
                22
            ],
            "ipfs": [
                4
            ],
            "price": [
                22
            ],
            "sale": [
                4
            ],
            "trader": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "token_aggregate": {
            "aggregate": [
                95
            ],
            "nodes": [
                93
            ],
            "__typename": [
                4
            ]
        },
        "token_aggregate_fields": {
            "avg": [
                96
            ],
            "count": [
                2,
                {
                    "columns": [
                        101,
                        "[token_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                98
            ],
            "min": [
                99
            ],
            "stddev": [
                102
            ],
            "stddev_pop": [
                103
            ],
            "stddev_samp": [
                104
            ],
            "sum": [
                105
            ],
            "var_pop": [
                106
            ],
            "var_samp": [
                107
            ],
            "variance": [
                108
            ],
            "__typename": [
                4
            ]
        },
        "token_avg_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "token_bool_exp": {
            "_and": [
                97
            ],
            "_not": [
                97
            ],
            "_or": [
                97
            ],
            "collection": [
                5
            ],
            "creator": [
                5
            ],
            "id": [
                23
            ],
            "ipfs": [
                5
            ],
            "price": [
                23
            ],
            "sale": [
                5
            ],
            "trader": [
                5
            ],
            "__typename": [
                4
            ]
        },
        "token_max_fields": {
            "collection": [
                4
            ],
            "creator": [
                4
            ],
            "id": [
                22
            ],
            "ipfs": [
                4
            ],
            "price": [
                22
            ],
            "sale": [
                4
            ],
            "trader": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "token_min_fields": {
            "collection": [
                4
            ],
            "creator": [
                4
            ],
            "id": [
                22
            ],
            "ipfs": [
                4
            ],
            "price": [
                22
            ],
            "sale": [
                4
            ],
            "trader": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "token_order_by": {
            "collection": [
                90
            ],
            "creator": [
                90
            ],
            "id": [
                90
            ],
            "ipfs": [
                90
            ],
            "price": [
                90
            ],
            "sale": [
                90
            ],
            "trader": [
                90
            ],
            "__typename": [
                4
            ]
        },
        "token_select_column": {},
        "token_stddev_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "token_stddev_pop_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "token_stddev_samp_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "token_sum_fields": {
            "id": [
                22
            ],
            "price": [
                22
            ],
            "__typename": [
                4
            ]
        },
        "token_var_pop_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "token_var_samp_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "token_variance_fields": {
            "id": [
                1
            ],
            "price": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "auction": [
                6,
                {
                    "distinct_on": [
                        14,
                        "[auction_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        13,
                        "[auction_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "auction_aggregate": [
                7,
                {
                    "distinct_on": [
                        14,
                        "[auction_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        13,
                        "[auction_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "auction_by_pk": [
                6,
                {
                    "trader": [
                        4,
                        "String!"
                    ]
                }
            ],
            "dipdup_contract": [
                24,
                {
                    "distinct_on": [
                        31,
                        "[dipdup_contract_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        30,
                        "[dipdup_contract_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "dipdup_contract_aggregate": [
                25,
                {
                    "distinct_on": [
                        31,
                        "[dipdup_contract_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        30,
                        "[dipdup_contract_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "dipdup_contract_by_pk": [
                24,
                {
                    "name": [
                        4,
                        "String!"
                    ]
                }
            ],
            "dipdup_head": [
                32,
                {
                    "distinct_on": [
                        40,
                        "[dipdup_head_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        39,
                        "[dipdup_head_order_by!]"
                    ],
                    "where": [
                        36
                    ]
                }
            ],
            "dipdup_head_aggregate": [
                33,
                {
                    "distinct_on": [
                        40,
                        "[dipdup_head_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        39,
                        "[dipdup_head_order_by!]"
                    ],
                    "where": [
                        36
                    ]
                }
            ],
            "dipdup_head_by_pk": [
                32,
                {
                    "name": [
                        4,
                        "String!"
                    ]
                }
            ],
            "dipdup_index": [
                48,
                {
                    "distinct_on": [
                        56,
                        "[dipdup_index_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        55,
                        "[dipdup_index_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "dipdup_index_aggregate": [
                49,
                {
                    "distinct_on": [
                        56,
                        "[dipdup_index_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        55,
                        "[dipdup_index_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "dipdup_index_by_pk": [
                48,
                {
                    "name": [
                        4,
                        "String!"
                    ]
                }
            ],
            "dipdup_schema": [
                64,
                {
                    "distinct_on": [
                        71,
                        "[dipdup_schema_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        70,
                        "[dipdup_schema_order_by!]"
                    ],
                    "where": [
                        67
                    ]
                }
            ],
            "dipdup_schema_aggregate": [
                65,
                {
                    "distinct_on": [
                        71,
                        "[dipdup_schema_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        70,
                        "[dipdup_schema_order_by!]"
                    ],
                    "where": [
                        67
                    ]
                }
            ],
            "dipdup_schema_by_pk": [
                64,
                {
                    "name": [
                        4,
                        "String!"
                    ]
                }
            ],
            "meta": [
                74,
                {
                    "distinct_on": [
                        82,
                        "[meta_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        81,
                        "[meta_order_by!]"
                    ],
                    "where": [
                        78
                    ]
                }
            ],
            "meta_aggregate": [
                75,
                {
                    "distinct_on": [
                        82,
                        "[meta_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        81,
                        "[meta_order_by!]"
                    ],
                    "where": [
                        78
                    ]
                }
            ],
            "meta_by_pk": [
                74,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "token": [
                93,
                {
                    "distinct_on": [
                        101,
                        "[token_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        100,
                        "[token_order_by!]"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "token_aggregate": [
                94,
                {
                    "distinct_on": [
                        101,
                        "[token_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        100,
                        "[token_order_by!]"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "token_by_pk": [
                93,
                {
                    "id": [
                        22,
                        "bigint!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "Subscription": {
            "auction": [
                6,
                {
                    "distinct_on": [
                        14,
                        "[auction_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        13,
                        "[auction_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "auction_aggregate": [
                7,
                {
                    "distinct_on": [
                        14,
                        "[auction_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        13,
                        "[auction_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "auction_by_pk": [
                6,
                {
                    "trader": [
                        4,
                        "String!"
                    ]
                }
            ],
            "dipdup_contract": [
                24,
                {
                    "distinct_on": [
                        31,
                        "[dipdup_contract_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        30,
                        "[dipdup_contract_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "dipdup_contract_aggregate": [
                25,
                {
                    "distinct_on": [
                        31,
                        "[dipdup_contract_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        30,
                        "[dipdup_contract_order_by!]"
                    ],
                    "where": [
                        27
                    ]
                }
            ],
            "dipdup_contract_by_pk": [
                24,
                {
                    "name": [
                        4,
                        "String!"
                    ]
                }
            ],
            "dipdup_head": [
                32,
                {
                    "distinct_on": [
                        40,
                        "[dipdup_head_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        39,
                        "[dipdup_head_order_by!]"
                    ],
                    "where": [
                        36
                    ]
                }
            ],
            "dipdup_head_aggregate": [
                33,
                {
                    "distinct_on": [
                        40,
                        "[dipdup_head_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        39,
                        "[dipdup_head_order_by!]"
                    ],
                    "where": [
                        36
                    ]
                }
            ],
            "dipdup_head_by_pk": [
                32,
                {
                    "name": [
                        4,
                        "String!"
                    ]
                }
            ],
            "dipdup_index": [
                48,
                {
                    "distinct_on": [
                        56,
                        "[dipdup_index_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        55,
                        "[dipdup_index_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "dipdup_index_aggregate": [
                49,
                {
                    "distinct_on": [
                        56,
                        "[dipdup_index_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        55,
                        "[dipdup_index_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "dipdup_index_by_pk": [
                48,
                {
                    "name": [
                        4,
                        "String!"
                    ]
                }
            ],
            "dipdup_schema": [
                64,
                {
                    "distinct_on": [
                        71,
                        "[dipdup_schema_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        70,
                        "[dipdup_schema_order_by!]"
                    ],
                    "where": [
                        67
                    ]
                }
            ],
            "dipdup_schema_aggregate": [
                65,
                {
                    "distinct_on": [
                        71,
                        "[dipdup_schema_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        70,
                        "[dipdup_schema_order_by!]"
                    ],
                    "where": [
                        67
                    ]
                }
            ],
            "dipdup_schema_by_pk": [
                64,
                {
                    "name": [
                        4,
                        "String!"
                    ]
                }
            ],
            "meta": [
                74,
                {
                    "distinct_on": [
                        82,
                        "[meta_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        81,
                        "[meta_order_by!]"
                    ],
                    "where": [
                        78
                    ]
                }
            ],
            "meta_aggregate": [
                75,
                {
                    "distinct_on": [
                        82,
                        "[meta_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        81,
                        "[meta_order_by!]"
                    ],
                    "where": [
                        78
                    ]
                }
            ],
            "meta_by_pk": [
                74,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "token": [
                93,
                {
                    "distinct_on": [
                        101,
                        "[token_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        100,
                        "[token_order_by!]"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "token_aggregate": [
                94,
                {
                    "distinct_on": [
                        101,
                        "[token_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        100,
                        "[token_order_by!]"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "token_by_pk": [
                93,
                {
                    "id": [
                        22,
                        "bigint!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        }
    }
}