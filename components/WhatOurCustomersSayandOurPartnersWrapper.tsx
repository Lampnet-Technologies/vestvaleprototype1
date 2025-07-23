"use client";
import React, { forwardRef } from "react";
import WhatOurCustomersSay from "./WhatOurCustomersSay";
import OurPartners from "./OurPartners";

const WhatOurCustomersSayandOurPartnersWrapper = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="w-full py-20 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dnoycjq2q/image/upload/v1753287918/BgWhatOurCustomersSay_pqibzv.png")',
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10">
        <WhatOurCustomersSay />
        <OurPartners />
      </div>
    </section>
  );
});

WhatOurCustomersSayandOurPartnersWrapper.displayName = "WhatOurCustomersSayandOurPartnersWrapper";
export default WhatOurCustomersSayandOurPartnersWrapper;
