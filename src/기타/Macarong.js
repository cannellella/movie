//Macaron.js
//클래스형 컴포넌트 rce

// import React, { Component } from 'react'


//     class Macarong extends Component {
//     render() {
//         return (
//         <div>Macarong</div>
//         )
//     }
//     }

// export default Macarong

//함수형 컴포넌트 rfce

import React from 'react'

/*
 function Macarong(props) {
  console.log(props);
  return (
    <div>
    <h1>No.{props.propsid}</h1>
    <h2>Name:{props.propsname}</h2>
    <img scr={props.propsimage} alt={props.propsname} width={200} height={200}/>
    </div>
  )
}*/

/*
 function Macarong(props) {
  console.log(props);
  const{propsname,propsid,propsimage}= props //구조 분해 할당
  return (
    <div>
    <h1>No.{propsid}</h1>
    <h2>Name:{propsname}</h2>
    <img src={propsimage} alt={propsname} width={200} height={200}/>
    </div>
  )
}
*/


 function Macarong({propsname,propsid,propsimage}) {//구조 분해 할당
  return (
    <div>
    <h1>No.{propsid}</h1>
    <h2>Name:{propsname}</h2>
    <img src={propsimage} alt={propsname} width={200} height={200}/>
    </div>
  )
}

export default Macarong