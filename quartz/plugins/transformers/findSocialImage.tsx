import { MdastRoot } from "mdast-util-to-hast/lib/handlers/root";
import { QuartzTransformerPlugin } from "../types";
import { VFile } from "vfile";
import { EXIT, visit } from "unist-util-visit";
import { transformInternalLink, transformLink, TransformOptions } from "../../util/path";

const defaultOptions = {
  markdownLinkResolution: "absolute",
  prettyLinks: true,
  openLinksInNewTab: false,
  lazyLoad: false,
  externalLinkIcon: true,
}

export const FindSocialImage: QuartzTransformerPlugin = () => {
  return {
    name: "FindSocialImage",
    markdownPlugins() {
      return [
        (ctx) => {
          console.log(ctx);
          return (tree: MdastRoot, file: VFile) => {
            visit(tree, "image", (image) => {
                // transformLink(
                //     file.data.slug!,
                //     image.url,
                //   {
                //     "strategy":
                //     allSlugs: BuildCtx
                //     }
                //   )
              return EXIT;
            })
          }
        },
      ]
    },
  }
}

// tell typescript about our custom data fields we are adding
// other plugins will then also be aware of this data field
declare module "vfile" {
  interface DataMap {
    ogImage: string
  }
}
