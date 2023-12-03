from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

@app.route('/timecapsule', methods=['GET'])
def timecapsule():
    # Dummy data for demonstration. Replace with real data retrieval and calculation logic.
    current_directory = os.getcwd()

    file_path = os.path.join(current_directory, 'meeting_data.csv')
    df = pd.read_csv(file_path)
    name = str(request.args.get('name'))

    # # Filter the dataframe for meetings where name is the attendee
    user_meetings = df[df['attendee_name'] == 'Bailey']

    # # Calculate the duration of each meeting
    user_meetings['start_time'] = pd.to_datetime(user_meetings['start_time'])
    user_meetings['end_time'] = pd.to_datetime(user_meetings['end_time'])

    user_meetings['duration'] = user_meetings['end_time'] - user_meetings['start_time']

    # # Calculations
    total_meetings = len(user_meetings)
    total_meeting_hours = user_meetings['duration'].sum().total_seconds() / 3600
    average_meeting_hours = total_meeting_hours / total_meetings if total_meetings > 0 else 0
    longest_meeting_event_name = df.loc[user_meetings['duration'].idxmax()].event_name
    longest_meeting = user_meetings['duration'].max().total_seconds() / 3600
    shortest_meeting = user_meetings['duration'].min().total_seconds() / 3600
    shortest_meeting_event_name = df.loc[user_meetings['duration'].idxmin()].event_name

    data = {
        "Individual Stats": {
            "individual_total_meetings": total_meetings,
            "individual_total_meeting_hours": total_meeting_hours,
            "individual_average_meeting_hours": average_meeting_hours,
            "individual_longest_meeting": {"event_name": longest_meeting_event_name, "hours": longest_meeting},
            "individual_shortest_meeting": {"event_name": shortest_meeting_event_name, "hours": shortest_meeting},
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
    app.run(debug=True)
