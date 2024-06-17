// const upload = multer({ dest: "uploads/" })

// import {
//   S3Client,
//   CreateBucketCommand,
//   PutObjectCommand,
// } from "@aws-sdk/client-s3"
// import { v4 as uuid } from "uuid"

import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3"
import { v4 as uuid } from "uuid"

export async function POST(req, res) {
  // upload.array("files")(req, res, async (err) => {
  //   if (err) {
  //     return res.status(500).json({ error: err.message })
  //   }
  //   // Create an S3 client
  //   //
  //   // You must copy the endpoint from your B2 bucket details
  //   // and set the region to match.
  //   const s3 = new S3Client({
  //     endpoint: "https://s3.us-east-005.backblazeb2.com",
  //     region: "us-east-005",
  //     credentials: {
  //       accessKeyId: "005ab245bb45bb20000000002",
  //       secretAccessKey: "K005z2e5S9dwfVezJ3FEB9hrQt/EOJk",
  //     },
  //   })
  //   // const client = new S3Client({
  //   //   endpoint: "https://s3.<region>.backblazeb2.com", // Replace <region> with your actual region
  //   //   credentials: {
  //   //     accessKeyId: "<your_access_key>",
  //   //     secretAccessKey: "<your_secret_key>",
  //   //   },
  //   // })
  //   // // Create a bucket and upload something into it
  //   // var bucketName = "node-sdk-sample-" + uuid()
  //   // var keyName = "hello_world.txt"
  //   // try {
  //   //   // await s3.send(new CreateBucketCommand({ Bucket: bucketName }))
  //   //   await s3.send(
  //   //     new PutObjectCommand({
  //   //       Bucket: bucketName,
  //   //       Key: keyName,
  //   //       Body: "Hello World!",
  //   //     })
  //   //   )
  //   //   console.log("Successfully uploaded data to " + bucketName + "/" + keyName)
  //   // } catch (err) {
  //   //   console.log("Error: ", err)
  //   // }
  //   try {
  //     const files = req.files
  //     // // Upload each file to Backblaze B2
  //     // for (const file of files) {
  //     //   // Get file stream
  //     //   const fileStream = fs.createReadStream(file.path)
  //     //   // Upload file to Backblaze B2
  //     //   await b2.uploadFile({
  //     //     bucketId: "ea8b022465bb6b1485cb0b12",
  //     //     fileName: file.originalname,
  //     //     data: fileStream,
  //     //   })
  //     // }
  //     console.log("go here : files", files)
  //     // If files are successfully uploaded, respond with a success message
  //     return res.status(200).json({ message: "Files uploaded successfully" })
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message })
  //   }
  // })
  // return Response.json({ data: {} })

  console.log("req", req)

  const s3 = new S3Client({
    endpoint: process.env.B2_ENDPOINT,
    region: process.env.B2_REGION,
    credentials: {
      accessKeyId: process.env.B2_KEYID,
      secretAccessKey: process.env.B2_APPLICATIONKEY,
    },
  })

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
}
