function Random() {
  let Number = Math.random() * 10;
  return <h1 style={{'background': '#776691'}}>
    Random Number is: {Math.round(Number)}</h1>
}

export default Random;