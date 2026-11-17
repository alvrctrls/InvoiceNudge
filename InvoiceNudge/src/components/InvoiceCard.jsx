function InvoiceCard({ invoice, onChangeStatus, onDelete }) {
return (
    <div className="invoice-card">
        <h3>{invoice.clientName}</h3>
        <p>{invoice.service}</p>
        <p>${invoice.amount}</p>

        //dropdown
        <select onChange={(e) => onChangeStatus(invoice.id, e.target.value)}>
            <option value="Draft">Pending</option>
            <option value="Sent">Paid</option>
            <option value="overdue">Overdue</option>
        </select>

        <button onClick={() => onDelete(invoice.id)}>Delete</button>
    </div>
)
}