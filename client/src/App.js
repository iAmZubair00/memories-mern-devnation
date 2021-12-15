import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import MemoriesImage from "./assets/images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "./actionCreators/post";
import useStyles from "./styles";
import EditForm from "./components/Form/EditForm";

export const EditingContext = React.createContext();

const App = () => {
  const [editInfo, setEditInfo] = useState({ isEditing: false, postId: null });
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  return (
    <Container maxWidth="lg">
      <AppBar position="static" className={classes.appBar} color="inherit">
        <Typography variant="h2" className={classes.heading} align="center">
          Memories
        </Typography>
        <img
          src={MemoriesImage}
          className={classes.image}
          alt="memoriesImage"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <EditingContext.Provider value={{ editInfo, setEditInfo }}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                {editInfo.isEditing ? <EditForm /> : <Form />}
              </Grid>
            </EditingContext.Provider>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
