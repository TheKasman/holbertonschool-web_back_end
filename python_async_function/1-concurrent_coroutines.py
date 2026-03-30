#!/usr/bin/env python3
"""Question 1 - Wait_n"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> float:
    """Spawns wait_random n times, returns float values"""
    tasks = [asyncio.create_task(wait_random(max_delay)) for i in range(n)]
    results = await asyncio.gather(tasks)
    return results
