import CountUp from 'react-countup'

function App() {
  return (
    <>
      <div className="App">
        <CountUp end={4000} duration={10} /> <br />
        <CountUp end={4000} duration={5} />
      </div>
    </>
  )
}

export default App
