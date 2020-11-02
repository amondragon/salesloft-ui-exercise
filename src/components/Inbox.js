import React from "react";
import { parseMessages } from "../utils/MessagesHelper";

export default function Inbox() {
  const messages = parseMessages();
  return (
    <ul>
      {messages.map((message) => (
        <li>{message.subject}</li>
      ))}
    </ul>
  );
}
