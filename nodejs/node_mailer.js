const nodemailer = require('nodemailer');

// 메일 서버 정보 가지고오기 - smtp정보
const email = {
    "host" : "smtp.mailtrap.io",
    "port" : "2525",
    "secure": false, // true for 465, false for other ports
    "auth" : {
        "user" : "79b81c42bcc014",
        "pass" : "134c5a64aa457c"
    }
};

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info) {
        if (error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

const content = {
    from: "uk20915u@gmail.com",
    to: "3e1ad57eb6-1aca79@inbox.mailtrap.io",
    subject: "메일 테스트1",
    text: "테스트 메일 입니다."
};

send(content);

// mailtrap 말고 gamil로 구현해보기