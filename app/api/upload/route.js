// "use server"

import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3"
import { v4 as uuid } from "uuid"
import { Upload } from "@aws-sdk/lib-storage"

async function buffer(readable) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

export async function POST(req, res) {
  const formData = await req.formData()
  // console.log(req.headers)
  // const formData = await req.formData()

  // const buf = await buffer(req)
  // const rawBody = buf.toString("utf8")
  // console.log(rawBody)
  // const data = await req.formData()
  // console.log("data: ", data)

  // // Access the uploaded video files
  // const videoFiles = Array.isArray(files.videos) ? files.videos : [files.videos]

  // // Process each video file
  // for (let i = 0; i < videoFiles.length; i++) {
  //   const videoFile = videoFiles[i]

  //   // Generate a unique key for the video file
  //   const uniqueKey = `videos/${Date.now()}_${videoFile.originalFilename}`

  //   // Create the parameters for the PutObjectCommand
  //   const params = {
  //     Bucket: process.env.B2_BUCKET_NAME,
  //     Key: uniqueKey,
  //     Body: fs.createReadStream(videoFile.filepath),
  //     ContentType: videoFile.mimetype,
  //   }

  //   // Clean up the temporary file
  //   fs.unlinkSync(videoFile.filepath)
  // }
  const userId = formData.get("userId")
  const s3 = new S3Client({
    endpoint: process.env.B2_ENDPOINT,
    region: process.env.B2_REGION,
    credentials: {
      accessKeyId: process.env.B2_KEYID,
      secretAccessKey: process.env.B2_APPLICATIONKEY,
    },
  })

  for (let [key, value] of formData.entries()) {
    if (key === "video") {
      const arrayBuffer = await value.arrayBuffer()
      const uniqueKey = `genea/${userId}/${Date.now()}_${value.name}`
      console.log(uniqueKey)

      // Create the parameters for the PutObjectCommand
      const params = {
        Bucket: "gesture",
        Key: uniqueKey,
        Body: new Uint8Array(arrayBuffer),
        ContentType: value.type,
      }

      const parallelUploads3 = new Upload({
        client: s3,
        params: params,
        leavePartsOnError: false, // Whether to abort the multipart upload on error
      })

      parallelUploads3.on("httpUploadProgress", (progress) => {
        console.log(progress)
      })

      const result = await parallelUploads3.done()
      console.log("Upload complete:", result)

      // Upload the video file to B2 storage
      // await s3.send(new PutObjectCommand(putObjectParams))
    }
  }
  console.log("Finish")

  try {
    return Response.json(
      {
        success: true,
        msg: "Object uploaded successfully.",
        error: null,
      },
      { status: 200 }
    )
  } catch (error) {
    return Response.json(
      {
        success: false,
        msg: "Authentication failed. Check your credentials and permissions.",
        error: error,
      },
      { status: 500 }
    )
  }

  // videos.map((video) => {
  //   console.log(video)
  // })

  // const putObjectParams = {
  //   Bucket: "gesture", // Use the bucket created or an existing bucket
  //   Key: `genea/${fileName}`,
  //   Body: fileContent,
  //   ContentType: contentType,
  // }

  // form.parse(req, async (err, fields, files) => {
  //   if (err) {
  //     console.error("Error parsing form data:", err)
  //     return res
  //       .status(500)
  //       .json({ success: false, message: "Error parsing form data" })
  //   }

  //   try {
  //     const uploadPromises = Object.values(files)
  //       .flat()
  //       .map(async (file) => {
  //         const fileContent = fs.readFileSync(file.filepath)
  //         const contentType = file.mimetype
  //         const fileName = `${uuid()}-${file.originalFilename}`

  //         return s3.send(new PutObjectCommand(putObjectParams))
  //       })

  //     await Promise.all(uploadPromises)

  //     res
  //       .status(200)
  //       .json({ success: true, message: "Files uploaded successfully" })
  //   } catch (uploadError) {
  //     console.error("Error uploading files:", uploadError)
  //     res.status(500).json({ success: false, message: "Error uploading files" })
  //   }
  // })

  // req.on("error", (error) => {
  //   console.error("Error processing request:", error)
  //   res
  //     .status(500)
  //     .json({ success: false, message: "Error processing request" })
  // })

  // // const multerMiddleware = upload.array("files")

  // // const files = request.files
  // // const userId = request.body.get("userId")

  // // // Process the parsed files and userId as needed
  // // console.log("Parsed files:", files)
  // // console.log("User ID:", userId)

  // // Make a request to get the specified object from the bucket
  // // Upload an object to the bucket to further validate authentication
  // try {
  //   const putObjectParams = {
  //     Bucket: "gesture", // Use the bucket created or an existing bucket
  //     Key: "genea/test-object.txt",
  //     Body: "This is a test object.",
  //   }

  //   await s3.send(new PutObjectCommand(putObjectParams))
  //   console.log("Object uploaded successfully. Authentication confirmed.")
  //   return Response.json(
  //     {
  //       success: true,
  //       msg: "Object uploaded successfully.",
  //       error: null,
  //     },
  //     { status: 200 }
  //   )
  // } catch (error) {
  //   console.error("Error uploading object:", error)
  //   console.error(
  //     "Authentication failed. Check your credentials and permissions."
  //   )
  //   return Response.json(
  //     {
  //       success: false,
  //       msg: "Authentication failed. Check your credentials and permissions.",
  //       error: null,
  //     },
  //     { status: 500 }
  //   ) // Exit the function if authentication fails
  // }
}
