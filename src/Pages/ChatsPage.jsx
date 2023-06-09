import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    <PrettyChatWindow
      projectId="c05c5b26-a8e9-43d1-bc5e-ce8872a8310d"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: "100vh" }}
    />
    </div>
  );
};

export default ChatsPage;
