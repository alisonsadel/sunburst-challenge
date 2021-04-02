# SQL Table to SQLalchemy 
from flask import Flask, jsonify, render_template
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
import datetime as dt
import pandas as pd

#################################################
# Database Setup
#################################################

engine = create_engine("postgresql://postgres:Olivia2019@localhost:5433/project_2", echo=True)

Base = automap_base()


Base.prepare(engine, reflect=True)

# Save references to tables 
combined_scores = Base.classes.sunburst_data

# Create our session (link) from Python to the DB
session = Session(engine)

#///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    return render_template('index.html')
    
@app.route("/sunburst_data")
def sunburst_data():
    query = f"""SELECT * FROM sunburst_data"""
    conn = engine.connect()
    scores = pd.read_sql(query, conn)
    return scores.to_json(orient='values')

if __name__ == "__main__":
    app.run()
