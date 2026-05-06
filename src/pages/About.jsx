import React from "react";

const About = () => {
  return (
    <div className="relative py-10 flex flex-col gap-20 items-center justify-start bg-[url('about-image-3.jpg')] bg-cover bg-center text-black h-screen">
      <div className="absolute inset-0 bg-black/70"></div>
      <h1 className="relative text-6xl font-cursive3 capitalize text-white">
        bloom skin
      </h1>
      <p className="relative text-white text-justify text-xl w-5/6">
        At BloomSkin, we believe that true beauty starts with healthy, radiant
        skin. Our journey began with a simple mission to create skincare
        products that are pure, effective, and inspired by nature. We carefully
        craft each product using high-quality, skin-loving ingredients that
        nourish, hydrate, and enhance your natural glow. Our formulas are
        designed to be gentle yet powerful, suitable for all skin types.
        BloomSkin is more than just skincare it's a self-care experience. We are
        committed to helping you feel confident in your own skin, every single
        day.
      </p>
      <div className="relative flex flex-col gap-8 w-5/6">
        <h2 className="text-4xl capitalize text-white font-cursive3">
          why choose bloomskin
        </h2>
        <ul className="flex flex-col gap-3 text-xl text-white">
          <li>🌿 Made with natural ingredients </li>
          <li>🐰 100% cruelty-free products</li>
          <li>💧 Deep hydration & nourishment</li>
          <li>♻️ Eco-friendly packaging</li>
          <li>✨ Suitable for all skin types </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
