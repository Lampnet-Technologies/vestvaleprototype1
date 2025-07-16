import CountryDynamicComponent from "@/components/CountryComponents/CountryDynamicComponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";

type propertyImage = string | { image: string; text: string };

const propertyData: Record<
  string,
  {
    title: string;
    description: string;
    images: propertyImage[];
  }
> = {
  russia: {
    title: "About our Russian Decor",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience. Our Russian decor features rich colors, elaborate patterns, and luxurious textiles that reflect the grandeur of Russian heritage.",
    images: [
      { image: "/russia-01.svg", text: "Russia Decor 1" },
      { image: "/russia-02.svg", text: "Russia Decor 2" },
      { image: "/russia-03.svg", text: "Russia Decor 3" },
      { image: "/russia-04.svg", text: "Russia Decor 4" },
      { image: "/russia-05.svg", text: "Russia Decor 5" },
    ],
  },
  china: {
    title: "About our Chinese Decor",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience. Our Chinese decor features intricate designs, harmonious colors, and elegant furnishings that embody the essence of Chinese artistry.",
    images: [
      { image: "/chineese-01.svg", text: "Chinese Decor 1" },
      { image: "/chineese-02.svg", text: "Chinese Decor 2" },
      { image: "/chineese-03.png", text: "Chinese Decor 3" },
    ],
  },
  italy: {
    title: "About our Italian Decor",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience. Our Italian decor features classic elegance, rich textures, and timeless designs that reflect the beauty of Italian heritage.",
    images: [
      { image: "/Italy1.png", text: "Italian Decor 1" },
      { image: "/Italy2.png", text: "Italian Decor 2" },
      { image: "/Italy3.png", text: "Italian Decor 3" },
      { image: "/Italy4.png", text: "Italian Decor 4" },
    ],
  },
  morroco: {
    title: "About our Moroccan Decor",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience. Our Moroccan decor features vibrant colors, intricate patterns, and artisanal craftsmanship that bring the spirit of Morocco to life.",
    images: [
      { image: "/morocco-01.svg", text: "Morrocan Decor 1" },
      { image: "/morocco-02.svg", text: "Morrocan Decor 2" },
      { image: "/morocco-03.svg", text: "Morrocan Decor 3" },
      { image: "/morocco-04.svg", text: "Morrocan Decor 4" },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PropertyPage = async ({ params }: PageProps) => {
  // const router = useRouter()
  const { slug } = await params;
  const content = propertyData[slug];

  if (!content) {
    return <div>Property not found</div>;
  }
  return (
    <>
      <Navbar />
      <CountryDynamicComponent content={content} slug={slug} />
    </>
  );
};

export default PropertyPage;

export function generateStaticParams() {
  console.log(
    "these are keys",
    Object.keys(propertyData).map((slug) => ({ slug }))
  );

  return Object.keys(propertyData).map((slug) => ({ slug }));
}
