import { useStaticQuery, graphql } from 'gatsby';

// Pods DATA
const usePodsData = () => {
  const { allContentfulPodDetails } = useStaticQuery(graphql`
    query {
      allContentfulPodDetails {
        nodes {
          name
          description {
            description
          }
          lead
          contact
          emoji
          contentful_id
        }
      }
    }
  `);

  const podData = allContentfulPodDetails.nodes.map((node) => ({
    ...node,
    description: node.description.description,
    key: node.contentful_id,
  }));

  return podData;
};

export default usePodsData;
