const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const mockData = [
  {
    EmployeeName: "Patrick Huthinson",
    StarTimeUtc: "2023-01-01T08:00:00Z",
    EndTimeUtc: "2023-01-01T16:00:00Z"
  },
  {
    EmployeeName: "Stewart Malachi",
    StarTimeUtc: "2023-01-01T09:00:00Z",
    EndTimeUtc: "2023-01-01T17:00:00Z"
  },
  {
    EmployeeName: "John Black",
    StarTimeUtc: "2023-01-01T07:30:00Z",
    EndTimeUtc: "2023-01-01T15:30:00Z"
  },
  {
    EmployeeName: "Abhay Singh",
    StarTimeUtc: "2023-01-01T08:15:00Z",
    EndTimeUtc: "2023-01-01T16:15:00Z"
  }
  // Add more mock entries as needed
];

app.get('/api/gettimeentries', (req, res) => {
  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Mock proxy server running on http://localhost:${PORT}`);
});
