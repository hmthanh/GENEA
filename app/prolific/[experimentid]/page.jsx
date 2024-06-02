"use server"

import { Progressbar } from "@/components/screen"
import { PopupError } from "@/components/screen"
import { PopupDialog } from "@/components/screen"
import { Screen } from "@/components/screen"
import { NavScreen } from "@/components/screen"
import { fetchJSONStudy } from "./actions"
import { ExperimentConfigProvider } from "@/contexts/experiment"
import { PageProvider } from "@/contexts/page"

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
        <ExperimentConfigProvider value={config}>
          <PageProvider>
            <Screen />
          </PageProvider>
        </ExperimentConfigProvider>
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
