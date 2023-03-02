import pkg from './package.json' assert { type: 'json' };

const themeConfig = {
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      {new Date().getFullYear()} © m2en
      <a href={pkg.repository}>GitHub</a>
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
  )
};

export default themeConfig;
