import CountryDynamicComponent from "@/components/CountryComponents/CountryDynamicComponent";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

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
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772031/Russia-06_y7u2jj.jpg",
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
  bespoke: {
    title: "About Our Bespoke Home Decor",
    description: "Vestvale Estate offers bespoke home decor services, allowing you to create personalized and unique interior designs that reflect your individual style and preferences. Our team of skilled designers works closely with you to bring your vision to life, ensuring every detail is tailored to your taste. From custom furniture to exclusive decor pieces, our bespoke services provide a one-of-a-kind experience that transforms your living space into a true reflection of you.",
    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845044/bespoke1_nnhitd.jpg",
        text: "Bespoke Interior One",
        id: "bespoke-decor-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845065/bespoke2_id9xzs.jpg",
        text: "Bespoke Interior Two",
        id: "bespoke-decor-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845049/bespoke11_gdygfj.jpg",
        text: "Bespoke Interior Three",
        id: "bespoke-decor-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845043/bespoke4_iqvhqp.jpg",
        text: "Bespoke Interior Four",
        id: "bespoke-decor-four",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845045/bespoke5_n7szzh.jpg",
        text: "Bespoke Interior Five",
        id: "bespoke-decor-five",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845051/bespoke6_hmcnth.jpg",
        text: "Bespoke Interior Six",
        id: "bespoke-decor-six",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845050/bespoke7_sp2pzj.jpg",
        text: "Bespoke Interior Seven",
        id: "bespoke-decor-seven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845050/bespoke8_dlcv25.jpg",
        text: "Bespoke Interior Eight",
        id: "bespoke-decor-eight",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845062/bespoke9_pqr6ea.jpg",
        text: "Bespoke Interior Nine",
        id: "bespoke-decor-nine",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845046/bespoke10_lqwdhl.jpg",
        text: "Bespoke Interior Ten",
        id: "bespoke-decor-ten",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845052/bespoke3_vtrwq3.jpg",
        text: "Bespoke Interior Eleven",
        id: "bespoke-decor-eleven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845052/bespoke12_w9udad.jpg",
        text: "Bespoke Interior Twelve",
        id: "bespoke-decor-twelve",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845049/bespoke13_kti19l.jpg",
        text: "Bespoke Interior Thirteen",
        id: "bespoke-decor-thirteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845040/bespoke14_ezpvxe.jpg",
        text: "Bespoke Interior Fourteen",
        id: "bespoke-decor-fourteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845043/bespoke15_vm2okj.jpg",
        text: "Bespoke Interior Fifteen",
        id: "bespoke-decor-fifteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845043/bespoke16_tkyruz.jpg",
        text: "Bespoke Interior Sixteen",
        id: "bespoke-decor-sixteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845043/bespoke17_gsysek.jpg",
        text: "Bespoke Interior Seventeen",
        id: "bespoke-decor-seventeen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845043/bespoke18_f8s267.jpg",
        text: "Bespoke Interior Eighteen",
        id: "bespoke-decor-eighteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845040/bespoke19_zvrsct.jpg",
        text: "Bespoke Interior Nineteen",
        id: "bespoke-decor-nineteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845084/bespoke20_tpetqk.jpg",
        text: "Bespoke Interior Twenty",
        id: "bespoke-decor-twenty",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845079/bespoke21_wz3ajw.jpg",
        text: "Bespoke Interior Twenty-One",
        id: "bespoke-decor-twenty-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845080/bespoke22_sfpdv7.jpg",
        text: "Bespoke Interior Twenty-Two",
        id: "bespoke-decor-twenty-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845074/bespoke23_zjnhw3.jpg",
        text: "Bespoke Interior Twenty-Three",
        id: "bespoke-decor-twenty-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845063/bespoke24_mc4p1z.jpg",
        text: "Bespoke Interior Twenty-Four",
        id: "bespoke-decor-twenty-four",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845069/bespoke25_obgolt.jpg",
        text: "Bespoke Interior Twenty-Five",
        id: "bespoke-decor-twenty-five",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845061/bespoke26_pup9xl.jpg",
        text: "Bespoke Interior Twenty-Six",
        id: "bespoke-decor-twenty-six",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758845063/bespoke27_ctyx3u.jpg",
        text: "Bespoke Interior Twenty-Seven",
        id: "bespoke-decor-twenty-seven",
      }
    ],
  }
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
