"use client"

import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout({ children }) {
  // const themeConfig = useThemeConfig()
  // <html lang="en" className="js-focus-visible light" suppressHydrationWarning={true} dir="ltr" style={{ colorScheme: "light" }} >


  return (
    <>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </>
  );
}
