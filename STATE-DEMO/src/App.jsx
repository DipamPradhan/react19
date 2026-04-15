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
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer";
import { CounterWithInit } from "./CounterWithInit";
import { TaskManagerWithReducer } from "./TaskManagerWithReducer";
function App() {
  return (
    <>
      {/* <Counter/>
    <Counter/>
    <LoginCard/>
    <UserDashboard isPremium={true}/>
    <SimpleCounter /> 
      <PrevStateCounter /> 
      <BatchingCounter />
      <UserProfile /> */}
      {/* <TodoList /> */}
      {/* <ShoppingCart />
      <CounterWithReducer /> */}
      {/* <ShoppingCartWithReducer /> */}
      {/* <CounterWithInit /> */}
      <TaskManagerWithReducer />
    </>
  );
}

export default App;
