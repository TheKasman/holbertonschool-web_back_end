#!/usr/bin/env python3
"""insert new document"""


def insert_school(mongo_collection, **kwargs):
    """Inserts documents based off of what is in kwargs
        returns new _id
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
