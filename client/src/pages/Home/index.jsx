import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import MemoriesImage from "../../assets/images/memories.png";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { fetchAllPosts } from "../../store/actionCreators";
import Posts from "../../components/Posts/Posts"
import AddEditForm from "../../components/Form/AddEditForm"


const Home = () => {
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
                  <AddEditForm />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
  )
}

export default Home