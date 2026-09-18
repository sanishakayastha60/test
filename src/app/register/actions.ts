"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";

export default async function registerUser(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return {
      error: "Invalid data",
    };
  }
  const normalizedName = name.trim();
  const normalizedEmail = name.trim().toLowerCase();

  if (
    !normalizedName ||
    !normalizedEmail.includes("@") ||
    password.length < 8
  ) {
    return {
      error: "Invalid Registration Data",
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: normalizedEmail,
    },
  });
  if (existingUser) {
    return {
      error: "Unable to create user",
    };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      name: normalizedName,
      email: normalizedEmail,
      password: passwordHash,
    },
  });
  return {
    success: true,
  };
}
