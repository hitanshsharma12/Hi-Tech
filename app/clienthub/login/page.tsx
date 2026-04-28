"use client";

import { useState } from "react";

export default function ClientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    // yahan baad me Firebase/Auth logic aayega
    console.log(email, password);

    alert("Login system connect karna hai 🔥");
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