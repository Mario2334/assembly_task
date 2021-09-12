# Museum Vistor API

## Introduction

---
Museum Visitor API to get visitor data for a month based on https://data.lacity.org/Arts-Culture/Museum-Visitors/trxm-jn3c

Museum Visitors KPI for a month

`GET /api/visitors?date=1404198000231`

<p>Response</p>

`{
"attendance": {
“month”: “Jul”,
“year”: “2014”,
“highest”: {
“museum”: “visitor_center_avila_adobe”,
“visitors”: 32378,
}
“lowest”: {
“museum”: “hellman_quon”,
“visitors”: 120,
},
total: 60535
}
}`

Museum Visitors KPI for a month and ignore the museum

`GET /api/visitors?date=1404198000231&ignore=visitor_center_avila_adobe`

<p>Response</p>

`{
    "attendance": {
        “month”: “Jul”,
        “year”: “2014”,
        “highest”: {
          “museum”: “america_tropical_interpretive_center”,
          “visitors”: 13490,
        }
        “lowest”: {
          “museum”: “hellman_quon”,
          “visitors”: 120,
        },
        “ignored”: {
          “museum”: “visitor_center_avila_adobe”,
          “visitors”: 32378,
        }
       total: 28157
    }
}`

## Installation

---

To install Prerequisites are needed:
* Node 14+
* npm 6+

Installation Steps

`cd project`

`npm install`

To test

`npm run test`

To run Server

`npm run`
