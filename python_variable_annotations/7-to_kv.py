#!/usr/bin/env python3
"""Question 7"""
from typing import Tuple, Union

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, Union[int, float]]:
    """string and int/float to tuple"""
    return (k, float(v))
 