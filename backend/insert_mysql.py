import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

db_password = os.environ['DB_PASSWORD']

# Establish the database connection
db = mysql.connector.connect(
    host="strategy-dev.mysql.database.azure.com",
    user="dev",
    password=db_password,
    database="location_service"
)

# Create a cursor object
cursor = db.cursor()

# Close the cursor and database connection
cursor.close()
db.close()
