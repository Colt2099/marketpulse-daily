/* MarketPulse Daily — daily data feed.
   Regenerated after each US market close.
   Feed: 2026-06-24 close. Sources: index closes (market reports),
   commodities & movers (FMP), macro (FRED), sentiment (CNN Fear & Greed). */
window.SITE_DATA = {
  "dateLabel": "Market Close · Wednesday, June 24, 2026",
  "headline": "Tech slips into Micron's earnings as Dow and small caps hold up",
  "summary": "The S&P 500 and Nasdaq edged lower, weighed by energy, communications and technology, while the Dow and Russell 2000 closed higher. After the bell, Micron delivered a beat-and-raise that lifted chip sentiment.",

  "indices": [
    {"name":"S&P 500",     "slug":"sp500",      "value":"7,358.22",  "chg":"-0.10%", "up":false, "ready":true},
    {"name":"Nasdaq",      "slug":"nasdaq",     "value":"25,476.44", "chg":"-0.43%", "up":false, "ready":true},
    {"name":"Russell 2000","slug":"russell",    "value":"2,986.63",  "chg":"+0.37%", "up":true,  "ready":true},
    {"name":"Small Caps",  "slug":"smallcaps",  "value":"—",         "chg":"setting up source", "up":true,  "ready":false},
    {"name":"Micro Caps",  "slug":"microcaps",  "value":"—",         "chg":"setting up source", "up":true,  "ready":false},
    {"name":"Commodities", "slug":"commodities","value":"Gold $4,027","chg":"+0.45%", "up":true,  "ready":true}
  ],

  "macro": [
    {"k":"CPI (YoY)",      "v":"4.2%",  "tone":"neg"},
    {"k":"Fed Funds Rate", "v":"3.63%", "tone":""},
    {"k":"10Y Treasury",   "v":"4.50%", "tone":""},
    {"k":"Unemployment",   "v":"4.3%",  "tone":""}
  ],

  "fearGreed": {"value":28, "label":"Fear",
    "note":"The CNN Fear & Greed Index sat at 28 (Fear) into the close — investors were cautious ahead of Micron's earnings. As a contrarian gauge, fear readings can leave room for upside surprises."},

  "analysis": [
    "June 24 was a tale of two markets. The tech-heavy Nasdaq fell 0.43% and the S&P 500 slipped 0.10%, dragged down by energy, communications and technology, while the Dow Jones (+0.35%) and the Russell 2000 (+0.37%) finished higher. That split points to rotation — money leaving crowded megacap tech and moving toward value and smaller names.",
    "All eyes were on Micron, which reported after the bell and delivered a beat-and-raise that ignited after-hours enthusiasm for chips. The setup mattered: with the CNN Fear & Greed Index down at 28 (Fear) and the 10-year Treasury near 4.5%, sentiment had turned cautious into the print — exactly the kind of backdrop where an upside surprise can move the tape."
  ],

  "news": [
    {"h":"Micron delivers a beat-and-raise after the bell, lifting chip sentiment", "src":"TheStreet"},
    {"h":"Energy, communications and tech drag the S&P and Nasdaq lower", "src":"TheStreet"},
    {"h":"Dow and small caps buck the trend with modest gains", "src":"CNBC"}
  ],

  "categories": [
    {
      "name":"Biggest Movers — US Market", "tag":"All listed stocks",
      "ready":true,
      "gain":[
        ["MEI","Methode Electronics","+29.1%"],
        ["BB","BlackBerry","+22.1%"],
        ["AYI","Acuity Brands","+21.1%"],
        ["KYMR","Kymera Therapeutics","+20.5%"],
        ["MLKN","MillerKnoll","+20.5%"],
        ["TECH","Bio-Techne","+19.4%"]
      ],
      "lose":[
        ["SPRY","ARS Pharmaceuticals","-26.9%"],
        ["ICCM","IceCure Medical","-24.2%"],
        ["TCOM","Trip.com Group","-16.0%"],
        ["ALOY","REalloys","-14.7%"],
        ["CTRN","Citi Trends","-13.6%"],
        ["RGC","Regencell Bioscience","-13.5%"]
      ]
    },
    {
      "name":"Commodities — Metals", "tag":"CME · COMEX",
      "ready":true,
      "gain":[
        ["GC","Gold","+0.45%"]
      ],
      "lose":[
        ["SI","Silver","-0.27%"]
      ]
    },
    {"name":"S&P 500","tag":"Large Cap","ready":false,"gain":[],"lose":[]},
    {"name":"Nas