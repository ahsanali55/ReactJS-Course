import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import style from "./App.module.css";
import WelcomeMessage from "./components/WelcomeMessage";   
import TodoItemContextProvider from "./store/todo-items-store";

function App() {
   
  
  return (
    <>
      <TodoItemContextProvider>
      <center className={`${style["todo-container"]}`}>
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
      </TodoItemContextProvider>

    </>
  );
}
  

export default App;
