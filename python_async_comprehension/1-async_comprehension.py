#!/usr/bin/env python3
"""Time to use question 0 for question 1"""
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """use the generator, return the numbers"""
    numbers = [num async for num in async_generator()]
    return numbers
