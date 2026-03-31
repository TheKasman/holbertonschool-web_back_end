#!/usr/bin/env python3
"""first tasks.py file"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """now we're returning... a TASK!?"""
    return asyncio.create_task(wait_random(max_delay))
