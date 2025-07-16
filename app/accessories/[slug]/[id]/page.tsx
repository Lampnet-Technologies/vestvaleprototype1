import { accessoriesMap } from "@/data/accessoriesMap";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AccessoriesCategoryPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { slug, id } = params;
  const items = accessoriesMap[slug as keyof typeof accessoriesMap];
  if (!items) return notFound();

  const matchBySlug = items.find((item) => item.slug === id);
  const matchById = items.find((item) => item.id === id);
  const current = matchBySlug || matchById;

  if (!current) return notFound();

  const others = items.filter((item) => item.slug !== current.slug);

  return (
    <div className="min-h-screen bg-[#F5F1E6] text-black">
      <Navbar />

      <div className="relative w-full h-[400px]">
        <Image
          fill
          src={current.image}
          alt={current.name}
          className="object-cover rounded-md"
        />
      </div>

      <section className="flex justify-between items-center px-4 my-4">
        <h1 className="text-xl font-semibold capitalize">{current.name}</h1>
        <button type="button" className="bg-request-btn rounded-lg px-4 py-1">
          Request Price
        </button>
      </section>

      <article className="bg-white p-4 mb-4 rounded-md shadow">
        <h2 className="font-semibold text-lg mb-2">Accessory Details</h2>
        <p className="leading-7">
          Premium materials and elegant design for your luxury home.
        </p>
      </article>

      <section className="bg-white p-4 rounded-md shadow">
        <h3 className="font-medium text-lg mb-3">More in {slug}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {others.map((item) => (
            <div
              key={item.slug}
              className="cursor-pointer"
              onClick={() =>
                (window.location.href = `/accessories/${slug}/${item.slug}`)
              }
            >
              <div className="relative w-full h-[200px]">
                <Image
                  fill
                  src={item.image}
                  alt={item.name}
                  className="object-cover rounded-md"
                />
              </div>
              <p className="mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return Object.entries(accessoriesMap).flatMap(([slug, list]) =>
    list.flatMap((item, index) => [
      { slug, id: item.slug },
      { slug, id: `${index + 1}` },
    ])
  );
}
 
