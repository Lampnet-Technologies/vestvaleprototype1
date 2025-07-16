
import Navbar from "@/components/Navbar";

const accessoriesDataLocal = {
  door: {
    title: "About our Home Accessories",
    description:
      "Luxury is defined by culture, craftsmanship, and timeless design at Vestvale Estate...",
    images: [
      { image: "/door-01.svg", text: "door" },
      { image: "/door-02.svg", text: "door" },
      // ... (continue your array)
    ],
  },
  doorhandle: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship...",
    images: [
      { image: "/door-handle-01.svg", text: "door handle" },
      { image: "/door-handle-02.svg", text: "door handle" },
    ],
  },
  lights: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship...",
    images: [
      { image: "/light-01.svg", text: "Vintage light" },
      { image: "/light-02.svg", text: "Vintage light" },
      // ...
    ],
  },
  wallpaper: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship...",
    images: [
      { image: "/wallpaper-01.svg", text: "wallpaper" },
      { image: "/wallpaper-02.svg", text: "wallpaper" },
      // ...
    ],
  },
  tiles: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship...",
    images: [
      { image: "/tile-01.svg", text: "title" },
      { image: "/tile-02.svg", text: "title" },
      // ...
    ],
  },
};

export default function AccessoriesCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = accessoriesDataLocal[params.slug as keyof typeof accessoriesDataLocal];
  if (!content) return <div className="text-center p-20 text-xl">Not Found</div>;

  return (
    <>
      <Navbar />
      <AccessoryDynamicComponent content={content} />
    </>
  );
}

// ✅ Required for static export (output: "export")
export function generateStaticParams() {
  return Object.keys(accessoriesDataLocal).map((slug) => ({ slug }));
}

