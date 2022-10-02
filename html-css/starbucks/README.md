# STARBUCKS
스타벅스 랜딩페이지 작업

# 파비콘(Favicon)
- 웹페이지를 나타내는 아이콘
- 루트경로에 favicon.ico 파일을 위치하면 자동 로딩 사용됨
- favicon.png 파일을 사용하려면 link로 작성
  - <link rel="icon" href="./favicon.png" />
- .ico 파일 제작
  - .ico : 64x64 or 32x32
  - .png : 500px x 500px
  - https://iconifier.net/

# 오픈 그래프(The Open Graph protocal)
- 웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보를 지정
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
  - og:type: 페이지의 유형(E.g, website, video.movie)
  - og:site_name: 속한 사이트의 이름
  - og:title: 페이지의 이름(제목)
  - og:description: 페이지의 간단한 설명
  - og:image: 페이지의 대표 이미지 주소(URL)
  - og:url: 페이지 주소(URL)

# 트위터 카드(Twitter Cards)
- 웹페이지가 트위터로 공유될 때 우선적으로 활용되는 정보 지정
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />

  - twitter:card: 페이지(카드)의 유형(E.g. summary, player)
  - twitter:site: 속한 사이트의 이름
  - twitter:title: 페이지의 이름(제목)
  - twitter:description: 페이지의 간단한 설명
  - twitter:image: 페이지의 대표 이미지 주소(URL)
  - twitter:url: 페이지 주소(URL)
