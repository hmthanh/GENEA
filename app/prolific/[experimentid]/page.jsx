"use server"

import ScreenDown from "@/components/screen/ScreenDown"
import ScreenUp from "@/components/screen/ScreenUp"
import Progressbar from "@/components/screen/Progressbar"
import ScreenHeader from "@/components/screen/ScreenHeader"
import ScreenTitle from "@/components/screen/ScreenTitle"
import Navigation from "@/components/screen/Navigation"
import ScreenFooter from "@/components/screen/ScreenFooter"
import PopupError from "@/components/screen/PopupError"
import PopupDialog from "@/components/screen/PopupDialog"
import ScreenMessage from "@/components/screen/ScreenMessage"
import ScreenMain from "@/components/screen/ScreenMain"
import EvaluationBoard from "@/components/screen/EvaluationBoard"
import { fetchJSONStudy } from "./actions"

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
      <div className="w-full max-h-screen h-screen relative bg-gray-100 ">
        <div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
          <ScreenHeader name={config.testname} />
          <div className="w-full h-screen px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
            <Progressbar value={45} />
            <ScreenTitle />
            <div className="w-full flex-grow bg-white p-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
              <ScreenMain />
              <EvaluationBoard />
              {/* <ScreenMessage /> */}
            </div>

            <Navigation />

            <PopupDialog />
            <PopupError />
            {/* <div className="w-px h-px left-[-1px] top-[-1px] ">
              <div className="w-0.5 h-[22.80px] left-0 top-0 bg-white/opacity-0 shadow" />
            </div> */}
            {/* <ScreenFooter /> */}
          </div>
        </div>
      </div>
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
