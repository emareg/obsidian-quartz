import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


function mySortFn(a, b) {
  const nameOrderMap: Record<string, number> = {
    "research/index.md": 10,
    "projects/index.md": 20,
    "thoughts/index.md": 30,
    "thoughts/world/index.md": 31,
    "thoughts/earth/index.md": 32,
    "thoughts/body/index.md": 33,
    "thoughts/mind/index.md": 34,
    "thoughts/art/index.md": 35,
    "thoughts/society/index.md": 36,
    "thoughts/tech/index.md": 37,
    "thoughts/info/index.md": 38,
    "hobbies/index.md": 40,
  }
  return (nameOrderMap[a.data.filePath] || 0)- (nameOrderMap[b.data.filePath] || 0)  
}


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      // GitHub: "https://github.com/jackyzha0/quartz",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  header: [
    // Component.ConditionalRender({condition: (page) => page.fileData.slug == "index", component: Component.PageTitle() }),
    // Component.ConditionalRender({condition: (page) => page.fileData.slug == "index", component: Component.Search() }),
    // Component.ConditionalRender({condition: (page) => page.fileData.slug == "index", component: Component.Darkmode() }),
  ],
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.MobileOnly(Component.PageShortTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
          const nameOrderMap: Record<string, number> = {
		        "research/index.md": 10,
		        "projects/index.md": 20,
		        "thoughts/index.md": 30,
		        "thoughts/world/index.md": 31,
		        "thoughts/earth/index.md": 32,
		        "thoughts/body/index.md": 33,
		        "thoughts/mind/index.md": 34,
		        "thoughts/art/index.md": 35,
		        "thoughts/society/index.md": 36,
		        "thoughts/tech/index.md": 37,
		        "thoughts/info/index.md": 38,
		        "hobbies/index.md": 40,
	        }
          return (nameOrderMap[a.data.filePath] || 0)- (nameOrderMap[b.data.filePath] || 0)
      }
    }),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),      
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
            sortFn: (a, b) => {
          const nameOrderMap: Record<string, number> = {
		        "research/index.md": 10,
		        "projects/index.md": 20,
		        "thoughts/index.md": 30,
		        "thoughts/world/index.md": 31,
		        "thoughts/earth/index.md": 32,
		        "thoughts/body/index.md": 33,
		        "thoughts/mind/index.md": 34,
		        "thoughts/art/index.md": 35,
		        "thoughts/society/index.md": 36,
		        "thoughts/tech/index.md": 37,
		        "thoughts/info/index.md": 38,
		        "hobbies/index.md": 40,
	        }
          return (nameOrderMap[a.data.filePath] || 0)- (nameOrderMap[b.data.filePath] || 0)
      }
    }),
  ],
  right: [],
}


export const titlePageLayout: PageLayout = {
  header: [
    // Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
  beforeBody: [
    Component.Spacer()
  ],
  left: [
  ],
  right: [
  ],
  afterBody: [
  ]
}