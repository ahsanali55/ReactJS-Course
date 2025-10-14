function Hello(){
  let name = "Ahsan Ali";
  let fullName = () => {
    return name + " Jawad";
  }
  return <h3>
    Hello this is your future of the web development!
    <br /> My name is {fullName()}
  </h3> 
}
export default Hello;