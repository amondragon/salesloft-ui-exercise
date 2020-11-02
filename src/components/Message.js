import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Message(props) {
  const history = useHistory();
  return (
    <React.Fragment>
      <div>
        <IconButton component={Link} to="/inbox">
          <ArrowBack />
        </IconButton>
        <IconButton
          data-testid="delete-button"
          aria-label="delete"
          onClick={() => {
            props.deleteHandler(props.message.id);
            history.push("/inbox");
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <h1 data-testid="message-title">{props.message.subject}</h1>
      <div data-testid="message-sender">{props.message.sender}</div>
      <div
        data-testid="message-body"
        dangerouslySetInnerHTML={{ __html: props.message.body }}
      />
    </React.Fragment>
  );
}
