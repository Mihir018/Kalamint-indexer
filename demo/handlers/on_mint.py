
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

    token = models.Token(
        id=mint.parameter.token_id,
        creator=mint.parameter.creator_name,
        collection = mint.parameter.collection_name,
    )
    await token.save()