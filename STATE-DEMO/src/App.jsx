import "./App.css";
import { BatchingCounter } from "./BatchingCounter";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { PrevStateCounter } from "./PrevStateCounter";
import { SimpleCounter } from "./SimpleCounter";
import { TodoList } from "./TodoList";
import { UserDashboard } from "./UserDashboard";
import { UserProfile } from "./UserProfile";
import { ShoppingCart } from "./ShoppingCart";
import { CounterWithReducer } from "./CounterwithReducer";
function App() {
  return (
    <>
      <h1>Dipam Pradhan</h1>
      {/* <Counter/>
    <Counter/>
    <LoginCard/>
    <UserDashboard isPremium={true}/>
    <SimpleCounter /> 
      <PrevStateCounter /> 
      <BatchingCounter />
      <UserProfile /> */}
      {/* <TodoList /> */}
      <ShoppingCart />
      <CounterWithReducer />
    </>
  );
}

export default App;
