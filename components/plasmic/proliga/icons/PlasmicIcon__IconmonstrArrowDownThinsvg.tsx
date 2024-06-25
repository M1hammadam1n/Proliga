// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconmonstrArrowDownThinsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function IconmonstrArrowDownThinsvgIcon(
  props: IconmonstrArrowDownThinsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 21.883l-6.235-7.527L4 15l7.521 9L19 15l-.764-.645L12 21.884V0h-1v21.883z"
        }
      ></path>
    </svg>
  );
}

export default IconmonstrArrowDownThinsvgIcon;
/* prettier-ignore-end */
