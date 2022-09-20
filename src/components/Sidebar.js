import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import navigation from "../Global/navigation";

export default function Sidebar({ trigger, setOpen }) {
  const [state, setState] = React.useState(trigger);
  console.log("Trigger");
  React.useEffect(() => {
    setState(trigger);
  });
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer anchor={"left"} open={state} onClose={closeDrawer}>
          <List sx={{ width: 250 }}>
            <Box sx={{ mb: 5 }}></Box>
            {navigation.map((navigation) => (
              <Link to={`/${navigation.path}`} key={navigation.id}>
                <ListItem button>
                  <ListItemText>{navigation.pathname}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
