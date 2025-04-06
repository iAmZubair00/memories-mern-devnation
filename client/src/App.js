import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import MemoriesImage from "./assets/images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import EditForm from "./components/Form/EditForm";
import { fetchAllPosts } from "./store/actionCreators";

const App = () => {
  const isEditing = useSelector((state) => state.formToggle.isEditing);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);
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
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              {isEditing ? <EditForm /> : <Form />}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
