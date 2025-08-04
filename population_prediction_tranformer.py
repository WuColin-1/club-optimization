import torch
import torch.nn as nn
import torch.optim as optim
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from torch.utils.data import Dataset, DataLoader
from matplotlib import pyplot as plt

# ======== Set Device ========
# device = torch.device("mps" if torch.backends.mps.is_available() else "cpu")
device = torch.device('mps')

# ======== Hyperparameters ========
INPUT_DIM = 3
MODEL_DIM = 64
NHEAD = 4
NUM_LAYERS = 2
OUTPUT_DIM = 1
EPOCHS = 3000
LR = 0.01
BATCH_SIZE = 32
WINDOW_SIZE = 5

# ======== Dataset Definition ========
class ClubDataset(Dataset):
    def __init__(self, df, window_size=WINDOW_SIZE):
        self.window_size = window_size
        data = []
        for club_id in df['club_id'].unique():
            club_data = df[df['club_id'] == club_id].sort_values('month')
            features = club_data[['activity_freq', 'funding_support', 'population']].values
            for i in range(len(features) - window_size):
                data.append((features[i:i+window_size], features[i+window_size, -1]))
        self.data = data

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        seq, target = self.data[idx]
        return torch.tensor(seq, dtype=torch.float32).to(device), torch.tensor(target, dtype=torch.float32).to(device)

# ======== Positional Encoding ========
class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=500):
        super().__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, d_model, 2) * (-np.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        self.register_buffer('pe', pe.unsqueeze(0))

    def forward(self, x):
        return x + self.pe[:, :x.size(1)]

# ======== Transformer Model ========
class TransformerModel(nn.Module):
    def __init__(self, input_dim, model_dim, nhead, num_layers, output_dim):
        super().__init__()
        self.input_proj = nn.Linear(input_dim, model_dim)
        self.pos_encoding = PositionalEncoding(model_dim)
        encoder_layer = nn.TransformerEncoderLayer(d_model=model_dim, nhead=nhead)
        self.encoder = nn.TransformerEncoder(encoder_layer, num_layers=num_layers)
        self.fc_out = nn.Linear(model_dim, output_dim)

    def forward(self, x):
        x = self.input_proj(x)  # [batch, seq, model_dim]
        x = self.pos_encoding(x)
        x = x.permute(1, 0, 2)  # [seq, batch, dim]
        out = self.encoder(x)
        return self.fc_out(out[-1]).squeeze(-1)

# ======== Evaluation Function ========
def evaluate(model, dataloader, criterion):
    model.eval()
    total_loss = 0
    with torch.no_grad():
        for X, y in dataloader:
            pred = model(X)
            loss = criterion(pred, y)
            total_loss += loss.item()
    model.train()
    return total_loss / len(dataloader)

# ======== Load Data ========
df = pd.read_csv("club_population.csv")
# noice=np.random.randint(-3,3,size=len(df))
# df['population']+=noice

# Normalize
# scaler = MinMaxScaler()
# df[['activity_freq', 'funding_support', 'population']] = scaler.fit_transform(
#     df[['activity_freq', 'funding_support', 'population']]
# )

# Split Data
train_df, temp_df = train_test_split(df, test_size=0.2, shuffle=False)
val_df, test_df = train_test_split(temp_df, test_size=0.5, shuffle=True)

# Dataset & DataLoader
train_dataset = ClubDataset(train_df)
val_dataset = ClubDataset(val_df)
test_dataset = ClubDataset(test_df)

train_loader = DataLoader(train_dataset, batch_size=BATCH_SIZE, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=BATCH_SIZE, shuffle=False)
test_loader = DataLoader(test_dataset, batch_size=BATCH_SIZE, shuffle=False)

# ======== Model, Loss, Optimizer ========
model = TransformerModel(INPUT_DIM, MODEL_DIM, NHEAD, NUM_LAYERS, OUTPUT_DIM).to(device)
criterion = nn.MSELoss()
optimizer = torch.optim.AdamW(model.parameters(), lr=LR, weight_decay=1e-2)


# ======== Training Loop ========
for epoch in range(EPOCHS):
    total_loss = 0
    for X, y in train_loader:
        optimizer.zero_grad()
        pred = model(X)
        loss = criterion(pred, y)
        loss.backward()
        optimizer.step()
        total_loss += loss.item()
    val_loss = evaluate(model, val_loader, criterion)
    print(f"Epoch {epoch+1}, Train Loss: {total_loss/len(train_loader):.4f}, Val Loss: {val_loss:.4f}")

# ======== Evaluation ========
model.eval()
preds = []
reals = []
with torch.no_grad():
    for X, y in test_loader:
        pred = model(X)
        preds.extend(pred.cpu().numpy())
        reals.extend(y.cpu().numpy())

# ======== Plot Results ========
x = np.linspace(20, 70, 50)
y = x
plt.plot(x, y, color='blue', label='Contract Line')
plt.scatter(reals, preds, color='red', label='Prediction vs True')
plt.title("Comparison")
plt.xlabel("True Values")
plt.ylabel("Predicted Values")
plt.legend()
plt.show()