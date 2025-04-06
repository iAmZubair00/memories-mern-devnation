import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createPost, editPost } from "../../store/actionCreators";
import { toggleFormCreate } from "../../store/actionCreators";

const defaultPostData = {
  creator: null,
  title: null,
  message: null,
  tags: [],
  selectedFile: null,
}

const AddEditForm = () => {

  const { postToEdit, isEditing } = useSelector((state) => state.formToggle);
  const dispatch = useDispatch();
  const classes = useStyles();
  
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
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSave}
      >
        <Typography variant="h6">{`${isEditing ? 'Edit this Memory': 'Create a Memory'}`}</Typography>
        <TextField
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
        <TextField
          required
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
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
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
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
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {`${isEditing ? 'Save': 'Submit'}`}
        </Button>
        <Button
          variant="contained"
          color="secondary"
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
