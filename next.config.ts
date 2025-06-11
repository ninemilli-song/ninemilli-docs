import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      // 'private-next-root-dir': __dirname,
      "private-next-root-dir/*": "./*",
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  }
})