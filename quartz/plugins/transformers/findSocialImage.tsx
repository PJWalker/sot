import { MdastRoot } from "mdast-util-to-hast/lib/handlers/root";
import { QuartzTransformerPlugin } from "../types";
import { VFile } from "vfile";

export const FindSocialImage: QuartzTransformerPlugin = () => {
  return {
    name: "FindSocialImage",
    markdownPlugins() {
      return [
        () => {
          return (tree: MdastRoot, file: VFile) => {
            tree.children.forEach(child => {
              console.log(child.type)
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
