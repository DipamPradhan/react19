import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import { Card, CardWithoutJSX } from "./Card";
import { Fragment } from "./Fragment";
import { ContactForm } from "./ContactForm";
import { ProductUse } from "./ProductUse";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { UserList } from "./UserList";
import { NameList } from "./NameList";
import { Alert } from "./Alert";
import { CustomButton } from "./CustomButton";
import { Contact } from "./Contact";
import { Newsletter } from "./Newsletter";
import { Menu } from "./Menu";
import "./App.css";

function App() {
  return (
    <div>
      <Menu />
      <Contact />
      <Newsletter />
      <CustomButton name="Dipam" text="Like" />
      <CustomButton name="Ritik" text="Bookmark" />
      {/* <Button />
      <Alert>Your Changes have been saved!</Alert>
      <Alert type="error">Something went wrong!</Alert>
      <NameList />
      <UserList
        users={[
          { id: 1, name: "Dipam", age: 21, qualification: "Bachelors" },
          { id: 2, name: "Utsab", age: 21, qualification: "Plus Two" },
          { id: 3, name: "Zeeya", age: 19, qualification: "Minus Two" },
        ]}
      />
      <ProductList />
      <UserDetails
        name="Dipam Pradhan"
        isOnline={true}
        hideOffline={true}
        isPremium={true}
        isNew={true}
        role="admin"
      />
      <UserDetails
        name="Utsab Shrestha"
        isOnline={true}
        hideOffline={false}
        role="vip"
      /> */}
      {/* <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
      <Greeting name="Bruce" message="Batman" />
      <Greeting message="Spiderman" />
      <Greeting name="Peter" /s>
      <Greeting />
      <ProductUse
        title="Gaming Laptop"
        price={1299.99}
        inStock={true}
        categories={["Electronics", "Computer", "Gaming"]}
      />
      <Welcome name="Dipam" />
      <Welcome name="Utsab" />
      <Welcome name="Zeeya" />
      <Hello />
      <HelloWithoutJSX />
      <Card />
      <Welcome />
      <Button />
      <CardWithoutJSX />
      <Fragment />
      <ContactForm /> */}
    </div>
  );
}

export default App;
