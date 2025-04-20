import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import MemoriesImage from "../../assets/images/memories.png";
import Posts from "../../components/Posts/Posts";
import { useDispatch } from "react-redux";
import { AppBarWrapper, Heading, Image } from "./styles";
import { fetchAllPosts } from "../../store/actionCreators";
import AddEditForm from "../../components/Form/AddEditForm";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBarWrapper position="static" color="inherit">
        <Heading variant="h2" align="center">
          Memories
        </Heading>
        <Image
          src={MemoriesImage}
          alt="memoriesImage"
          height="60"
        />
      </AppBarWrapper>
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