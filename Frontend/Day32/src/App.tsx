import React from "react";
import "./App.css";

interface IInvoiceListProps {
  invoiceData: {
    customerName: string;
    invoices: { id: number; name: string; total: string }[];
  };
  logo?: string;
}

const InvoiceList = (props: IInvoiceListProps) => {
  const { customerName, invoices } = props.invoiceData;
  return (
    <div className="invoice">
      <h1>Typescript Tut</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{invoices[0].id}</td>
            <td>{invoices[0].name}</td>
            <td>{invoices[0].total}</td>
          </tr>
          <tr>
            <td>{invoices[1].id}</td>
            <td>{invoices[0].name}</td>
            <td>{invoices[0].total}</td>
          </tr>
          <tr>
            <td>{invoices[2].id}</td>
            <td>{invoices[0].name}</td>
            <td>{invoices[0].total}</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const data = {
    customerName: "Amazon Pantry",
    invoices: [
      { id: 3, name: "shyamu", total: "20000" },
      { id: 21, name: "Kalu", total: "10000" },
      { id: 32, name: "Ramu", total: "50000" },
    ],
  };

  return (
    <div className="App">
      <InvoiceList invoiceData={data} />
    </div>
  );
}

export default App;
