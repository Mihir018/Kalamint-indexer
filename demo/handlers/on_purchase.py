
from demo.types.kalamint_1.parameter.buy import BuyParameter
from dipdup.context import HandlerContext
from dipdup.models import Transaction
from demo.types.kalamint_1.storage import Kalamint1Storage

async def on_purchase(
    ctx: HandlerContext,
    buy: Transaction[BuyParameter, Kalamint1Storage],
) -> None:
    ...