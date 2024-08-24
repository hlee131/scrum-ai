from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
from datetime import datetime, timedelta
from llama_index.core import (
    SimpleDirectoryReader,
    VectorStoreIndex,
    StorageContext,
    load_index_from_storage,
)
from llama_index.core.tools import QueryEngineTool, ToolMetadata
from llama_index.embeddings.octoai import OctoAIEmbedding
from llama_index.core import Settings as LlamaGlobalSettings
from llama_index.core.agent import ReActAgent
from llama_index.llms.openai_like import OpenAILike

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

# {
#     "task_name": "Test",
#     "task_description": "Add tests for the entire project",
#     "deadline": "September 9th, 2024",
#     "num_sprints": "10"
# }

@app.route('/plan_calendar', methods=['POST'])
def plan_calendar():
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
        "title": "Subtask name",
        "description": "Brief description",
        "start": "YYYY-MM-DD",
        "end": "YYYY-MM-DD",
        "dependencies": ["Subtask 1", "Subtask 2"]
    }}
    """

    # Get response from OctoAI
    response = llm.complete(prompt)
    
    return jsonify(response.text)


if __name__ == '__main__':
    app.run(debug=True)