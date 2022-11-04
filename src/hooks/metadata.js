import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const query = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `
  );

  return query.site.siteMetadata;
};

export { useSiteMetadata };
