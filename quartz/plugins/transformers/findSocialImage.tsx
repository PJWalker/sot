import { MdastRoot } from "mdast-util-to-hast/lib/handlers/root";
import { QuartzTransformerPlugin } from "../types";
import { VFile } from "vfile";
import { EXIT, visit } from "unist-util-visit";

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
    htmlPlugins() {
      return [
        () => {
          return (tree: MdastRoot, file: VFile) => {
            visit(tree, (e:any) => e.tagName==="img", (image:any) => {
              file.data.frontmatter!.socialImage = image.properties.src;
              return EXIT;
            })
          }
        },
      ]
    },
  }
}
