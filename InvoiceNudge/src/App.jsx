import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import InvoiceForm from "./components/InvoiceForm";
import Home from "./components/Home";

function App() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/invoices")
      .then((res) => res.json())
      .then((data) => setInvoices(data));
  }, []);

  function handleAddInvoice(newInvoice) {
    fetch("http://localhost:3001/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInvoice),
    })
      .then((res) => res.json())
      .then((savedInvoice) => {
        setInvoices([...invoices, savedInvoice]);
      });
  }

  function handleStatusChange(id, newStatus) {
    fetch(`http://localhost:3001/invoices/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((updatedInvoice) => {
        const updatedList = invoices.map((inv) => {
          if (inv.id === id) {
            return updatedInvoice;
          }
          return inv;
        });
        setInvoices(updatedList);
      });
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/invoices/${id}`, {
      method: "DELETE",
    }).then(() => {
      const remaining = invoices.filter((inv) => inv.id !== id);
      setInvoices(remaining);
    });
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={
            <Board
              invoices={invoices}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          }
        />

        <Route path="/add" element={<InvoiceForm onAddInvoice={handleAddInvoice} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
