import pkg from './package.json' assert { type: 'json' };

// @ts-ignore
const authorName = pkg.author.name

const themeConfig = {
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      {new Date().getFullYear()} © {authorName}
      <a href={pkg.repository}>GitHub</a>
      <p>Running Next.js v{pkg.dependencies.next}</p>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: () => {
    return <>
      <title>mel9y</title>
      <meta name="description" content='mel9y portfolio' />
      <meta name='twitter:site' content='@mel9y' />
      <meta name='og:url' content='https://mel9y.dev' />
      <meta property="og:title" content="mel9y" />
      <meta name="og:description" content='mel9y portfolio' />
      <meta property="og:site_name" content="mel9y" />
      <meta property="og:type" content="website" />
    </>
  }
};

export default themeConfig;
