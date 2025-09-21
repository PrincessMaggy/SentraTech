import siteConfig from "@/config/siteConfig.json";

import { AppContextProvider } from "@/context/app.context";
import { Toaster } from "sonner";
import Footer from "@/components/footer/Footer";
import ScrollTop from "@/components/common/ScrollTop";
import Header from "@/components/header/Header";
import navigation from "@/config/navigation.json";

import "@/style/main.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="shortcut icon" href={siteConfig.site_info.favicon} />
      </head>
      <body suppressHydrationWarning={true} className="light">
        <AppContextProvider>
          <div id="overlay-container"></div>
          <>
            <div className="has-smooth" id="has_smooth"></div>
            {/* <ScrollSmootherComponents /> */}
            <ScrollTop />
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <div className="body-wrapper font-heading-estedad">
                  <Header headerData={navigation.header} />

                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </>
          <Toaster />
        </AppContextProvider>
      </body>
    </html>
  );
}
