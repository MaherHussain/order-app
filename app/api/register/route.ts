import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";

import { User } from "@/app/models/User";
import mongoose from "mongoose";

require("dotenv").config();

interface User {
  _doc: { email: string; password: string; name: string };
}

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();

  mongoose.connect(process.env.MONOGO_URL || "");

  const hashedPasword = await hash(password, 5);

  try {
    const exisitingUserEmail = await User.findOne({ email: email });

    if (exisitingUserEmail) {
      return NextResponse.json(
        { message: "Email is allready used by another user" },
        { status: 409 }
      );
    }

    const newUser: User = await User.create({
      email: email,
      password: hashedPasword,
      name: name,
    });

    const { password, ...rest } = newUser._doc;

    return NextResponse.json(
      { user: rest, message: "The user has been created successfully" },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
