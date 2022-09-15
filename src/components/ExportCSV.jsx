import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "@material-ui/core";
import ExportIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles((theme) => ({
  green: {
    backgroundColor: theme.palette.success.main,
    color: "#fff",
    marginTop: 5,
    marginBottom: 5,
  },
}));

const ExportCSV = ({ csvData, fileName, buttonName }) => {
  const classes = useStyles();
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button
      onClick={() => exportToCSV(csvData, fileName)}
      variant="contained"
      className={classes.green}
    >
      <ExportIcon style={{ marginRight: 5 }} /> {buttonName}
    </Button>
  );
};

export default ExportCSV;
