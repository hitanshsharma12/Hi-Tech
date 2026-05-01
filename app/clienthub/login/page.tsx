"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ClientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      // 🔐 Firebase login
      await signInWithEmailAndPassword(auth, email, password);

      // 🔎 Firestore se user data fetch
      const docRef = doc(db, "clients", email);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        alert("No user data found ❌");
        return;
      }

      const data = docSnap.data();

      // 🔥 ROLE BASED REDIRECT
      if (data.role === "admin") {
        router.push("/clienthub/admin");
      } else {
        router.push("/clienthub/dashboard");
      }

    } catch (err: any) {
      alert("Login failed ❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md">

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Client Hub Login 🔐
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-800"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-gray-800"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-white text-black py-3 rounded-lg font-medium">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}