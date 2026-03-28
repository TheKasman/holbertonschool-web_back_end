#!/usr/bin/env python3
"""Question 8"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Multiplies by a value"""
    def multiply(value: float) -> float:
        return multiplier * value
    return multiply
