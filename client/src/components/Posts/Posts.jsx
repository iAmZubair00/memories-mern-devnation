import React from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = () => {

  const { posts, loading } = useSelector((store) => store.posts);

  if(loading) return <Box display='flex' justifyContent='center' alignItems='center'><CircularProgress justifyContent='center' /></Box>;

  if(!posts.length) return <Box display='flex' justifyContent='center' alignItems='center'>No Memories Found</Box>;

  return (
    <Grid
      container
      alignItems="stretch"
      spacing={3}
      sx={{ display: "flex", alignItems: "center" }}
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
