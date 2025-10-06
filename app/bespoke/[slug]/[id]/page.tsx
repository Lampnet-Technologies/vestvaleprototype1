import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import { bespokePropertyData } from "@/app/bespoke/bespokePropertyData";
import { allImagesForAstoria } from "@/app/utils/bespoke-utils/astoriapropPopUpProps";
import { allImagesForEmerald } from "@/app/utils/bespoke-utils/emeraldpropPopUpProps";
import { allImagesForSapphire } from "@/app/utils/bespoke-utils/sapphirepropPopUpProps";
import { allImagesForWindsor } from "@/app/utils/bespoke-utils/windsorpropPopUpProps";

export default async function BespokeInfo({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { id, slug } = await params;
  let content = null;

  if (slug == "astoria") {
    content = allImagesForAstoria.find((item) => item.name == id);
  } else if (slug == "emerald") {
    content = allImagesForEmerald.find((item) => item.name == id);
  } else if (slug == "sapphire") {
    content = allImagesForSapphire.find((item) => item.name == id);
  } else if (slug == "windsor") {
    content = allImagesForWindsor.find((item) => item.name == id);
  }


  if (!content) {
    return <div>content not available</div>;
  }
  return (
    <div className="bg-[#F5F1E6] min-h-screen  text-black pb-8">
      <Navbar />
      <BackButton topOffset={80} />

      {/* Image Preview */}
      <div className="relative w-full h-[400px]">
        <Image
          fill
          className="absolute object-cover"
          src={content.src}
          alt={content.name}
        />
      </div>

      {/* name and request price */}
      <section className="flex justify-between items-center px-2 md:px-6 my-4">
        <h1 className="text-xl font-semibold capitalize">{content.name}</h1>
        <div className="bg-foreground rounded-xl p-4 box-shadow-class">
          <button className="bg-request-btn rounded-lg px-4 py-1">
            Request Price
          </button>
        </div>
      </section>

      {/* Property Description */}
      <article className="bg-foreground px-2 md:px-6">
        <h1 className="font-semibold">Bespoke Home Interior Description</h1>
        <p>{content.prescription}</p>

        {/* Key characteristics you'll see */}
        <aside className="py-4 ">
          <h1 className="font-semibold my-2">
            Key characteristics You'll See(on image)
          </h1>
          <ul className="mx-6 bg-foreground">
            {content.whyChoose.map((item, index) => {
              return (
                <li className="list-disc" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </aside>
      </article>

      {/* gallery */}
      <article className="bg-foreground px-2 md:px-6">
        <h1 className="text-lg font-medium">Gallery</h1>

        <aside className="md:flex flex-col md:flex-row  justify-between ">
          {content.itemsToPrev.map((item, index) => (
            <div
              className="relative md:w-[40%] w-[100%] h-[250px] my-4 md:my-0"
              key={index}
            >
              <Image
                className="absolute object-cover"
                src={item.prevSrc}
                fill
                alt={item.name}
              />
            </div>
          ))}
        </aside>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    ...bespokePropertyData["astoria"].images.map((item, index) => {
      return { slug: "astoria", id: item.id };
    }),
    ...bespokePropertyData["emerald"].images.map((item, index) => {
      return { slug: "emerald", id: item.id };
    }),
    ...bespokePropertyData["sapphire"].images.map((item, index) => {
      return { slug: "sapphire", id: item.id };
    }),
    ...bespokePropertyData["windsor"].images.map((item, index) => {
      return { slug: "windsor", id: item.id };
    }),
  ];
}
