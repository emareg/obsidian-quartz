import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Emanuel Regnath",
    pageShortTitle: "EmaReg",
    pageTitleSuffix: " – Emanuel Regnath's Digital Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "brain.emareg.de",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false, enableYouTubeEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", externalLinkIcon: false }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex", customMacros: {
        "\\vec": "\\boldsymbol{#1}",
        "\\ma": "\\boldsymbol{#1}",
        "\\cx": "\\boldsymbol{#1}",
        "\\cxc": "\\boldsymbol{#1}^{*}",
        "\\diff": "\\mathrm{d}\\,",
        "\\mat": "\\begin{bmatrix} #1 \\end{bmatrix}",
        "\\vect": "\\begin{pmatrix} #1 \\end{pmatrix}",
        "\\abs": "\\left\\vert{#1}\\right\\vert",
        "\\norm": "\\left\\lVert{#1}\\right\\rVert",
        "\\ra": "\\rightarrow",
        "\\Sp": "\\mathrm{Sp}\\,",
        "\\rank": "\\mathrm{rank}\\,",
        "\\e": "\\mathrm{e}",
        "\\i": "\\boldsymbol{\\mathrm{i}}",
        "\\SI": "{#1\\;\\mathrm{#2}}",
        "\\squared": "{^{2}}",
        "\\cubed": "{^{3}}",
        "\\per": "/",
        "\\tera": "T",
        "\\giga": "G",
        "\\mega": "M",
        "\\kilo": "k",
        "\\milli": "m",
        "\\micro": "μ",
        "\\nano": "n",
        "\\kilogram": "\\text{kg}\\,",
        "\\meter": "\\text{m}\\,",
        "\\second": "\\text{s}\\,",
        "\\ampere": "\\text{A}\\,",
        "\\kelvin": "\\text{K}\\,",
        "\\mol": "\\text{mol}\\,",
        "\\candela": "\\text{cd}\\,",
        "\\newton": "\\text{N}\\,",
        "\\hertz": "\\text{Hz}\\,",
        "\\pascal": "\\text{Pa}\\,",
        "\\volt": "\\text{V}\\,",
        "\\watt": "\\text{W}\\,",
        "\\joule": "\\text{J}\\,",
        "\\henry": "\\text{H}\\,",
        "\\farad": "\\text{F}\\,",
        "\\coulomb": "\\text{C}\\,",
        "\\ohm": "\\Omega\\,",
        "\\weber": "\\text{Wb}\\,",
        "\\tesla": "\\text{T}\\,",
        "\\degree": "\\text{deg}\\,"   
      }}),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.TitlePage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
