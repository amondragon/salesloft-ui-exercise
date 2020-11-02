import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import LabelIcon from "@material-ui/icons/Label";

export default function SideBar() {
  const currentPage = useLocation().pathname.split("/")[1];
  return (
    <List>
      <ListItem
        data-testid="list-item"
        button
        component={Link}
        to="/inbox"
        selected={currentPage === "inbox"}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem
        data-testid="list-item"
        button
        component={Link}
        to="/work"
        selected={currentPage === "work"}
      >
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary="Work" />
      </ListItem>
      <ListItem
        data-testid="list-item"
        button
        component={Link}
        to="/travel"
        selected={currentPage === "travel"}
      >
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary="Travel" />
      </ListItem>
    </List>
  );
}
