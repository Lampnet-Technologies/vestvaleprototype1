"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

type DecorItem = {
  slug: string;
  id?: string;
  name: string;
  image: string;
};

interface Props {
  slug: string;
  current: DecorItem;
  items: DecorItem[];
}

export default function DecorClientPage({ current, items, slug }: Props) {
  const id = current.id || current.slug;

  // Redirect if numeric
 /*  useEffect(() => {
    const isNumeric = /^\d+$/.test(id);
    if (isNumeric) {
      const match = items.find((d) => d.id === id);
      if (match && match.slug !== current.slug) {
        window.location.href = `/country/${slug}/${match.slug}`;
      }
    }
  }, [id, slug, items, current.slug]); */
  useEffect(() => {
  if (/^\d+$/.test(current.id || "")) {
    const match = items.find((d) => d.id === current.id);
    if (match && match.slug !== current.slug) {
      window.location.href = `/country/${slug}/${match.slug}`;
    }
  }
}, [current.id, current.slug, slug]);

  const others = items.filter((d) => d.slug !== current.slug);

  return (
    <div className="bg-[#F5F1E6] min-h-screen text-black pb-8">
      <Navbar />
      <div className="relative w-full h-[400px]">
        <Image
          fill
          src={current.image}
          alt={current.name}
          className="absolute object-cover"
        />
      </div>

      <section className="flex justify-between items-center px-4 my-4">
        <h1 className="text-xl font-semibold capitalize">{current.name}</h1>
        <button className="bg-request-btn rounded-lg px-4 py-1">
          Request Price
        </button>
      </section>

      <article className="bg-white p-4 mb-4 rounded-md shadow">
        <h2 className="font-semibold text-lg mb-2">Decor Description</h2>
        <p className="leading-7">
          This style celebrates a blend of aristocratic elegance, folk
          traditions, and dramatic flair.
        </p>
      </article>

      <section className="bg-white p-4 rounded-md shadow">
        <h3 className="font-medium text-lg mb-3">
          More from {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {others.map((item) => (
            <div
              key={item.slug}
              className="cursor-pointer"
              onClick={() =>
                (window.location.href = `/country/${slug}/${item.slug}`)
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
