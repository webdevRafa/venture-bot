import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

interface Lead {
  id: string;
  address: string;
  firstName: string;
  lastName: string;
}

const LeadsList: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "leads"), (snapshot) => {
      const leadsList: Lead[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Lead[];
      setLeads(leadsList);
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Leads</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            {lead.firstName} {lead.lastName} - {lead.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadsList;
