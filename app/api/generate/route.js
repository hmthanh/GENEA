// "use server"

import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3"
import { v4 as uuid } from "uuid"
import { Upload } from "@aws-sdk/lib-storage"
import clientPromise from "@/server/mongodb"

export async function GET(req, res) {
  try {
    const client = await clientPromise
    const db = client.db("HemVip")
    if (!db) {
      return Response.json(
        {
          success: false,
          msg: "Cannot connect to MongoDB storage.",
          error: null,
        },
        { status: 500 }
      )
    }

    const submissions = await db.collection("submissions").find({}).toArray()
    console.log(submissions)

    // const insertResult = await db
    //   .collection("studies")
    //   .insertOne({ userId, teamname, email, submissions })

    // if (insertResult.insertedId) {
    if (submissions) {
      return Response.json(
        {
          success: true,
          msg: "Your submission uploaded successfully.",
          data: submissions,
          error: null,
        },
        { status: 200 }
      )
    } else {
      return Response.json(
        {
          success: false,
          msg: "Upload success but failed insert submissions, please contact for support.",
          error: null,
        },
        { status: 500 }
      )
    }
  } catch (error) {
    return Response.json(
      {
        success: false,
        msg: "Your submissions is failed, please contact for support.",
        error: error,
      },
      { status: 500 }
    )
  }
}
