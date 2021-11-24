from typing import Collection
from tortoise import Model, fields


class Token(Model):
    id = fields.BigIntField(pk=True)
    creator = fields.CharField(max_length=100)
    collection = fields.CharField(max_length=1000)


