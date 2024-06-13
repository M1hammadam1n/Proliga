import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "tDWy3GXn2mzd9e2xUaPdmu",  // ID of a project you are using
            token: "wGCq7kEcDBwkNNePGu2sEB1MGXugDkyGv8w3fiEvL6OEaluU5BnxXaivr2rz1iQSWNTwIrrwigITckNLtseeQ"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true,
})