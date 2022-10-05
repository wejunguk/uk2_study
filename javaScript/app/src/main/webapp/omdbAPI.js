// OMDB API
// https://www.omdbapi.com/

// Query String
// 특정 주소로 접근할 때 기본적인 페이지 옵션을 = & 명시하는 형태
// 주소?속성=값&속성=값&속성=값

// 요청 처리 자바스크립트 패키지 : axios

import axios from 'axios'

function fetchMovies() {
  // 주소 접근
  axios
    // get 함수로 페이지 주소로 요청이 들어가고 응답값을 얻음
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=parasite')
    // than에서 처리, 주소의 결과를 response로 받음
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}

fetchMovies()