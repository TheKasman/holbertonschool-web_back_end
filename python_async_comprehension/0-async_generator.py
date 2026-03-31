#!/usr/bin/env python3
"""Async generator"""
import asyncio
import random


async def async_generator():
    """loop 10 times, wait 1 second, yield random number from 0-10"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
