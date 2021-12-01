from typing import Collection
from tortoise import Model, fields


class Token(Model):
    id = fields.BigIntField(pk=True)
    creator = fields.CharField(max_length=100)
    trader = fields.CharField(36)
    collection = fields.CharField(max_length=1000)
    price = fields.BigIntField()
    ipfs = fields.CharField(max_length=1000)
    sale = fields.CharField(max_length=10)

class Auction(Model):
    trader = fields.CharField(36, pk=True, unique=True)
    price = fields.BigIntField()
    id = fields.BigIntField()

class Meta(Model):
    id = fields.CharField(max_length=100,pk=True)
    decimals= fields.IntField(null=True)
    category = fields.CharField(null=True,max_length=100)
    collection_name = fields.CharField(null=True,max_length=1048)
    creator_name = fields.CharField(null=True,max_length=1048)
    name = fields.CharField(null=True,max_length=1048)
    symbol = fields.CharField(null=True,max_length=100)
    keywords = fields.CharField(null=True,max_length=1048)    
    token_id = fields.IntField(null=True)
    price = fields.CharField(null=True,max_length=1048)
    ipfs_hash = fields.CharField(null=True,max_length=100)
    owner = fields.CharField(null=True,max_length=100)
    on_sale = fields.CharField(null=True,max_length=5)
    on_auction = fields.CharField(null=True,max_length=5)
    collection_id = fields.IntField(null=True)
    creator = fields.CharField(null=True,max_length=100)
    creator_royalty = fields.IntField(null=True)
    edition_number = fields.IntField(null=True)
    editions = fields.IntField(null=True)

