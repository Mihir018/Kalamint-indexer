
from demo.types.kalamint_1.parameter.mint import MintParameter
from dipdup.models import Transaction
from demo.types.kalamint_1.storage import Kalamint1Storage
from dipdup.context import HandlerContext
import demo.models as models

async def on_mint(
    ctx: HandlerContext,
    mint: Transaction[MintParameter, Kalamint1Storage],
) -> None:
    ctx.logger.info('Processing `%s`', mint.parameter)

    trader = mint.data.sender_address

    # token = models.Token(
    #     id=mint.parameter.token_id,
    #     creator=mint.parameter.creator_name,
    #     trader = trader,
    #     collection = mint.parameter.collection_name,
    #     price = mint.parameter.price,
    #     ipfs = mint.parameter.ipfs_hash,
    #     sale = mint.parameter.on_sale,

    # )
    # await token.save()

    await models.Token.update_or_create(
        id = mint.parameter.token_id,
        creator=mint.parameter.creator_name,
        trader = trader,
        collection = mint.parameter.collection_name,
        price = mint.parameter.price,
        ipfs = mint.parameter.ipfs_hash,
        sale = mint.parameter.on_sale,
    )