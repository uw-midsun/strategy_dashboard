import mysql.connector

# Establish the database connection
db = mysql.connector.connect(
    host="strategy-dev.mysql.database.azure.com",
    user="dev",
    password="midsundev24",
    database="location_service"
)

# Create a cursor object
cursor = db.cursor()

# Close the cursor and database connection
cursor.close()
db.close()
