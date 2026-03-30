#!/usr/bin/env python3
"""Question 0 - Basic syntax"""
import asyncio
import random


async def wait_random(max_delay: float = 10):
    """Waits a random amonut of time and returns the time"""
    delay = random.uniform(0, max_delay)
    asyncio.sleep(delay)
    return delay
