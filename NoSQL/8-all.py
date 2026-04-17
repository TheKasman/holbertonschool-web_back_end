#!/usr/bin/env python3
"""MongoDb IN PYTHON"""


def list_all(mongo_collection):
    """List all entries in monboDB database"""
    return list(mongo_collection.find())
