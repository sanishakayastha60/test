"use client";
type FormData = {
  email: string;
  password: string;
};
import { useState } from "react";
export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  function handleChange() {
    console.log("hanlde");
  }
  return (
    <div className="">
      <div className="w-fit p-4 bg-white">
        <h2>Welcome Back</h2>
        <form action="" className="">
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="test@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="abc@123"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-lg p-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="my-4 w-full border rounded-lg bg-[var(--text-light)] text-[var(--secondary-light)] p-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
