import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    bigint: any,
    jsonb: any,
    timestamptz: any,
}


/** columns and relationships of "auction" */
export interface auction {
    id: Scalars['bigint']
    price: Scalars['bigint']
    trader: Scalars['String']
    __typename: 'auction'
}


/** aggregated selection of "auction" */
export interface auction_aggregate {
    aggregate?: auction_aggregate_fields
    nodes: auction[]
    __typename: 'auction_aggregate'
}


/** aggregate fields of "auction" */
export interface auction_aggregate_fields {
    avg?: auction_avg_fields
    count: Scalars['Int']
    max?: auction_max_fields
    min?: auction_min_fields
    stddev?: auction_stddev_fields
    stddev_pop?: auction_stddev_pop_fields
    stddev_samp?: auction_stddev_samp_fields
    sum?: auction_sum_fields
    var_pop?: auction_var_pop_fields
    var_samp?: auction_var_samp_fields
    variance?: auction_variance_fields
    __typename: 'auction_aggregate_fields'
}


/** aggregate avg on columns */
export interface auction_avg_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'auction_avg_fields'
}


/** aggregate max on columns */
export interface auction_max_fields {
    id?: Scalars['bigint']
    price?: Scalars['bigint']
    trader?: Scalars['String']
    __typename: 'auction_max_fields'
}


/** aggregate min on columns */
export interface auction_min_fields {
    id?: Scalars['bigint']
    price?: Scalars['bigint']
    trader?: Scalars['String']
    __typename: 'auction_min_fields'
}


/** select columns of table "auction" */
export type auction_select_column = 'id' | 'price' | 'trader'


/** aggregate stddev on columns */
export interface auction_stddev_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'auction_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface auction_stddev_pop_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'auction_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface auction_stddev_samp_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'auction_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface auction_sum_fields {
    id?: Scalars['bigint']
    price?: Scalars['bigint']
    __typename: 'auction_sum_fields'
}


/** aggregate var_pop on columns */
export interface auction_var_pop_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'auction_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface auction_var_samp_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'auction_var_samp_fields'
}


/** aggregate variance on columns */
export interface auction_variance_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'auction_variance_fields'
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contract {
    address: Scalars['String']
    created_at: Scalars['timestamptz']
    name: Scalars['String']
    typename?: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_contract'
}


/** aggregated selection of "dipdup_contract" */
export interface dipdup_contract_aggregate {
    aggregate?: dipdup_contract_aggregate_fields
    nodes: dipdup_contract[]
    __typename: 'dipdup_contract_aggregate'
}


/** aggregate fields of "dipdup_contract" */
export interface dipdup_contract_aggregate_fields {
    count: Scalars['Int']
    max?: dipdup_contract_max_fields
    min?: dipdup_contract_min_fields
    __typename: 'dipdup_contract_aggregate_fields'
}


/** aggregate max on columns */
export interface dipdup_contract_max_fields {
    address?: Scalars['String']
    created_at?: Scalars['timestamptz']
    name?: Scalars['String']
    typename?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_contract_max_fields'
}


/** aggregate min on columns */
export interface dipdup_contract_min_fields {
    address?: Scalars['String']
    created_at?: Scalars['timestamptz']
    name?: Scalars['String']
    typename?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_contract_min_fields'
}


/** select columns of table "dipdup_contract" */
export type dipdup_contract_select_column = 'address' | 'created_at' | 'name' | 'typename' | 'updated_at'


/** columns and relationships of "dipdup_head" */
export interface dipdup_head {
    created_at: Scalars['timestamptz']
    hash: Scalars['String']
    level: Scalars['Int']
    name: Scalars['String']
    timestamp: Scalars['timestamptz']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_head'
}


/** aggregated selection of "dipdup_head" */
export interface dipdup_head_aggregate {
    aggregate?: dipdup_head_aggregate_fields
    nodes: dipdup_head[]
    __typename: 'dipdup_head_aggregate'
}


/** aggregate fields of "dipdup_head" */
export interface dipdup_head_aggregate_fields {
    avg?: dipdup_head_avg_fields
    count: Scalars['Int']
    max?: dipdup_head_max_fields
    min?: dipdup_head_min_fields
    stddev?: dipdup_head_stddev_fields
    stddev_pop?: dipdup_head_stddev_pop_fields
    stddev_samp?: dipdup_head_stddev_samp_fields
    sum?: dipdup_head_sum_fields
    var_pop?: dipdup_head_var_pop_fields
    var_samp?: dipdup_head_var_samp_fields
    variance?: dipdup_head_variance_fields
    __typename: 'dipdup_head_aggregate_fields'
}


/** aggregate avg on columns */
export interface dipdup_head_avg_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_avg_fields'
}


/** aggregate max on columns */
export interface dipdup_head_max_fields {
    created_at?: Scalars['timestamptz']
    hash?: Scalars['String']
    level?: Scalars['Int']
    name?: Scalars['String']
    timestamp?: Scalars['timestamptz']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_head_max_fields'
}


/** aggregate min on columns */
export interface dipdup_head_min_fields {
    created_at?: Scalars['timestamptz']
    hash?: Scalars['String']
    level?: Scalars['Int']
    name?: Scalars['String']
    timestamp?: Scalars['timestamptz']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_head_min_fields'
}


/** select columns of table "dipdup_head" */
export type dipdup_head_select_column = 'created_at' | 'hash' | 'level' | 'name' | 'timestamp' | 'updated_at'


/** aggregate stddev on columns */
export interface dipdup_head_stddev_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface dipdup_head_stddev_pop_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface dipdup_head_stddev_samp_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface dipdup_head_sum_fields {
    level?: Scalars['Int']
    __typename: 'dipdup_head_sum_fields'
}


/** aggregate var_pop on columns */
export interface dipdup_head_var_pop_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface dipdup_head_var_samp_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_var_samp_fields'
}


/** aggregate variance on columns */
export interface dipdup_head_variance_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_head_variance_fields'
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_index {
    config_hash: Scalars['String']
    created_at: Scalars['timestamptz']
    level: Scalars['Int']
    name: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status: Scalars['String']
    template?: Scalars['String']
    template_values?: Scalars['jsonb']
    /** operation: operation\nbig_map: big_map\nhead: head */
    type: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_index'
}


/** aggregated selection of "dipdup_index" */
export interface dipdup_index_aggregate {
    aggregate?: dipdup_index_aggregate_fields
    nodes: dipdup_index[]
    __typename: 'dipdup_index_aggregate'
}


/** aggregate fields of "dipdup_index" */
export interface dipdup_index_aggregate_fields {
    avg?: dipdup_index_avg_fields
    count: Scalars['Int']
    max?: dipdup_index_max_fields
    min?: dipdup_index_min_fields
    stddev?: dipdup_index_stddev_fields
    stddev_pop?: dipdup_index_stddev_pop_fields
    stddev_samp?: dipdup_index_stddev_samp_fields
    sum?: dipdup_index_sum_fields
    var_pop?: dipdup_index_var_pop_fields
    var_samp?: dipdup_index_var_samp_fields
    variance?: dipdup_index_variance_fields
    __typename: 'dipdup_index_aggregate_fields'
}


/** aggregate avg on columns */
export interface dipdup_index_avg_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_avg_fields'
}


/** aggregate max on columns */
export interface dipdup_index_max_fields {
    config_hash?: Scalars['String']
    created_at?: Scalars['timestamptz']
    level?: Scalars['Int']
    name?: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: Scalars['String']
    template?: Scalars['String']
    /** operation: operation\nbig_map: big_map\nhead: head */
    type?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_index_max_fields'
}


/** aggregate min on columns */
export interface dipdup_index_min_fields {
    config_hash?: Scalars['String']
    created_at?: Scalars['timestamptz']
    level?: Scalars['Int']
    name?: Scalars['String']
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: Scalars['String']
    template?: Scalars['String']
    /** operation: operation\nbig_map: big_map\nhead: head */
    type?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_index_min_fields'
}


/** select columns of table "dipdup_index" */
export type dipdup_index_select_column = 'config_hash' | 'created_at' | 'level' | 'name' | 'status' | 'template' | 'template_values' | 'type' | 'updated_at'


/** aggregate stddev on columns */
export interface dipdup_index_stddev_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface dipdup_index_stddev_pop_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface dipdup_index_stddev_samp_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface dipdup_index_sum_fields {
    level?: Scalars['Int']
    __typename: 'dipdup_index_sum_fields'
}


/** aggregate var_pop on columns */
export interface dipdup_index_var_pop_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface dipdup_index_var_samp_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_var_samp_fields'
}


/** aggregate variance on columns */
export interface dipdup_index_variance_fields {
    level?: Scalars['Float']
    __typename: 'dipdup_index_variance_fields'
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schema {
    created_at: Scalars['timestamptz']
    hash: Scalars['String']
    name: Scalars['String']
    /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
    reindex?: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'dipdup_schema'
}


/** aggregated selection of "dipdup_schema" */
export interface dipdup_schema_aggregate {
    aggregate?: dipdup_schema_aggregate_fields
    nodes: dipdup_schema[]
    __typename: 'dipdup_schema_aggregate'
}


/** aggregate fields of "dipdup_schema" */
export interface dipdup_schema_aggregate_fields {
    count: Scalars['Int']
    max?: dipdup_schema_max_fields
    min?: dipdup_schema_min_fields
    __typename: 'dipdup_schema_aggregate_fields'
}


/** aggregate max on columns */
export interface dipdup_schema_max_fields {
    created_at?: Scalars['timestamptz']
    hash?: Scalars['String']
    name?: Scalars['String']
    /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
    reindex?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_schema_max_fields'
}


/** aggregate min on columns */
export interface dipdup_schema_min_fields {
    created_at?: Scalars['timestamptz']
    hash?: Scalars['String']
    name?: Scalars['String']
    /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
    reindex?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'dipdup_schema_min_fields'
}


/** select columns of table "dipdup_schema" */
export type dipdup_schema_select_column = 'created_at' | 'hash' | 'name' | 'reindex' | 'updated_at'


/** columns and relationships of "meta" */
export interface meta {
    category?: Scalars['String']
    collection_id?: Scalars['Int']
    collection_name?: Scalars['String']
    creator?: Scalars['String']
    creator_name?: Scalars['String']
    creator_royalty?: Scalars['Int']
    decimals?: Scalars['Int']
    edition_number?: Scalars['Int']
    editions?: Scalars['Int']
    id: Scalars['String']
    ipfs_hash?: Scalars['String']
    keywords?: Scalars['String']
    name?: Scalars['String']
    on_auction?: Scalars['String']
    on_sale?: Scalars['String']
    owner?: Scalars['String']
    price?: Scalars['String']
    symbol?: Scalars['String']
    token_id?: Scalars['Int']
    __typename: 'meta'
}


/** aggregated selection of "meta" */
export interface meta_aggregate {
    aggregate?: meta_aggregate_fields
    nodes: meta[]
    __typename: 'meta_aggregate'
}


/** aggregate fields of "meta" */
export interface meta_aggregate_fields {
    avg?: meta_avg_fields
    count: Scalars['Int']
    max?: meta_max_fields
    min?: meta_min_fields
    stddev?: meta_stddev_fields
    stddev_pop?: meta_stddev_pop_fields
    stddev_samp?: meta_stddev_samp_fields
    sum?: meta_sum_fields
    var_pop?: meta_var_pop_fields
    var_samp?: meta_var_samp_fields
    variance?: meta_variance_fields
    __typename: 'meta_aggregate_fields'
}


/** aggregate avg on columns */
export interface meta_avg_fields {
    collection_id?: Scalars['Float']
    creator_royalty?: Scalars['Float']
    decimals?: Scalars['Float']
    edition_number?: Scalars['Float']
    editions?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'meta_avg_fields'
}


/** aggregate max on columns */
export interface meta_max_fields {
    category?: Scalars['String']
    collection_id?: Scalars['Int']
    collection_name?: Scalars['String']
    creator?: Scalars['String']
    creator_name?: Scalars['String']
    creator_royalty?: Scalars['Int']
    decimals?: Scalars['Int']
    edition_number?: Scalars['Int']
    editions?: Scalars['Int']
    id?: Scalars['String']
    ipfs_hash?: Scalars['String']
    keywords?: Scalars['String']
    name?: Scalars['String']
    on_auction?: Scalars['String']
    on_sale?: Scalars['String']
    owner?: Scalars['String']
    price?: Scalars['String']
    symbol?: Scalars['String']
    token_id?: Scalars['Int']
    __typename: 'meta_max_fields'
}


/** aggregate min on columns */
export interface meta_min_fields {
    category?: Scalars['String']
    collection_id?: Scalars['Int']
    collection_name?: Scalars['String']
    creator?: Scalars['String']
    creator_name?: Scalars['String']
    creator_royalty?: Scalars['Int']
    decimals?: Scalars['Int']
    edition_number?: Scalars['Int']
    editions?: Scalars['Int']
    id?: Scalars['String']
    ipfs_hash?: Scalars['String']
    keywords?: Scalars['String']
    name?: Scalars['String']
    on_auction?: Scalars['String']
    on_sale?: Scalars['String']
    owner?: Scalars['String']
    price?: Scalars['String']
    symbol?: Scalars['String']
    token_id?: Scalars['Int']
    __typename: 'meta_min_fields'
}


/** select columns of table "meta" */
export type meta_select_column = 'category' | 'collection_id' | 'collection_name' | 'creator' | 'creator_name' | 'creator_royalty' | 'decimals' | 'edition_number' | 'editions' | 'id' | 'ipfs_hash' | 'keywords' | 'name' | 'on_auction' | 'on_sale' | 'owner' | 'price' | 'symbol' | 'token_id'


/** aggregate stddev on columns */
export interface meta_stddev_fields {
    collection_id?: Scalars['Float']
    creator_royalty?: Scalars['Float']
    decimals?: Scalars['Float']
    edition_number?: Scalars['Float']
    editions?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'meta_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface meta_stddev_pop_fields {
    collection_id?: Scalars['Float']
    creator_royalty?: Scalars['Float']
    decimals?: Scalars['Float']
    edition_number?: Scalars['Float']
    editions?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'meta_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface meta_stddev_samp_fields {
    collection_id?: Scalars['Float']
    creator_royalty?: Scalars['Float']
    decimals?: Scalars['Float']
    edition_number?: Scalars['Float']
    editions?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'meta_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface meta_sum_fields {
    collection_id?: Scalars['Int']
    creator_royalty?: Scalars['Int']
    decimals?: Scalars['Int']
    edition_number?: Scalars['Int']
    editions?: Scalars['Int']
    token_id?: Scalars['Int']
    __typename: 'meta_sum_fields'
}


/** aggregate var_pop on columns */
export interface meta_var_pop_fields {
    collection_id?: Scalars['Float']
    creator_royalty?: Scalars['Float']
    decimals?: Scalars['Float']
    edition_number?: Scalars['Float']
    editions?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'meta_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface meta_var_samp_fields {
    collection_id?: Scalars['Float']
    creator_royalty?: Scalars['Float']
    decimals?: Scalars['Float']
    edition_number?: Scalars['Float']
    editions?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'meta_var_samp_fields'
}


/** aggregate variance on columns */
export interface meta_variance_fields {
    collection_id?: Scalars['Float']
    creator_royalty?: Scalars['Float']
    decimals?: Scalars['Float']
    edition_number?: Scalars['Float']
    editions?: Scalars['Float']
    token_id?: Scalars['Float']
    __typename: 'meta_variance_fields'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "auction" */
    auction: auction[]
    /** fetch aggregated fields from the table: "auction" */
    auction_aggregate: auction_aggregate
    /** fetch data from the table: "auction" using primary key columns */
    auction_by_pk?: auction
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract: dipdup_contract[]
    /** fetch aggregated fields from the table: "dipdup_contract" */
    dipdup_contract_aggregate: dipdup_contract_aggregate
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: dipdup_contract
    /** fetch data from the table: "dipdup_head" */
    dipdup_head: dipdup_head[]
    /** fetch aggregated fields from the table: "dipdup_head" */
    dipdup_head_aggregate: dipdup_head_aggregate
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: dipdup_head
    /** fetch data from the table: "dipdup_index" */
    dipdup_index: dipdup_index[]
    /** fetch aggregated fields from the table: "dipdup_index" */
    dipdup_index_aggregate: dipdup_index_aggregate
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema: dipdup_schema[]
    /** fetch aggregated fields from the table: "dipdup_schema" */
    dipdup_schema_aggregate: dipdup_schema_aggregate
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: dipdup_schema
    /** fetch data from the table: "meta" */
    meta: meta[]
    /** fetch aggregated fields from the table: "meta" */
    meta_aggregate: meta_aggregate
    /** fetch data from the table: "meta" using primary key columns */
    meta_by_pk?: meta
    /** fetch data from the table: "token" */
    token: token[]
    /** fetch aggregated fields from the table: "token" */
    token_aggregate: token_aggregate
    /** fetch data from the table: "token" using primary key columns */
    token_by_pk?: token
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "auction" */
    auction: auction[]
    /** fetch aggregated fields from the table: "auction" */
    auction_aggregate: auction_aggregate
    /** fetch data from the table: "auction" using primary key columns */
    auction_by_pk?: auction
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract: dipdup_contract[]
    /** fetch aggregated fields from the table: "dipdup_contract" */
    dipdup_contract_aggregate: dipdup_contract_aggregate
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: dipdup_contract
    /** fetch data from the table: "dipdup_head" */
    dipdup_head: dipdup_head[]
    /** fetch aggregated fields from the table: "dipdup_head" */
    dipdup_head_aggregate: dipdup_head_aggregate
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: dipdup_head
    /** fetch data from the table: "dipdup_index" */
    dipdup_index: dipdup_index[]
    /** fetch aggregated fields from the table: "dipdup_index" */
    dipdup_index_aggregate: dipdup_index_aggregate
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: dipdup_index
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema: dipdup_schema[]
    /** fetch aggregated fields from the table: "dipdup_schema" */
    dipdup_schema_aggregate: dipdup_schema_aggregate
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: dipdup_schema
    /** fetch data from the table: "meta" */
    meta: meta[]
    /** fetch aggregated fields from the table: "meta" */
    meta_aggregate: meta_aggregate
    /** fetch data from the table: "meta" using primary key columns */
    meta_by_pk?: meta
    /** fetch data from the table: "token" */
    token: token[]
    /** fetch aggregated fields from the table: "token" */
    token_aggregate: token_aggregate
    /** fetch data from the table: "token" using primary key columns */
    token_by_pk?: token
    __typename: 'subscription_root'
}


/** columns and relationships of "token" */
export interface token {
    collection: Scalars['String']
    creator: Scalars['String']
    id: Scalars['bigint']
    ipfs: Scalars['String']
    price: Scalars['bigint']
    sale: Scalars['String']
    trader: Scalars['String']
    __typename: 'token'
}


/** aggregated selection of "token" */
export interface token_aggregate {
    aggregate?: token_aggregate_fields
    nodes: token[]
    __typename: 'token_aggregate'
}


/** aggregate fields of "token" */
export interface token_aggregate_fields {
    avg?: token_avg_fields
    count: Scalars['Int']
    max?: token_max_fields
    min?: token_min_fields
    stddev?: token_stddev_fields
    stddev_pop?: token_stddev_pop_fields
    stddev_samp?: token_stddev_samp_fields
    sum?: token_sum_fields
    var_pop?: token_var_pop_fields
    var_samp?: token_var_samp_fields
    variance?: token_variance_fields
    __typename: 'token_aggregate_fields'
}


/** aggregate avg on columns */
export interface token_avg_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'token_avg_fields'
}


/** aggregate max on columns */
export interface token_max_fields {
    collection?: Scalars['String']
    creator?: Scalars['String']
    id?: Scalars['bigint']
    ipfs?: Scalars['String']
    price?: Scalars['bigint']
    sale?: Scalars['String']
    trader?: Scalars['String']
    __typename: 'token_max_fields'
}


/** aggregate min on columns */
export interface token_min_fields {
    collection?: Scalars['String']
    creator?: Scalars['String']
    id?: Scalars['bigint']
    ipfs?: Scalars['String']
    price?: Scalars['bigint']
    sale?: Scalars['String']
    trader?: Scalars['String']
    __typename: 'token_min_fields'
}


/** select columns of table "token" */
export type token_select_column = 'collection' | 'creator' | 'id' | 'ipfs' | 'price' | 'sale' | 'trader'


/** aggregate stddev on columns */
export interface token_stddev_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'token_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface token_stddev_pop_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'token_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface token_stddev_samp_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'token_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface token_sum_fields {
    id?: Scalars['bigint']
    price?: Scalars['bigint']
    __typename: 'token_sum_fields'
}


/** aggregate var_pop on columns */
export interface token_var_pop_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'token_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface token_var_samp_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'token_var_samp_fields'
}


/** aggregate variance on columns */
export interface token_variance_fields {
    id?: Scalars['Float']
    price?: Scalars['Float']
    __typename: 'token_variance_fields'
}

export type Query = query_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "auction" */
export interface auctionRequest{
    id?: boolean | number
    price?: boolean | number
    trader?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "auction" */
export interface auction_aggregateRequest{
    aggregate?: auction_aggregate_fieldsRequest
    nodes?: auctionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "auction" */
export interface auction_aggregate_fieldsRequest{
    avg?: auction_avg_fieldsRequest
    count?: [{columns?: (auction_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: auction_max_fieldsRequest
    min?: auction_min_fieldsRequest
    stddev?: auction_stddev_fieldsRequest
    stddev_pop?: auction_stddev_pop_fieldsRequest
    stddev_samp?: auction_stddev_samp_fieldsRequest
    sum?: auction_sum_fieldsRequest
    var_pop?: auction_var_pop_fieldsRequest
    var_samp?: auction_var_samp_fieldsRequest
    variance?: auction_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface auction_avg_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "auction". All fields are combined with a logical 'AND'. */
export interface auction_bool_exp {_and?: (auction_bool_exp[] | null),_not?: (auction_bool_exp | null),_or?: (auction_bool_exp[] | null),id?: (bigint_comparison_exp | null),price?: (bigint_comparison_exp | null),trader?: (String_comparison_exp | null)}


/** aggregate max on columns */
export interface auction_max_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    trader?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface auction_min_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    trader?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "auction". */
export interface auction_order_by {id?: (order_by | null),price?: (order_by | null),trader?: (order_by | null)}


/** aggregate stddev on columns */
export interface auction_stddev_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface auction_stddev_pop_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface auction_stddev_samp_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface auction_sum_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface auction_var_pop_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface auction_var_samp_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface auction_variance_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractRequest{
    address?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_contract" */
export interface dipdup_contract_aggregateRequest{
    aggregate?: dipdup_contract_aggregate_fieldsRequest
    nodes?: dipdup_contractRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_contract" */
export interface dipdup_contract_aggregate_fieldsRequest{
    count?: [{columns?: (dipdup_contract_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_contract_max_fieldsRequest
    min?: dipdup_contract_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export interface dipdup_contract_bool_exp {_and?: (dipdup_contract_bool_exp[] | null),_not?: (dipdup_contract_bool_exp | null),_or?: (dipdup_contract_bool_exp[] | null),address?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),name?: (String_comparison_exp | null),typename?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** aggregate max on columns */
export interface dipdup_contract_max_fieldsRequest{
    address?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_contract_min_fieldsRequest{
    address?: boolean | number
    created_at?: boolean | number
    name?: boolean | number
    typename?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "dipdup_contract". */
export interface dipdup_contract_order_by {address?: (order_by | null),created_at?: (order_by | null),name?: (order_by | null),typename?: (order_by | null),updated_at?: (order_by | null)}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headRequest{
    created_at?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_head" */
export interface dipdup_head_aggregateRequest{
    aggregate?: dipdup_head_aggregate_fieldsRequest
    nodes?: dipdup_headRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_head" */
export interface dipdup_head_aggregate_fieldsRequest{
    avg?: dipdup_head_avg_fieldsRequest
    count?: [{columns?: (dipdup_head_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_head_max_fieldsRequest
    min?: dipdup_head_min_fieldsRequest
    stddev?: dipdup_head_stddev_fieldsRequest
    stddev_pop?: dipdup_head_stddev_pop_fieldsRequest
    stddev_samp?: dipdup_head_stddev_samp_fieldsRequest
    sum?: dipdup_head_sum_fieldsRequest
    var_pop?: dipdup_head_var_pop_fieldsRequest
    var_samp?: dipdup_head_var_samp_fieldsRequest
    variance?: dipdup_head_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface dipdup_head_avg_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export interface dipdup_head_bool_exp {_and?: (dipdup_head_bool_exp[] | null),_not?: (dipdup_head_bool_exp | null),_or?: (dipdup_head_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** aggregate max on columns */
export interface dipdup_head_max_fieldsRequest{
    created_at?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_head_min_fieldsRequest{
    created_at?: boolean | number
    hash?: boolean | number
    level?: boolean | number
    name?: boolean | number
    timestamp?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "dipdup_head". */
export interface dipdup_head_order_by {created_at?: (order_by | null),hash?: (order_by | null),level?: (order_by | null),name?: (order_by | null),timestamp?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate stddev on columns */
export interface dipdup_head_stddev_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface dipdup_head_stddev_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface dipdup_head_stddev_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface dipdup_head_sum_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface dipdup_head_var_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface dipdup_head_var_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface dipdup_head_variance_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexRequest{
    config_hash?: boolean | number
    created_at?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    template_values?: [{
    /** JSON select path */
    path?: (Scalars['String'] | null)}] | boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head */
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_index" */
export interface dipdup_index_aggregateRequest{
    aggregate?: dipdup_index_aggregate_fieldsRequest
    nodes?: dipdup_indexRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_index" */
export interface dipdup_index_aggregate_fieldsRequest{
    avg?: dipdup_index_avg_fieldsRequest
    count?: [{columns?: (dipdup_index_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_index_max_fieldsRequest
    min?: dipdup_index_min_fieldsRequest
    stddev?: dipdup_index_stddev_fieldsRequest
    stddev_pop?: dipdup_index_stddev_pop_fieldsRequest
    stddev_samp?: dipdup_index_stddev_samp_fieldsRequest
    sum?: dipdup_index_sum_fieldsRequest
    var_pop?: dipdup_index_var_pop_fieldsRequest
    var_samp?: dipdup_index_var_samp_fieldsRequest
    variance?: dipdup_index_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface dipdup_index_avg_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_index". All fields are combined with a logical 'AND'. */
export interface dipdup_index_bool_exp {_and?: (dipdup_index_bool_exp[] | null),_not?: (dipdup_index_bool_exp | null),_or?: (dipdup_index_bool_exp[] | null),config_hash?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),level?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null),template?: (String_comparison_exp | null),template_values?: (jsonb_comparison_exp | null),type?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** aggregate max on columns */
export interface dipdup_index_max_fieldsRequest{
    config_hash?: boolean | number
    created_at?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head */
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_index_min_fieldsRequest{
    config_hash?: boolean | number
    created_at?: boolean | number
    level?: boolean | number
    name?: boolean | number
    /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
    status?: boolean | number
    template?: boolean | number
    /** operation: operation\nbig_map: big_map\nhead: head */
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "dipdup_index". */
export interface dipdup_index_order_by {config_hash?: (order_by | null),created_at?: (order_by | null),level?: (order_by | null),name?: (order_by | null),status?: (order_by | null),template?: (order_by | null),template_values?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate stddev on columns */
export interface dipdup_index_stddev_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface dipdup_index_stddev_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface dipdup_index_stddev_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface dipdup_index_sum_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface dipdup_index_var_pop_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface dipdup_index_var_samp_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface dipdup_index_variance_fieldsRequest{
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaRequest{
    created_at?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
    reindex?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dipdup_schema" */
export interface dipdup_schema_aggregateRequest{
    aggregate?: dipdup_schema_aggregate_fieldsRequest
    nodes?: dipdup_schemaRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dipdup_schema" */
export interface dipdup_schema_aggregate_fieldsRequest{
    count?: [{columns?: (dipdup_schema_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: dipdup_schema_max_fieldsRequest
    min?: dipdup_schema_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export interface dipdup_schema_bool_exp {_and?: (dipdup_schema_bool_exp[] | null),_not?: (dipdup_schema_bool_exp | null),_or?: (dipdup_schema_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),hash?: (String_comparison_exp | null),name?: (String_comparison_exp | null),reindex?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** aggregate max on columns */
export interface dipdup_schema_max_fieldsRequest{
    created_at?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
    reindex?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dipdup_schema_min_fieldsRequest{
    created_at?: boolean | number
    hash?: boolean | number
    name?: boolean | number
    /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
    reindex?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "dipdup_schema". */
export interface dipdup_schema_order_by {created_at?: (order_by | null),hash?: (order_by | null),name?: (order_by | null),reindex?: (order_by | null),updated_at?: (order_by | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "meta" */
export interface metaRequest{
    category?: boolean | number
    collection_id?: boolean | number
    collection_name?: boolean | number
    creator?: boolean | number
    creator_name?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    id?: boolean | number
    ipfs_hash?: boolean | number
    keywords?: boolean | number
    name?: boolean | number
    on_auction?: boolean | number
    on_sale?: boolean | number
    owner?: boolean | number
    price?: boolean | number
    symbol?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "meta" */
export interface meta_aggregateRequest{
    aggregate?: meta_aggregate_fieldsRequest
    nodes?: metaRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "meta" */
export interface meta_aggregate_fieldsRequest{
    avg?: meta_avg_fieldsRequest
    count?: [{columns?: (meta_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: meta_max_fieldsRequest
    min?: meta_min_fieldsRequest
    stddev?: meta_stddev_fieldsRequest
    stddev_pop?: meta_stddev_pop_fieldsRequest
    stddev_samp?: meta_stddev_samp_fieldsRequest
    sum?: meta_sum_fieldsRequest
    var_pop?: meta_var_pop_fieldsRequest
    var_samp?: meta_var_samp_fieldsRequest
    variance?: meta_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface meta_avg_fieldsRequest{
    collection_id?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "meta". All fields are combined with a logical 'AND'. */
export interface meta_bool_exp {_and?: (meta_bool_exp[] | null),_not?: (meta_bool_exp | null),_or?: (meta_bool_exp[] | null),category?: (String_comparison_exp | null),collection_id?: (Int_comparison_exp | null),collection_name?: (String_comparison_exp | null),creator?: (String_comparison_exp | null),creator_name?: (String_comparison_exp | null),creator_royalty?: (Int_comparison_exp | null),decimals?: (Int_comparison_exp | null),edition_number?: (Int_comparison_exp | null),editions?: (Int_comparison_exp | null),id?: (String_comparison_exp | null),ipfs_hash?: (String_comparison_exp | null),keywords?: (String_comparison_exp | null),name?: (String_comparison_exp | null),on_auction?: (String_comparison_exp | null),on_sale?: (String_comparison_exp | null),owner?: (String_comparison_exp | null),price?: (String_comparison_exp | null),symbol?: (String_comparison_exp | null),token_id?: (Int_comparison_exp | null)}


/** aggregate max on columns */
export interface meta_max_fieldsRequest{
    category?: boolean | number
    collection_id?: boolean | number
    collection_name?: boolean | number
    creator?: boolean | number
    creator_name?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    id?: boolean | number
    ipfs_hash?: boolean | number
    keywords?: boolean | number
    name?: boolean | number
    on_auction?: boolean | number
    on_sale?: boolean | number
    owner?: boolean | number
    price?: boolean | number
    symbol?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface meta_min_fieldsRequest{
    category?: boolean | number
    collection_id?: boolean | number
    collection_name?: boolean | number
    creator?: boolean | number
    creator_name?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    id?: boolean | number
    ipfs_hash?: boolean | number
    keywords?: boolean | number
    name?: boolean | number
    on_auction?: boolean | number
    on_sale?: boolean | number
    owner?: boolean | number
    price?: boolean | number
    symbol?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "meta". */
export interface meta_order_by {category?: (order_by | null),collection_id?: (order_by | null),collection_name?: (order_by | null),creator?: (order_by | null),creator_name?: (order_by | null),creator_royalty?: (order_by | null),decimals?: (order_by | null),edition_number?: (order_by | null),editions?: (order_by | null),id?: (order_by | null),ipfs_hash?: (order_by | null),keywords?: (order_by | null),name?: (order_by | null),on_auction?: (order_by | null),on_sale?: (order_by | null),owner?: (order_by | null),price?: (order_by | null),symbol?: (order_by | null),token_id?: (order_by | null)}


/** aggregate stddev on columns */
export interface meta_stddev_fieldsRequest{
    collection_id?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface meta_stddev_pop_fieldsRequest{
    collection_id?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface meta_stddev_samp_fieldsRequest{
    collection_id?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface meta_sum_fieldsRequest{
    collection_id?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface meta_var_pop_fieldsRequest{
    collection_id?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface meta_var_samp_fieldsRequest{
    collection_id?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface meta_variance_fieldsRequest{
    collection_id?: boolean | number
    creator_royalty?: boolean | number
    decimals?: boolean | number
    edition_number?: boolean | number
    editions?: boolean | number
    token_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootRequest{
    /** fetch data from the table: "auction" */
    auction?: [{
    /** distinct select on columns */
    distinct_on?: (auction_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (auction_order_by[] | null),
    /** filter the rows returned */
    where?: (auction_bool_exp | null)},auctionRequest] | auctionRequest
    /** fetch aggregated fields from the table: "auction" */
    auction_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (auction_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (auction_order_by[] | null),
    /** filter the rows returned */
    where?: (auction_bool_exp | null)},auction_aggregateRequest] | auction_aggregateRequest
    /** fetch data from the table: "auction" using primary key columns */
    auction_by_pk?: [{trader: Scalars['String']},auctionRequest]
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch aggregated fields from the table: "dipdup_contract" */
    dipdup_contract_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contract_aggregateRequest] | dipdup_contract_aggregateRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdup_head?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch aggregated fields from the table: "dipdup_head" */
    dipdup_head_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_head_aggregateRequest] | dipdup_head_aggregateRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_index" */
    dipdup_index?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch aggregated fields from the table: "dipdup_index" */
    dipdup_index_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_index_aggregateRequest] | dipdup_index_aggregateRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch aggregated fields from the table: "dipdup_schema" */
    dipdup_schema_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schema_aggregateRequest] | dipdup_schema_aggregateRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "meta" */
    meta?: [{
    /** distinct select on columns */
    distinct_on?: (meta_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (meta_order_by[] | null),
    /** filter the rows returned */
    where?: (meta_bool_exp | null)},metaRequest] | metaRequest
    /** fetch aggregated fields from the table: "meta" */
    meta_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (meta_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (meta_order_by[] | null),
    /** filter the rows returned */
    where?: (meta_bool_exp | null)},meta_aggregateRequest] | meta_aggregateRequest
    /** fetch data from the table: "meta" using primary key columns */
    meta_by_pk?: [{id: Scalars['String']},metaRequest]
    /** fetch data from the table: "token" */
    token?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},tokenRequest] | tokenRequest
    /** fetch aggregated fields from the table: "token" */
    token_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},token_aggregateRequest] | token_aggregateRequest
    /** fetch data from the table: "token" using primary key columns */
    token_by_pk?: [{id: Scalars['bigint']},tokenRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootRequest{
    /** fetch data from the table: "auction" */
    auction?: [{
    /** distinct select on columns */
    distinct_on?: (auction_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (auction_order_by[] | null),
    /** filter the rows returned */
    where?: (auction_bool_exp | null)},auctionRequest] | auctionRequest
    /** fetch aggregated fields from the table: "auction" */
    auction_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (auction_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (auction_order_by[] | null),
    /** filter the rows returned */
    where?: (auction_bool_exp | null)},auction_aggregateRequest] | auction_aggregateRequest
    /** fetch data from the table: "auction" using primary key columns */
    auction_by_pk?: [{trader: Scalars['String']},auctionRequest]
    /** fetch data from the table: "dipdup_contract" */
    dipdup_contract?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contractRequest] | dipdup_contractRequest
    /** fetch aggregated fields from the table: "dipdup_contract" */
    dipdup_contract_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_contract_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_contract_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_contract_bool_exp | null)},dipdup_contract_aggregateRequest] | dipdup_contract_aggregateRequest
    /** fetch data from the table: "dipdup_contract" using primary key columns */
    dipdup_contract_by_pk?: [{name: Scalars['String']},dipdup_contractRequest]
    /** fetch data from the table: "dipdup_head" */
    dipdup_head?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_headRequest] | dipdup_headRequest
    /** fetch aggregated fields from the table: "dipdup_head" */
    dipdup_head_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_head_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_head_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_head_bool_exp | null)},dipdup_head_aggregateRequest] | dipdup_head_aggregateRequest
    /** fetch data from the table: "dipdup_head" using primary key columns */
    dipdup_head_by_pk?: [{name: Scalars['String']},dipdup_headRequest]
    /** fetch data from the table: "dipdup_index" */
    dipdup_index?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_indexRequest] | dipdup_indexRequest
    /** fetch aggregated fields from the table: "dipdup_index" */
    dipdup_index_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_index_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_index_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_index_bool_exp | null)},dipdup_index_aggregateRequest] | dipdup_index_aggregateRequest
    /** fetch data from the table: "dipdup_index" using primary key columns */
    dipdup_index_by_pk?: [{name: Scalars['String']},dipdup_indexRequest]
    /** fetch data from the table: "dipdup_schema" */
    dipdup_schema?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schemaRequest] | dipdup_schemaRequest
    /** fetch aggregated fields from the table: "dipdup_schema" */
    dipdup_schema_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (dipdup_schema_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (dipdup_schema_order_by[] | null),
    /** filter the rows returned */
    where?: (dipdup_schema_bool_exp | null)},dipdup_schema_aggregateRequest] | dipdup_schema_aggregateRequest
    /** fetch data from the table: "dipdup_schema" using primary key columns */
    dipdup_schema_by_pk?: [{name: Scalars['String']},dipdup_schemaRequest]
    /** fetch data from the table: "meta" */
    meta?: [{
    /** distinct select on columns */
    distinct_on?: (meta_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (meta_order_by[] | null),
    /** filter the rows returned */
    where?: (meta_bool_exp | null)},metaRequest] | metaRequest
    /** fetch aggregated fields from the table: "meta" */
    meta_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (meta_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (meta_order_by[] | null),
    /** filter the rows returned */
    where?: (meta_bool_exp | null)},meta_aggregateRequest] | meta_aggregateRequest
    /** fetch data from the table: "meta" using primary key columns */
    meta_by_pk?: [{id: Scalars['String']},metaRequest]
    /** fetch data from the table: "token" */
    token?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},tokenRequest] | tokenRequest
    /** fetch aggregated fields from the table: "token" */
    token_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (token_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (token_order_by[] | null),
    /** filter the rows returned */
    where?: (token_bool_exp | null)},token_aggregateRequest] | token_aggregateRequest
    /** fetch data from the table: "token" using primary key columns */
    token_by_pk?: [{id: Scalars['bigint']},tokenRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "token" */
export interface tokenRequest{
    collection?: boolean | number
    creator?: boolean | number
    id?: boolean | number
    ipfs?: boolean | number
    price?: boolean | number
    sale?: boolean | number
    trader?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "token" */
export interface token_aggregateRequest{
    aggregate?: token_aggregate_fieldsRequest
    nodes?: tokenRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "token" */
export interface token_aggregate_fieldsRequest{
    avg?: token_avg_fieldsRequest
    count?: [{columns?: (token_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: token_max_fieldsRequest
    min?: token_min_fieldsRequest
    stddev?: token_stddev_fieldsRequest
    stddev_pop?: token_stddev_pop_fieldsRequest
    stddev_samp?: token_stddev_samp_fieldsRequest
    sum?: token_sum_fieldsRequest
    var_pop?: token_var_pop_fieldsRequest
    var_samp?: token_var_samp_fieldsRequest
    variance?: token_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface token_avg_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export interface token_bool_exp {_and?: (token_bool_exp[] | null),_not?: (token_bool_exp | null),_or?: (token_bool_exp[] | null),collection?: (String_comparison_exp | null),creator?: (String_comparison_exp | null),id?: (bigint_comparison_exp | null),ipfs?: (String_comparison_exp | null),price?: (bigint_comparison_exp | null),sale?: (String_comparison_exp | null),trader?: (String_comparison_exp | null)}


/** aggregate max on columns */
export interface token_max_fieldsRequest{
    collection?: boolean | number
    creator?: boolean | number
    id?: boolean | number
    ipfs?: boolean | number
    price?: boolean | number
    sale?: boolean | number
    trader?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface token_min_fieldsRequest{
    collection?: boolean | number
    creator?: boolean | number
    id?: boolean | number
    ipfs?: boolean | number
    price?: boolean | number
    sale?: boolean | number
    trader?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "token". */
export interface token_order_by {collection?: (order_by | null),creator?: (order_by | null),id?: (order_by | null),ipfs?: (order_by | null),price?: (order_by | null),sale?: (order_by | null),trader?: (order_by | null)}


/** aggregate stddev on columns */
export interface token_stddev_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface token_stddev_pop_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface token_stddev_samp_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate sum on columns */
export interface token_sum_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface token_var_pop_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface token_var_samp_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface token_variance_fieldsRequest{
    id?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export type QueryRequest = query_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const auction_possibleTypes = ['auction']
export const isauction = (obj?: { __typename?: any } | null): obj is auction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction"')
  return auction_possibleTypes.includes(obj.__typename)
}



const auction_aggregate_possibleTypes = ['auction_aggregate']
export const isauction_aggregate = (obj?: { __typename?: any } | null): obj is auction_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_aggregate"')
  return auction_aggregate_possibleTypes.includes(obj.__typename)
}



const auction_aggregate_fields_possibleTypes = ['auction_aggregate_fields']
export const isauction_aggregate_fields = (obj?: { __typename?: any } | null): obj is auction_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_aggregate_fields"')
  return auction_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const auction_avg_fields_possibleTypes = ['auction_avg_fields']
export const isauction_avg_fields = (obj?: { __typename?: any } | null): obj is auction_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_avg_fields"')
  return auction_avg_fields_possibleTypes.includes(obj.__typename)
}



const auction_max_fields_possibleTypes = ['auction_max_fields']
export const isauction_max_fields = (obj?: { __typename?: any } | null): obj is auction_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_max_fields"')
  return auction_max_fields_possibleTypes.includes(obj.__typename)
}



const auction_min_fields_possibleTypes = ['auction_min_fields']
export const isauction_min_fields = (obj?: { __typename?: any } | null): obj is auction_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_min_fields"')
  return auction_min_fields_possibleTypes.includes(obj.__typename)
}



const auction_stddev_fields_possibleTypes = ['auction_stddev_fields']
export const isauction_stddev_fields = (obj?: { __typename?: any } | null): obj is auction_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_stddev_fields"')
  return auction_stddev_fields_possibleTypes.includes(obj.__typename)
}



const auction_stddev_pop_fields_possibleTypes = ['auction_stddev_pop_fields']
export const isauction_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is auction_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_stddev_pop_fields"')
  return auction_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const auction_stddev_samp_fields_possibleTypes = ['auction_stddev_samp_fields']
export const isauction_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is auction_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_stddev_samp_fields"')
  return auction_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const auction_sum_fields_possibleTypes = ['auction_sum_fields']
export const isauction_sum_fields = (obj?: { __typename?: any } | null): obj is auction_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_sum_fields"')
  return auction_sum_fields_possibleTypes.includes(obj.__typename)
}



const auction_var_pop_fields_possibleTypes = ['auction_var_pop_fields']
export const isauction_var_pop_fields = (obj?: { __typename?: any } | null): obj is auction_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_var_pop_fields"')
  return auction_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const auction_var_samp_fields_possibleTypes = ['auction_var_samp_fields']
export const isauction_var_samp_fields = (obj?: { __typename?: any } | null): obj is auction_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_var_samp_fields"')
  return auction_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const auction_variance_fields_possibleTypes = ['auction_variance_fields']
export const isauction_variance_fields = (obj?: { __typename?: any } | null): obj is auction_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isauction_variance_fields"')
  return auction_variance_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_possibleTypes = ['dipdup_contract']
export const isdipdup_contract = (obj?: { __typename?: any } | null): obj is dipdup_contract => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_aggregate_possibleTypes = ['dipdup_contract_aggregate']
export const isdipdup_contract_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_contract_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_aggregate"')
  return dipdup_contract_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_aggregate_fields_possibleTypes = ['dipdup_contract_aggregate_fields']
export const isdipdup_contract_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_aggregate_fields"')
  return dipdup_contract_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_max_fields_possibleTypes = ['dipdup_contract_max_fields']
export const isdipdup_contract_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_max_fields"')
  return dipdup_contract_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_contract_min_fields_possibleTypes = ['dipdup_contract_min_fields']
export const isdipdup_contract_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_contract_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_contract_min_fields"')
  return dipdup_contract_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_possibleTypes = ['dipdup_head']
export const isdipdup_head = (obj?: { __typename?: any } | null): obj is dipdup_head => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



const dipdup_head_aggregate_possibleTypes = ['dipdup_head_aggregate']
export const isdipdup_head_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_head_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_aggregate"')
  return dipdup_head_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_head_aggregate_fields_possibleTypes = ['dipdup_head_aggregate_fields']
export const isdipdup_head_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_aggregate_fields"')
  return dipdup_head_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_avg_fields_possibleTypes = ['dipdup_head_avg_fields']
export const isdipdup_head_avg_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_avg_fields"')
  return dipdup_head_avg_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_max_fields_possibleTypes = ['dipdup_head_max_fields']
export const isdipdup_head_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_max_fields"')
  return dipdup_head_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_min_fields_possibleTypes = ['dipdup_head_min_fields']
export const isdipdup_head_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_min_fields"')
  return dipdup_head_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_stddev_fields_possibleTypes = ['dipdup_head_stddev_fields']
export const isdipdup_head_stddev_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_fields"')
  return dipdup_head_stddev_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_stddev_pop_fields_possibleTypes = ['dipdup_head_stddev_pop_fields']
export const isdipdup_head_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_pop_fields"')
  return dipdup_head_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_stddev_samp_fields_possibleTypes = ['dipdup_head_stddev_samp_fields']
export const isdipdup_head_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_samp_fields"')
  return dipdup_head_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_sum_fields_possibleTypes = ['dipdup_head_sum_fields']
export const isdipdup_head_sum_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_sum_fields"')
  return dipdup_head_sum_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_var_pop_fields_possibleTypes = ['dipdup_head_var_pop_fields']
export const isdipdup_head_var_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_var_pop_fields"')
  return dipdup_head_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_var_samp_fields_possibleTypes = ['dipdup_head_var_samp_fields']
export const isdipdup_head_var_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_var_samp_fields"')
  return dipdup_head_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_head_variance_fields_possibleTypes = ['dipdup_head_variance_fields']
export const isdipdup_head_variance_fields = (obj?: { __typename?: any } | null): obj is dipdup_head_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_head_variance_fields"')
  return dipdup_head_variance_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_possibleTypes = ['dipdup_index']
export const isdipdup_index = (obj?: { __typename?: any } | null): obj is dipdup_index => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



const dipdup_index_aggregate_possibleTypes = ['dipdup_index_aggregate']
export const isdipdup_index_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_index_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_aggregate"')
  return dipdup_index_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_index_aggregate_fields_possibleTypes = ['dipdup_index_aggregate_fields']
export const isdipdup_index_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_aggregate_fields"')
  return dipdup_index_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_avg_fields_possibleTypes = ['dipdup_index_avg_fields']
export const isdipdup_index_avg_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_avg_fields"')
  return dipdup_index_avg_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_max_fields_possibleTypes = ['dipdup_index_max_fields']
export const isdipdup_index_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_max_fields"')
  return dipdup_index_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_min_fields_possibleTypes = ['dipdup_index_min_fields']
export const isdipdup_index_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_min_fields"')
  return dipdup_index_min_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_stddev_fields_possibleTypes = ['dipdup_index_stddev_fields']
export const isdipdup_index_stddev_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_fields"')
  return dipdup_index_stddev_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_stddev_pop_fields_possibleTypes = ['dipdup_index_stddev_pop_fields']
export const isdipdup_index_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_pop_fields"')
  return dipdup_index_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_stddev_samp_fields_possibleTypes = ['dipdup_index_stddev_samp_fields']
export const isdipdup_index_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_samp_fields"')
  return dipdup_index_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_sum_fields_possibleTypes = ['dipdup_index_sum_fields']
export const isdipdup_index_sum_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_sum_fields"')
  return dipdup_index_sum_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_var_pop_fields_possibleTypes = ['dipdup_index_var_pop_fields']
export const isdipdup_index_var_pop_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_var_pop_fields"')
  return dipdup_index_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_var_samp_fields_possibleTypes = ['dipdup_index_var_samp_fields']
export const isdipdup_index_var_samp_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_var_samp_fields"')
  return dipdup_index_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_index_variance_fields_possibleTypes = ['dipdup_index_variance_fields']
export const isdipdup_index_variance_fields = (obj?: { __typename?: any } | null): obj is dipdup_index_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_index_variance_fields"')
  return dipdup_index_variance_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_possibleTypes = ['dipdup_schema']
export const isdipdup_schema = (obj?: { __typename?: any } | null): obj is dipdup_schema => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_aggregate_possibleTypes = ['dipdup_schema_aggregate']
export const isdipdup_schema_aggregate = (obj?: { __typename?: any } | null): obj is dipdup_schema_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_aggregate"')
  return dipdup_schema_aggregate_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_aggregate_fields_possibleTypes = ['dipdup_schema_aggregate_fields']
export const isdipdup_schema_aggregate_fields = (obj?: { __typename?: any } | null): obj is dipdup_schema_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_aggregate_fields"')
  return dipdup_schema_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_max_fields_possibleTypes = ['dipdup_schema_max_fields']
export const isdipdup_schema_max_fields = (obj?: { __typename?: any } | null): obj is dipdup_schema_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_max_fields"')
  return dipdup_schema_max_fields_possibleTypes.includes(obj.__typename)
}



const dipdup_schema_min_fields_possibleTypes = ['dipdup_schema_min_fields']
export const isdipdup_schema_min_fields = (obj?: { __typename?: any } | null): obj is dipdup_schema_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isdipdup_schema_min_fields"')
  return dipdup_schema_min_fields_possibleTypes.includes(obj.__typename)
}



const meta_possibleTypes = ['meta']
export const ismeta = (obj?: { __typename?: any } | null): obj is meta => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta"')
  return meta_possibleTypes.includes(obj.__typename)
}



const meta_aggregate_possibleTypes = ['meta_aggregate']
export const ismeta_aggregate = (obj?: { __typename?: any } | null): obj is meta_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_aggregate"')
  return meta_aggregate_possibleTypes.includes(obj.__typename)
}



const meta_aggregate_fields_possibleTypes = ['meta_aggregate_fields']
export const ismeta_aggregate_fields = (obj?: { __typename?: any } | null): obj is meta_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_aggregate_fields"')
  return meta_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const meta_avg_fields_possibleTypes = ['meta_avg_fields']
export const ismeta_avg_fields = (obj?: { __typename?: any } | null): obj is meta_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_avg_fields"')
  return meta_avg_fields_possibleTypes.includes(obj.__typename)
}



const meta_max_fields_possibleTypes = ['meta_max_fields']
export const ismeta_max_fields = (obj?: { __typename?: any } | null): obj is meta_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_max_fields"')
  return meta_max_fields_possibleTypes.includes(obj.__typename)
}



const meta_min_fields_possibleTypes = ['meta_min_fields']
export const ismeta_min_fields = (obj?: { __typename?: any } | null): obj is meta_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_min_fields"')
  return meta_min_fields_possibleTypes.includes(obj.__typename)
}



const meta_stddev_fields_possibleTypes = ['meta_stddev_fields']
export const ismeta_stddev_fields = (obj?: { __typename?: any } | null): obj is meta_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_stddev_fields"')
  return meta_stddev_fields_possibleTypes.includes(obj.__typename)
}



const meta_stddev_pop_fields_possibleTypes = ['meta_stddev_pop_fields']
export const ismeta_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is meta_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_stddev_pop_fields"')
  return meta_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const meta_stddev_samp_fields_possibleTypes = ['meta_stddev_samp_fields']
export const ismeta_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is meta_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_stddev_samp_fields"')
  return meta_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const meta_sum_fields_possibleTypes = ['meta_sum_fields']
export const ismeta_sum_fields = (obj?: { __typename?: any } | null): obj is meta_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_sum_fields"')
  return meta_sum_fields_possibleTypes.includes(obj.__typename)
}



const meta_var_pop_fields_possibleTypes = ['meta_var_pop_fields']
export const ismeta_var_pop_fields = (obj?: { __typename?: any } | null): obj is meta_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_var_pop_fields"')
  return meta_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const meta_var_samp_fields_possibleTypes = ['meta_var_samp_fields']
export const ismeta_var_samp_fields = (obj?: { __typename?: any } | null): obj is meta_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_var_samp_fields"')
  return meta_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const meta_variance_fields_possibleTypes = ['meta_variance_fields']
export const ismeta_variance_fields = (obj?: { __typename?: any } | null): obj is meta_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismeta_variance_fields"')
  return meta_variance_fields_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



const token_possibleTypes = ['token']
export const istoken = (obj?: { __typename?: any } | null): obj is token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken"')
  return token_possibleTypes.includes(obj.__typename)
}



const token_aggregate_possibleTypes = ['token_aggregate']
export const istoken_aggregate = (obj?: { __typename?: any } | null): obj is token_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_aggregate"')
  return token_aggregate_possibleTypes.includes(obj.__typename)
}



const token_aggregate_fields_possibleTypes = ['token_aggregate_fields']
export const istoken_aggregate_fields = (obj?: { __typename?: any } | null): obj is token_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_aggregate_fields"')
  return token_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const token_avg_fields_possibleTypes = ['token_avg_fields']
export const istoken_avg_fields = (obj?: { __typename?: any } | null): obj is token_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_avg_fields"')
  return token_avg_fields_possibleTypes.includes(obj.__typename)
}



const token_max_fields_possibleTypes = ['token_max_fields']
export const istoken_max_fields = (obj?: { __typename?: any } | null): obj is token_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_max_fields"')
  return token_max_fields_possibleTypes.includes(obj.__typename)
}



const token_min_fields_possibleTypes = ['token_min_fields']
export const istoken_min_fields = (obj?: { __typename?: any } | null): obj is token_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_min_fields"')
  return token_min_fields_possibleTypes.includes(obj.__typename)
}



const token_stddev_fields_possibleTypes = ['token_stddev_fields']
export const istoken_stddev_fields = (obj?: { __typename?: any } | null): obj is token_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_stddev_fields"')
  return token_stddev_fields_possibleTypes.includes(obj.__typename)
}



const token_stddev_pop_fields_possibleTypes = ['token_stddev_pop_fields']
export const istoken_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is token_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_stddev_pop_fields"')
  return token_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const token_stddev_samp_fields_possibleTypes = ['token_stddev_samp_fields']
export const istoken_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is token_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_stddev_samp_fields"')
  return token_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const token_sum_fields_possibleTypes = ['token_sum_fields']
export const istoken_sum_fields = (obj?: { __typename?: any } | null): obj is token_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_sum_fields"')
  return token_sum_fields_possibleTypes.includes(obj.__typename)
}



const token_var_pop_fields_possibleTypes = ['token_var_pop_fields']
export const istoken_var_pop_fields = (obj?: { __typename?: any } | null): obj is token_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_var_pop_fields"')
  return token_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const token_var_samp_fields_possibleTypes = ['token_var_samp_fields']
export const istoken_var_samp_fields = (obj?: { __typename?: any } | null): obj is token_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_var_samp_fields"')
  return token_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const token_variance_fields_possibleTypes = ['token_variance_fields']
export const istoken_variance_fields = (obj?: { __typename?: any } | null): obj is token_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istoken_variance_fields"')
  return token_variance_fields_possibleTypes.includes(obj.__typename)
}



/** columns and relationships of "auction" */
export interface auctionPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    trader: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "auction" */
export interface auctionObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    trader: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "auction" */
export interface auction_aggregatePromiseChain{
    aggregate: (auction_aggregate_fieldsPromiseChain & {get: <R extends auction_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<auction_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Promise<FieldsSelection<auction, R>[]>})
}


/** aggregated selection of "auction" */
export interface auction_aggregateObservableChain{
    aggregate: (auction_aggregate_fieldsObservableChain & {get: <R extends auction_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<auction_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Observable<FieldsSelection<auction, R>[]>})
}


/** aggregate fields of "auction" */
export interface auction_aggregate_fieldsPromiseChain{
    avg: (auction_avg_fieldsPromiseChain & {get: <R extends auction_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_avg_fields, R> | undefined)) => Promise<(FieldsSelection<auction_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (auction_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (auction_max_fieldsPromiseChain & {get: <R extends auction_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_max_fields, R> | undefined)) => Promise<(FieldsSelection<auction_max_fields, R> | undefined)>}),
    min: (auction_min_fieldsPromiseChain & {get: <R extends auction_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_min_fields, R> | undefined)) => Promise<(FieldsSelection<auction_min_fields, R> | undefined)>}),
    stddev: (auction_stddev_fieldsPromiseChain & {get: <R extends auction_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<auction_stddev_fields, R> | undefined)>}),
    stddev_pop: (auction_stddev_pop_fieldsPromiseChain & {get: <R extends auction_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<auction_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (auction_stddev_samp_fieldsPromiseChain & {get: <R extends auction_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<auction_stddev_samp_fields, R> | undefined)>}),
    sum: (auction_sum_fieldsPromiseChain & {get: <R extends auction_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_sum_fields, R> | undefined)) => Promise<(FieldsSelection<auction_sum_fields, R> | undefined)>}),
    var_pop: (auction_var_pop_fieldsPromiseChain & {get: <R extends auction_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<auction_var_pop_fields, R> | undefined)>}),
    var_samp: (auction_var_samp_fieldsPromiseChain & {get: <R extends auction_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<auction_var_samp_fields, R> | undefined)>}),
    variance: (auction_variance_fieldsPromiseChain & {get: <R extends auction_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_variance_fields, R> | undefined)) => Promise<(FieldsSelection<auction_variance_fields, R> | undefined)>})
}


/** aggregate fields of "auction" */
export interface auction_aggregate_fieldsObservableChain{
    avg: (auction_avg_fieldsObservableChain & {get: <R extends auction_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_avg_fields, R> | undefined)) => Observable<(FieldsSelection<auction_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (auction_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (auction_max_fieldsObservableChain & {get: <R extends auction_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_max_fields, R> | undefined)) => Observable<(FieldsSelection<auction_max_fields, R> | undefined)>}),
    min: (auction_min_fieldsObservableChain & {get: <R extends auction_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_min_fields, R> | undefined)) => Observable<(FieldsSelection<auction_min_fields, R> | undefined)>}),
    stddev: (auction_stddev_fieldsObservableChain & {get: <R extends auction_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<auction_stddev_fields, R> | undefined)>}),
    stddev_pop: (auction_stddev_pop_fieldsObservableChain & {get: <R extends auction_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<auction_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (auction_stddev_samp_fieldsObservableChain & {get: <R extends auction_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<auction_stddev_samp_fields, R> | undefined)>}),
    sum: (auction_sum_fieldsObservableChain & {get: <R extends auction_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_sum_fields, R> | undefined)) => Observable<(FieldsSelection<auction_sum_fields, R> | undefined)>}),
    var_pop: (auction_var_pop_fieldsObservableChain & {get: <R extends auction_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<auction_var_pop_fields, R> | undefined)>}),
    var_samp: (auction_var_samp_fieldsObservableChain & {get: <R extends auction_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<auction_var_samp_fields, R> | undefined)>}),
    variance: (auction_variance_fieldsObservableChain & {get: <R extends auction_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<auction_variance_fields, R> | undefined)) => Observable<(FieldsSelection<auction_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface auction_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface auction_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface auction_max_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    trader: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface auction_max_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    trader: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface auction_min_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    trader: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface auction_min_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    trader: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate stddev on columns */
export interface auction_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface auction_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface auction_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface auction_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface auction_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface auction_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface auction_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}


/** aggregate sum on columns */
export interface auction_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface auction_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface auction_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface auction_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface auction_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface auction_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface auction_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_contract" */
export interface dipdup_contractObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_contract" */
export interface dipdup_contract_aggregatePromiseChain{
    aggregate: (dipdup_contract_aggregate_fieldsPromiseChain & {get: <R extends dipdup_contract_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})
}


/** aggregated selection of "dipdup_contract" */
export interface dipdup_contract_aggregateObservableChain{
    aggregate: (dipdup_contract_aggregate_fieldsObservableChain & {get: <R extends dipdup_contract_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})
}


/** aggregate fields of "dipdup_contract" */
export interface dipdup_contract_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (dipdup_contract_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_contract_max_fieldsPromiseChain & {get: <R extends dipdup_contract_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_max_fields, R> | undefined)>}),
    min: (dipdup_contract_min_fieldsPromiseChain & {get: <R extends dipdup_contract_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract_min_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_contract" */
export interface dipdup_contract_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (dipdup_contract_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_contract_max_fieldsObservableChain & {get: <R extends dipdup_contract_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_max_fields, R> | undefined)>}),
    min: (dipdup_contract_min_fieldsObservableChain & {get: <R extends dipdup_contract_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_contract_max_fieldsPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_contract_max_fieldsObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_contract_min_fieldsPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_contract_min_fieldsObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    typename: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_head" */
export interface dipdup_headObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_head" */
export interface dipdup_head_aggregatePromiseChain{
    aggregate: (dipdup_head_aggregate_fieldsPromiseChain & {get: <R extends dipdup_head_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})
}


/** aggregated selection of "dipdup_head" */
export interface dipdup_head_aggregateObservableChain{
    aggregate: (dipdup_head_aggregate_fieldsObservableChain & {get: <R extends dipdup_head_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})
}


/** aggregate fields of "dipdup_head" */
export interface dipdup_head_aggregate_fieldsPromiseChain{
    avg: (dipdup_head_avg_fieldsPromiseChain & {get: <R extends dipdup_head_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_avg_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_head_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_head_max_fieldsPromiseChain & {get: <R extends dipdup_head_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_max_fields, R> | undefined)>}),
    min: (dipdup_head_min_fieldsPromiseChain & {get: <R extends dipdup_head_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_min_fields, R> | undefined)>}),
    stddev: (dipdup_head_stddev_fieldsPromiseChain & {get: <R extends dipdup_head_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_head_stddev_pop_fieldsPromiseChain & {get: <R extends dipdup_head_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_head_stddev_samp_fieldsPromiseChain & {get: <R extends dipdup_head_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_head_sum_fieldsPromiseChain & {get: <R extends dipdup_head_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_sum_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_head_var_pop_fieldsPromiseChain & {get: <R extends dipdup_head_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_head_var_samp_fieldsPromiseChain & {get: <R extends dipdup_head_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_head_variance_fieldsPromiseChain & {get: <R extends dipdup_head_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_variance_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_head_variance_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_head" */
export interface dipdup_head_aggregate_fieldsObservableChain{
    avg: (dipdup_head_avg_fieldsObservableChain & {get: <R extends dipdup_head_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_avg_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_head_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_head_max_fieldsObservableChain & {get: <R extends dipdup_head_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_max_fields, R> | undefined)>}),
    min: (dipdup_head_min_fieldsObservableChain & {get: <R extends dipdup_head_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_min_fields, R> | undefined)>}),
    stddev: (dipdup_head_stddev_fieldsObservableChain & {get: <R extends dipdup_head_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_head_stddev_pop_fieldsObservableChain & {get: <R extends dipdup_head_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_head_stddev_samp_fieldsObservableChain & {get: <R extends dipdup_head_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_head_sum_fieldsObservableChain & {get: <R extends dipdup_head_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_sum_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_head_var_pop_fieldsObservableChain & {get: <R extends dipdup_head_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_head_var_samp_fieldsObservableChain & {get: <R extends dipdup_head_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_head_variance_fieldsObservableChain & {get: <R extends dipdup_head_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head_variance_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_head_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_head_avg_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_head_avg_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_head_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_head_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_head_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_head_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate stddev on columns */
export interface dipdup_head_stddev_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface dipdup_head_stddev_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_head_stddev_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_head_stddev_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_head_stddev_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_head_stddev_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_head_sum_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_head_sum_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_head_var_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_head_var_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_head_var_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_head_var_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_head_variance_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_head_variance_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexPromiseChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    template_values: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Promise<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_index" */
export interface dipdup_indexObservableChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    level: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    template_values: ((args?: {
/** JSON select path */
path?: (Scalars['String'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['jsonb'] | undefined)) => Observable<(Scalars['jsonb'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_index" */
export interface dipdup_index_aggregatePromiseChain{
    aggregate: (dipdup_index_aggregate_fieldsPromiseChain & {get: <R extends dipdup_index_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})
}


/** aggregated selection of "dipdup_index" */
export interface dipdup_index_aggregateObservableChain{
    aggregate: (dipdup_index_aggregate_fieldsObservableChain & {get: <R extends dipdup_index_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})
}


/** aggregate fields of "dipdup_index" */
export interface dipdup_index_aggregate_fieldsPromiseChain{
    avg: (dipdup_index_avg_fieldsPromiseChain & {get: <R extends dipdup_index_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_avg_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_index_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_index_max_fieldsPromiseChain & {get: <R extends dipdup_index_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_max_fields, R> | undefined)>}),
    min: (dipdup_index_min_fieldsPromiseChain & {get: <R extends dipdup_index_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_min_fields, R> | undefined)>}),
    stddev: (dipdup_index_stddev_fieldsPromiseChain & {get: <R extends dipdup_index_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_index_stddev_pop_fieldsPromiseChain & {get: <R extends dipdup_index_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_index_stddev_samp_fieldsPromiseChain & {get: <R extends dipdup_index_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_index_sum_fieldsPromiseChain & {get: <R extends dipdup_index_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_sum_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_index_var_pop_fieldsPromiseChain & {get: <R extends dipdup_index_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_index_var_samp_fieldsPromiseChain & {get: <R extends dipdup_index_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_index_variance_fieldsPromiseChain & {get: <R extends dipdup_index_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_variance_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_index_variance_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_index" */
export interface dipdup_index_aggregate_fieldsObservableChain{
    avg: (dipdup_index_avg_fieldsObservableChain & {get: <R extends dipdup_index_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_avg_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (dipdup_index_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_index_max_fieldsObservableChain & {get: <R extends dipdup_index_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_max_fields, R> | undefined)>}),
    min: (dipdup_index_min_fieldsObservableChain & {get: <R extends dipdup_index_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_min_fields, R> | undefined)>}),
    stddev: (dipdup_index_stddev_fieldsObservableChain & {get: <R extends dipdup_index_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_stddev_fields, R> | undefined)>}),
    stddev_pop: (dipdup_index_stddev_pop_fieldsObservableChain & {get: <R extends dipdup_index_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (dipdup_index_stddev_samp_fieldsObservableChain & {get: <R extends dipdup_index_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_stddev_samp_fields, R> | undefined)>}),
    sum: (dipdup_index_sum_fieldsObservableChain & {get: <R extends dipdup_index_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_sum_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_sum_fields, R> | undefined)>}),
    var_pop: (dipdup_index_var_pop_fieldsObservableChain & {get: <R extends dipdup_index_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_var_pop_fields, R> | undefined)>}),
    var_samp: (dipdup_index_var_samp_fieldsObservableChain & {get: <R extends dipdup_index_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_var_samp_fields, R> | undefined)>}),
    variance: (dipdup_index_variance_fieldsObservableChain & {get: <R extends dipdup_index_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index_variance_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_index_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_index_avg_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface dipdup_index_avg_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_index_max_fieldsPromiseChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head */
type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_index_max_fieldsObservableChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head */
type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_index_min_fieldsPromiseChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head */
type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_index_min_fieldsObservableChain{
    config_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    template: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** operation: operation\nbig_map: big_map\nhead: head */
type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate stddev on columns */
export interface dipdup_index_stddev_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface dipdup_index_stddev_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_index_stddev_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface dipdup_index_stddev_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_index_stddev_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface dipdup_index_stddev_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_index_sum_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface dipdup_index_sum_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_index_var_pop_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface dipdup_index_var_pop_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_index_var_samp_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface dipdup_index_var_samp_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_index_variance_fieldsPromiseChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface dipdup_index_variance_fieldsObservableChain{
    level: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "dipdup_schema" */
export interface dipdup_schemaObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    hash: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "dipdup_schema" */
export interface dipdup_schema_aggregatePromiseChain{
    aggregate: (dipdup_schema_aggregate_fieldsPromiseChain & {get: <R extends dipdup_schema_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})
}


/** aggregated selection of "dipdup_schema" */
export interface dipdup_schema_aggregateObservableChain{
    aggregate: (dipdup_schema_aggregate_fieldsObservableChain & {get: <R extends dipdup_schema_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})
}


/** aggregate fields of "dipdup_schema" */
export interface dipdup_schema_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (dipdup_schema_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (dipdup_schema_max_fieldsPromiseChain & {get: <R extends dipdup_schema_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_max_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_max_fields, R> | undefined)>}),
    min: (dipdup_schema_min_fieldsPromiseChain & {get: <R extends dipdup_schema_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_min_fields, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema_min_fields, R> | undefined)>})
}


/** aggregate fields of "dipdup_schema" */
export interface dipdup_schema_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (dipdup_schema_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (dipdup_schema_max_fieldsObservableChain & {get: <R extends dipdup_schema_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_max_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_max_fields, R> | undefined)>}),
    min: (dipdup_schema_min_fieldsObservableChain & {get: <R extends dipdup_schema_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema_min_fields, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_schema_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface dipdup_schema_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_schema_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface dipdup_schema_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
reindex: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** columns and relationships of "meta" */
export interface metaPromiseChain{
    category: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    collection_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    ipfs_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    keywords: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    on_auction: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    on_sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** columns and relationships of "meta" */
export interface metaObservableChain{
    category: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    collection_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    ipfs_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    keywords: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    on_auction: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    on_sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregated selection of "meta" */
export interface meta_aggregatePromiseChain{
    aggregate: (meta_aggregate_fieldsPromiseChain & {get: <R extends meta_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<meta_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Promise<FieldsSelection<meta, R>[]>})
}


/** aggregated selection of "meta" */
export interface meta_aggregateObservableChain{
    aggregate: (meta_aggregate_fieldsObservableChain & {get: <R extends meta_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<meta_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Observable<FieldsSelection<meta, R>[]>})
}


/** aggregate fields of "meta" */
export interface meta_aggregate_fieldsPromiseChain{
    avg: (meta_avg_fieldsPromiseChain & {get: <R extends meta_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_avg_fields, R> | undefined)) => Promise<(FieldsSelection<meta_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (meta_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (meta_max_fieldsPromiseChain & {get: <R extends meta_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_max_fields, R> | undefined)) => Promise<(FieldsSelection<meta_max_fields, R> | undefined)>}),
    min: (meta_min_fieldsPromiseChain & {get: <R extends meta_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_min_fields, R> | undefined)) => Promise<(FieldsSelection<meta_min_fields, R> | undefined)>}),
    stddev: (meta_stddev_fieldsPromiseChain & {get: <R extends meta_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<meta_stddev_fields, R> | undefined)>}),
    stddev_pop: (meta_stddev_pop_fieldsPromiseChain & {get: <R extends meta_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<meta_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (meta_stddev_samp_fieldsPromiseChain & {get: <R extends meta_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<meta_stddev_samp_fields, R> | undefined)>}),
    sum: (meta_sum_fieldsPromiseChain & {get: <R extends meta_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_sum_fields, R> | undefined)) => Promise<(FieldsSelection<meta_sum_fields, R> | undefined)>}),
    var_pop: (meta_var_pop_fieldsPromiseChain & {get: <R extends meta_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<meta_var_pop_fields, R> | undefined)>}),
    var_samp: (meta_var_samp_fieldsPromiseChain & {get: <R extends meta_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<meta_var_samp_fields, R> | undefined)>}),
    variance: (meta_variance_fieldsPromiseChain & {get: <R extends meta_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_variance_fields, R> | undefined)) => Promise<(FieldsSelection<meta_variance_fields, R> | undefined)>})
}


/** aggregate fields of "meta" */
export interface meta_aggregate_fieldsObservableChain{
    avg: (meta_avg_fieldsObservableChain & {get: <R extends meta_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_avg_fields, R> | undefined)) => Observable<(FieldsSelection<meta_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (meta_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (meta_max_fieldsObservableChain & {get: <R extends meta_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_max_fields, R> | undefined)) => Observable<(FieldsSelection<meta_max_fields, R> | undefined)>}),
    min: (meta_min_fieldsObservableChain & {get: <R extends meta_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_min_fields, R> | undefined)) => Observable<(FieldsSelection<meta_min_fields, R> | undefined)>}),
    stddev: (meta_stddev_fieldsObservableChain & {get: <R extends meta_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<meta_stddev_fields, R> | undefined)>}),
    stddev_pop: (meta_stddev_pop_fieldsObservableChain & {get: <R extends meta_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<meta_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (meta_stddev_samp_fieldsObservableChain & {get: <R extends meta_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<meta_stddev_samp_fields, R> | undefined)>}),
    sum: (meta_sum_fieldsObservableChain & {get: <R extends meta_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_sum_fields, R> | undefined)) => Observable<(FieldsSelection<meta_sum_fields, R> | undefined)>}),
    var_pop: (meta_var_pop_fieldsObservableChain & {get: <R extends meta_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<meta_var_pop_fields, R> | undefined)>}),
    var_samp: (meta_var_samp_fieldsObservableChain & {get: <R extends meta_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<meta_var_samp_fields, R> | undefined)>}),
    variance: (meta_variance_fieldsObservableChain & {get: <R extends meta_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<meta_variance_fields, R> | undefined)) => Observable<(FieldsSelection<meta_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface meta_avg_fieldsPromiseChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface meta_avg_fieldsObservableChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface meta_max_fieldsPromiseChain{
    category: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    collection_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    ipfs_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    keywords: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    on_auction: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    on_sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate max on columns */
export interface meta_max_fieldsObservableChain{
    category: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    collection_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    ipfs_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    keywords: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    on_auction: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    on_sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface meta_min_fieldsPromiseChain{
    category: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    collection_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    ipfs_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    keywords: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    on_auction: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    on_sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate min on columns */
export interface meta_min_fieldsObservableChain{
    category: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    collection_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    ipfs_hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    keywords: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    on_auction: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    on_sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate stddev on columns */
export interface meta_stddev_fieldsPromiseChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface meta_stddev_fieldsObservableChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface meta_stddev_pop_fieldsPromiseChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface meta_stddev_pop_fieldsObservableChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface meta_stddev_samp_fieldsPromiseChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface meta_stddev_samp_fieldsObservableChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface meta_sum_fieldsPromiseChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface meta_sum_fieldsObservableChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface meta_var_pop_fieldsPromiseChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface meta_var_pop_fieldsObservableChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface meta_var_samp_fieldsPromiseChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface meta_var_samp_fieldsObservableChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface meta_variance_fieldsPromiseChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface meta_variance_fieldsObservableChain{
    collection_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    creator_royalty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    edition_number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    editions: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    token_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}

export interface query_rootPromiseChain{
    
/** fetch data from the table: "auction" */
auction: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_order_by[] | null),
/** filter the rows returned */
where?: (auction_bool_exp | null)}) => {get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Promise<FieldsSelection<auction, R>[]>})&({get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Promise<FieldsSelection<auction, R>[]>}),
    
/** fetch aggregated fields from the table: "auction" */
auction_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_order_by[] | null),
/** filter the rows returned */
where?: (auction_bool_exp | null)}) => auction_aggregatePromiseChain & {get: <R extends auction_aggregateRequest>(request: R, defaultValue?: FieldsSelection<auction_aggregate, R>) => Promise<FieldsSelection<auction_aggregate, R>>})&(auction_aggregatePromiseChain & {get: <R extends auction_aggregateRequest>(request: R, defaultValue?: FieldsSelection<auction_aggregate, R>) => Promise<FieldsSelection<auction_aggregate, R>>}),
    
/** fetch data from the table: "auction" using primary key columns */
auction_by_pk: ((args: {trader: Scalars['String']}) => auctionPromiseChain & {get: <R extends auctionRequest>(request: R, defaultValue?: (FieldsSelection<auction, R> | undefined)) => Promise<(FieldsSelection<auction, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract" */
dipdup_contract_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => dipdup_contract_aggregatePromiseChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_aggregate, R>>})&(dipdup_contract_aggregatePromiseChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head" */
dipdup_head_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => dipdup_head_aggregatePromiseChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Promise<FieldsSelection<dipdup_head_aggregate, R>>})&(dipdup_head_aggregatePromiseChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Promise<FieldsSelection<dipdup_head_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_index" */
dipdup_index_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => dipdup_index_aggregatePromiseChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Promise<FieldsSelection<dipdup_index_aggregate, R>>})&(dipdup_index_aggregatePromiseChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Promise<FieldsSelection<dipdup_index_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_schema" */
dipdup_schema_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => dipdup_schema_aggregatePromiseChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Promise<FieldsSelection<dipdup_schema_aggregate, R>>})&(dipdup_schema_aggregatePromiseChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Promise<FieldsSelection<dipdup_schema_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "meta" */
meta: ((args?: {
/** distinct select on columns */
distinct_on?: (meta_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (meta_order_by[] | null),
/** filter the rows returned */
where?: (meta_bool_exp | null)}) => {get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Promise<FieldsSelection<meta, R>[]>})&({get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Promise<FieldsSelection<meta, R>[]>}),
    
/** fetch aggregated fields from the table: "meta" */
meta_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (meta_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (meta_order_by[] | null),
/** filter the rows returned */
where?: (meta_bool_exp | null)}) => meta_aggregatePromiseChain & {get: <R extends meta_aggregateRequest>(request: R, defaultValue?: FieldsSelection<meta_aggregate, R>) => Promise<FieldsSelection<meta_aggregate, R>>})&(meta_aggregatePromiseChain & {get: <R extends meta_aggregateRequest>(request: R, defaultValue?: FieldsSelection<meta_aggregate, R>) => Promise<FieldsSelection<meta_aggregate, R>>}),
    
/** fetch data from the table: "meta" using primary key columns */
meta_by_pk: ((args: {id: Scalars['String']}) => metaPromiseChain & {get: <R extends metaRequest>(request: R, defaultValue?: (FieldsSelection<meta, R> | undefined)) => Promise<(FieldsSelection<meta, R> | undefined)>}),
    
/** fetch data from the table: "token" */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>}),
    
/** fetch aggregated fields from the table: "token" */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>})&(token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>}),
    
/** fetch data from the table: "token" using primary key columns */
token_by_pk: ((args: {id: Scalars['bigint']}) => tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Promise<(FieldsSelection<token, R> | undefined)>})
}

export interface query_rootObservableChain{
    
/** fetch data from the table: "auction" */
auction: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_order_by[] | null),
/** filter the rows returned */
where?: (auction_bool_exp | null)}) => {get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Observable<FieldsSelection<auction, R>[]>})&({get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Observable<FieldsSelection<auction, R>[]>}),
    
/** fetch aggregated fields from the table: "auction" */
auction_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_order_by[] | null),
/** filter the rows returned */
where?: (auction_bool_exp | null)}) => auction_aggregateObservableChain & {get: <R extends auction_aggregateRequest>(request: R, defaultValue?: FieldsSelection<auction_aggregate, R>) => Observable<FieldsSelection<auction_aggregate, R>>})&(auction_aggregateObservableChain & {get: <R extends auction_aggregateRequest>(request: R, defaultValue?: FieldsSelection<auction_aggregate, R>) => Observable<FieldsSelection<auction_aggregate, R>>}),
    
/** fetch data from the table: "auction" using primary key columns */
auction_by_pk: ((args: {trader: Scalars['String']}) => auctionObservableChain & {get: <R extends auctionRequest>(request: R, defaultValue?: (FieldsSelection<auction, R> | undefined)) => Observable<(FieldsSelection<auction, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract" */
dipdup_contract_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => dipdup_contract_aggregateObservableChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_aggregate, R>>})&(dipdup_contract_aggregateObservableChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head" */
dipdup_head_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => dipdup_head_aggregateObservableChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Observable<FieldsSelection<dipdup_head_aggregate, R>>})&(dipdup_head_aggregateObservableChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Observable<FieldsSelection<dipdup_head_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_index" */
dipdup_index_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => dipdup_index_aggregateObservableChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Observable<FieldsSelection<dipdup_index_aggregate, R>>})&(dipdup_index_aggregateObservableChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Observable<FieldsSelection<dipdup_index_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_schema" */
dipdup_schema_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => dipdup_schema_aggregateObservableChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Observable<FieldsSelection<dipdup_schema_aggregate, R>>})&(dipdup_schema_aggregateObservableChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Observable<FieldsSelection<dipdup_schema_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "meta" */
meta: ((args?: {
/** distinct select on columns */
distinct_on?: (meta_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (meta_order_by[] | null),
/** filter the rows returned */
where?: (meta_bool_exp | null)}) => {get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Observable<FieldsSelection<meta, R>[]>})&({get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Observable<FieldsSelection<meta, R>[]>}),
    
/** fetch aggregated fields from the table: "meta" */
meta_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (meta_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (meta_order_by[] | null),
/** filter the rows returned */
where?: (meta_bool_exp | null)}) => meta_aggregateObservableChain & {get: <R extends meta_aggregateRequest>(request: R, defaultValue?: FieldsSelection<meta_aggregate, R>) => Observable<FieldsSelection<meta_aggregate, R>>})&(meta_aggregateObservableChain & {get: <R extends meta_aggregateRequest>(request: R, defaultValue?: FieldsSelection<meta_aggregate, R>) => Observable<FieldsSelection<meta_aggregate, R>>}),
    
/** fetch data from the table: "meta" using primary key columns */
meta_by_pk: ((args: {id: Scalars['String']}) => metaObservableChain & {get: <R extends metaRequest>(request: R, defaultValue?: (FieldsSelection<meta, R> | undefined)) => Observable<(FieldsSelection<meta, R> | undefined)>}),
    
/** fetch data from the table: "token" */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>}),
    
/** fetch aggregated fields from the table: "token" */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>})&(token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>}),
    
/** fetch data from the table: "token" using primary key columns */
token_by_pk: ((args: {id: Scalars['bigint']}) => tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Observable<(FieldsSelection<token, R> | undefined)>})
}

export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "auction" */
auction: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_order_by[] | null),
/** filter the rows returned */
where?: (auction_bool_exp | null)}) => {get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Promise<FieldsSelection<auction, R>[]>})&({get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Promise<FieldsSelection<auction, R>[]>}),
    
/** fetch aggregated fields from the table: "auction" */
auction_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_order_by[] | null),
/** filter the rows returned */
where?: (auction_bool_exp | null)}) => auction_aggregatePromiseChain & {get: <R extends auction_aggregateRequest>(request: R, defaultValue?: FieldsSelection<auction_aggregate, R>) => Promise<FieldsSelection<auction_aggregate, R>>})&(auction_aggregatePromiseChain & {get: <R extends auction_aggregateRequest>(request: R, defaultValue?: FieldsSelection<auction_aggregate, R>) => Promise<FieldsSelection<auction_aggregate, R>>}),
    
/** fetch data from the table: "auction" using primary key columns */
auction_by_pk: ((args: {trader: Scalars['String']}) => auctionPromiseChain & {get: <R extends auctionRequest>(request: R, defaultValue?: (FieldsSelection<auction, R> | undefined)) => Promise<(FieldsSelection<auction, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Promise<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract" */
dipdup_contract_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => dipdup_contract_aggregatePromiseChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_aggregate, R>>})&(dipdup_contract_aggregatePromiseChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Promise<FieldsSelection<dipdup_contract_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractPromiseChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Promise<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Promise<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head" */
dipdup_head_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => dipdup_head_aggregatePromiseChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Promise<FieldsSelection<dipdup_head_aggregate, R>>})&(dipdup_head_aggregatePromiseChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Promise<FieldsSelection<dipdup_head_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headPromiseChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Promise<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Promise<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_index" */
dipdup_index_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => dipdup_index_aggregatePromiseChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Promise<FieldsSelection<dipdup_index_aggregate, R>>})&(dipdup_index_aggregatePromiseChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Promise<FieldsSelection<dipdup_index_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexPromiseChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Promise<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Promise<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_schema" */
dipdup_schema_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => dipdup_schema_aggregatePromiseChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Promise<FieldsSelection<dipdup_schema_aggregate, R>>})&(dipdup_schema_aggregatePromiseChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Promise<FieldsSelection<dipdup_schema_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaPromiseChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Promise<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "meta" */
meta: ((args?: {
/** distinct select on columns */
distinct_on?: (meta_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (meta_order_by[] | null),
/** filter the rows returned */
where?: (meta_bool_exp | null)}) => {get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Promise<FieldsSelection<meta, R>[]>})&({get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Promise<FieldsSelection<meta, R>[]>}),
    
/** fetch aggregated fields from the table: "meta" */
meta_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (meta_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (meta_order_by[] | null),
/** filter the rows returned */
where?: (meta_bool_exp | null)}) => meta_aggregatePromiseChain & {get: <R extends meta_aggregateRequest>(request: R, defaultValue?: FieldsSelection<meta_aggregate, R>) => Promise<FieldsSelection<meta_aggregate, R>>})&(meta_aggregatePromiseChain & {get: <R extends meta_aggregateRequest>(request: R, defaultValue?: FieldsSelection<meta_aggregate, R>) => Promise<FieldsSelection<meta_aggregate, R>>}),
    
/** fetch data from the table: "meta" using primary key columns */
meta_by_pk: ((args: {id: Scalars['String']}) => metaPromiseChain & {get: <R extends metaRequest>(request: R, defaultValue?: (FieldsSelection<meta, R> | undefined)) => Promise<(FieldsSelection<meta, R> | undefined)>}),
    
/** fetch data from the table: "token" */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>}),
    
/** fetch aggregated fields from the table: "token" */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>})&(token_aggregatePromiseChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Promise<FieldsSelection<token_aggregate, R>>}),
    
/** fetch data from the table: "token" using primary key columns */
token_by_pk: ((args: {id: Scalars['bigint']}) => tokenPromiseChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Promise<(FieldsSelection<token, R> | undefined)>})
}

export interface subscription_rootObservableChain{
    
/** fetch data from the table: "auction" */
auction: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_order_by[] | null),
/** filter the rows returned */
where?: (auction_bool_exp | null)}) => {get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Observable<FieldsSelection<auction, R>[]>})&({get: <R extends auctionRequest>(request: R, defaultValue?: FieldsSelection<auction, R>[]) => Observable<FieldsSelection<auction, R>[]>}),
    
/** fetch aggregated fields from the table: "auction" */
auction_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (auction_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (auction_order_by[] | null),
/** filter the rows returned */
where?: (auction_bool_exp | null)}) => auction_aggregateObservableChain & {get: <R extends auction_aggregateRequest>(request: R, defaultValue?: FieldsSelection<auction_aggregate, R>) => Observable<FieldsSelection<auction_aggregate, R>>})&(auction_aggregateObservableChain & {get: <R extends auction_aggregateRequest>(request: R, defaultValue?: FieldsSelection<auction_aggregate, R>) => Observable<FieldsSelection<auction_aggregate, R>>}),
    
/** fetch data from the table: "auction" using primary key columns */
auction_by_pk: ((args: {trader: Scalars['String']}) => auctionObservableChain & {get: <R extends auctionRequest>(request: R, defaultValue?: (FieldsSelection<auction, R> | undefined)) => Observable<(FieldsSelection<auction, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_contract" */
dipdup_contract: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>})&({get: <R extends dipdup_contractRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract, R>[]) => Observable<FieldsSelection<dipdup_contract, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_contract" */
dipdup_contract_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_contract_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_contract_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_contract_bool_exp | null)}) => dipdup_contract_aggregateObservableChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_aggregate, R>>})&(dipdup_contract_aggregateObservableChain & {get: <R extends dipdup_contract_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_contract_aggregate, R>) => Observable<FieldsSelection<dipdup_contract_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_contract" using primary key columns */
dipdup_contract_by_pk: ((args: {name: Scalars['String']}) => dipdup_contractObservableChain & {get: <R extends dipdup_contractRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_contract, R> | undefined)) => Observable<(FieldsSelection<dipdup_contract, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_head" */
dipdup_head: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => {get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>})&({get: <R extends dipdup_headRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head, R>[]) => Observable<FieldsSelection<dipdup_head, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_head" */
dipdup_head_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_head_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_head_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_head_bool_exp | null)}) => dipdup_head_aggregateObservableChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Observable<FieldsSelection<dipdup_head_aggregate, R>>})&(dipdup_head_aggregateObservableChain & {get: <R extends dipdup_head_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_head_aggregate, R>) => Observable<FieldsSelection<dipdup_head_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_head" using primary key columns */
dipdup_head_by_pk: ((args: {name: Scalars['String']}) => dipdup_headObservableChain & {get: <R extends dipdup_headRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_head, R> | undefined)) => Observable<(FieldsSelection<dipdup_head, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_index" */
dipdup_index: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>})&({get: <R extends dipdup_indexRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index, R>[]) => Observable<FieldsSelection<dipdup_index, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_index" */
dipdup_index_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_index_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_index_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_index_bool_exp | null)}) => dipdup_index_aggregateObservableChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Observable<FieldsSelection<dipdup_index_aggregate, R>>})&(dipdup_index_aggregateObservableChain & {get: <R extends dipdup_index_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_index_aggregate, R>) => Observable<FieldsSelection<dipdup_index_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_index" using primary key columns */
dipdup_index_by_pk: ((args: {name: Scalars['String']}) => dipdup_indexObservableChain & {get: <R extends dipdup_indexRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_index, R> | undefined)) => Observable<(FieldsSelection<dipdup_index, R> | undefined)>}),
    
/** fetch data from the table: "dipdup_schema" */
dipdup_schema: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>})&({get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema, R>[]) => Observable<FieldsSelection<dipdup_schema, R>[]>}),
    
/** fetch aggregated fields from the table: "dipdup_schema" */
dipdup_schema_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (dipdup_schema_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (dipdup_schema_order_by[] | null),
/** filter the rows returned */
where?: (dipdup_schema_bool_exp | null)}) => dipdup_schema_aggregateObservableChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Observable<FieldsSelection<dipdup_schema_aggregate, R>>})&(dipdup_schema_aggregateObservableChain & {get: <R extends dipdup_schema_aggregateRequest>(request: R, defaultValue?: FieldsSelection<dipdup_schema_aggregate, R>) => Observable<FieldsSelection<dipdup_schema_aggregate, R>>}),
    
/** fetch data from the table: "dipdup_schema" using primary key columns */
dipdup_schema_by_pk: ((args: {name: Scalars['String']}) => dipdup_schemaObservableChain & {get: <R extends dipdup_schemaRequest>(request: R, defaultValue?: (FieldsSelection<dipdup_schema, R> | undefined)) => Observable<(FieldsSelection<dipdup_schema, R> | undefined)>}),
    
/** fetch data from the table: "meta" */
meta: ((args?: {
/** distinct select on columns */
distinct_on?: (meta_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (meta_order_by[] | null),
/** filter the rows returned */
where?: (meta_bool_exp | null)}) => {get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Observable<FieldsSelection<meta, R>[]>})&({get: <R extends metaRequest>(request: R, defaultValue?: FieldsSelection<meta, R>[]) => Observable<FieldsSelection<meta, R>[]>}),
    
/** fetch aggregated fields from the table: "meta" */
meta_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (meta_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (meta_order_by[] | null),
/** filter the rows returned */
where?: (meta_bool_exp | null)}) => meta_aggregateObservableChain & {get: <R extends meta_aggregateRequest>(request: R, defaultValue?: FieldsSelection<meta_aggregate, R>) => Observable<FieldsSelection<meta_aggregate, R>>})&(meta_aggregateObservableChain & {get: <R extends meta_aggregateRequest>(request: R, defaultValue?: FieldsSelection<meta_aggregate, R>) => Observable<FieldsSelection<meta_aggregate, R>>}),
    
/** fetch data from the table: "meta" using primary key columns */
meta_by_pk: ((args: {id: Scalars['String']}) => metaObservableChain & {get: <R extends metaRequest>(request: R, defaultValue?: (FieldsSelection<meta, R> | undefined)) => Observable<(FieldsSelection<meta, R> | undefined)>}),
    
/** fetch data from the table: "token" */
token: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => {get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>})&({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>}),
    
/** fetch aggregated fields from the table: "token" */
token_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (token_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (token_order_by[] | null),
/** filter the rows returned */
where?: (token_bool_exp | null)}) => token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>})&(token_aggregateObservableChain & {get: <R extends token_aggregateRequest>(request: R, defaultValue?: FieldsSelection<token_aggregate, R>) => Observable<FieldsSelection<token_aggregate, R>>}),
    
/** fetch data from the table: "token" using primary key columns */
token_by_pk: ((args: {id: Scalars['bigint']}) => tokenObservableChain & {get: <R extends tokenRequest>(request: R, defaultValue?: (FieldsSelection<token, R> | undefined)) => Observable<(FieldsSelection<token, R> | undefined)>})
}


/** columns and relationships of "token" */
export interface tokenPromiseChain{
    collection: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    creator: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    ipfs: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Promise<Scalars['bigint']>}),
    sale: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    trader: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "token" */
export interface tokenObservableChain{
    collection: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    creator: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    ipfs: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    price: ({get: (request?: boolean|number, defaultValue?: Scalars['bigint']) => Observable<Scalars['bigint']>}),
    sale: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    trader: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "token" */
export interface token_aggregatePromiseChain{
    aggregate: (token_aggregate_fieldsPromiseChain & {get: <R extends token_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<token_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Promise<FieldsSelection<token, R>[]>})
}


/** aggregated selection of "token" */
export interface token_aggregateObservableChain{
    aggregate: (token_aggregate_fieldsObservableChain & {get: <R extends token_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<token_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends tokenRequest>(request: R, defaultValue?: FieldsSelection<token, R>[]) => Observable<FieldsSelection<token, R>[]>})
}


/** aggregate fields of "token" */
export interface token_aggregate_fieldsPromiseChain{
    avg: (token_avg_fieldsPromiseChain & {get: <R extends token_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_avg_fields, R> | undefined)) => Promise<(FieldsSelection<token_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (token_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (token_max_fieldsPromiseChain & {get: <R extends token_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_max_fields, R> | undefined)) => Promise<(FieldsSelection<token_max_fields, R> | undefined)>}),
    min: (token_min_fieldsPromiseChain & {get: <R extends token_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_min_fields, R> | undefined)) => Promise<(FieldsSelection<token_min_fields, R> | undefined)>}),
    stddev: (token_stddev_fieldsPromiseChain & {get: <R extends token_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<token_stddev_fields, R> | undefined)>}),
    stddev_pop: (token_stddev_pop_fieldsPromiseChain & {get: <R extends token_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<token_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (token_stddev_samp_fieldsPromiseChain & {get: <R extends token_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<token_stddev_samp_fields, R> | undefined)>}),
    sum: (token_sum_fieldsPromiseChain & {get: <R extends token_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_sum_fields, R> | undefined)) => Promise<(FieldsSelection<token_sum_fields, R> | undefined)>}),
    var_pop: (token_var_pop_fieldsPromiseChain & {get: <R extends token_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<token_var_pop_fields, R> | undefined)>}),
    var_samp: (token_var_samp_fieldsPromiseChain & {get: <R extends token_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<token_var_samp_fields, R> | undefined)>}),
    variance: (token_variance_fieldsPromiseChain & {get: <R extends token_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_variance_fields, R> | undefined)) => Promise<(FieldsSelection<token_variance_fields, R> | undefined)>})
}


/** aggregate fields of "token" */
export interface token_aggregate_fieldsObservableChain{
    avg: (token_avg_fieldsObservableChain & {get: <R extends token_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_avg_fields, R> | undefined)) => Observable<(FieldsSelection<token_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (token_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (token_max_fieldsObservableChain & {get: <R extends token_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_max_fields, R> | undefined)) => Observable<(FieldsSelection<token_max_fields, R> | undefined)>}),
    min: (token_min_fieldsObservableChain & {get: <R extends token_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_min_fields, R> | undefined)) => Observable<(FieldsSelection<token_min_fields, R> | undefined)>}),
    stddev: (token_stddev_fieldsObservableChain & {get: <R extends token_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<token_stddev_fields, R> | undefined)>}),
    stddev_pop: (token_stddev_pop_fieldsObservableChain & {get: <R extends token_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<token_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (token_stddev_samp_fieldsObservableChain & {get: <R extends token_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<token_stddev_samp_fields, R> | undefined)>}),
    sum: (token_sum_fieldsObservableChain & {get: <R extends token_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_sum_fields, R> | undefined)) => Observable<(FieldsSelection<token_sum_fields, R> | undefined)>}),
    var_pop: (token_var_pop_fieldsObservableChain & {get: <R extends token_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<token_var_pop_fields, R> | undefined)>}),
    var_samp: (token_var_samp_fieldsObservableChain & {get: <R extends token_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<token_var_samp_fields, R> | undefined)>}),
    variance: (token_variance_fieldsObservableChain & {get: <R extends token_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<token_variance_fields, R> | undefined)) => Observable<(FieldsSelection<token_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface token_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface token_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface token_max_fieldsPromiseChain{
    collection: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    ipfs: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    trader: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface token_max_fieldsObservableChain{
    collection: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    ipfs: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    trader: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface token_min_fieldsPromiseChain{
    collection: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    ipfs: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    trader: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface token_min_fieldsObservableChain{
    collection: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    creator: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    ipfs: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    sale: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    trader: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate stddev on columns */
export interface token_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface token_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface token_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface token_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface token_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface token_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface token_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Promise<(Scalars['bigint'] | undefined)>})
}


/** aggregate sum on columns */
export interface token_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['bigint'] | undefined)) => Observable<(Scalars['bigint'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface token_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface token_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface token_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface token_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface token_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface token_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    price: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}