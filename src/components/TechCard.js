import React from "react";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// @material-ui icons
// core components
import Card from "./Card/Card";
import CardHeader from "./Card//CardHeader";

export default function CardExampleListGroupsHeader({
  description,
  author,
  date,
  TITLE
}) {
  return (
    <Card className="cardTech">
      <CardHeader
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
          color: "white",
          fontWeight: "800"
        }}
      >
        {TITLE}
      </CardHeader>
      <List component="nav">
        <ListItem>
          <ListItemText primary={description} />
        </ListItem>
        <ListItem>
          <ListItemText primary={author} />
        </ListItem>
        <ListItem>
          <ListItemText primary={date} />
        </ListItem>
      </List>
    </Card>
  );
}
