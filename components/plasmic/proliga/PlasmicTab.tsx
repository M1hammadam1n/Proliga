// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: uhxDTfbjAHDI

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

import { AntdTabs } from "@plasmicpkgs/antd5/skinny/registerTabs";
import { AntdTabItem } from "@plasmicpkgs/antd5/skinny/registerTabs";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicTab.module.css"; // plasmic-import: uhxDTfbjAHDI/css

createPlasmicElementProxy;

export type PlasmicTab__VariantMembers = {};
export type PlasmicTab__VariantsArgs = {};
type VariantPropType = keyof PlasmicTab__VariantsArgs;
export const PlasmicTab__VariantProps = new Array<VariantPropType>();

export type PlasmicTab__ArgsType = {};
type ArgPropType = keyof PlasmicTab__ArgsType;
export const PlasmicTab__ArgProps = new Array<ArgPropType>();

export type PlasmicTab__OverridesType = {
  root?: Flex__<"div">;
  tabs?: Flex__<typeof AntdTabs>;
  tabItem?: Flex__<typeof AntdTabItem>;
};

export interface DefaultTabProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTab__RenderFunc(props: {
  variants: PlasmicTab__VariantsArgs;
  args: PlasmicTab__ArgsType;
  overrides: PlasmicTab__OverridesType;
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
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "tabs.activeKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "02fcee8d-30c0-4235-9cf6-45cb00df74a7",
        userArgs: {},
        cacheKey: `plasmic.$.02fcee8d-30c0-4235-9cf6-45cb00df74a7.$.`,
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <AntdTabs
            data-plasmic-name={"tabs"}
            data-plasmic-override={overrides.tabs}
            activeKey={generateStateValueProp($state, ["tabs", "activeKey"])}
            animateTabBar={true}
            animateTabContent={false}
            animated={true}
            className={classNames("__wab_instance", sty.tabs)}
            items={(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $queries.query.data.response;
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
                <AntdTabItem
                  data-plasmic-name={"tabItem"}
                  data-plasmic-override={overrides.tabItem}
                  className={classNames("__wab_instance", sty.tabItem)}
                  key={"2"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__d5KaH
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return currentItem.name;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Second Item";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__o4Sv4
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.native;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Second Children";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                </AntdTabItem>
              );
            })}
            onChange={generateStateOnChangeProp($state, ["tabs", "activeKey"])}
            sticky={false}
            tabBarBackground={"#FFF"}
            tabsDropdownScopeClassName={sty["tabs__tabsDropdown"]}
            tabsScopeClassName={sty["tabs__tabs"]}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "tabs", "tabItem"],
  tabs: ["tabs", "tabItem"],
  tabItem: ["tabItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  tabs: typeof AntdTabs;
  tabItem: typeof AntdTabItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTab__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTab__VariantsArgs;
    args?: PlasmicTab__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTab__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTab__ArgsType,
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
          internalArgPropNames: PlasmicTab__ArgProps,
          internalVariantPropNames: PlasmicTab__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTab__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTab";
  } else {
    func.displayName = `PlasmicTab.${nodeName}`;
  }
  return func;
}

export const PlasmicTab = Object.assign(
  // Top-level PlasmicTab renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tabs: makeNodeComponent("tabs"),
    tabItem: makeNodeComponent("tabItem"),

    // Metadata about props expected for PlasmicTab
    internalVariantProps: PlasmicTab__VariantProps,
    internalArgProps: PlasmicTab__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTab;
/* prettier-ignore-end */
