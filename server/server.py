from flask import Flask, request, jsonify, Response
from dotenv import load_dotenv
import os
import json
from llama_index.llms.openai_like import OpenAILike
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

# Load environment variables
load_dotenv()
OCTOAI_API_KEY = os.environ["OCTOAI_API_KEY"]

# Initialize the OctoAI LLM
llm = OpenAILike(
    model="meta-llama-3.1-70b-instruct",
    api_base="https://text.octoai.run/v1",
    api_key=OCTOAI_API_KEY,
    context_window=40000000000000000,
    max_tokens=40000000000000000000,
    is_function_calling_model=True,
    is_chat_model=True,
)

@app.route('/plan_calendar', methods=['POST'])
@cross_origin()
def plan_calendar():
    data = request.json
    task_name = data['task']
    task_description = data['desc']
    deadline = data['deadline']
    num_sprints = data['numOfSprints']
    specifics = data.get('desc', '')
    team_members = data.get('people', [])

    # Construct the prompt for the AI
    prompt = f"""
    Plan a Scrum sprint for the following task:
    Task Name: {task_name}
    Description: {task_description}
    Deadline: {deadline}
    Number of Sprints: {num_sprints}
    Additional Specifics: {specifics}
    Team Members: {json.dumps(team_members)}

    Please provide a detailed plan with subtasks, estimated durations, dependencies, assigned team members, and story points starting from today to the next {{deadline}} weeks. 
    Provide a TypeScript array that matches the following type:
    {{
        "title": string,
        "description": string,
        "start": string,
        "end": string,
        "dependencies": string[],
        "assignee": string,
        "storyPoints": number
    }}[]
    where:
    - "title" is the subtask name
    - "description" is the description of the subtask, MAKE SURE THIS IS AT LEAST 100 words.
    - "start" is the start date of the subtask in the format "YYYY-MM-DD"  
    - "end" is the end date of the subtask in the format "YYYY-MM-DD"
    - "dependencies" are the names of the subtasks that this subtask depends on
    - "assignee" is the name of the team member assigned to this subtask
    - "storyPoints" is the estimated effort for the subtask (using the Fibonacci sequence: 1, 2, 3, 5, 8, 13, 21)

    Ensure that:
    1. Tasks are distributed evenly among team members based on their roles and the nature of the tasks.
    2. The total story points per sprint are balanced, considering the team's capacity.
    3. Dependencies between tasks are logically structured.
    4. The plan fits within the given number of sprints and meets the deadline.

    Apart from the TypeScript array, provide no other output and do not use any Markdown syntax.
    """

    # Get response from OctoAI
    response = llm.complete(prompt)

    return json.dumps(response.text)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 10000)))