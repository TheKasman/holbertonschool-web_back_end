#!/usr/bin/env python3
"""Final question for the module"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns the length of an element"""
    return [(i, len(i)) for i in lst]
