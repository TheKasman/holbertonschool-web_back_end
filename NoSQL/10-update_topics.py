#!/usr/bin/env python3
"""change topics based on document name"""


def update_topics(mongo_collection, name, topics):
    """update topics on document name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
