#!/usr/bin/env python3
"""New work for sprint 3!"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """ returns a tuple of size two containing the start and end indexes"""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
