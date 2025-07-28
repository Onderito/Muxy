"use server";

import { auth } from "../src/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return {
      success: true,
      message: "Login successful",
    };
  } catch (error) {
    return {
      success: false,
      message: "Login failed",
    };
  }
};

export const signUp = async (name: string, email: string, password: string) => {
  try {
    await auth.api.signUpEmail({
      body: { name, email, password },
    });

    return {
      success: true,
      message: "Signup successful",
    };
  } catch (error: any) {
    if (error?.code === "USER_ALREADY_EXISTS") {
      return {
        success: false,
        message: "Email already in use",
      };
    }

    return {
      success: false,
      message: "Signup failed",
    };
  }
};
