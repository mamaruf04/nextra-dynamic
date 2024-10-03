import nextra from 'nextra'
 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})
 
export default withNextra()
 
// have other Next.js configurations, pass them as the parameter:
// export default withNextra({ /* other next.js config */ })