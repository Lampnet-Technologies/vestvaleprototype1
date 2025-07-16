import { decorMap } from "@/data/decorMap";
import DecorClientPage from "@/components/DecorClientPage";
import { notFound } from "next/navigation";

type Params = { slug: string; id: string };

export default function DecorDetailPage({ params }: { params: Params }) {
  const { slug, id } = params;
  const items = decorMap[slug as keyof typeof decorMap];
  if (!items) return notFound();

  const matchBySlug = items.find((d) => d.slug === id);
  const matchById = items.find((d) => d.id === id);
  const current = matchBySlug || matchById;

  if (!current) return notFound();

  return <DecorClientPage current={current} items={items} slug={slug} />;
}

export function generateStaticParams() {
  return Object.entries(decorMap).flatMap(([slug, items]) =>
    items.flatMap((item) => [
      { slug, id: item.slug }, // e.g. russia-r1
      { slug, id: item.id },   // e.g. 1
    ])
  );
}
