
const App = () => {

  const handleclick = () => {
    alert("Button Clicked")
  }

  const handleparamclick = (e) => {
    alert(e)
  }



  return (
    <div>
      <h1>Welcome to React </h1>
      <button onClick={handleclick}>Click me</button>
      <button onClick={() => {handleparamclick("hello")}}>Click me</button>
    </div>
  )
}

export default App