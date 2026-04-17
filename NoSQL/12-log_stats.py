#!/usr/bin/env python3
"""Provide some stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    print(f"{collection.count_documents({})} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for m in methods:
        print(f"\tmethod {m}: {collection.count_documents({'method': m})}")

    filter_status = {'method': 'GET', 'path': '/status'}
    print(f"{collection.count_documents(filter_status)} status check")
