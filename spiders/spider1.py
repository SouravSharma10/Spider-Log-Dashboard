import time
import random
import logging

logging.basicConfig(level=logging.INFO)

spider_name = "spider1"

while True:
    logging.info(f"{spider_name}: Crawling page {random.randint(1,100)}")
    time.sleep(1)
