/*
import Macarong from "./Macarong";
import cakes from "./cakes.json";
//배열이 저장되어있는 변수


function App() {
  return (
    <>
      <div className="App">"안녕하세요!!"</div>
      {cakes.map(cake=>(
        <Macarong
        propsid={cake.id}
        propsname={cake.name}
        propsimage={cake.images}
        />
      ))}
    </>
  );
}

export default App;
*/

import React, { Component } from 'react'
import Food from "./Food";

class App extends Component {

  constructor(props){
    super(props);
    console.log('constructor함수는 클래스형컴포넌트가 생성할때 호출됨')
  }

  componentDidMount(){
    console.log('componentDidMount 함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
    //영화api 불러오기
  }

  componentDidUpdate(){
    console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
  }

  //컴포넌트의 현재 상태값 
  state = {
    count:0,
    sum:0,
    avg:0,
  }

  add = () => {
    console.log('더하기')
    //this.state.count = 1;
    //this.setState({count:1});
    this.setState({count: this.state.count + 1});
  }
  minus = () => {
    console.log('빼기')
    //this.state.count = -1;
    //this.setState({count:-1});
    
    //this.setState({count: this.state.count + 1});

    this.setState(current=>(//current는 this.state
      {
        count: current.count -1,
        sum: current.cum -2,
        avg: current.avg -3,
      }
    ))
  }

  //render 화면에 그려지는것
  render() {
    const {count,sum,avg} = this.state; //그조분해 할당
    return (
      <>
        <div>App</div>
        <div>
          <h1>현재숫자는{count}입니다.</h1>
          <button onClick = {this.add}>더하기</button>
          <button onClick = {this.minus}>빼기</button>
        </div>
        <Food />
      </>
    )
  }
}

export default App;

//props
//상위 컴포넌트에서 하위 검포넌트로 전달되는 읽기 전용 데이터 
//state
//컴포넌트의 상태를 저장하고 변경할수있는 데이터 클래스형 컴포넌트에서 사용 