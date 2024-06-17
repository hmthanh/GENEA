"use server"
import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3"
import { v4 as uuid } from "uuid"

// region: "us-east-005",
export async function upload(files) {
  const s3 = new S3Client({
    endpoint: process.env.B2_ENDPOINT,
    region: process.env.B2_REGION,
    credentials: {
      accessKeyId: process.env.B2_KEYID,
      secretAccessKey: process.env.B2_APPLICATIONKEY,
    },
  })

  const params = {
    Bucket: "gesture",
    Key: "gesture_video.mp4", // Change this to an object/key in your bucket
  }

  // Make a request to get the specified object from the bucket
  // Upload an object to the bucket to further validate authentication
  try {
    const putObjectParams = {
      Bucket: "gesture", // Use the bucket created or an existing bucket
      Key: "genea/test-object.txt",
      Body: "This is a test object.",
    }

    await s3.send(new PutObjectCommand(putObjectParams))
    console.log("Object uploaded successfully. Authentication confirmed.")
  } catch (error) {
    console.error("Error uploading object:", error)
    console.error(
      "Authentication failed. Check your credentials and permissions."
    )
    return // Exit the function if authentication fails
  }
  // s3.getObject(params, (err, data) => {
  //   if (err) {
  //     console.error("Error getting object:", err)
  //   } else {
  //     console.log("Successfully retrieved object:", data)
  //   }
  // })

  console.log("server ", files)
}
