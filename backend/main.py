from fastapi import FastAPI
import uvicorn
import mysql.connector
import json
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set this to the appropriate origin URLs of your client application
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

def get_db_connection():
    connection = mysql.connector.connect(
       host="strategy-dev.mysql.database.azure.com",
        user="dev",
        password="midsundev24",
        database="location_service"
    )
    return connection

@app.get("/")
def read_root():
    return {"Hi": "World"}

@app.get("/locations")
def locations():
    # Create connection with MySql database
    connection = get_db_connection()
    cursor = connection.cursor()

    # Select all elements from all columns in sample_locations
    query = "SELECT * FROM sample_locations;"
    cursor.execute(query)

    results = cursor.fetchall()

    # Convert the tuple result to a list of dictionaries
    columns = [column[0] for column in cursor.description]
    locations = [dict(zip(columns, row)) for row in results]

    cursor.close()
    connection.close()

    # Manually serialize the data to JSON
    json_data = json.dumps(locations, default=str)

    return json_data


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
