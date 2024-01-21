import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

// this is to connect with database
connect();

//

export async function POST(request: NextRequest) {
  try {
    const bodyData = await request.json();
    const { email, username } = bodyData;

    console.log("this is ", bodyData);

    // let check if user exist
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exist." },
        {
          status: 400,
        }
      );
    }
  } catch (error) {}
}
