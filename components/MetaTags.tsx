import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description: string;
}

interface MetaTagsProps {
  title: string;
  description: string;
  url: string;  // Add the url prop
}

const MetaTags = ({ title, description, url }: MetaTagsProps) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Language */}
      <link rel="alternate" href={url} hrefLang="x-default" />
      <link rel="alternate" href={url} hrefLang="en" />

      {/* Mobile Meta Tags */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="theme-color" content="#000000" />

      {/* PWA Tags */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
  );
};

export default MetaTags;
