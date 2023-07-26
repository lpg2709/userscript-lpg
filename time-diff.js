// ==UserScript==
// @name        Time Diff
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      lpg2709
// @description Calculate diff in time
// ==/UserScript==
window.time_diff = function (start, end) {
   var dateStart = [0, 0, 0]
   var dateEnd = [0, 0, 0]
   if(start.match(" ") != null && end.match(" ") != null) {
      [dateS, timeS] = start.split(" ");
      [dateE, timeE] = end.split(" ");

      start = timeS.split(":");
      end = timeE.split(":");
      dateStart = dateS.split("-");
      dateEnd = dateE.split("-");
   } else {
      start = start.split(":");
      end = end.split(":");
   }

   var startDate = new Date(dateStart[0], dateStart[1], dateStart[2], start[0], start[1], start[2]);
   var endDate = new Date(dateEnd[0], dateEnd[1], dateEnd[2], end[0], end[1], end[2]);

   const diff = Math.max(startDate,endDate) - Math.min(startDate,endDate)
   const SEC = 1000, MIN = 60 * SEC, HRS = 60 * MIN

   const hrs = Math.floor(diff/HRS)
   const min = Math.floor((diff%HRS)/MIN).toLocaleString('en-US', {minimumIntegerDigits: 2})
   const sec = Math.floor((diff%MIN)/SEC).toLocaleString('en-US', {minimumIntegerDigits: 2})
   const ms = Math.floor(diff % SEC).toLocaleString('en-US', {minimumIntegerDigits: 4, useGrouping: false})

   console.log(`${hrs}:${min}:${sec}.${ms}`)
}
