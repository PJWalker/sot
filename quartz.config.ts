import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "High or Lows",
    pageTitleSuffix: " – High or Lows",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "pjwalker.github.io/sot/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto Slab",
        body: "Roboto",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdf6e3",
          lightgray: "#e6dec9",
          gray: "#bdae8b",
          darkgray: "#2d2d2d",
          dark: "#252c32",
          secondary: "#168287",
          tertiary: "#2eb356",
          highlight: "#d3ebe480",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#282828",
          lightgray: "#3f3f3f",
          gray: "#b3b3b3",
          darkgray: "#dadada",
          dark: "#ebdbb2",
          secondary: "#8dbdb7",
          tertiary: "#65dd95",
          highlight: "#63d1aa21",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git"],
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description({ allowFragment: true, descriptionLength: 340 }),
      Plugin.HardLineBreaks(),
      Plugin.FindSocialImage(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: false,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages({
        autogenerate: false
      }),
    ],
  },
}

export default config
