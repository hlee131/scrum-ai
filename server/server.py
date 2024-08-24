from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from llama_index.llms.openai_like import OpenAILike
import ics
from datetime import datetime, timedelta

app = Flask(__name__)

# Load environment variables
load_dotenv()
OCTOAI_API_KEY = os.environ["OCTOAI_API_KEY"]

# Initialize the OctoAI LLM
llm = OpenAILike(
    model="meta-llama-3.1-70b-instruct",
    api_base="https://text.octoai.run/v1",
    api_key=OCTOAI_API_KEY,
    context_window=40000,
    is_function_calling_model=True,
    is_chat_model=True,
)

@app.route('/plan_sprint', methods=['POST'])
def plan_sprint():
    data = request.json
    task_name = data['task_name']
    task_description = data['task_description']
    deadline = data['deadline']
    num_sprints = data['num_sprints']
    specifics = data.get('specifics', '')

    # Construct the prompt for the AI
    prompt = f"""
    Plan a Scrum sprint for the following task:
    Task Name: {task_name}
    Description: {task_description}
    Deadline: {deadline}
    Number of Sprints: {num_sprints}
    Additional Specifics: {specifics}

    Please provide a detailed plan with subtasks, estimated durations, and dependencies. 
    Format the output as a list of JSON objects, each representing a subtask with the following structure:
    {{
        "name": "Subtask name",
        "description": "Brief description",
        "start_date": "YYYY-MM-DD",
        "end_date": "YYYY-MM-DD",
        "dependencies": ["Subtask 1", "Subtask 2"]
    }}
    """

    # Get response from OctoAI
    response = llm.complete(prompt)

    # Process the AI response (you might need to parse the JSON from the response text)
    # This is a placeholder - you'll need to implement proper parsing based on the actual response format
    tasks = parse_ai_response(response.text)

    # Generate ICS file
    calendar = generate_ics(tasks)

    return jsonify({
        "ics_content": calendar.serialize(),
        "tasks": tasks
    })

def parse_ai_response(response_text):
    # Implement parsing logic here
    # This is a placeholder - you'll need to adapt this based on the actual AI output
    import json
    return json.loads(response_text)

def generate_ics(tasks):
    calendar = ics.Calendar()
    for task in tasks:
        event = ics.Event()
        event.name = task['name']
        event.begin = task['start_date']
        event.end = task['end_date']
        event.description = task['description']
        calendar.events.add(event)
    return calendar

if __name__ == '__main__':
    app.run(debug=True)