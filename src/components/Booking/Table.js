import React, { useRef } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { CSVExport, ExportCSVButton, ExportPDFButton, ExportExcelButton } from 'react-bootstrap-table2-toolkit';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';





const MyTable = () => {


    const data = [
        { id: 1, name: 'John', age: 25, email: 'john@example.com' },
        { id: 2, name: 'Jane', age: 30, email: 'jane@example.com' },
        { id: 3, name: 'Bob', age: 40, email: 'bob@example.com' }
      ];
      
      const columns = [
        { dataField: 'id', text: 'ID' },
        { dataField: 'name', text: 'Name', filter: textFilter() },
        { dataField: 'age', text: 'Age', filter: textFilter() },
        { dataField: 'email', text: 'Email', filter: textFilter() }
      ];
      
      function customizePDF(columns, rows) {
        const doc = new jsPDF();
        doc.autoTable({
          head: [columns.map(c => c.text)],
          body: rows.map(r => columns.map(c => r[c.dataField]))
        });
        doc.save('table.pdf');
      }
      
      const csvExportRef = useRef(null);
      const pdfExportRef = useRef(null);
      const excelExportRef = useRef(null);
      
      const exportAll = () => {
        csvExportRef.current.handleExportCSV();
        pdfExportRef.current.handleExportPDF();
        excelExportRef.current.handleExportExcel();
      };



  <ToolkitProvider
    keyField="id"
    data={data}
    columns={columns}
    exportCSV={{ fileName: 'table.csv' }}
    exportPDF={{ fileName: 'table.pdf', customize: customizePDF }}
    exportExcel={{ fileName: 'table.xlsx' }}
    bootstrap4
  >
    {props => (
      <div>
        <ExportCSVButton ref={csvExportRef} {...props.csvProps}>
          Export CSV
        </ExportCSVButton>
        <ExportPDFButton ref={pdfExportRef} {...props.pdfProps}>
          Export PDF
        </ExportPDFButton>
        <ExportExcelButton ref={excelExportRef} {...props.excelProps}>
          Export Excel
        </ExportExcelButton>
        <BootstrapTable {...props.baseProps} filter={filterFactory()} />
        <button onClick={exportAll}>Export All</button>
      </div>
    )}
  </ToolkitProvider>
};
export default MyTable;