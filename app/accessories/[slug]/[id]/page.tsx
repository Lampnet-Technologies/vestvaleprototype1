import Image from "next/image";
import { accessoriesData } from "../page";
import { allImagesForDoors } from "@/app/utils/doorPopUpProps";
import { allImagesForLights } from "@/app/utils/lightPopUpProps";
import { allImagesForWallpapers } from "@/app/utils/wallpaperPopUpProps";
import { allImagesForDoorHandles } from "@/app/utils/doorhandlePopUpProps";
import { allImagesForTiles } from "@/app/utils/tilePopUpProps";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const images = [
  {
    id: 1,
    slug: "door",
    name: "door-one",
    src: "/door-01.svg",
  },
  //   {
  //     id:2,
  //     src:"chair-two.png",
  //     name:"chair two"
  //   },
];

const characteristics: string[] = [
  `
   Exceptional Craftsmanship: Each accessory is meticulously crafted with attention to detail, ensuring superior quality and a flawless finish. Experience the difference of a door built to last, lighting fixtures that illuminate your space beautifully, wallpapers that transform your walls, door handles that add elegance, and tiles that enhance your floors. Our accessories are designed to elevate your home's aesthetic and functionality.`,
  `Durable & Long-Lasting: Made from high-quality materials, our accessories are designed to withstand the test of time. Enjoy peace of mind with products that resist wear and tear, ensuring longevity and reliability. Whether it's a door that stands up to daily use, lighting fixtures that shine bright for years, or tiles that maintain their beauty, door handles that function smoothly, our accessories are built to endure.`,
  `Versatile Design Options: From sleek modern lines to classic panel designs, our accessories come in a variety of styles to suit any home decor. Whether you prefer a contemporary look or a traditional aesthetic, we have the perfect accessory for you. Choose from a range of finishes, colors, and textures to match your personal style.`,
  `Enhanced Functionality & Security: Beyond aesthetics, our accessories are designed with functionality in mind. Enjoy features like efficient insulation, accessibility options, and advanced locking mechanisms that enhance your home's security and energy efficiency. Lighting options also include energy-efficient LED fixtures that provide both style and savings on your energy bills.`,
  `Easy Installation (or Contractor-Friendly): Designed for straightforward installation, our accessories come with clear instructions and all necessary hardware. [If applicable, mention: Many designs are pre-hung for quick setup, or compatible with standard accessory sizes for easy replacement.]`,
  `Ready for Your Personal Touch: Most of our accessories come primed and ready for painting or staining, allowing you to customize the finish to match your unique style. [If applicable, mention: Some designs are available in a variety of colors or finishes.]`,
];

const allObjects = [{ name: "doors", images: accessoriesData.doors.images }];

export default async function AccessoriesInfo({
  params,
}: {
  params: Promise<{ slug: string; id: string | number }>;
}) {
  const { slug, id } = await params;

  let content = null;
  if (slug == "doors") {
    content = allImagesForDoors.find((item) => item.name == id);
  } else if (slug == "lights") {
    content = allImagesForLights.find((item) => item.name == id);
  } else if (slug == "wallpapers") {
    content = allImagesForWallpapers.find((item) => item.name == id);
  } else if (slug == "door-handles") {
    content = allImagesForDoorHandles.find((item) => item.name == id);
  } else if (slug == "tiles") {
    content = allImagesForTiles.find((item) => item.name == id);
  }

  // console.log(allObjects);
  // console.log(accessoriesData.doors.images.map((item ,index)=>{

  //   return {slug:"door",id:item.text}
  // }));

  // console.log(Object.keys(accessoriesData));

  if (!content) {
    return <div>no content available</div>;
  }

  return (
    <div className="bg-[#F5F1E6] min-h-screen  text-black pb-8">
      <Navbar />
      <BackButton topOffset={80} />
      {/* Image Preview */}
      <div className="relative w-full h-[400px] ">
        <Image
          fill
          className="absolute md:object-contain object-cover"
          src={content ? content.src : "/vintage-light.png"}
          alt="russian iterior"
        />
      </div>

      {/* name and request price */}
      <section className="flex justify-between items-center px-2 md:px-6 my-4">
        <h1 className="text-xl font-semibold">{content?.name}</h1>
        <div className="bg-foreground rounded-xl p-4 box-shadow-class">
          <button className="bg-request-btn rounded-lg px-4 py-1">
            Request Price
          </button>
        </div>
      </section>

      {/* Property Description */}
      <article className="bg-foreground px-2 md:px-6">
        <h1 className="font-semibold">Home Accessory Description</h1>
        <p className="leading-8">{content?.prescription}</p>

        {/* Key characteristics you'll see */}
        <aside className="py-4 ">
          <h1 className="font-semibold my-2">Why Choose Our accessory?</h1>
          <ul className="mx-6 bg-foreground">
            {content?.whyChoose.map((item, index) => {
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
        <h1 className="text-lg font-bold mb-5">Gallery</h1>

        <aside className=" flex md:justify-between md:flex-row flex-col items-center ">
          {content?.itemsToPrev.map((item, index) => (
            <div
              key={item.name || index}
              className="relative w-[300px] h-[400px] my-4 md:my-0"
            >
              <Image
                className="absolute md:object-contain object-cover"
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

export function generateStaticParams() {
  return [
    ...accessoriesData.doors.images.map((item) => {
      return { slug: "doors", id: item.id };
    }),
    ...accessoriesData["door-handles"].images.map((item) => {
      return { slug: "door-handles", id: item.id };
    }),
    ...accessoriesData.wallpapers.images.map((item) => {
      return { slug: "wallpapers", id: item.id };
    }),
    ...accessoriesData.lights.images.map((item) => {
      return { slug: "lights", id: item.id };
    }),
    ...accessoriesData.tiles.images.map((item) => {
      return { slug: "tiles", id: item.id };
    }),
    // {slug: "doors", id: "1"},
    // {slug: "doors", id: "door-one"},
    // add more as needed
  ];
}
