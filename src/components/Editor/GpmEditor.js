import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { withStyles } from "@material-ui/core/styles";

const style = {
  editorWrapper: {
    height: "40vh",
    border: "1px solid #F1F1F1",
    padding: "10px",
    borderRadius: "2px"
  },
  editorError: {
    color: "red",
    padding: 0,
    fontSize: "0.8em",
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: 1,
    display: "block",
    margin: "10px 0"
  },
  editorLabel: {
    color: "rgba(0, 0, 0, 0.54)",
    padding: 0,
    fontSize: "0.8em",
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: 1,
    display: "block",
    margin: "10px 0"
  }
};

class GpmEditor extends React.Component {
  render() {
    const { classes, label, helperText, editorState, onEditorStateChange } = this.props;
    return <div>
      <label className={classes.editorLabel}>{label}</label>
      <Editor editorState={editorState} editorClassName={classes.editorWrapper}
              onEditorStateChange={onEditorStateChange}/>

      <label className={classes.editorError}>{helperText}</label>
    </div>;
  }
}

export default withStyles(style)(GpmEditor);