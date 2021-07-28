const record = [
  { year: "2018", result: "N/A" },
  { year: "2017", result: "N/A" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "N/A" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "N/A" },
  { year: "2012", result: "N/A" },
  { year: "2011", result: "N/A" },
  { year: "2010", result: "N/A" },
  { year: "2009", result: "N/A" },
  { year: "2008", result: "N/A" },
  { year: "2007", result: "N/A" },
  { year: "2006", result: "N/A" },
  { year: "2005", result: "N/A" },
  { year: "2004", result: "N/A" },
  { year: "2003", result: "N/A" },
  { year: "2002", result: "N/A" },
  //{ year: "2001", result: "W" }
];

function superbowlWin(array) {
  function isWin(item) {
    if (item.result === "W") {
      return true;
    }
  }

  const winningItem = array.find(isWin);

  if (typeof winningItem === "object") {
    return winningItem.year;
  } else {
    return winningItem;
  }
}

const winningYear = superbowlWin(record);
console.log(winningYear);
