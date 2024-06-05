import axios from "axios"
import multer from "multer"
import { NextApiRequest, NextApiResponse } from "next"
import { B2 } from "b2"

const upload = multer({ dest: "uploads/" })

const b2 = new B2({
  applicationKeyId: "005ab245bb45bb20000000002",
  applicationKey: "K005z2e5S9dwfVezJ3FEB9hrQt/EOJk",
})

await b2.authorize()

export async function POST() {
  upload.array("files")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }

    try {
      const files = req.files

      // Upload each file to Backblaze B2
      for (const file of files) {
        // Get file stream
        const fileStream = fs.createReadStream(file.path)

        // Upload file to Backblaze B2
        await b2.uploadFile({
          bucketId: "ea8b022465bb6b1485cb0b12",
          fileName: file.originalname,
          data: fileStream,
        })
      }

      // If files are successfully uploaded, respond with a success message
      return res.status(200).json({ message: "Files uploaded successfully" })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  })

  // return Response.json({ data: {} })
}
