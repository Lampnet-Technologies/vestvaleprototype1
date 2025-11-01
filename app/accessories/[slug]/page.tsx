import { type Metadata } from "next";
import AccessoryDynamicComponent from "@/components/AccessoryComponent/AccessoryDynamicComponent";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";


export const dynamic = "force-static";

type AccessoryImage = { image: string; text: string; id: string };

export const accessoriesData: Record<
  string,
  {
    title: string;
    description: string;
    images: AccessoryImage[];
  }
> = {
  doors: {
    title: "About Our Doors Accessories",
    description:
      "Our doors are designed to be more than just functional elements; they are a statement of style and sophistication. Crafted with precision and attention to detail, each door reflects our commitment to quality and design excellence.",
    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863733/door-01_l4mkb9.svg",
        text: "door-one",
        id: "door-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863737/door-02_lqrk81.svg",
        text: "door-two",
        id: "door-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863739/door-03_nq89hb.svg",
        text: "door-three",
        id: "door-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863742/door-04_b9z7s9.svg",
        text: "door-four",
        id: "door-four",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863715/door-05_tassgr.svg",
        text: "door-five",
        id: "door-five",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863716/door-06_pvxpt2.svg",
        text: "door-six",
        id: "door-six",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863718/door-07_wzqcea.svg",
        text: "door-seven",
        id: "door-seven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863720/door-08_eevlf1.svg",
        text: "door-eight",
        id: "door-eight",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863723/door-09_bcyh0r.svg",
        text: "door-nine",
        id: "door-nine",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863724/door-10_agl9pz.svg",
        text: "door-ten",
        id: "door-ten",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863727/door-11_kdh3cu.svg",
        text: "door-eleven",
        id: "door-eleven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863729/door-12_ehernk.svg",
        text: "door-twelve",
        id: "door-twelve",
      },
    ],
  },
  "door-handles": {
    title: "About Our Door Handles Accessories",
    description:
      "Our door handles are designed to complement our doors, adding a touch of elegance and functionality. Crafted with high-quality materials, each handle is a perfect blend of style and durability, ensuring that your doors not only look great but also function flawlessly.",

    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752865128/door-handle-01_w5rxkd.svg",
        text: "door handle one",
        id: "door-handle-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752865127/door-handle-02_oh320d.svg",
        text: "door handle two",
        id: "door-handle-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752865130/door-handle-03_nqxcsd.svg",
        text: "door handle three",
        id: "door-handle-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771879/DH1_j9uxds.jpg",
        text: "door handle four",
        id: "door-handle-four",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771901/DH11_ocqo6s.jpg",
        text: "door handle five",
        id: "door-handle-five",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771904/DH12_yj0ynu.jpg",
        text: "door handle six",
        id: "door-handle-six",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771880/DH2_zftzic.jpg",
        text: "door handle seven",
        id: "door-handle-seven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771880/DH4_jdhlrg.jpg",
        text: "door handle eight",
        id: "door-handle-eight",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771881/DH5_qwaa0g.jpg",
        text: "door handle nine",
        id: "door-handle-nine",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771893/DH6_f9jim7.jpg",
        text: "door handle ten",
        id: "door-handle-ten",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771894/DH8_kwvxeq.jpg",
        text: "door handle eleven",
        id: "door-handle-eleven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771896/DH9_qsgo6h.jpg",
        text: "door handle twelve",
        id: "door-handle-twelve",
      },
    ],
  },
  lights: {
    title: "About Our Lighting Accessories",
    description:
      "Our lighting accessories are designed to illuminate your spaces with style and sophistication. Each piece is crafted to enhance the ambiance of your home, providing both functionality and aesthetic appeal. From elegant chandeliers to modern pendant lights, our collection offers a variety of options to suit every taste.",

    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772009/mmexport1748708887089_tjhojd.jpg",
        text: "light one",
        id: "light-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772006/mmexport1748708902266_tabbd8.jpg",
        text: "light two",
        id: "light-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771985/mmexport1748443273048_c37cdg.jpg",
        text: "light three",
        id: "light-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771980/mmexport1748443184366_rpcnfp.jpg",
        text: "light four",
        id: "light-four",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771975/L17_fgwgbd.jpg",
        text: "light five",
        id: "light-five",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771964/L13_mltxer.jpg",
        text: "light six",
        id: "light-six",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771961/L12_mabx0z.jpg",
        text: "light seven",
        id: "light-seven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771955/L11_t63n3v.jpg",
        text: "light eight",
        id: "light-eight",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771954/L10_zzsykc.jpg",
        text: "light nine",
        id: "light-nine",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771953/L9_fg09vn.jpg",
        text: "light ten",
        id: "light-ten",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771952/L8_amq7gb.jpg",
        text: "light eleven",
        id: "light-eleven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771939/l3_wwzii5.jpg",
        text: "light twelve",
        id: "light-twelve",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771939/l5_b2qup0.jpg",
        text: "light thirteen",
        id: "light-thirteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771938/l4_ujpvkm.jpg",
        text: "light fourteen",
        id: "light-fourteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771937/l2_hnr8ca.jpg",
        text: "light fifteen",
        id: "light-fifteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771936/l1_ipver7.jpg",
        text: "light sixteen",
        id: "light-sixteen",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385303/light-17_ldvd8u.jpg",
        text: "light seventeen",
        id: "light-seventeen",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385303/light-18_hhwjxj.jpg",
        text: "light eighteen",
        id: "light-eighteen",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385303/light-19_zom6az.jpg",
        text: "light nineteen",
        id: "light-nineteen",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385303/light-20_yz9g3x.jpg",
        text: "light twenty",
        id: "light-twenty",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385304/light-21_vgec2e.jpg",
        text: "light twenty one",
        id: "light-twenty-one",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385304/light-22_a9lvvb.jpg",
        text: "light twenty two",
        id: "light-twenty-two",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385304/light-23_lnghsi.jpg",
        text: "light twenty three",
        id: "light-twenty-three",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385305/light-24_mrgui1.jpg",
        text: "light twenty four",
        id: "light-twenty-four",
      },
       {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1758385303/light-25_qhk3p7.jpg",
        text: "light twenty five",
        id: "light-twenty-five",
      },
    ],
  },
  wallpapers: {
    title: "About Our Wallpapers Accessories ",
    description:
      "Our wallpapers are designed to transform your walls into works of art. With a wide range of patterns, textures, and colors, our collection offers something for every style. Whether you prefer bold statements or subtle elegance, our wallpapers will enhance the beauty of your interiors.",
    images: [
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772167/WhatsApp_Image_2025-05-31_at_09.49.39_bcdc07df_tqwrct.jpg",
        text: "wallpaper-one",
        id: "wallpaper-one",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772167/WhatsApp_Image_2025-05-31_at_09.49.38_ecc7b942_gxjaar.jpg",
        text: "wallpaper-two",
        id: "wallpaper-two",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772166/WhatsApp_Image_2025-05-31_at_09.49.38_41df8110_hna74p.jpg",
        text: "wallpaper-three",
        id: "wallpaper-three",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772152/W18_dbqc92.jpg",
        text: "wallpaper-four",
        id: "wallpaper-four",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772145/W17_t8ii1k.jpg",
        text: "wallpaper-five",
        id: "wallpaper-five",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772144/W14_qzclki.jpg",
        text: "wallpaper-six",
        id: "wallpaper-six",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772144/W16_twkum5.jpg",
        text: "wallpaper-seven",
        id: "wallpaper-seven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772143/W15_sfgifu.jpg",
        text: "wallpaper-eight",
        id: "wallpaper-eight",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772139/W13_yylyga.jpg",
        text: "wallpaper-nine",
        id: "wallpaper-nine",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772119/W12_ihktmt.jpg",
        text: "wallpaper-ten",
        id: "wallpaper-ten",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772119/w10_ozornt.jpg",
        text: "wallpaper-eleven",
        id: "wallpaper-eleven",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772117/w11_k3xp7i.jpg",
        text: "wallpaper-twelve",
        id: "wallpaper-twelve",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772115/w8_sfk9id.jpg",
        text: "wallpaper-thirteen",
        id: "wallpaper-thirteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772114/w9_jlmzdr.jpg",
        text: "wallpaper-fourteen",
        id: "wallpaper-fourteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772009/mmexport1748657099248_eqxzy6.jpg",
        text: "wallpaper-fifteen",
        id: "wallpaper-fifteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772007/mmexport1748573163380_flsxkr.jpg",
        text: "wallpaper-sixteen",
        id: "wallpaper-sixteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771998/mmexport1748572390478_szfmhk.jpg",
        text: "wallpaper-seventeen",
        id: "wallpaper-seventeen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771872/1748572496523_msdodm.png",
        text: "wallpaper-eighteen",
        id: "wallpaper-eighteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772090/w5_rcpu8z.jpg",
        text: "wallpaper-nineteen",
        id: "wallpaper-nineteen",
      },
      {
        image:
          "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772113/w7_k0cvwj.jpg",
        text: "wallpaper-twenty",
        id: "wallpaper-twenty",
      },
    ],
  },
  furniture: {
    title: "About Our Furniture Accessories ",
    description:
      "Our furniture accessories are designed to enhance the functionality and aesthetics of your living spaces. Each piece is crafted with attention to detail, combining style and practicality to create a harmonious environment. From elegant tables to comfortable seating, our furniture accessories are perfect for elevating your home decor.",
    images: [
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920812/furniture01_grykyf.png",
        text: "Furniture One",
        id: "Furniture-one",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920811/furniture02_zx5z54.png",
        text: "Furniture Two",
        id: "Furniture-two",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920812/furniture03_txwrno.png",
        text: "Furniture Three",
        id: "Furniture-three",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920815/furniture04_ycjsb8.png",
        text: "Furniture Four",
        id: "Furniture-four",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920813/furniture05_iar6wo.png",
        text: "Furniture Five",
        id: "Furniture-five",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920818/furniture06_mtktvv.png",
        text: "Furniture Six",
        id: "Furniture-six",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920825/furniture07_mzv8pk.png",
        text: "Furniture Seven",
        id: "Furniture-seven",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920814/furniture08_hpdl9a.jpg",
        text: "Furniture Eight",
        id: "Furniture-eight",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920818/furniture09_f2xwct.jpg",
        text: "Furniture Nine",
        id: "Furniture-nine",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920809/furniture10_di6cov.jpg",
        text: "Furniture Ten",
        id: "Furniture-ten",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920813/furniture11_h5auei.jpg",
        text: "Furniture Eleven",
        id: "Furniture-eleven",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920810/furniture12_nj3irw.jpg",
        text: "Furniture Twelve",
        id: "Furniture-twelve",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920814/furniture13_akvpgg.jpg",
        text: "Furniture Thirteen",
        id: "Furniture-thirteen",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920826/furniture14_hfa14e.jpg",
        text: "Furniture Fourteen",
        id: "Furniture-fourteen",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920819/furniture15_mifaxw.jpg",
        text: "Furniture Fifteen",
        id: "Furniture-fifteen",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920820/furniture16_cbn1cf.jpg",
        text: "Furniture Sixteen",
        id: "Furniture-sixteen",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920822/furniture17_wb4o56.jpg",
        text: "Furniture Seventeen",
        id: "Furniture-seventeen",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920822/furniture18_cijoax.jpg",
        text: "Furniture Eighteen",
        id: "Furniture-eighteen",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920820/furniture19_wl0vns.jpg",
        text: "Furniture Nineteen",
        id: "Furniture-nineteen",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920822/furniture20_kurgc5.jpg",
        text: "Furniture Twenty",
        id: "Furniture-twenty",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920822/furniture21_vydnru.jpg",
        text: "Furniture Twenty One",
        id: "Furniture-twenty-one",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920825/furniture22_dryv4g.jpg",
        text: "Furniture Twenty Two",
        id: "Furniture-twenty-two",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920823/furniture23_afvbzi.jpg",
        text: "Furniture Twenty Three",
        id: "Furniture-twenty-three",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920824/furniture24_gptcjz.jpg",
        text: "Furniture Twenty Four",
        id: "Furniture-twenty-four",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920824/furniture25_qc3zkm.jpg",
        text: "Furniture Twenty Five",
        id: "Furniture-twenty-five",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920825/furniture26_vmewgc.jpg",
        text: "Furniture Twenty Six",
        id: "Furniture-twenty-six",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920825/furniture27_hg9vss.jpg",
        text: "Furniture Twenty Seven",
        id: "Furniture-twenty-seven",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920825/furniture28_szkkx6.jpg",
        text: "Furniture Twenty Eight",
        id: "Furniture-twenty-eight",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920826/furniture29_dwvl4n.jpg",
        text: "Furniture Twenty Nine",
        id: "Furniture-twenty-nine",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920828/furniture30_s5mwuu.jpg",
        text: "Furniture Thirty",
        id: "Furniture-thirty",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920828/furniture31_gcvlyn.jpg",
        text: "Furniture Thirty One",
        id: "Furniture-thirty-one",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920832/furniture32_baec8m.jpg",
        text: "Furniture Thirty Two",
        id: "Furniture-thirty-two",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920844/furniture33_gcjbpx.jpg",
        text: "Furniture Thirty Three",
        id: "Furniture-thirty-three",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920832/furniture34_vnmgo3.jpg",
        text: "Furniture Thirty Four",
        id: "Furniture-thirty-four",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920829/furniture35_qnmved.jpg",
        text: "Furniture Thirty Five",
        id: "Furniture-thirty-five",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920828/furniture36_s30t6p.jpg",
        text: "Furniture Thirty Six",
        id: "Furniture-thirty-six",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920830/furniture37_mbzthm.jpg",
        text: "Furniture Thirty Seven",
        id: "Furniture-thirty-seven",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920830/furniture38_s0glgb.jpg",
        text: "Furniture Thirty Eight",
        id: "Furniture-thirty-eight",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920831/furniture39_wbzwmx.jpg",
        text: "Furniture Thirty Nine",
        id: "Furniture-thirty-nine",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920831/furniture40_mlppi1.jpg",
        text: "Furniture Forty",
        id: "Furniture-forty",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920832/furniture41_ypke7t.jpg",
        text: "Furniture Forty One",
        id: "Furniture-forty-one",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920832/furniture42_gg99ud.jpg",
        text: "Furniture Forty Two",
        id: "Furniture-forty-two",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920833/furniture43_jubo74.jpg",
        text: "Furniture Forty Three",
        id: "Furniture-forty-three",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920833/furniture44_pid4o0.jpg",
        text: "Furniture Forty Four",
        id: "Furniture-forty-four",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920833/furniture45_kqkccv.jpg",
        text: "Furniture Forty Five",
        id: "Furniture-forty-five",
      },
      {
        image:
          "https://res.cloudinary.com/ds9q0abgk/image/upload/v1761920809/furniture46_aumeuf.jpg",
        text: "Furniture Forty Six",
        id: "Furniture-forty-six",
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

const AccessoriesDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const content = accessoriesData[slug];

  if (!content) {
    return (
      <div className="text-center py-20 text-white">
        Accessory not available
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <BackButton topOffset={80} />
      <AccessoryDynamicComponent slug={slug} content={content} />
    </>
  );
};

export default AccessoriesDetailPage;

export function generateStaticParams() {
  return Object.keys(accessoriesData).map((slug) => ({ slug }));
}
