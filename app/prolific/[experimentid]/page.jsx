"use server"

import ScreenDown from "@/components/screen/ScreenDown"
import ScreenUp from "@/components/screen/ScreenUp"
import Progressbar from "@/components/screen/Progressbar"
import ScreenTitle from "@/components/screen/ScreenTitle"
import ScreenFooter from "@/components/screen/ScreenFooter"
import PopupError from "@/components/screen/PopupError"
import PopupDialog from "@/components/screen/PopupDialog"
import ScreenMessage from "@/components/screen/ScreenMessage"
import ScreenMain from "@/components/screen/ScreenMain"
import EvaluationBoard from "@/components/screen/EvaluationBoard"
import { fetchJSONStudy } from "./actions"
import PaginationScreen from "./PaginationScreen"
import Screen from "@/components/screen/screen"
import NavScreen from "@/components/screen/NavScreen"

export default async function Page({ params, searchParams }) {
  const { experimentid } = params
  const { PROLIFIC_PID, STUDY_ID, SESSION_ID } = searchParams
  // console.log(experimentid, PROLIFIC_PID, STUDY_ID, SESSION_ID)
  const url = ""

  const { status, error, config } = await fetchJSONStudy(url)
  // console.log('config', config)

  return (
    <>
      {/* <div>{experimentid}</div>
      hello
      <div>{PROLIFIC_PID}</div>
      {STUDY_ID}
      {SESSION_ID} */}
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
        <div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
          <NavScreen name={config.testname} />
          <div className="w-full h-screen px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
            <Progressbar value={45} />
            <Screen />

            <PopupDialog />
            <PopupError />
          </div>
        </div>
      </div>

      {/* <PaginationScreen /> */}
    </>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           experimentid: 'my_first_experiment',
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   }
// }

// export async function getServerProps({ params }) {
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   // const repo = await res.json()
//   // return { props: { repo } }
//   console.log(params)
//   const id = params.experimentid

//   return { props: { experimentid: id } }
// }
// export async function getServerSideProps() {
//   // const data = await fetchData()
//   const data = { json: '' }
//   return { props: { data } }
// }
