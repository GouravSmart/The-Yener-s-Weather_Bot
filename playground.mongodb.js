
use('Pricing');

// Insert a few documents into the sales collection.
db.getCollection('Prices').insertMany([
  {
    "Bot": "Coding-Bot",
    "Plan": "monthly",
    "Pricing": 150,
    "Creator": "Gourav-Jaiswal"
  },
  {
    "Bot": "Design-Bot",
    "Plan": "yearly",
    "Pricing": 1200,
    "Creator": "Aarav-Kapoor"
  },
  {
    "Bot": "AI-Helper",
    "Plan": "lifetime",
    "Pricing": 4999,
    "Creator": "Meera-Sharma"
  },
  {
    "Bot": "Support-Bot",
    "Plan": "free",
    "Pricing": 0,
    "Creator": "Karan-Mehta"
  },
  {
    "Bot": "Crypto-Bot",
    "Plan": "monthly",
    "Pricing": 299,
    "Creator": "Dev-Rawat"
  },
  {
    "Bot": "Health-Bot",
    "Plan": "quarterly",
    "Pricing": 399,
    "Creator": "Sanya-Roy"
  }
]
);

console.log("Done Inserting Data");

