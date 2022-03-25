const schedule = require('node-schedule');

    // let scheduleObj = []; scheduleJob이 여러개면 배열 선언
    let scheduleObj= null;

const set = (s) => {
    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek;
    rule.hour = s.hour;
    rule.minute = s.minute;

    const job = schedule.scheduleJob(rule, function(){
        console.log('Scheduler has executed');
    });

    // scheduleObj.push(job); //셋팅을 변경하면 scheduleList 취소하고 다시 셋팅함
    scheduleObj = job;
};

// 기존 scheduleJob 취소
const cancel = () => {
    if(scheduleObj != null) {
        scheduleObj.cancel();
    }
};

const setScheduler = (s) => {
    cancel();
    set(s);
};

const scheduleDate = {
    dayOfWeek: [5,6], // 금요일, 토요일만 동작됨
    hour: 11,
    minute: 52
};

setScheduler(scheduleDate);