import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  logo: {
    display: "flex",
    fontSize: "34px",
    alignItems: "center",
  },
  mailIcon: {
    color: "#922b21",
    fontSize: "40px",
  },
  search: {
    marginLeft: "40px",
  },
  root: {
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <MailIcon className={classes.mailIcon} />
        Mail
      </div>
      <div className={classes.search}>
        <Paper component="form" className={classes.root}>
          <InputBase
            inputProps={{ "data-testid": "search-input" }}
            className={classes.input}
            placeholder="Search"
            onInput={(e) => props.searchHandler(e.target.value)}
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}
