// use("Crudbd")
// db.createCollection("Prices")
// db.Prices.insertOne({
//   "Bot": "Chatting-Bot",
//   "Plan": "daily",
//   "Pricing": 10,
//   "Creator": "Gourav-Jaiswal",
//     "Description": "A bot that can chat with users and relief their stress.",
//   "Copyright": "Yener.co"
// })
use('Crudbd');
db.createCollection('Prices');
db.getCollection('Prices').insertMany([
  {
    "Bot": "Coding-Bot",
    "Plan": "monthly",
    "Pricing": 1342,
    "Creator": "Meera-Kumar"
  },
  {
    "Bot": "Design-Bot",
    "Plan": "lifetime",
    "Pricing": 4705,
    "Creator": "Kabir-Desai"
  },
  {
    "Bot": "AI-Helper",
    "Plan": "monthly",
    "Pricing": 2354,
    "Creator": "Tanya-Singh"
  },
  {
    "Bot": "Support-Bot",
    "Plan": "yearly",
    "Pricing": 2894,
    "Creator": "Dev-Rawat"
  },
  {
    "Bot": "Crypto-Bot",
    "Plan": "free",
    "Pricing": 0,
    "Creator": "Nikhil-Mehta"
  },
  {
    "Bot": "Health-Bot",
    "Plan": "quarterly",
    "Pricing": 776,
    "Creator": "Alia-Joshi"
  },
  {
    "Bot": "Edu-Bot",
    "Plan": "monthly",
    "Pricing": 1212,
    "Creator": "Simran-Bansal"
  },
  {
    "Bot": "Travel-Bot",
    "Plan": "yearly",
    "Pricing": 3120,
    "Creator": "Riya-Verma"
  },
  {
    "Bot": "Music-Bot",
    "Plan": "free",
    "Pricing": 0,
    "Creator": "Rohit-Rana"
  },
  {
    "Bot": "Fitness-Bot",
    "Plan": "lifetime",
    "Pricing": 4999,
    "Creator": "Gourav-Jaiswal"
  },
  {
    "Bot": "Game-Bot",
    "Plan": "monthly",
    "Pricing": 1533,
    "Creator": "Aarav-Patel"
  },
  {
    "Bot": "Food-Bot",
    "Plan": "quarterly",
    "Pricing": 982,
    "Creator": "Neha-Kapoor"
  },
  {
    "Bot": "Finance-Bot",
    "Plan": "yearly",
    "Pricing": 2220,
    "Creator": "Sanya-Malik"
  },
  {
    "Bot": "News-Bot",
    "Plan": "monthly",
    "Pricing": 1430,
    "Creator": "Karan-Sharma"
  },
  {
    "Bot": "Weather-Bot",
    "Plan": "free",
    "Pricing": 0,
    "Creator": "Ishaan-Joshi"
  }
]

);