#!/usr/bin/env python3
"""Now we use question 1 to solve 2"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Run async_comprehension 4 times and return the runtime"""
    start_runtime = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_runtime = time.time()
    return end_runtime - start_runtime
