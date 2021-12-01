
from demo.types.kalamint_1.parameter.list_token import ListTokenParameter
from demo.types.kalamint_1.storage import Kalamint1Storage
from dipdup.context import HandlerContext
from dipdup.models import Transaction
import demo.models as models

async def on_sell(
    ctx: HandlerContext,
    list_token: Transaction[ListTokenParameter, Kalamint1Storage],
) -> None:
    ctx.logger.info('Processing `%s`', list_token.parameter)

    # trader = list_token.data.sender_address

    # auction = models.Auction(
    #     trader = trader,
    #     price = list_token.parameter.price,
    #     id = list_token.parameter.token_id,
    # )
    # await auction.save()