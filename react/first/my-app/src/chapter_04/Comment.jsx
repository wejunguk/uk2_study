props = {
  author: {
    name: "소플",
    avatarUrl: "http://.....",
  },
  text: "댓글입니다.",
  date: Date.now(),
}

// 원본 
// function Comment(props) {
//   return (
//     <>
//       <div className="comment">
//         <div className="user-info">
//           <img className="avatar" src={props.author.avatarUrl} alt={props.author.name}/>
//           <div className="user-info-name">{props.author.name}</div>
//         </div>
//       </div>
//       <div className="comment-text">{props.text}</div>
//       <div className="comment-date">{formatDate(props.date)}</div>
//     </>
//   )
// }

// 1. Avator 추출하기
function Comment(props) {
  return (
    <>
      <div className="comment">
        <div className="user-info">
          <Avatar user={props.author} />
          <div className="user-info-name">{props.author.name}</div>
        </div>
      </div>
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{formatDate(props.date)}</div>
    </>
  )
}

// function Avatar(props) {
//   return (
//     <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
//   )
// }


// // 2. UserInfo 추출하기
// function Comment(props) {
//   return (
//   <>
//     <div className="comment">
//       <UserInfo user={props.author} />
//     </div>
//     <div className="comment-text">{props.text}</div>
//     <div className="comment-date">{formatDate(props.date)}</div>
//   </>
//   )
// }

// function UserInfo(props) {
//   return (
//     <div className="user-info">
//       <Avatar user={props.user} />
//       <div className="user-info-name">{props.user.name}</div>
//     </div>
//   )
// }