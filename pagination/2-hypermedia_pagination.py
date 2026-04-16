#!/usr/bin/env python3
"""Pagination utilities and a server class"""

import csv
import math
from typing import List
from typing import Tuple
from typing import Dict, Any


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """returns a tuple of size two containing the start and end indexes"""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """Return pagination metadata and data"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        returned_data = self.get_page(page, page_size)
        data = self.dataset()
        data_length = len(data)
        total_pages = math.ceil(data_length / page_size)

        next_page = page + 1 if page < total_pages else None
        
        prev_page = page + 1 if page < total_pages else None
        return {
            "page_size": len(returned_data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns a tuple of size two containing the start and end indexes"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.dataset()
        start, end = index_range(page, page_size)

        if start >= len(data):
            return []

        return data[start:end]
