import React from "react";
import { Grid, CircularProgress, Box } from "@material-ui/core";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Posts = () => {

  const { posts, loading } = useSelector((store) => store.posts);
  const classes = useStyles();

  if(loading) return <Box display='flex' justifyContent='center' alignItems='center'><CircularProgress justifyContent='center' /></Box>;

  if(!posts.length) return <Box display='flex' justifyContent='center' alignItems='center'>No Memories Found</Box>;

  return (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
