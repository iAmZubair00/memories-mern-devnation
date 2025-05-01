import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper, styled } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "../../store/actionCreators";
import { toggleFormCreate } from "../../store/actionCreators";

const defaultPostData = {
  creator: '',
  title: '',
  message: '',
  tags: [],
  selectedFile: '',
}

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(1),
}));

const AddEditForm = () => {

  const { postToEdit, isEditing } = useSelector((state) => state.formToggle);
  const dispatch = useDispatch();
  
  const [postData, setPostData] = useState(defaultPostData);

  const handleSave = (e) => {
    e.preventDefault();
    if(isEditing) {
      dispatch(editPost(postData));
      dispatch(toggleFormCreate);
    } else{
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setPostData(defaultPostData);
  };

  useEffect(() => {
    if (isEditing) {
      setPostData(postToEdit);
    }
  }, [isEditing, postToEdit]);

  return (
    <Paper sx={{ padding: 2 }}>
      <form
        autoComplete="off"
        onSubmit={handleSave}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">{`${isEditing ? 'Edit this Memory': 'Create a Memory'}`}</Typography>
        <TextFieldStyled
          required
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextFieldStyled
          required
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextFieldStyled
          required
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextFieldStyled
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div style={{ width: "97%", margin: "10px 0" }}>
          <FileBase
            required
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          variant="contained"
          color="info"
          size="large"
          type="submit"
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          {`${isEditing ? 'Save': 'Submit'}`}
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default AddEditForm;
