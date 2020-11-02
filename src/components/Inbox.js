import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getMessages } from "../utils/MessagesHelper";
import Grid from "@material-ui/core/Grid";
import Message from "./Message";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Messages from "./Messages";

export default function Inbox() {
  const messages = getMessages();
  const location = useLocation();
  const singleMessage = location.pathname.split("/").length > 2;
  const singleMessageId = singleMessage && location.pathname.split("/")[2];
  const messageFound = messages.find(
    (message) => message.id === singleMessageId
  );

  const [search, setSearch] = useState("");

  function searchHandler(search) {
    setSearch(search);
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
          <Messages messages={messages} search={search} />
        )}
      </Grid>
    </Grid>
  );
}
