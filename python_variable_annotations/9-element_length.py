#!/usr/bin/env python3
"""Final question for the module"""
from typing import Iterable, Sized, List, Tuple

def element_length(lst: Iterable[Sized]) -> List[Tuple[Sized, int]]:
    """Returns the length of an element"""
    return [(i, len(i)) for i in lst]
