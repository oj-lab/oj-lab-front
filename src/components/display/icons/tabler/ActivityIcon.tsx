import { FC } from "react";
import { DefaultTablerIconStrokeWidth } from "@/utils/consts";

const ActivityIcon: FC<{
  className?: string;
}> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={DefaultTablerIconStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h4l3 8l4 -16l3 8h4" />
    </svg>
  );
};

export default ActivityIcon;
