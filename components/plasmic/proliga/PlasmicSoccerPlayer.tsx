// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: -eOKDhlYVUJ1

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import SoccerPlaceMens2 from "../../SoccerPlaceMens2"; // plasmic-import: xodLqMOhDs29/component
import AvatarPlayerShowScore from "../../AvatarPlayerShowScore"; // plasmic-import: kJWqOT85FINq/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicSoccerPlayer.module.css"; // plasmic-import: -eOKDhlYVUJ1/css

createPlasmicElementProxy;

export type PlasmicSoccerPlayer__VariantMembers = {};
export type PlasmicSoccerPlayer__VariantsArgs = {};
type VariantPropType = keyof PlasmicSoccerPlayer__VariantsArgs;
export const PlasmicSoccerPlayer__VariantProps = new Array<VariantPropType>();

export type PlasmicSoccerPlayer__ArgsType = {
  teamPlayer?: any;
};
type ArgPropType = keyof PlasmicSoccerPlayer__ArgsType;
export const PlasmicSoccerPlayer__ArgProps = new Array<ArgPropType>(
  "teamPlayer"
);

export type PlasmicSoccerPlayer__OverridesType = {
  root?: Flex__<"div">;
  soccerPlaceMens2?: Flex__<typeof SoccerPlaceMens2>;
  goa?: Flex__<"div">;
  goaINside?: Flex__<"div">;
  def?: Flex__<"div">;
  inside?: Flex__<"div">;
  mid?: Flex__<"div">;
  midInside?: Flex__<"div">;
  str?: Flex__<"div">;
  strInside?: Flex__<"div">;
};

export interface DefaultSoccerPlayerProps {
  teamPlayer?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSoccerPlayer__RenderFunc(props: {
  variants: PlasmicSoccerPlayer__VariantsArgs;
  args: PlasmicSoccerPlayer__ArgsType;
  overrides: PlasmicSoccerPlayer__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    teamPlayer: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "4a52383e-910c-4348-b089-52e55916cc02",
        userArgs: {},
        cacheKey: `plasmic.$.4a52383e-910c-4348-b089-52e55916cc02.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    player: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "345bf220-80a5-4ffb-87f5-b4a288725944",
        userArgs: {},
        cacheKey: `plasmic.$.345bf220-80a5-4ffb-87f5-b4a288725944.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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
      <SoccerPlaceMens2
        data-plasmic-name={"soccerPlaceMens2"}
        data-plasmic-override={overrides.soccerPlaceMens2}
        className={classNames("__wab_instance", sty.soccerPlaceMens2)}
      />

      <div
        data-plasmic-name={"goa"}
        data-plasmic-override={overrides.goa}
        className={classNames(projectcss.all, sty.goa)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $props.teamPlayer.data.response.filter(
                x => x.position === "GOA"
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <div
              data-plasmic-name={"goaINside"}
              data-plasmic-override={overrides.goaINside}
              className={classNames(projectcss.all, sty.goaINside)}
              key={currentIndex}
            >
              <AvatarPlayerShowScore
                capitanVisibility={(() => {
                  try {
                    return currentItem.is_captain === true;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return false;
                    }
                    throw e;
                  }
                })()}
                className={classNames(
                  "__wab_instance",
                  sty.avatarPlayerShowScore__txnxY
                )}
                image={(() => {
                  try {
                    return $queries.player.data.response.find(
                      x => x.id === currentItem.player_id
                    ).image;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                name={(() => {
                  try {
                    return $queries.player.data.response.find(
                      x => x.id === currentItem.player_id
                    ).name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                ochko={(() => {
                  try {
                    return currentItem.point;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />
            </div>
          );
        })}
      </div>
      <div
        data-plasmic-name={"def"}
        data-plasmic-override={overrides.def}
        className={classNames(projectcss.all, sty.def)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $props.teamPlayer.data.response.filter(
                x => x.position === "DEF"
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <div
              data-plasmic-name={"inside"}
              data-plasmic-override={overrides.inside}
              className={classNames(projectcss.all, sty.inside)}
              key={currentIndex}
            >
              <AvatarPlayerShowScore
                className={classNames(
                  "__wab_instance",
                  sty.avatarPlayerShowScore___9Ry4H
                )}
                image={(() => {
                  try {
                    return $queries.player.data.response.find(
                      x => x.id === currentItem.player_id
                    ).image;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                name={(() => {
                  try {
                    return $queries.player.data.response.find(
                      x => x.id === currentItem.player_id
                    ).name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                ochko={(() => {
                  try {
                    return currentItem.point;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />
            </div>
          );
        })}
      </div>
      <div
        data-plasmic-name={"mid"}
        data-plasmic-override={overrides.mid}
        className={classNames(projectcss.all, sty.mid)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $props.teamPlayer.data.response.filter(
                x => x.position === "MID"
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <div
              data-plasmic-name={"midInside"}
              data-plasmic-override={overrides.midInside}
              className={classNames(projectcss.all, sty.midInside)}
              key={currentIndex}
            >
              <AvatarPlayerShowScore
                className={classNames(
                  "__wab_instance",
                  sty.avatarPlayerShowScore__fsYvx
                )}
                image={(() => {
                  try {
                    return $queries.player.data.response.find(
                      x => x.id === currentItem.player_id
                    ).image;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                name={(() => {
                  try {
                    return $queries.player.data.response.find(
                      x => x.id === currentItem.player_id
                    ).name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                ochko={(() => {
                  try {
                    return currentItem.point;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />
            </div>
          );
        })}
      </div>
      <div
        data-plasmic-name={"str"}
        data-plasmic-override={overrides.str}
        className={classNames(projectcss.all, sty.str)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $props.teamPlayer.data.response.filter(
                x => x.position === "STR"
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <div
              data-plasmic-name={"strInside"}
              data-plasmic-override={overrides.strInside}
              className={classNames(projectcss.all, sty.strInside)}
              key={currentIndex}
            >
              <AvatarPlayerShowScore
                className={classNames(
                  "__wab_instance",
                  sty.avatarPlayerShowScore__cqYqw
                )}
                image={(() => {
                  try {
                    return $queries.player.data.response.find(
                      x => x.id === currentItem.player_id
                    ).image;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                name={(() => {
                  try {
                    return $queries.player.data.response.find(
                      x => x.id === currentItem.player_id
                    ).name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                ochko={(() => {
                  try {
                    return currentItem.point;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "soccerPlaceMens2",
    "goa",
    "goaINside",
    "def",
    "inside",
    "mid",
    "midInside",
    "str",
    "strInside"
  ],
  soccerPlaceMens2: ["soccerPlaceMens2"],
  goa: ["goa", "goaINside"],
  goaINside: ["goaINside"],
  def: ["def", "inside"],
  inside: ["inside"],
  mid: ["mid", "midInside"],
  midInside: ["midInside"],
  str: ["str", "strInside"],
  strInside: ["strInside"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  soccerPlaceMens2: typeof SoccerPlaceMens2;
  goa: "div";
  goaINside: "div";
  def: "div";
  inside: "div";
  mid: "div";
  midInside: "div";
  str: "div";
  strInside: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSoccerPlayer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSoccerPlayer__VariantsArgs;
    args?: PlasmicSoccerPlayer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSoccerPlayer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSoccerPlayer__ArgsType,
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
          internalArgPropNames: PlasmicSoccerPlayer__ArgProps,
          internalVariantPropNames: PlasmicSoccerPlayer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSoccerPlayer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSoccerPlayer";
  } else {
    func.displayName = `PlasmicSoccerPlayer.${nodeName}`;
  }
  return func;
}

export const PlasmicSoccerPlayer = Object.assign(
  // Top-level PlasmicSoccerPlayer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    soccerPlaceMens2: makeNodeComponent("soccerPlaceMens2"),
    goa: makeNodeComponent("goa"),
    goaINside: makeNodeComponent("goaINside"),
    def: makeNodeComponent("def"),
    inside: makeNodeComponent("inside"),
    mid: makeNodeComponent("mid"),
    midInside: makeNodeComponent("midInside"),
    str: makeNodeComponent("str"),
    strInside: makeNodeComponent("strInside"),

    // Metadata about props expected for PlasmicSoccerPlayer
    internalVariantProps: PlasmicSoccerPlayer__VariantProps,
    internalArgProps: PlasmicSoccerPlayer__ArgProps
  }
);

export default PlasmicSoccerPlayer;
/* prettier-ignore-end */
