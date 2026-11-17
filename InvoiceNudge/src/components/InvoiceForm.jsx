import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function InvoiceForm() {
    const [client, setClient] = useState('');
    const [service, setService] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('Draft');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
            const newInvoice = {
                client,
                service,
                amount: Number(amount),
                status,
        };

    }

    return (
    <form className="invoice-form" onSubmit={handleSubmit}>
      <h2>New Invoice</h2>

      <input
        type="text"
        placeholder="Client Name"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount ($)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Draft">Draft</option>
        <option value="Sent">Sent</option>
        <option value="Overdue">Overdue</option>
        <option value="Paid">Paid</option>
      </select>

      <button type="submit">Add Invoice</button>
    </form>
  );
}

export default InvoiceForm;
