import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import BespokeDynamicComponent from "@/components/BespokeComponent/BespokeDynamicComponent";
import { bespokePropertyData } from "@/app/bespoke/bespokePropertyData";
import type { PropertyImage } from "@/app/bespoke/bespokePropertyData";


interface PageProps {
  params: Promise<{ slug: string }>;
}

const BespokePropertyPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const content = bespokePropertyData[slug];

      if (!content) {
    return <div>Bespoke Interior is not available</div>;
  }
  return (
    <>
      <Navbar />
      <BackButton topOffset={80} />
      <BespokeDynamicComponent content={content} slug={slug} />
    </>
  );
};

export default BespokePropertyPage;

export function generateStaticParams() {

  return Object.keys(bespokePropertyData).map((slug) => ({ slug }));
}

