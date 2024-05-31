"use client"


import ScreenDown from "@/components/screen/ScreenDown"
import ScreenUp from "@/components/screen/ScreenUp"
import Progressbar from "@/components/screen/Progressbar"
import ScreenHeader from "@/components/screen/ScreenHeader"
import ScreenTitle from "@/components/screen/ScreenTitle"
import Navigation from "@/components/screen/Navigation"
import ScreenFooter from "@/components/screen/ScreenFooter"
import PopupError from "@/components/screen/PopupError"
import PopupDialog from "@/components/screen/PopupDialog"
// import { useRouter } from 'next/navigation';

export default async function Experiment({ params, searchParams }) {
  const { experimentid } = params
  const { PROLIFIC_PID, STUDY_ID, SESSION_ID } = searchParams

  return (
    <>
      {/* <div>{experimentid}</div>
            hello
            <div>{PROLIFIC_PID}</div>
            {STUDY_ID}
            {SESSION_ID} */}
      <div
        data-role="page"
        data-url="/webMUSHRA/"
        tabIndex="0"
        className="ui-page ui-page-theme-a ui-page-active "
      // bg-[#f9f9f9] border-[#bbbbbb] text-[#333333] shadow-[0_1px_0_#f3f3f3] top-0 left-0 w-full min-h-full absolute hidden border-0
      >
        {/* <a className="github-fork-ribbon ui-link" href="https://github.com/audiolabs/webMUSHRA" title="Fork me on GitHub" style={{ texdivecoration: 'none', background: '#333', color: '#fff', position: 'absolute', top: 0, right: 0, padding: '0.5em 1em', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>Fork me on GitHub</a> */}

        <ScreenHeader />

        <div id="container"        >
          <Progressbar />
          <ScreenTitle />
          <div className="ui-body ui-body-a ui-corner-all" id="page_content">
            <div>
              <p>Due to randomization, this page will be either the second MUSHRA page or the third MUSHRA page.</p>
              <ScreenUp />
              <ScreenDown />
            </div>
            {/* <script> pageManager.pages[1].load();</script> */}
          </div>
          <br />
          <Navigation />

          <ScreenFooter />
        </div>

        <PopupError />
        <PopupDialog />

        {/* <script src="startup.min.js" className=""> */}
        {/* </script> */}

        <div className="ui-screen-hidden ui-popup-screen ui-overlay-inherit" id="popupErrors-screen"></div>
        <div className="ui-popup-container ui-popup-hidden ui-popup-truncate flip" id="popupErrors-popup"        >
          <div
            data-role="popup"
            data-dismissible="false"
            data-history="false"
            data-transition="flip"
            positionto="window"
            id="popupErrors"
            className="ui-popup ui-body-inherit ui-overlay-shadow ui-corner-all"
            style={{ borderRadius: "all", boxShadow: "ui-overlay-shadow" }}
          >
            <div id="popupErrorsContent"
            >
              Errors:
              <br />
            </div>
          </div>
        </div>
        <div className="ui-screen-hidden ui-popup-screen ui-overlay-a" id="popupDialog-screen"></div>
        <div
          className="ui-popup-container ui-popup-hidden ui-popup-truncate slidedown"
          id="popupDialog-popup"
          style={{ display: "none" }}
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
            style={{ borderRadius: "all", boxShadow: "ui-overlay-shadow" }}
          >
            <div
              data-role="header"
              className="ui-corner-top ui-header ui-bar-inherit"
              style={{
                width: "57.5em",
                backgroundColor: "#FFb500",
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit",
              }}
              role="banner"
            >
              <h1 id="popHeader" className="ui-title" role="heading" aria-level="1"
              ></h1>
            </div>
            <div
              id="popupResultsContent"
              style={{
                backgroundColor: "white",
                borderBottomLeftRadius: "inherit",
                borderBottomRightRadius: "inherit",
              }}
              className="ui-corner-bottom ui-content"
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: {
//                     experimentid: 'my_first_experiment',
//                 },
//             }, // See the "paths" section below
//         ],
//         fallback: true, // false or "blocking"
//     }
// }

// export async function getServerProps({ params }) {
//     // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     // const repo = await res.json()
//     // return { props: { repo } }
//     console.log(params)
//     const id = params.experimentid

//     return { props: { experimentid: id } }
// }
