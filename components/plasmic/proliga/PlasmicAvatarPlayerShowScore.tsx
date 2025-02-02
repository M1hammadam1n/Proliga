// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: kJWqOT85FINq

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import PointInfo from "../../PointInfo"; // plasmic-import: YXttCG7EcY9J/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicAvatarPlayerShowScore.module.css"; // plasmic-import: kJWqOT85FINq/css

createPlasmicElementProxy;

export type PlasmicAvatarPlayerShowScore__VariantMembers = {};
export type PlasmicAvatarPlayerShowScore__VariantsArgs = {};
type VariantPropType = keyof PlasmicAvatarPlayerShowScore__VariantsArgs;
export const PlasmicAvatarPlayerShowScore__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAvatarPlayerShowScore__ArgsType = {
  name?: string;
  capitanVisibility?: boolean;
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  onclickX?: (event: any) => void;
  updateCapitan?: (event: any) => void;
  ochko?: string;
};
type ArgPropType = keyof PlasmicAvatarPlayerShowScore__ArgsType;
export const PlasmicAvatarPlayerShowScore__ArgProps = new Array<ArgPropType>(
  "name",
  "capitanVisibility",
  "image",
  "onclickX",
  "updateCapitan",
  "ochko"
);

export type PlasmicAvatarPlayerShowScore__OverridesType = {
  root?: Flex__<"div">;
  pointInfo?: Flex__<typeof PointInfo>;
};

export interface DefaultAvatarPlayerShowScoreProps {
  name?: string;
  capitanVisibility?: boolean;
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  onclickX?: (event: any) => void;
  updateCapitan?: (event: any) => void;
  ochko?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAvatarPlayerShowScore__RenderFunc(props: {
  variants: PlasmicAvatarPlayerShowScore__VariantsArgs;
  args: PlasmicAvatarPlayerShowScore__ArgsType;
  overrides: PlasmicAvatarPlayerShowScore__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          name: "Player",
          capitanVisibility: false,
          ochko: "7"
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      {(() => {
        try {
          return $props.capitanVisibility;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__mEbLy)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={
            "https://www.serieafantasy.com/static/media/select-captain.94d730cd.svg"
          }
          width={"15px"}
        />
      ) : null}
      <div
        className={classNames(projectcss.all, sty.freeBox__fku2O)}
        onClick={args.updateCapitan}
      >
        {(() => {
          try {
            return $props.image === undefined;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__uChDu)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"47px"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};
            }}
            src={{
              src: "/plasmic/proliga/images/formsvg.svg",
              fullWidth: 42,
              fullHeight: 42,
              aspectRatio: 1
            }}
            width={"52.5px"}
          />
        ) : null}
        {(() => {
          try {
            return $props.image != undefined;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__yBf8V)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};
            }}
            src={args.image}
            width={"52.5px"}
          />
        ) : null}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___9RtP1)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___55WAw)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lshwv
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Player";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__ucIpp)}>
          <PointInfo
            data-plasmic-name={"pointInfo"}
            data-plasmic-override={overrides.pointInfo}
            className={classNames("__wab_instance", sty.pointInfo)}
            ochko={args.ochko}
          />

          {(() => {
            try {
              return $props.ochko === undefined;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oo52T
              )}
            >
              {"-"}
            </div>
          ) : null}
          {(() => {
            try {
              return $props.ochko != undefined;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <div className={classNames(projectcss.all, sty.freeBox__wvMcS)}>
              {(() => {
                try {
                  return $props.capitanVisibility != true;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tw8Yc
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $props.ochko;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "-";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              ) : null}
              {(() => {
                try {
                  return $props.capitanVisibility === true;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__urcRl
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $props.ochko * 2;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "-";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pointInfo"],
  pointInfo: ["pointInfo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pointInfo: typeof PointInfo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAvatarPlayerShowScore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAvatarPlayerShowScore__VariantsArgs;
    args?: PlasmicAvatarPlayerShowScore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAvatarPlayerShowScore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAvatarPlayerShowScore__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAvatarPlayerShowScore__ArgProps,
          internalVariantPropNames: PlasmicAvatarPlayerShowScore__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAvatarPlayerShowScore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatarPlayerShowScore";
  } else {
    func.displayName = `PlasmicAvatarPlayerShowScore.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatarPlayerShowScore = Object.assign(
  // Top-level PlasmicAvatarPlayerShowScore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pointInfo: makeNodeComponent("pointInfo"),

    // Metadata about props expected for PlasmicAvatarPlayerShowScore
    internalVariantProps: PlasmicAvatarPlayerShowScore__VariantProps,
    internalArgProps: PlasmicAvatarPlayerShowScore__ArgProps
  }
);

export default PlasmicAvatarPlayerShowScore;
/* prettier-ignore-end */
