
from cmd import PROMPT
import json
import pandas as pd
from ollama import chat
from flask import Flask,jsonify



with open('Capstone/club_population_changes.json', 'r', encoding='utf-8') as f:
    club_suggestions = json.load(f)
club_suggestions = pd.DataFrame(club_suggestions)


PROMPT=(f"here are the clubs available and their populations this year:{club_suggestions}")


response = chat(
    model='deepseek-coder-v2:16b', 
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
                      "Club": {"type": "string"},
                      "Activity Suggestions": {"type": "string"},
                      "Money Distribution": {"type": "integer"},
                      "Places": {"type": "string"}
                  },
                  "required": ["Club", "Activity Suggestions", "Money Distribution", "Places"]
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
                "You must include ALL 30 clubs."
                "Offer Reasoning for each activity suggestion."
            )
        },
        {
            "role": "user",
            "content": PROMPT
        }
    ]
)

text_response = response['message']['content']
print(text_response)

text_response = json.loads(text_response)

# 字符串转为 dict 列表
text_response = text_response["club_suggestions"]

# 转为 DataFrame
df = pd.DataFrame(text_response)
df.to_csv("Capstone/Advice to Every Club.csv", index=False, encoding="utf-8-sig")

