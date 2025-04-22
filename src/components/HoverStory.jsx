// components/HoverHeadline.jsx
"use client";

const HoverHeadline = () => {
  return (
    <h1 className="self-start lg:self-center relative inline-block">
      Car les histoires créent de&nbsp;
      <span className="relative z-10 inline-block group">
        <span className="relative z-20">l&apos;émotion</span>
        <span className="absolute inset-0 bg-secondary-50 z-10 transform scale-x-0 group-hover:scale-x-105 origin-bottom-right group-hover:origin-bottom-left transition-transform duration-300 ease-in-out" />
      </span>
    </h1>
  );
};

export default HoverHeadline;