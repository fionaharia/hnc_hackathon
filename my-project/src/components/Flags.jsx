import { StaticImage } from "next/image";
import { Language } from "~/utils/languages";
import Flags from "../assets/flags.svg";

const Flag = ({
  language,
  width = 84,
}: {
  language: Language;
  width?: number;
}) => {
  const height = width * (19.3171 / 24);
  return (
    <svg viewBox={language.viewBox} style={{ height, width }}>
      <StaticImage
        src={Flags}
        alt="Flag"
        width={Flags.width}
        height={Flags.height}
      />
    </svg>
  );
};

export default Flag;
