import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { UserDashboard } from './UserDashboard'
function App() {
  return (
    <>
    <h1>Dipam Pradhan</h1>
    <Counter/>
    <Counter/>
    <LoginCard/>
    <UserDashboard isPremium={true}/>
    </>
  )
}

export default App
