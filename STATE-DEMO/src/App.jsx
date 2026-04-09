import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { PrevStateCounter } from './PrevStateCounter'
import { SimpleCounter } from './SimpleCounter'
import { UserDashboard } from './UserDashboard'
function App() {
  return (
    <>
    <h1>Dipam Pradhan</h1>
    {/* <Counter/>
    <Counter/>
    <LoginCard/>
    <UserDashboard isPremium={true}/>
    <SimpleCounter /> */}
    <PrevStateCounter />
    </>
  )
}

export default App
