import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InvoiceCard from "./components/InvoiceCard";
import InvoiceForm from "./components/InvoiceForm";

const STAGES = ["Draft", "Sent", "Overdue", "Paid"];

function App() {
  const [invoices, setInvoices] = useState([]);

  
}