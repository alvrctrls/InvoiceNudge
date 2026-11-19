function InvoiceCard({ invoice, onStatusChange, onDelete }) {
  return (
    <div className="invoice-card">
      <h3>{invoice.client}</h3>
      <p>{invoice.service}</p>
      <p>${invoice.amount}</p>

      <select
        value={invoice.status}
        onChange={(e) => onStatusChange(invoice.id, e.target.value)}>
          
        <option value="Draft">Draft</option>
        <option value="Sent">Sent</option>
        <option value="Overdue">Overdue</option>
        <option value="Paid">Paid</option>
      </select>
      <button onClick={() => onDelete(invoice.id)}>Delete</button>
    </div>
  );
}

export default InvoiceCard;