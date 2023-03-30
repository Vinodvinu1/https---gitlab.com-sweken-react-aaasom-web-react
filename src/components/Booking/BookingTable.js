import React from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import * as XLSX from "xlsx";
import PrintIcon from "@material-ui/icons/Print";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CSVLink } from "react-csv";
import { useEffect } from "react";

function BookingTable() {
  const [tableData, setTableData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const newData = await response.json();
      setTableData(newData);
      console.log(newData);
    }
    fetchData();
  }, []);

  const columns = [
    {
      title: "id",
      field: "id",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
    { title: "name", field: "name", filterPlaceholder: "filter" },
    { title: "username", field: "username", align: "center", grouping: false },
    { title: "email", field: "email", align: "center", grouping: false },
    { title: "phone", field: "phone", align: "center", grouping: false },
    // {
    //   title: "Age", field: "age", emptyValue: () => <em>null</em>,
    //   render: (rowData) => <div style={{ background: rowData.age >= 18 ? "#008000aa" : "#f90000aa", borderRadius: "4px", paddingLeft: 5 }}>{rowData.age >= 18 ? "18+" : "18-"}</div>,
    //   searchable: false, export: false
    // },
    // { title: "phone", field: "phone", lookup: { M: "Male", F: "Female" } },
    { title: "City", field: "city", filterPlaceholder: "filter" },
    {
      title: "School Fee",
      field: "fee",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
  ];

  const downloadExcel = () => {
    const newData = tableData.map((row) => {
      delete row.tableData;
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "ServiceTable");
    //Buffer
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, "TableData.xlsx");
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Service Table", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: tableData,
    });
    doc.save("table.pdf");
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  // / //CSV EXPORT
  // const MyExportCSV = () => {
  //   const handleClick = () => {
  //     datatable.onExport();
  //    };
  //   }

  return (
    <div>
      <div className="App">
        {/* <h1 align="center">React-App</h1>
      <h4 align='center'>Crash Course on Material Table </h4> */}

        <MaterialTable
          columns={columns}
          data={tableData}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTableData([...tableData, newRow]);

                setTimeout(() => resolve(), 500);
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData[oldRow.tableData.id] = newRow;
                setTableData(updatedData);
                setTimeout(() => resolve(), 500);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData.splice(selectedRow.tableData.id, 1);
                setTableData(updatedData);
                setTimeout(() => resolve(), 1000);
              }),
          }}
          actions={[
            // {
            //  icon:()=> <button className="btn btn-success"> CSV</button>,
            //  tooltip:"CSV",
            //  onClick:() =>MyExportCSV (),
            //  isFreeAction: true
            // },
            {
              icon: () => (
                <button
                  type="button"
                  className="btn-primary bg-black "
                  style={{ width: "77px" }}
                >
                  Excel
                </button>
              ), // you can pass icon too
              tooltip: "Export to Excel",
              onClick: () => downloadExcel(),
              isFreeAction: true,
            },
            {
              icon: () => (
                <button
                  type="button"
                  className="btn-primary bg-black"
                  style={{ width: "77px" }}
                >
                  Pdf
                </button>
              ), // you can pass icon too
              tooltip: "Export to Pdf",
              onClick: () => downloadPdf(),
              isFreeAction: true,
            },
            {
              icon: () => (
                <CopyToClipboard
                  text={JSON.stringify(tableData)}
                  onCopy={handleCopy}
                >
                  <button
                    className="btn-primary bg-black "
                    style={{ width: "77px" }}
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </CopyToClipboard>
              ),
              onClick: () => handleCopy(),
              tooltip: "copy",
              isFreeAction: true,
            },
          ]}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          options={{
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            searchAutoFocus: true,
            searchFieldVariant: "standard",
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            pageSize: 5,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "both",
            exportButton: true,
            exportAllData: true,
            exportFileName: "TableData",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showSelectAllCheckbox: false,
            showTextRowsSelected: false,
            selectionProps: (rowData) => ({
              disabled: rowData.age == null,

              // color:"primary"
            }),
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#6495ED", color: "#fff" },
          }}
          title="Services"
          icons={{ Add: () => <AddIcon /> }}
        />
      </div>
    </div>
  );
}

export default BookingTable;
