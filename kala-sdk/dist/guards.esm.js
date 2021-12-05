
var auction_possibleTypes = ['auction']
export var isauction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction"')
  return auction_possibleTypes.includes(obj.__typename)
}



var auction_aggregate_possibleTypes = ['auction_aggregate']
export var isauction_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_aggregate"')
  return auction_aggregate_possibleTypes.includes(obj.__typename)
}



var auction_aggregate_fields_possibleTypes = ['auction_aggregate_fields']
export var isauction_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_aggregate_fields"')
  return auction_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var auction_avg_fields_possibleTypes = ['auction_avg_fields']
export var isauction_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_avg_fields"')
  return auction_avg_fields_possibleTypes.includes(obj.__typename)
}



var auction_max_fields_possibleTypes = ['auction_max_fields']
export var isauction_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_max_fields"')
  return auction_max_fields_possibleTypes.includes(obj.__typename)
}



var auction_min_fields_possibleTypes = ['auction_min_fields']
export var isauction_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_min_fields"')
  return auction_min_fields_possibleTypes.includes(obj.__typename)
}



var auction_stddev_fields_possibleTypes = ['auction_stddev_fields']
export var isauction_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_stddev_fields"')
  return auction_stddev_fields_possibleTypes.includes(obj.__typename)
}



var auction_stddev_pop_fields_possibleTypes = ['auction_stddev_pop_fields']
export var isauction_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_stddev_pop_fields"')
  return auction_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var auction_stddev_samp_fields_possibleTypes = ['auction_stddev_samp_fields']
export var isauction_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_stddev_samp_fields"')
  return auction_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var auction_sum_fields_possibleTypes = ['auction_sum_fields']
export var isauction_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_sum_fields"')
  return auction_sum_fields_possibleTypes.includes(obj.__typename)
}



var auction_var_pop_fields_possibleTypes = ['auction_var_pop_fields']
export var isauction_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_var_pop_fields"')
  return auction_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var auction_var_samp_fields_possibleTypes = ['auction_var_samp_fields']
export var isauction_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_var_samp_fields"')
  return auction_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var auction_variance_fields_possibleTypes = ['auction_variance_fields']
export var isauction_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isauction_variance_fields"')
  return auction_variance_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_possibleTypes = ['dipdup_contract']
export var isdipdup_contract = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract"')
  return dipdup_contract_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_aggregate_possibleTypes = ['dipdup_contract_aggregate']
export var isdipdup_contract_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract_aggregate"')
  return dipdup_contract_aggregate_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_aggregate_fields_possibleTypes = ['dipdup_contract_aggregate_fields']
export var isdipdup_contract_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract_aggregate_fields"')
  return dipdup_contract_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_max_fields_possibleTypes = ['dipdup_contract_max_fields']
export var isdipdup_contract_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract_max_fields"')
  return dipdup_contract_max_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_contract_min_fields_possibleTypes = ['dipdup_contract_min_fields']
export var isdipdup_contract_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_contract_min_fields"')
  return dipdup_contract_min_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_possibleTypes = ['dipdup_head']
export var isdipdup_head = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head"')
  return dipdup_head_possibleTypes.includes(obj.__typename)
}



var dipdup_head_aggregate_possibleTypes = ['dipdup_head_aggregate']
export var isdipdup_head_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_aggregate"')
  return dipdup_head_aggregate_possibleTypes.includes(obj.__typename)
}



var dipdup_head_aggregate_fields_possibleTypes = ['dipdup_head_aggregate_fields']
export var isdipdup_head_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_aggregate_fields"')
  return dipdup_head_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_avg_fields_possibleTypes = ['dipdup_head_avg_fields']
export var isdipdup_head_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_avg_fields"')
  return dipdup_head_avg_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_max_fields_possibleTypes = ['dipdup_head_max_fields']
export var isdipdup_head_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_max_fields"')
  return dipdup_head_max_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_min_fields_possibleTypes = ['dipdup_head_min_fields']
export var isdipdup_head_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_min_fields"')
  return dipdup_head_min_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_stddev_fields_possibleTypes = ['dipdup_head_stddev_fields']
export var isdipdup_head_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_fields"')
  return dipdup_head_stddev_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_stddev_pop_fields_possibleTypes = ['dipdup_head_stddev_pop_fields']
export var isdipdup_head_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_pop_fields"')
  return dipdup_head_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_stddev_samp_fields_possibleTypes = ['dipdup_head_stddev_samp_fields']
export var isdipdup_head_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_stddev_samp_fields"')
  return dipdup_head_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_sum_fields_possibleTypes = ['dipdup_head_sum_fields']
export var isdipdup_head_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_sum_fields"')
  return dipdup_head_sum_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_var_pop_fields_possibleTypes = ['dipdup_head_var_pop_fields']
export var isdipdup_head_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_var_pop_fields"')
  return dipdup_head_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_var_samp_fields_possibleTypes = ['dipdup_head_var_samp_fields']
export var isdipdup_head_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_var_samp_fields"')
  return dipdup_head_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_head_variance_fields_possibleTypes = ['dipdup_head_variance_fields']
export var isdipdup_head_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_head_variance_fields"')
  return dipdup_head_variance_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_possibleTypes = ['dipdup_index']
export var isdipdup_index = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index"')
  return dipdup_index_possibleTypes.includes(obj.__typename)
}



var dipdup_index_aggregate_possibleTypes = ['dipdup_index_aggregate']
export var isdipdup_index_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_aggregate"')
  return dipdup_index_aggregate_possibleTypes.includes(obj.__typename)
}



var dipdup_index_aggregate_fields_possibleTypes = ['dipdup_index_aggregate_fields']
export var isdipdup_index_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_aggregate_fields"')
  return dipdup_index_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_avg_fields_possibleTypes = ['dipdup_index_avg_fields']
export var isdipdup_index_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_avg_fields"')
  return dipdup_index_avg_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_max_fields_possibleTypes = ['dipdup_index_max_fields']
export var isdipdup_index_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_max_fields"')
  return dipdup_index_max_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_min_fields_possibleTypes = ['dipdup_index_min_fields']
export var isdipdup_index_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_min_fields"')
  return dipdup_index_min_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_stddev_fields_possibleTypes = ['dipdup_index_stddev_fields']
export var isdipdup_index_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_fields"')
  return dipdup_index_stddev_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_stddev_pop_fields_possibleTypes = ['dipdup_index_stddev_pop_fields']
export var isdipdup_index_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_pop_fields"')
  return dipdup_index_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_stddev_samp_fields_possibleTypes = ['dipdup_index_stddev_samp_fields']
export var isdipdup_index_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_stddev_samp_fields"')
  return dipdup_index_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_sum_fields_possibleTypes = ['dipdup_index_sum_fields']
export var isdipdup_index_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_sum_fields"')
  return dipdup_index_sum_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_var_pop_fields_possibleTypes = ['dipdup_index_var_pop_fields']
export var isdipdup_index_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_var_pop_fields"')
  return dipdup_index_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_var_samp_fields_possibleTypes = ['dipdup_index_var_samp_fields']
export var isdipdup_index_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_var_samp_fields"')
  return dipdup_index_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_index_variance_fields_possibleTypes = ['dipdup_index_variance_fields']
export var isdipdup_index_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_index_variance_fields"')
  return dipdup_index_variance_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_schema_possibleTypes = ['dipdup_schema']
export var isdipdup_schema = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema"')
  return dipdup_schema_possibleTypes.includes(obj.__typename)
}



var dipdup_schema_aggregate_possibleTypes = ['dipdup_schema_aggregate']
export var isdipdup_schema_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema_aggregate"')
  return dipdup_schema_aggregate_possibleTypes.includes(obj.__typename)
}



var dipdup_schema_aggregate_fields_possibleTypes = ['dipdup_schema_aggregate_fields']
export var isdipdup_schema_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema_aggregate_fields"')
  return dipdup_schema_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_schema_max_fields_possibleTypes = ['dipdup_schema_max_fields']
export var isdipdup_schema_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema_max_fields"')
  return dipdup_schema_max_fields_possibleTypes.includes(obj.__typename)
}



var dipdup_schema_min_fields_possibleTypes = ['dipdup_schema_min_fields']
export var isdipdup_schema_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isdipdup_schema_min_fields"')
  return dipdup_schema_min_fields_possibleTypes.includes(obj.__typename)
}



var meta_possibleTypes = ['meta']
export var ismeta = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta"')
  return meta_possibleTypes.includes(obj.__typename)
}



var meta_aggregate_possibleTypes = ['meta_aggregate']
export var ismeta_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_aggregate"')
  return meta_aggregate_possibleTypes.includes(obj.__typename)
}



var meta_aggregate_fields_possibleTypes = ['meta_aggregate_fields']
export var ismeta_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_aggregate_fields"')
  return meta_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var meta_avg_fields_possibleTypes = ['meta_avg_fields']
export var ismeta_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_avg_fields"')
  return meta_avg_fields_possibleTypes.includes(obj.__typename)
}



var meta_max_fields_possibleTypes = ['meta_max_fields']
export var ismeta_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_max_fields"')
  return meta_max_fields_possibleTypes.includes(obj.__typename)
}



var meta_min_fields_possibleTypes = ['meta_min_fields']
export var ismeta_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_min_fields"')
  return meta_min_fields_possibleTypes.includes(obj.__typename)
}



var meta_stddev_fields_possibleTypes = ['meta_stddev_fields']
export var ismeta_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_stddev_fields"')
  return meta_stddev_fields_possibleTypes.includes(obj.__typename)
}



var meta_stddev_pop_fields_possibleTypes = ['meta_stddev_pop_fields']
export var ismeta_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_stddev_pop_fields"')
  return meta_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var meta_stddev_samp_fields_possibleTypes = ['meta_stddev_samp_fields']
export var ismeta_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_stddev_samp_fields"')
  return meta_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var meta_sum_fields_possibleTypes = ['meta_sum_fields']
export var ismeta_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_sum_fields"')
  return meta_sum_fields_possibleTypes.includes(obj.__typename)
}



var meta_var_pop_fields_possibleTypes = ['meta_var_pop_fields']
export var ismeta_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_var_pop_fields"')
  return meta_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var meta_var_samp_fields_possibleTypes = ['meta_var_samp_fields']
export var ismeta_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_var_samp_fields"')
  return meta_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var meta_variance_fields_possibleTypes = ['meta_variance_fields']
export var ismeta_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismeta_variance_fields"')
  return meta_variance_fields_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
export var isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
export var issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



var token_possibleTypes = ['token']
export var istoken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken"')
  return token_possibleTypes.includes(obj.__typename)
}



var token_aggregate_possibleTypes = ['token_aggregate']
export var istoken_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_aggregate"')
  return token_aggregate_possibleTypes.includes(obj.__typename)
}



var token_aggregate_fields_possibleTypes = ['token_aggregate_fields']
export var istoken_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_aggregate_fields"')
  return token_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var token_avg_fields_possibleTypes = ['token_avg_fields']
export var istoken_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_avg_fields"')
  return token_avg_fields_possibleTypes.includes(obj.__typename)
}



var token_max_fields_possibleTypes = ['token_max_fields']
export var istoken_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_max_fields"')
  return token_max_fields_possibleTypes.includes(obj.__typename)
}



var token_min_fields_possibleTypes = ['token_min_fields']
export var istoken_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_min_fields"')
  return token_min_fields_possibleTypes.includes(obj.__typename)
}



var token_stddev_fields_possibleTypes = ['token_stddev_fields']
export var istoken_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_stddev_fields"')
  return token_stddev_fields_possibleTypes.includes(obj.__typename)
}



var token_stddev_pop_fields_possibleTypes = ['token_stddev_pop_fields']
export var istoken_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_stddev_pop_fields"')
  return token_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var token_stddev_samp_fields_possibleTypes = ['token_stddev_samp_fields']
export var istoken_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_stddev_samp_fields"')
  return token_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var token_sum_fields_possibleTypes = ['token_sum_fields']
export var istoken_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_sum_fields"')
  return token_sum_fields_possibleTypes.includes(obj.__typename)
}



var token_var_pop_fields_possibleTypes = ['token_var_pop_fields']
export var istoken_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_var_pop_fields"')
  return token_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var token_var_samp_fields_possibleTypes = ['token_var_samp_fields']
export var istoken_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_var_samp_fields"')
  return token_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var token_variance_fields_possibleTypes = ['token_variance_fields']
export var istoken_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istoken_variance_fields"')
  return token_variance_fields_possibleTypes.includes(obj.__typename)
}
