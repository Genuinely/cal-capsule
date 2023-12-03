import pandas as pd
import random
from datetime import datetime, timedelta

# Function to generate random meeting start and end times
def generate_meeting_times():
    start_hour = random.randint(8, 17)  # Assuming meetings happen between 8 AM to 5 PM
    start_minute = random.choice([0, 15, 30, 45])
    start_time = datetime(2023, random.randint(1, 12), random.randint(1, 28), start_hour, start_minute)
    
    # Duration in 15-minute increments from 15 to 90 minutes
    duration_minutes = random.choice([15, 30, 45, 60, 75, 90])
    end_time = start_time + timedelta(minutes=duration_minutes)
    
    return start_time, end_time

# Function to generate a random booking ID
def generate_booking_id():
    return random.randint(1000, 9999)

# Names of the people
names = ["Bailey", "Keith", "Max", "Alex"]
attendee_names = ["Bailey", "Keith", "Max", "Alex", "Liam", "Ethan", "Emma",
                  "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia",
                  "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth",
                  "Daniel", "Oliver", "Lucas", "Henry", "Mason", "Ethan", "Logan"]
event_names = ["Performance Review", "Partnership Strategy", "Quick Sync", "Annual Review",
              "Team Meeting", "1:1", "Product Strategy", "Product Roadmap", "Product Launch",
              "Product Design", "Product Marketing", "Product Sales", "Product Support",
              "Fundraising"]
# Creating the DataFrame
meeting_data = []

# Generating random data
for _ in range(100):  # Generate 10 meetings for example
    booking_id = generate_booking_id()
    name = random.choice(names)
    start_time, end_time = generate_meeting_times()
    created_at = start_time - timedelta(days=random.randint(1, 5))
    updated_at = created_at + timedelta(hours=random.randint(1, 24))

    # Each meeting can have 1 to 5 attendees
    num_attendees = random.randint(1, 5)
    attendees = random.sample(attendee_names, num_attendees)
    event_name = random.choice(event_names)
    for attendee_name in attendees:
        meeting_data.append({
            "booking_id": booking_id,
            "event_name": event_name,
            "name": name,
            "start_time": start_time,
            "end_time": end_time,
            "attendee_name": attendee_name,
            "created_at": created_at,
            "updated_at": updated_at
        })

# Creating DataFrame
df = pd.DataFrame(meeting_data)
df.to_csv('meeting_data.csv', index=False)
