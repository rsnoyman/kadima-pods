import { useStaticQuery, graphql } from 'gatsby';

// ABOUT DATA
const useAboutData = () => {
  const response = useStaticQuery(graphql`
    query {
      allContentfulFrequentlyAskedQuestions {
        nodes {
          question {
            question
          }
          answer {
            answer
          }
          contentful_id
          order
        }
      }
    }
  `);

  const aboutData = response.allContentfulFrequentlyAskedQuestions.nodes
    .sort((a, b) => a.order - b.order)
    .map((node) => ({
      ...node,
      question: node.question.question,
      answer: node.answer.answer,
      key: node.contentful_id,
    }));

  return aboutData;
};

export default useAboutData;
