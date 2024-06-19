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
    const videoitems = submissions.map((submission) => {
      return submission.submissions
    })
    const inputids = submissions[0].submissions.map((item) => {
      return item.inputid
    })

    inputids.map((inputid) => {
      const studies = []

      videoitems.map((submission) => {
        submission
      })
      console.log(inputid)
    })
    // console.log(submissions[0].submissions)

    // const insertResult = await db
    //   .collection("studies")
    //   .insertOne({ userId, teamname, email, submissions })

    // if (insertResult.insertedId) {
    if (submissions) {
      return Response.json(
        {
          success: true,
          msg: "Your submission uploaded successfully.",
          inputids: inputids,
          videoitems: videoitems,
          error: null,
        },
        { status: 200 }
      )
    } else {
      return Response.json(
        {
          success: false,
          msg: "Upload success but failed insert submissions, please contact for support.",
          inputids: "",
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
        inputids: "",
        error: error,
      },
      { status: 500 }
    )
  }
}
