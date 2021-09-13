import Loader from 'react-loader-spinner'
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
function App() {
  return (
    <div className="App">
      <Loader type="ThreeDots" color="orange" height={30} width={30} />
      <Loader type="Hearts" color="red" height={80} width={80} />

      <BounceLoader loading />

      <BeatLoader loading />
      <BarLoader size={48} loading />
    </div>
  )
}

export default App
