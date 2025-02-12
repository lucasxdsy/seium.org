import dynamic from "next/dynamic";

import Title from "./Title";

const Animation = dynamic(() => import("@components/Animation"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="bg-tertiary">
      <div className="spacing relative z-20 pb-32">
        <Animation type="3" />
        <div className="pt-2">
          <Title />
        </div>
      </div>
    </div>
  );
}
