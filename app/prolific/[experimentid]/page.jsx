'use client'

import ScreenDown from '@/components/screen/ScreenDown'
import ScreenUp from '@/components/screen/ScreenUp'
import Progressbar from '@/components/screen/Progressbar'
import ScreenHeader from '@/components/screen/ScreenHeader'
import ScreenTitle from '@/components/screen/ScreenTitle'
import Navigation from '@/components/screen/Navigation'
import ScreenFooter from '@/components/screen/ScreenFooter'
import PopupError from '@/components/screen/PopupError'
import PopupDialog from '@/components/screen/PopupDialog'
import ScreenMessage from '@/components/screen/ScreenMessage'
import ScreenMain from '@/components/screen/ScreenMain'
import EvaluationBoard from '@/components/screen/EvaluationBoard'
import { ArrowLeftIcon, ArrowRightIcon } from '@/nextra/icons'
// import { useRouter } from 'next/navigation';

export default function Experiment({ params, searchParams }) {
  // const { experimentid } = params
  // const { PROLIFIC_PID, STUDY_ID, SESSION_ID } = searchParams

  return (
    <>
      {/* <div>{experimentid}</div>
      hello
      <div>{PROLIFIC_PID}</div>
      {STUDY_ID}
      {SESSION_ID} */}
      {/* <div
    data-role="page"
    data-url="/webMUSHRA/"
    tabIndex="0"
    className="ui-page ui-page-theme-a ui-page-active "
   >
    <ScreenHeader />

    <div id="container">
     <Progressbar />
     <ScreenTitle />
     <div className="ui-body ui-body-a ui-corner-all" id="page_content">
      <div>
       <p>
        Due to randomization, this page will be either the second MUSHRA
        page or the third MUSHRA page.
       </p>
       <ScreenUp />
       <ScreenDown />
      </div>
     </div>
     <br />
     <Navigation />

     <ScreenFooter />
    </div>

    <PopupError />
    <PopupDialog />

    <div
     className="ui-screen-hidden ui-popup-screen ui-overlay-inherit"
     id="popupErrors-screen"
    ></div>
    <div
     className="ui-popup-container ui-popup-hidden ui-popup-truncate flip"
     id="popupErrors-popup"
    >
     <div
      data-role="popup"
      data-dismissible="false"
      data-history="false"
      data-transition="flip"
      positionto="window"
      id="popupErrors"
      className="ui-popup ui-body-inherit ui-overlay-shadow ui-corner-all"
      style={{ borderRadius: 'all', boxShadow: 'ui-overlay-shadow' }}
     >
      <div id="popupErrorsContent">
       Errors:
       <br />
      </div>
     </div>
    </div>
    <div
     className="ui-screen-hidden ui-popup-screen ui-overlay-a"
     id="popupDialog-screen"
    ></div>
    <div
     className="ui-popup-container ui-popup-hidden ui-popup-truncate slidedown"
     id="popupDialog-popup"
     style={{ display: 'none' }}
    >
     <div
      data-role="popup"
      data-history="false"
      data-position-to="#page_content"
      data-transition="slidedown"
      id="popupDialog"
      data-overlay-theme="a"
      data-theme="c"
      data-dismissible="false"
      className="ui-corner-all ui-popup ui-body-c ui-overlay-shadow"
      style={{ borderRadius: 'all', boxShadow: 'ui-overlay-shadow' }}
     >
      <div
       data-role="header"
       className="ui-corner-top ui-header ui-bar-inherit"
       style={{
        width: '57.5em',
        backgroundColor: '#FFb500',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
       }}
       role="banner"
      >
       <h1
        id="popHeader"
        className="ui-title"
        role="heading"
        aria-level="1"
       ></h1>
      </div>
      <div
       id="popupResultsContent"
       style={{
        backgroundColor: 'white',
        borderBottomLeftRadius: 'inherit',
        borderBottomRightRadius: 'inherit',
       }}
       className="ui-corner-bottom ui-content"
      ></div>
     </div>
    </div>
   </div> */}
      <div className="w-full max-h-screen h-screen relative bg-gray-100 ">
        <div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
          {/* Header */}
          <ScreenHeader />
          <div className="w-full h-screen px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
            <Progressbar value={45} />
            <ScreenTitle />
            <div className="w-full flex-grow bg-white p-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
              <ScreenMain />
              <EvaluationBoard />
              {/* <ScreenMessage /> */}
            </div>

            {/* <Navigation /> */}

            <div
              id="page_navigation"
              className="w-full flex flex-row justify-between"
              // border border-zinc-300
            >
              <button className="pb-3 px-5 text-center text-zinc-800 font-bold leading-5 flex align-middle gap-2  ">
                <ArrowLeftIcon className="h-5 inline shrink-0 ltr:rotate-180" />
                Previous
              </button>

              <button className="pb-3 px-5 text-center text-zinc-800 font-bold leading-5 flex align-middle gap-2 ">
                Next
                <ArrowRightIcon className="h-5 inline shrink-0 rtl:rotate-180" />
              </button>
            </div>

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
