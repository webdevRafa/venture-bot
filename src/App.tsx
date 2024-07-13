import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import LeadsList from "./components/LeadsList";

const App: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const addLead = async () => {
    try {
      const docRef = await addDoc(collection(db, "leads"), {
        address,
        firstName,
        lastName,
      });
      console.log("Document written with ID: ", docRef.id);
      // Clear the form
      setAddress("");
      setFirstName("");
      setLastName("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="App bg-blue p-5 mx-auto">
          <header className="App-header">
            <h1>Add Lead</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addLead();
              }}
            >
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                required
              />
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
              <button type="submit">Add Lead</button>
            </form>
            <LeadsList />
          </header>
        </div>
      </div>
    </>
  );
};

export default App;
