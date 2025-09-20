import CountryDynamicComponent from "@/components/CountryComponents/CountryDynamicComponent";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import Image from "next/image";

type propertyImage = { image: string; text: string; id: string };

export const countryPropertyData: Record<
  string,
  {
    title: string;
    description: string;
    images: propertyImage[];
  }
> = {
  russia: {
    title: "About our Russian Home Decor",
    description:
      "The Vestvale Estate is a celebration of global culture and craftsmanship. Our Russian-inspired interiors are designed to evoke the rich history and artistry of Russia, blending traditional elements with modern luxury.",
    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772058/v2_srqlek.png",
        text: "Russia Decor One",
        id: "russian-decor-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772016/R1_fzcmkq.png",
        text: "Russia Decor Two",
        id: "russian-decor-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772016/R1_fzcmkq.png",
        text: "Russia Decor Three",
        id: "russian-decor-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772013/R3_i23dxb.png",
        text: "Russia Decor Four",
        id: "russian-decor-four",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772013/R4_kf10un.png",
        text: "Russia Decor Five",
        id: "russian-decor-five",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772010/R2_b5jreh.png",
        text: "Russia Decor Six",
        id: "russian-decor-six",
      },
    ],
  },
  china: {
    title: "About our Chinese Home Decor",
    description:
      "The Vestvale Estate is a celebration of global culture and craftsmanship. Our Chinese-inspired interiors are designed to evoke the rich history and artistry of China, blending traditional elements with modern luxury.",
    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771946/file_00000000119c622fb312aa694ac3275e_eyeit7.png",
        text: "Chinese Interior One",
        id: "chinese-decor-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771929/file_00000000284061f8ac00b66c24e770b7_loz2mt.png",
        text: "Chinese Interior Two",
        id: "chinese-decor-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771918/file_000000006c2c622f9e9037db2106c666_kc2utm.png",
        text: "Chinese Interior Three",
        id: "chinese-decor-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758040705/chinese-decor-04_a0or4q.jpg",
        text: "Chinese Interior Four",
        id: "chinese-decor-four",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758040724/chinese-decor-05_rrzuqk.jpg",
        text: "Chinese Interior Five",
        id: "chinese-decor-five",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758040716/chinese-decor-06_kyw6ft.jpg",
        text: "Chinese Interior Six",
        id: "chinese-decor-six",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758040717/chinese-decor-07_qopttv.jpg",
        text: "Chinese Interior Seven",
        id: "chinese-decor-seven",
      },
    ],
  },
  italy: {
    title: "About our Italian Home Decor",
    description:
      "The Vestvale Estate is a celebration of global culture and craftsmanship. Our Italian-inspired interiors are designed to evoke the rich history and artistry of Italy, blending traditional elements with modern luxury.",
    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771940/Italy1_ub7nfm.png",
        text: "Italian Interior One",
        id: "italian-decor-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771934/Italy4_kuelya.png",
        text: "Italian Interior Two",
        id: "italian-decor-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771932/Italy2_yd99cw.png",
        text: "Italian Interior Three",
        id: "italian-decor-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771913/file_00000000aab861f59fb63a20bdf44a55_pwln1m.png",
        text: "Italian Interior Four",
        id: "italian-decor-four",
      },
    ],
  },
  morocco: {
    title: "About our Moroccan Home Decor",
    description:
      "The Vestvale Estate is a celebration of global culture and craftsmanship. Our Moroccan-inspired interiors are designed to evoke the rich history and artistry of Morocco, blending traditional elements with modern luxury.",
    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771983/M1_k7ulov.png",
        text: "Morrocan Interior One",
        id: "moroccan-decor-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771980/M3_spaizw.png",
        text: "Morrocan Interior Two",
        id: "moroccan-decor-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771980/M4_dhqn9p.png",
        text: "Morrocan Interior Three",
        id: "moroccan-decor-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771977/M2_bpc6ps.png",
        text: "Morrocan Interior Four",
        id: "moroccan-decor-four",
      },
    ],
  },
};

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
