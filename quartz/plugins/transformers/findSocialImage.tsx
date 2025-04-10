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
    htmlPlugins(ctx) {
      return [
        () => {
          return (tree: MdastRoot, file: VFile) => {
            visit(tree, (e) => e.tagName==="img", (image) => {
              file.data.frontmatter.socialImage = image.properties.src;
              console.log(file.data)
              return EXIT;
            })
          }
        },
      ]
    },
  }
}
