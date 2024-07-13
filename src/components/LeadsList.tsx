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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leads.map((lead) => (
          <div key={lead.id} className=" border-white border-1 bg-dark p-5">
            <p className="text-white">
              {lead.firstName} {lead.lastName}
            </p>
            <p className="text-orange">{lead.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsList;
