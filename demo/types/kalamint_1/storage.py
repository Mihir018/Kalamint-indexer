# generated by datamodel-codegen:
#   filename:  storage.json

from __future__ import annotations

from typing import Any, Dict, List

from pydantic import BaseModel, Extra


class Key(BaseModel):
    class Config:
        extra = Extra.forbid

    address: str
    nat: str


class LedgerItem(BaseModel):
    class Config:
        extra = Extra.forbid

    key: Key
    value: str


class Key1(BaseModel):
    class Config:
        extra = Extra.forbid

    operator: str
    owner: str
    token_id: str


class Operator(BaseModel):
    class Config:
        extra = Extra.forbid

    key: Key1
    value: Dict[str, Any]


class TokenMetadata(BaseModel):
    class Config:
        extra = Extra.forbid

    token_id: str
    token_info: Dict[str, str]


class Tokens(BaseModel):
    class Config:
        extra = Extra.forbid

    collection_id: str
    creator: str
    creator_royalty: str
    decimals: str
    edition_number: str
    editions: str
    extras: Dict[str, str]
    ipfs_hash: str
    on_auction: bool
    on_sale: bool
    owner: str
    price: str
    token_id: str


class Kalamint1Storage(BaseModel):
    class Config:
        extra = Extra.forbid

    administrator: str
    all_collections: str
    all_tokens: str
    auction_factory: str
    auctions: Dict[str, str]
    bidding_fee: str
    collections: Dict[str, List[str]]
    id_max_increment: str
    ipfs_registry: str
    ledger: List[LedgerItem]
    max_editions: str
    max_royalty: str
    metadata: Dict[str, str]
    metadata_string: Dict[str, Any]
    operators: List[Operator]
    paused: bool
    token_metadata: Dict[str, TokenMetadata]
    tokens: Dict[str, Tokens]
    trading_fee: str
    trading_fee_collector: str
    x: str
