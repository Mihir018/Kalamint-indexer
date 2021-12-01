
from dipdup.models import Transaction
from demo.types.kalamint_1.parameter.buy import BuyParameter
from demo.types.kalamint_1.storage import Kalamint1Storage
from dipdup.context import HandlerContext

async def on_sell(
    ctx: HandlerContext,
    buy: Transaction[BuyParameter, Kalamint1Storage],
) -> None:
    ...