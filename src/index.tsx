import {createOvermind} from 'overmind'
import {Provider as OvermindProvider} from 'overmind-react'
import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import {config} from './business'
import './index.css'
import reportWebVitals from './reportWebVitals'

const overmind = createOvermind(config)

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <StrictMode>
    <OvermindProvider value={overmind}>
      <App />
    </OvermindProvider>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
