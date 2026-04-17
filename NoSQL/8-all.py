#!/usr/bin/env python3
"""MongoDb IN PYTHON"""


def list_all(mongo_collection):
    return list(mongo_collection.find())

