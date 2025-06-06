import Head from "next/head";
import NavBar from "pdfequips-navbar/NavBar";
import Tool from "../../components/Tool";
import {
  edit_page,
  tool,
  tools,
  downloadFile, footer
} from "../../src/content/content-hi";
import { errors } from "../../src/content/content-hi";
import { useRouter } from "next/router";
import type { tool as _tool } from "../../content";
import { PDFToHTMLHOWTO_hi } from "@/src/how-to";
import { OpenGraph } from "pdfequips-open-graph/OpenGraph";
import { Features } from "@/components/Features";
import { Footer } from "pdfequips-footer/components/Footer";
import { fetchSubscriptionStatus } from "fetch-subscription-status";
import { useState, useCallback, useEffect } from "react";
import HowTo from "@/components/HowTo";

export async function getStaticPaths() {
  const paths = Object.keys(routes).map((key) => ({
    params: { tool: key.substring(1) },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: {
    tool: string;
  };
}) {
  const item = routes[`/${params.tool}` as keyof typeof routes].item;
  const initialPremiumStatus = await fetchSubscriptionStatus();
  return { props: { item, initialPremiumStatus } };
}

export default ({ item, lang, initialPremiumStatus }: { item: _tool["PDF_to_HTML"]; lang: string; initialPremiumStatus: boolean }) => {
  const router = useRouter();
  const { asPath } = router;
  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: `PDFEquips ${item.title}`,
    description: item.description,
    url: `https://www.pdfequips.com${asPath}`,
  };
  const [isPremium, setIsPremium] = useState(initialPremiumStatus);
  const [isLoaded, setIsLoaded] = useState(false);
  const checkStatus = useCallback(async () => {
    try {
      const status = await fetchSubscriptionStatus(); // Function to fetch subscription status
      setIsPremium(status);
      setIsLoaded(true);
    } catch (err) {
      console.error("Error checking subscription status:", err);
      setIsLoaded(true);

    }
  }, []);


  useEffect(() => {
    checkStatus();
  }, []);
  return (
    <>
      <Head>
        <title>{item.seoTitle}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PDFToHTMLHOWTO_hi),
          }}
        />
        <meta name="description" content={item.description} />
        <link rel="icon" type="image/svg+xml" href="/images/icons/logo.svg" />
        {isLoaded && !isPremium ?
          <>
            <meta name="google-adsense-account" content="ca-pub-7801483217621867" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7801483217621867"
              cross-origin="anonymous"></script>
          </>
          : null}
        <OpenGraph
          ogUrl={`https://www.pdfequips.com/hi${item.to}`}
          ogDescription={item.description}
          ogLocale="hi_IN"
          ogImageWidth="1200"
          ogImageHeight="630"
          ogTitle={item.seoTitle}
          ogImage={`https://www.pdfequips.com/images/hi${item.to}.png`}
        />
      </Head>
      <NavBar path="pdf-to-html" lang={lang} />
      <Tool
        tools={tools}
        data={item}
        lang={lang}
        errors={errors}
        edit_page={edit_page}
        pages={edit_page.pages}
        page={edit_page.page}
        downloadFile={downloadFile}
      /><div className="container">
        <Features features={item.features} />
      </div>
      <div className="container">
        <HowTo howTo={PDFToHTMLHOWTO_hi} alt={item.seoTitle} />
      </div>
      <Footer title={item.seoTitle.split("-")[1]} lang={lang} />
    </>
  );
};

export const routes = {
  "/pdf-to-html": { item: tool["PDF_to_HTML"] },
};
