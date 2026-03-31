#!/usr/bin/env python3
"""Question 4 - Wait_n 2 electric boogaloo"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawns wait_random n times, returns float values"""
    tasks = [wait_random(max_delay) for i in range(n)]
    results = []
    for task in asyncio.as_completed(tasks):
        results.append(await task)
    return results
