import "./App.css";
import ParentComp from "./components/ParentComp";

// import FragmentDemo from "./components/FragmentDemo";
// import Table from "./components/Table";
// import LifeCycle1ComponentMounting from "./components/LifeCycle1ComponentMounting";
// import Form from "./components/Form";
// import Inline from "./components/Inline";
// import Stylesheet from "./components/Stylesheet";
// import NameList from "./components/NameList";
// import UserGreeting from "./components/UserGreeting";
// import EventBind from "./components/EventBind";
// import FunctionClick from "./components/FunctionClick";
// import Welcome1 from "./components/Welcome1";
// import Greet1 from "./components/Greet1";
// import Counter from "./components/Counter";
// import Message from "./components/Message";
// import Greet from "./components/Welcome";
// import Welcome from "./components/Welcome";
// import ClassClick from "./components/ClassClick";
// import ParentComponent from "./components/ParentComponent";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Greet name="Peter" heroName="Superman">
        This is children props
      </Greet>
      <Greet name="Mike" heroName="Batman">
        <button>Add more</button>
      </Greet>
      <Greet name="Henary" heroName="Wonder Woman" />
      <Welcome name="Peter" heroName="Batman"></Welcome>
      <Welcome name="Matt" heroName="Wonder Woman"></Welcome> 
      <Message /> 
      <Counter /> 
      <Greet1 name="Peter" heroName="Bond" /> 
      <Welcome1 name="David" heroName="Jordon" /> 
      <FunctionClick /> 
      <ClassClick /> 
      <EventBind /> 
      <ParentComponent /> 
      <UserGreeting />  
      <NameList />  
      <Stylesheet primary={true} /> 
      <Inline /> 
      <Form /> 
      <LifeCycle1ComponentMounting /> 
      <FragmentDemo /> 
      <Table /> */}
      <ParentComp />
    </div>
  );
}

export default App;
