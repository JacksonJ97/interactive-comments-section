import styled from "styled-components";

// Components
import CommentCard from "../components/CommentCard";

// Styles
const Wrapper = styled.section`
  min-height: 100vh;
  background-color: hsl(228, 33%, 97%);

  .container {
    width: 90%;
    margin: 0 auto;
    padding: 24px 0;
  }
`;

const CommentSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <CommentCard />
        <CommentCard />
      </div>
    </Wrapper>
  );
};

export default CommentSection;
