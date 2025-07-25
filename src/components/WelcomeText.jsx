import React from "react";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";

const WelcomeText = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <TextPressure
        text="Hello!"
        flex={true}
        alpha={false}
        stroke={true}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#0000ff"
        minFontSize={120}
      />

      <RotatingText
        texts={["React", "Bits", "Is", "Cool!"]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
};

export default WelcomeText;
