import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({
      title: "Notes",
    }),
    Component.Darkmode(),
  ],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({
      showReadingTime: false,
    }),
    Component.TagList(),
  ],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "PJWalker/sot",
        repoId: "R_kgDOOXKvCQ",
        category: "Announcements",
        categoryId: "DIC_kwDOOXKvCc4Co9kD",
      },
    }),
  ],

  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  right: [],
}
