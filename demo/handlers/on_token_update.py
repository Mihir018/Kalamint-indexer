
from dipdup.models import BigMapDiff
from demo.types.kalamint_1.big_map.tokens_value import TokensValue
from dipdup.context import HandlerContext
from demo import models as models
from demo.types.kalamint_1.big_map.tokens_key import TokensKey

async def on_token_update(
    ctx: HandlerContext,
    kalamint_1: BigMapDiff[TokensKey, TokensValue],
) -> None:
    ctx.logger.info('Processing `%s`', kalamint_1.value)