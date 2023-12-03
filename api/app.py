from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/timecapsule', methods=['GET'])
def timecapsule():
    # Dummy data for demonstration. Replace with real data retrieval and calculation logic.
    data = {
        "Individual Stats": {
            "individual_total_meetings": 100,
            "individual_total_meeting_hours": 200.5,
            "individual_average_meeting_hours": 2.005,
            "individual_longest_meeting": {"event_name": "Annual Review", "hours": 5.0},
            "individual_shortest_meeting": {"event_name": "Quick Sync", "hours": 0.5},
            "individual_total_ranking": 1
        },
        "Team Stats": {
            "team_total_meetings": 500,
            "team_total_meeting_hours": 1000.0,
            "team_avg_meeting_hours": 2.0,
            "most_met_with": {"user_id": 12345},
            "most_common_meeting_day": "Wednesday"
        }
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run()
