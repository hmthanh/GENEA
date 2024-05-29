"use client"

import Header from "@/components/header";
import Body from "@/components/body";
import Footer from "@/components/footer";

export default function Home() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };
  const isSupabaseConnected = canInitSupabaseClient();


  //   <div className="">
  //   Hello
  //   <Callout/>
  // </div>

  return (
    // <div className="flex-1 w-full flex flex-col gap-20 items-center">
    //   <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    //     <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
    //       {isSupabaseConnected && <AuthButton />}
    //     </div>
    //   </nav>

    //   <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
    //     {/* <Header /> */}
    //     <main className="flex-1 flex flex-col gap-6">
    //       <h2 className="font-bold text-4xl mb-4">Next steps</h2>
    //       <Header></Header>
    //       {/* {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
    //     </main>
    //   </div>


    // </div>
    <>
      <Header />
      <Body>
        hello
      </Body>
      <Footer />
    </>
  );
}
