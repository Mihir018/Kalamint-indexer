
from dipdup.models import BigMapDiff
from demo.types.kalamint_1.big_map.tokens_value import TokensValue
from dipdup.context import HandlerContext
from demo import models as models
from demo.types.kalamint_1.big_map.tokens_key import TokensKey
import demo.models as models

async def on_token_update(
    ctx: HandlerContext,
    kalamint_1: BigMapDiff[TokensKey, TokensValue],
) -> None:
    if not kalamint_1.action.has_value:
        return
    assert kalamint_1.key
    assert kalamint_1.value

    bigmap_key = kalamint_1.key.__root__
    ctx.logger.info('Processing `%s`', kalamint_1.value)

    await models.Meta.update_or_create(
        id=bigmap_key,
        defaults=dict(decimals = kalamint_1.value.decimals, category= kalamint_1.value.extras['category'], collection_name= kalamint_1.value.extras['collection_name'].rstrip(), creator_name= kalamint_1.value.extras['creator_name'], name= kalamint_1.value.extras['name'], symbol= kalamint_1.value.extras['symbol'], keywords= kalamint_1.value.extras['keywords'], token_id = kalamint_1.value.token_id, price= kalamint_1.value.price, ipfs_hash= kalamint_1.value.ipfs_hash, owner= kalamint_1.value.owner, on_sale= kalamint_1.value.on_sale, on_auction= kalamint_1.value.on_auction, collection_id= kalamint_1.value.collection_id, creator= kalamint_1.value.creator, creator_royalty= kalamint_1.value.creator_royalty, edition_number= kalamint_1.value.edition_number, editions= kalamint_1.value.editions ),
    )