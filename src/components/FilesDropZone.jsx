import React, { Fragment, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
// import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  colors,
} from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import MoreIcon from "@material-ui/icons/MoreVert";

// import bytesToSize from 'utils/bytesToSize';

const useStyles = makeStyles((theme) => ({
  root: {},
  dropZone: {
    // border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: "none",
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    alignItems: "center",
    "&:hover": {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5,
  },
  image: {
    width: 120,
  },
  info: {
    marginTop: theme.spacing(1),
  },
  list: {
    maxHeight: 340,
    overflow: "auto",
  },
  actions: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "flex-end",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  bold: {
    fontWeight: 600,
  },
}));

const FilesDropZone = (props) => {
  const { className, files, setFiles, handleUpload, ...rest } = props;

  const classes = useStyles();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setFiles((files) => [...files].concat(acceptedFiles));
    },
    [setFiles]
  );

  const handleRemoveAll = () => {
    setFiles([]);
  };

  // const handleRemoveFile = (idx) => {
  //   setFiles(files.filter((x) => x.index != idx));
  // };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: { "image/*": [".jpeg", ".png"] },
  });

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isDragActive,
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div>
          <img
            alt="Select file"
            className={classes.image}
            src="/images/undraw_add_file2_gvbb.svg"
          />
        </div>
        <div>
          <Typography gutterBottom variant="h5">
            Select files
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            variant="body1"
          >
            Drop files here or click <Link underline="always">browse</Link>{" "}
            thorough your machine
          </Typography>
        </div>
      </div>
      {files.length > 0 && (
        <Fragment>
          <Typography gutterBottom variant="h6" className={classes.bold}>
            Total {files.length} files
          </Typography>
          {/* <PerfectScrollbar options={{ suppressScrollX: true }}> */}
          <List className={classes.list}>
            {files.map((file, i) => (
              <ListItem divider={i < files.length - 1} key={i}>
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  primaryTypographyProps={{ variant: "h6" }}
                  // secondary={file.size}
                />
                {/* <Tooltip title="More options">
                    <IconButton edge="end" onClick={() => handleRemoveFile(i)}>
                      <MoreIcon />
                    </IconButton>
                  </Tooltip> */}
              </ListItem>
            ))}
          </List>
          {/* </PerfectScrollbar> */}
          <div className={classes.actions}>
            <Button
              onClick={handleRemoveAll}
              size="small"
              color="secondary"
              variant="contained"
            >
              Remove all
            </Button>
            {/* <Button
              color="primary"
              size="small"
              variant="contained"
              onClick={handleUpload}
            >
              Upload files
            </Button> */}
          </div>
        </Fragment>
      )}
    </div>
  );
};

FilesDropZone.propTypes = {
  className: PropTypes.string,
};

export default FilesDropZone;
