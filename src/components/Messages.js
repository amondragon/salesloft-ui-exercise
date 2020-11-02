import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  listItem: { display: "flex", listStyleType: "none", alignItems: "stretch" },
  link: {
    textDecoration: "none",
    flexGrow: "1",
    display: "flex",
    alignItems: "center",
  },
  linkSender: { minWidth: "200px" },
  linkDate: { marginLeft: "auto" },
  chipsContainer: { marginRight: "10px" },
  chip: { marginRight: "4px" },
  deleteButton: { marginLeft: "auto" },
}));

export default function Messages(props) {
  const classes = useStyles();
  const currentPage = useLocation().pathname.split("/")[1];

  let messagesFiltered = props.search
    ? props.messages.filter(
        (message) =>
          message.subject.includes(props.search) ||
          message.sender.includes(props.search)
      )
    : props.messages;

  if (currentPage !== "inbox") {
    messagesFiltered = messagesFiltered.filter((message) =>
      message.tags.includes(currentPage)
    );
  }

  return (
    <ul>
      <li data-testid="list-item" className={classes.listItem}>
        <Checkbox onChange={props.changeAllHandler} />
        <IconButton
          aria-label="delete"
          onClick={props.deleteAllSelectedHandler}
        >
          <DeleteIcon />
        </IconButton>
      </li>
      <Divider />
      {messagesFiltered.length > 0 ? (
        messagesFiltered.map((message) => (
          <React.Fragment key={`list-item-message-${message.id}`}>
            <li
              data-testid="list-item"
              className={classes.listItem}
              key={`list-item-message-${message.id}`}
            >
              <Checkbox
                checked={message.selected}
                onChange={props.changeHandler}
                value={message.id}
              />
              <Link to={`/inbox/${message.id}`} className={classes.link}>
                <span className={classes.linkSender}>{message.sender}</span>
                {message.tags.length > 0 && (
                  <span className={classes.chipsContainer}>
                    {message.tags.map((tag) => (
                      <Chip
                        key={`chip-${message.id}-${tag}`}
                        size="small"
                        label={tag}
                        className={classes.chip}
                      />
                    ))}
                  </span>
                )}
                {message.subject}
                <span className={classes.linkDate}>{message.formatedDate}</span>
              </Link>
              <IconButton
                className={classes.deleteButton}
                aria-label="delete"
                onClick={() => props.deleteHandler(message.id)}
              >
                <DeleteIcon />
              </IconButton>
            </li>
            <Divider />
          </React.Fragment>
        ))
      ) : (
        <p>No messages found</p>
      )}
    </ul>
  );
}
