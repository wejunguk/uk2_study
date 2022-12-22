// react에선 babel이 import를 require로 처리해주기 때문에 import 사용가능
import React, { Component } from "react";

class NumberBaseball extends Component {}

export const hello = "hello"; // import { hello } ;
export const bye = "hello"; // import { hello, bye };
export default NumberBaseball; // import NumberBaseball;

// node 에선 이렇게 사용함
// const React = require('react);
// module.exports = NumberBaseball;
// exports.hello = 'hello';
