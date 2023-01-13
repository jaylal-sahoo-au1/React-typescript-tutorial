import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { CounterClass } from "./components/class/CounterClass";
import { List } from "./components/generics/List";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { Input } from "./components/html/Input";
import { Button } from "./components/props/Button";
import { Container } from "./components/props/Container";
import { Greet } from "./components/props/Greet";
import { Heading } from "./components/props/Heading";
import { InputField } from "./components/props/Input";
import { Oscar } from "./components/props/Oscar";
import { Person } from "./components/props/Person";
import { PersonList } from "./components/props/PersonList";
import { Status } from "./components/props/Status";
import MutableRef from "./components/Ref/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { LoggedIn } from "./components/state/loggedIn";
import { Toast } from "./components/templateLiterals/Toast";

function App() {
  const personName ={
        first:"jaylal",
        last:"sahoo"
  }

  const personList =[
    {
      first:"jaylal",
      last:"sahoo"
    },
    {
      first:"rahul",
      last:"Sharma"
    }
  ]
  return (
    <div className="App">
      <Greet name="jaylal" messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={personList}/>
      <Status status="loading"/>
      <Heading>
        Placeholder here
      </Heading>
      <Oscar>
        <Heading>
          Placeholder text
        </Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log("button clicked",event,'====',id)
      }}/>
      <InputField value="" handleChange={(event)=>console.log(event?.target.value)}/>
      <Container styles={{border:"1px solid red",padding:"1rem"}}/>
      <LoggedIn/>
      <MutableRef/>
      <CounterClass message="timer"/>
      <Private isLoggedIn={true} Component={Profile}/>
      {/* <List items={['jay','sahoo','rupa','manisha']} onClick={()=>console.log("calling")}/>
      <List items={[1,2,3,4]} onClick={()=>console.log("calling")}/>  */}
      <List items={[{
        id:1,
        first:"jay",
        last:"sahoo"
      },{
        id:2,
        first:"rupa",
        last:"sahoo"
      },{
        id:3,
        first:"manisha",
        last:"sahoo"
      }]} onClick={()=>console.log("calling")}/>
      <RandomNumber value={10} isPositive />
      <Toast position="left-center"/>
      <CustomButton variant="primary">
        Hello typescript
      </CustomButton>
      <Input type="text"/>
      <CustomComponent name="jaylal" isLoggedIn messageCount={10}/>
    </div>
  );
}

export default App;
