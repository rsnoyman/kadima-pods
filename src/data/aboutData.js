import { useStaticQuery, graphql } from 'gatsby';

// ABOUT DATA
const useAboutData = () => {
  const { allContentfulFrequentlyAskedQuestions } = useStaticQuery(graphql`
    query {
      allContentfulFrequentlyAskedQuestions(sort: { fields: [order] }) {
        nodes {
          answer {
            answer
          }
          question {
            question
          }
          contentful_id
        }
      }
    }
  `);

  const aboutData = allContentfulFrequentlyAskedQuestions.nodes.map((node) => ({
    question: node.question.question,
    answer: node.answer.answer,
    key: node.contentful_id,
  }));

  return aboutData;
};

export default useAboutData;
