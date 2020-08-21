interface CSSModule {
  [className: string]: string
}
declare module 'gatsby-source-datocms'

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}
