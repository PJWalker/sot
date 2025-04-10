import { MdastRoot } from "mdast-util-to-hast/lib/handlers/root";
import { QuartzTransformerPlugin } from "../types";
import { VFile } from "vfile";
import { EXIT, visit } from "unist-util-visit";
import { transformInternalLink, transformLink } from "../../util/path";

export const FindSocialImage: QuartzTransformerPlugin = () => {
  return {
    name: "FindSocialImage",
    markdownPlugins() {
      return [
        () => {
          return (tree: MdastRoot, file: VFile) => {
            visit(tree, "image", (image) => {

              console.log(transformLink(image.url));
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
