// app/country/[slug]/page.tsx
import CountryDynamicComponent from "@/components/CountryComponents/CountryDynamicComponent";
import Navbar from "@/components/Navbar";

type CountryKey = "russia" | "china" | "italy" | "morroco";

interface CountryContent {
  title: string;
  description: string;
  images: { image: string; text: string; slug: string }[];
}

const propertyData: Record<CountryKey, CountryContent> = {
  russia: {
    title: "About our Russian Decor",
    description: "Russian decor blends elegance, opulence, and culture...",
    images: [
      { image: "/russia-01.svg", text: "R1 Russia Decor", slug: "russia-r1" },
      { image: "/russia-02.svg", text: "R2 Russia Decor", slug: "russia-r2" },
      { image: "/russia-03.svg", text: "R3 Russia Decor", slug: "russia-r3" },
      { image: "/russia-04.svg", text: "R4 Russia Decor", slug: "russia-r4" },
      { image: "/russia-05.svg", text: "R5 Russia Decor", slug: "russia-r5" },
    ],
  },
  china: {
    title: "About our Chinese Decor",
    description: "Russian decor blends elegance, opulence, and culture...",
    images:  [
      { image: "/chineese-01.svg", text: "C1 Chinese Decor", slug: "china-c1"},
      { image: "/chineese-02.svg", text: "C2 Chinese Decor", slug: "china-c2"},
    ],
  },
  italy: {
    title: "About our Italian Decor",
    description: "Russian decor blends elegance, opulence, and culture...",
    images: [
      { image: "/italian-01.svg", text: "I1 Italian Decor", slug: "italy-i1"},
      { image: "/italian-02.svg", text: "I2 Italian Decor", slug: "italy-i2"},
      { image: "/italian-03.svg", text: "I3 Italian Decor", slug: "italy-i3"},
    ],
  },
  morroco: {
    title: "About our Morrocan Decor",
    description: "Moroccan decor blends elegance, opulence, and culture...",
    images: [
      { image: "/morocco-01.svg", text: "M1 Morrocan Decor", slug: "morroco-m1"},
      { image: "/morocco-02.svg", text: "M2 Morrocan Decor", slug: "morroco-m2"},
      { image: "/morocco-03.svg", text: "M3 Morrocan Decor", slug: "morroco-m3"},
      { image: "/morocco-04.svg", text: "M4 Morrocan Decor", slug: "morroco-m4"},
    ],
  }
};

export function generateStaticParams() {
  return Object.keys(propertyData).map((slug) => ({ slug }));
}

// Implementation of PropertyPage
interface PageProps {
  params: {
    slug: CountryKey;
  };
}

function PropertyPage({ params }: PageProps) {
  const slug = params.slug;
  const content = propertyData[slug];

  if (!content) return <div>Property not found</div>;

  return (
    <>
      <Navbar />
      <CountryDynamicComponent content={content} slug={slug} />
    </>
  );
}

export default PropertyPage;
