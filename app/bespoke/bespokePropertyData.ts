export type PropertyImage = { image: string; text: string; id: string };

export const bespokePropertyData: Record<
  string,
  {
    title: string;
    description: string;
    images: PropertyImage[];
  }
> = {
  astoria: {
    title: "About Astoria Home Interior",
    description:
      "Astoria Home Interior is a bespoke interior design, specializing in creating luxurious and timeless living spaces. With a keen eye for detail and a commitment to quality craftsmanship, Astoria transforms homes into elegant sanctuaries that reflect the unique tastes and lifestyles of their clients.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427762/Astoria1_omjh5i.jpg", text: "Astoria One", id: "astoria-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427779/Astoria2_pezggi.jpg", text: "Astoria Two", id: "astoria-two" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427728/Astoria3_sxz4vp.jpg", text: "Astoria Three", id: "astoria-three" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427728/Astoria4_tbiqse.jpg", text: "Astoria Four", id: "astoria-four" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427728/Astoria5_f4dmcs.jpg", text: "Astoria Five", id: "astoria-five" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427728/Astoria6_nmhjjq.jpg", text: "Astoria Six", id: "astoria-six" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427728/Astoria8_kgvtll.jpg", text: "Astoria Seven", id: "astoria-seven" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427729/Astoria9_fy30ju.jpg", text: "Astoria Eight", id: "astoria-eight" },
    ],
  },

  emerald: {
    title: "About Emerald Home Interior",
    description:
      "Emerald Home Interior is a bespoke interior design, specializing in creating luxurious and timeless living spaces. With a keen eye for detail and a commitment to quality craftsmanship, Emerald transforms homes into elegant sanctuaries that reflect the unique tastes and lifestyles of their clients.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427729/Emerald1_ycgyow.jpg", text: "Emerald One", id: "emerald-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427729/emerald2_wa7hvj.jpg", text: "Emerald Two", id: "emerald-two" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427754/emerald3_dtuhdf.jpg", text: "Emerald Three", id: "emerald-three" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427753/Emerald4_hrw215.jpg", text: "Emerald Four", id: "emerald-four" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427729/Emerald5_d1rfva.jpg", text: "Emerald Five", id: "emerald-five" },
    ],
  },

  sapphire: {
    title: "About Sapphire Home Interior",
    description:
      "Sapphire Home Interior is a bespoke interior design, specializing in creating luxurious and timeless living spaces. With a keen eye for detail and a commitment to quality craftsmanship, Sapphire transforms homes into elegant sanctuaries that reflect the unique tastes and lifestyles of their clients.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427760/Sapphire1_zbff9u.jpg", text: "Sapphire One", id: "sapphire-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427760/Sapphire2_tnrv4b.jpg", text: "Sapphire Two", id: "sapphire-two" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427761/Sapphire3_rtlztk.jpg", text: "Sapphire Three", id: "sapphire-three" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427764/Sapphire4_xgxo7l.jpg", text: "Sapphire Four", id: "sapphire-four" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427779/saphire9_g7lwy1.jpg", text: "Sapphire Five", id: "sapphire-five" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427761/Sapphire6_bk36e2.jpg", text: "Sapphire Six", id: "sapphire-six" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427771/Sapphire7_x2pa7f.jpg", text: "Sapphire Seven", id: "sapphire-seven" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427754/saphire8_q8ps4v.jpg", text: "Sapphire Eight", id: "sapphire-eight" },
    ],
  },

  windsor: {
    title: "About Windsor Home Interior",
    description:
      "Windsor Home Interior is a bespoke interior design, specializing in creating luxurious and timeless living spaces. With a keen eye for detail and a commitment to quality craftsmanship, Windsor transforms homes into elegant sanctuaries that reflect the unique tastes and lifestyles of their clients.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427770/Windsor_1_x3puah.jpg", text: "Windsor One", id: "windsor-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427770/Windsor_2_gtbwo8.jpg", text: "Windsor Two", id: "windsor-two" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427770/windsor3_cv9e00.jpg", text: "Windsor Three", id: "windsor-three" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427771/windsor4_bqykfr.jpg", text: "Windsor Four", id: "windsor-four" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427754/windsor5_lzkaxy.jpg", text: "Windsor Five", id: "windsor-five" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427759/windsor6_kdbb2i.jpg", text: "Windsor Six", id: "windsor-six" },
    ],
  },
};
