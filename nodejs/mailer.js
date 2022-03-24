// 메일 주고받기

// 설치한 nodemailer가지고 오기
const nodemailer = requier('nodemailer');
const email = {
    "host" : "",
    "port" : "",
    "secure": false,
    "auth" : {
        "user" : "",
        "pass" : ""
    }
};

const send = async (option) => {
    nodemailer.createTransport() // 관리자 계정정보
};