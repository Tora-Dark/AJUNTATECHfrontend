"use client";

import { React, useContext } from "react";
import { useRouter } from "next/navigation";
import UserContext from "@/contexts/UserContext";
import Link from "next/link";
import { Button } from "flowbite-react";

export default function CustomNavbar() {
  const { user, logoutUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  return user ? (
    <nav className="bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-slate-900 text-xl">Ajuntatech</div>
        <div className="flex text-slate-900 gap-2">
          <button className="hover:text-blue-700" onClick={() => router.push("/dashboard")}>
            Dashboard
          </button>
          <button className="hover:text-blue-700" onClick={() => router.push("/intranet")} >
            Intranet
          </button>
          <span className="hidden md:flex">Welcome, {user.user.name}</span>
          <button
            onClick={handleLogout}
            className="ml-4 text-blue-500 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="bg-white p-4">
        <div className="flex items-center justify-between">
        <div className="text-slate-900 text-xl">Ajuntatech</div>
        <button
          onClick={() => router.push("/login")}
          className="text-white  hover:underline"
        >
          Login
        </button>
        </div>
        </nav>
    
  );
}
