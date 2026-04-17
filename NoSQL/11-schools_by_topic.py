#!/usr/bin/env python3
"""Question 11"""


def schools_by_topic(mongo_collection, topic):
    """Basically, select * from"""
    return list(mongo_collection.find({"topics": topic}))
