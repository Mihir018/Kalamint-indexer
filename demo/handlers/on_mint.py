
from demo.types.kalamint_1.storage import Kalamint1Storage
from dipdup.context import HandlerContext
from dipdup.models import Transaction
from demo.types.kalamint_1.parameter.mint import MintParameter

async def on_mint(
    ctx: HandlerContext,
    mint: Transaction[MintParameter, Kalamint1Storage],
) -> None:
    ...