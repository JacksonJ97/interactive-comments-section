import styled from "styled-components";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import replyIcon from "../assets/images/icon-reply.svg";
import avatar from "../assets/images/avatars/image-amyrobson.webp";

// Styles
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: hsl(0, 0%, 100%);
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 12px;
  max-width: 700px;

  .content {
    grid-column: 1 / 3;
    color: hsl(211, 10%, 45%);
    line-height: 1.3;
    margin-bottom: 16px;
  }

  @media (min-width: 670px) {
    grid-template-columns: 13% 77% 10%;
    padding-left: 0px;

    .content {
      grid-column: 2 / 4;
      margin-bottom: 8px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  grid-column: 1 / 3;

  img {
    width: 32px;
  }

  .username {
    margin: 0 16px;
    font-size: 0.875rem;
    font-weight: bold;
  }

  .time-ago {
    color: hsl(211, 10%, 45%);
    font-size: 0.875rem;
  }

  @media (min-width: 670px) {
    grid-column: 2 / 3;
  }
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(228, 33%, 97%);
  border-radius: 6px;
  width: 86px;

  button {
    display: flex;
    padding: 12px;
  }

  .score {
    color: hsl(238, 40%, 52%);
    font-size: 0.875rem;
    font-weight: bold;
  }

  @media (min-width: 670px) {
    flex-direction: column;
    width: 40px;
    height: 96px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    justify-self: center;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 60px;
  justify-self: end;

  p {
    color: hsl(238, 40%, 52%);
    font-size: 0.875rem;
    font-weight: bold;
    margin-left: 8px;
  }

  @media (min-width: 670px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-self: start;
    align-self: start;
    margin-top: 8px;
  }
`;

// Components
const CardHeader = () => {
  return (
    <Header>
      <img src={avatar} alt="Avatar" />
      <p className="username">amyrobson</p>
      <p className="time-ago">1 month ago</p>
    </Header>
  );
};

const ScoreControl = () => {
  return (
    <Control>
      <button type="button">
        <img src={plusIcon} alt="Plus icon" />
      </button>
      <div className="score">12</div>
      <button type="button">
        <img src={minusIcon} alt="Minus icon" />
      </button>
    </Control>
  );
};

const ReplyButton = () => {
  return (
    <Button type="button">
      <img src={replyIcon} alt="Reply icon" />
      <p>Reply</p>
    </Button>
  );
};

const CommentCard = () => {
  return (
    <Card>
      <CardHeader />
      <p className="content">
        Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
      <ScoreControl />
      <ReplyButton />
    </Card>
  );
};

export default CommentCard;
