
from demo.types.kalamint_1.parameter.buy import BuyParameter
from dipdup.context import HandlerContext
from dipdup.models import Transaction
from demo.types.kalamint_1.storage import Kalamint1Storage
import demo.models as models

async def on_purchase(
    ctx: HandlerContext,
    buy: Transaction[BuyParameter, Kalamint1Storage],
) -> None:
    # ctx.logger.info('Processing `%s`', buy.parameter)

    # purchase = models.Market(
    #     id=buy.parameter.token_id,
    #     creator=buy.parameter.collection_id,
    #     royalty = buy.parameter.creator_royalty,
    #     cost = buy.parameter.price,
    # )
    # await purchase.save()
    ...