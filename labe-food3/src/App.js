import Routes from './routes/Routes'
import GlobalState from './Global/GlobalState'

function App() {
  return (
    <div>
      <GlobalState>
        <Routes />
      </GlobalState>
    </div>
  )
}

export default App
