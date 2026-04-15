#!/usr/bin/env python3
"""New work for sprint 3!"""


def index_range(page: int, page_size: int) -> tuple:
    """ returns a tuple of size two"""
    start = (page - 1) * page_size
    end = page + page_size
    return (start, end)

