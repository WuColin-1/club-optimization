
from cmd import PROMPT
import json
import pandas as pd
from ollama import chat
from flask import Flask,jsonify

# prepare the back end interface
# app=Flask(__name__)
# @app.route('api/save-results',methods=['POST'])
# def get_suggestions():
#     output=response['message']['content']
#     return jsonify(json.loads(output))

# if __name__=="__main__":
#     app.run(debug=True)
# api/club_sugggestions

with open('Capstone/club_population_changes.json', 'r', encoding='utf-8') as f:
    club_suggestions = json.load(f)
club_suggestions = pd.DataFrame(club_suggestions)


PROMPT=(f"here are the club available:{club_suggestions['club_name']}"
        f"here are the population in this new year of each clubs{club_suggestions['population']}")

response = chat(
    model='deepseek-r1:8b', 
    think=False, 
    options={"seed": 42},
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
                "You are a club assistant. Your job is to give development advice, including 场地分配、经费需求、未来活动建议 to each club "
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

text_response = response['message']['content']

text_response = json.loads(text_response)

# 字符串转为 dict 列表
text_response = text_response["club_suggestions"]

# 转为 DataFrame
df = pd.DataFrame(text_response)
df.to_csv("Capstone/Advice to Every Club.csv", index=False, encoding="utf-8-sig")

