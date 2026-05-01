"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;

      if (!user) return;

      const docRef = doc(db, "clients", user.email!);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      }
    };

    fetchData();
  }, []);

  if (!data) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Client Dashboard 🚀</h1>

      <div className="grid gap-4">

        <div className="bg-gray-900 p-4 rounded-lg">
          📊 Visitors: {data.visitors}
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          🌐 Website: {data.website}
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          📌 Status: {data.status}
        </div>

      </div>
    </div>
  );
}