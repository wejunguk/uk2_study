const moment = require("moment");

// today 2022-01-01 현재 날짜 출력
console.log("today", moment().format("YYYY-MM-DD"));
// today+1 2022-01-02 다음 날짜 출력
console.log("today+1", moment().add(1,"day").format("YYYY-MM-DD"));
// week 2022-01-08 일주일 뒤 날짜 출력
console.log("week", moment().add(1,"week").format("YYYY-MM-DD"));
// today+1 2022-02-01 한달 뒤 날짜 출력
console.log("month", moment().add(1,"month").format("YYYY-MM-DD"));