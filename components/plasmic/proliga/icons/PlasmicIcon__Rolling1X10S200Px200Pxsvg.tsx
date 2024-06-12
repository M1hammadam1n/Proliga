// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rolling1X10S200Px200PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rolling1X10S200Px200PxsvgIcon(
  props: Rolling1X10S200Px200PxsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      style={{
        background: '#fff"',

        ...(style || {}),
      }}
      shapeRendering={"auto"}
      display={"block"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        strokeDasharray={"164.93361431346415 56.97787143782138"}
        r={"35"}
        strokeWidth={"10"}
        stroke={"currentColor"}
        fill={"none"}
        cy={"50"}
        cx={"50"}
      >
        <animateTransform
          keyTimes={"0;1"}
          values={"0 50 50;360 50 50"}
          dur={"1s"}
          repeatCount={"indefinite"}
          type={"rotate"}
          attributeName={"transform"}
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default Rolling1X10S200Px200PxsvgIcon;
/* prettier-ignore-end */
