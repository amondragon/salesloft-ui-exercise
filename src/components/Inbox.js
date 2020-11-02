import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getMessages } from "../utils/MessagesHelper";
import Grid from "@material-ui/core/Grid";
import Message from "./Message";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Messages from "./Messages";

export default function Inbox() {
  const [messages, setMessages] = useState(getMessages());
  const [search, setSearch] = useState("");

  const location = useLocation();
  const singleMessage = location.pathname.split("/").length > 2;
  const singleMessageId = singleMessage && location.pathname.split("/")[2];
  const messageFound = messages.find(
    (message) => message.id === singleMessageId
  );

  function searchHandler(search) {
    setSearch(search);
  }

  function changeAllHandler(event) {
    setMessages(
      messages.map((message) => {
        return { ...message, selected: event.target.checked };
      })
    );
  }

  function changeHandler(event) {
    setMessages(
      messages.map((message) => {
        let returnObj = { ...message };
        if (returnObj.id === event.target.value) {
          returnObj.selected = event.target.checked;
        }
        return returnObj;
      })
    );
  }

  function deleteAllSelectedHandler() {
    setMessages(messages.filter((message) => !message.selected));
  }

  function deleteHandler(id) {
    setMessages(messages.filter((message) => message.id !== id));
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header searchHandler={searchHandler} />
      </Grid>
      <Grid item xs={12} sm={3} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        {singleMessage && messageFound ? (
          <Message />
        ) : (
          <Messages
            messages={messages}
            search={search}
            changeAllHandler={changeAllHandler}
            changeHandler={changeHandler}
            deleteAllSelectedHandler={deleteAllSelectedHandler}
            deleteHandler={deleteHandler}
          />
        )}
      </Grid>
    </Grid>
  );
}
