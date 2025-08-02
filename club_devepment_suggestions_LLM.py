'''
LLM utilization for matching clubs w/ students' needs, by modifying .json file 
the html generates locally.
'''

from cmd import PROMPT
import json
from aem import app
import pandas as pd
from ollama import chat
from flask import Flask,jsonify

# prepare the back end interface
app=Flask(__name__)
@app.route('api/club_sugggestions',methods=['GET'])
def get_suggestions():
    output=response['message']['content']
    return jsonify(json.loads(output))

if __name__=="__main__":
    app.run(debug=True)


with open('club_population_changes.json', 'r', encoding='utf-8') as f:
    club_suggestions = json.load(f)
club_suggestions = pd.DataFrame(club_suggestions)


PROMPT=(f"here are the club available:{club_suggestions['name']}"
        f"here are the population changes of each clubs{club_suggestions['population_change']}")

response = chat(
    model='deepseek-r1:8b', 
    think=False, 
    format={
      "type": "object",
      "properties": {
          "club_suggestions": {
              "type": "array",
              "items": {
                  "type": "object",
                  "properties": {
                      "club": {"type": "string"},
                      "suggestion": {"type": "string"}
                  },
                  "required": ["club", "suggestion"]
              }
          }
      },
      "required": ["club_suggestions"]
    }, 
    messages=[
        {
            "role": "system",
            "content": (
                "You are a club assistant. Your job is to give development advice to each club "
                "based on their population changes and also suggest funding allocations. "
                "Output only the JSON as specified."
            )
        },
        {
            "role": "user",
            "content": PROMPT
        }
    ]
)

print(response['message']['content'])
