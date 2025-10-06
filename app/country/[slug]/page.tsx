import CountryDynamicComponent from "@/components/CountryComponents/CountryDynamicComponent";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import { countryPropertyData } from "@/app/country/countryPropertyData";
import type { PropertyImage } from "@/app/country/countryPropertyData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PropertyPage = async ({ params }: PageProps) => {
  // const router = useRouter()
  const { slug } = await params;
  const content = countryPropertyData[slug];

  if (!content) {
    return <div>Decoration not available</div>;
  }
  return (
    <>
      <Navbar />
      <BackButton topOffset={80} />
      <CountryDynamicComponent content={content} slug={slug} />
    </>
  );
};

export default PropertyPage;

export function generateStaticParams() {
  // console.log("these are keys",Object.keys(countryPropertyData).map((slug) => ({ slug })));

  return Object.keys(countryPropertyData).map((slug) => ({ slug }));
}
