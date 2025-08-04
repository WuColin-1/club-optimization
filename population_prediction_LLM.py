from ollama import chat
import pandas as pd
import json
import time



# Load in Data
club_population = pd.read_csv("Capstone/club_population.csv")




PROMPT = (
    "Predict “新学年社团预计人数” based on the following data I give."
    "Dataset:\n"
    f"{club_population}"
)

start_time = time.time()

response = chat(
    model='deepseek-r1:8b', 
    think=False,
    options={"seed": 42}, 
    format={
        "type": "object",
        "properties": {
            "Club Population Predict": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties":{
                        "club_name": {
                            "type": "string"
                        },
                        "population": {
                            "type": "integer"
                        }
                    },
                    "required": ["club_name", "population"]
                }

            }
      },
      "required": [
          "Club Population Predict"
      ]
    }, 
    messages=[
    {
        "role": "system",
        "content": (
            "You are a JSON generator. Given club features like 社团名称,公众号点击量,两年变化趋势,社团人数基数,过往问卷情况,招新活动出勤率,老成员黏性,往年招新报名转化率,年度活动频次,学生院系"
            "predict this year's population. \n"
            "**ONLY** output a .json format text with the yearly new population predictions for every single club (10 total).\n\n"
            "Do NO reasoning."
        )
    },
    {
      'role': 'user',
      'content': PROMPT
    }
  ])

end_time = time.time()
print(end_time - start_time)

print(response['message']['content'])

