import { FC } from "react";

interface TextProps {
  weight?: string;
  size?: string;
  lineHeight?: string;
  color?: string;
  text: string;
}

const Text: FC<TextProps> = ({
  weight = "normal",
  size = "14px",
  lineHeight = "23px",
  color = "white",
  text,
}) => {
  return (
    <p
      className="font-[var(--font-nunito)]"
      style={{
        fontWeight: weight,
        fontSize: size,
        lineHeight: lineHeight,
        color: color,
      }}
    >
      {text}
    </p>
  );
};

export default Text;
