import InvoiceCard from "./InvoiceCard";

function Board({ invoices, onStatusChange, onDelete }) {
  const stages = ["Draft", "Sent", "Overdue", "Paid"];
  
  let unpaidTotal = 0;
  for (let i = 0; i < invoices.length; i++) {
    if (invoices[i].status !== "Paid") {
      unpaidTotal += invoices[i].amount;   
    }
  }
  return (
    <div className="container">
    <h2>Total Unpaid: ${unpaidTotal}</h2>

      <div className="board">
        {stages.map((stage) => { 
          const columnInvoices = invoices.filter(
            (inv) => inv.status === stage
          ); //blocker

          return (
            <div key={stage} className="column">
              <h3>{stage}</h3>
              {columnInvoices.map((inv) => (
                <InvoiceCard 
                  key={inv.id}
                  invoice={inv}
                  onStatusChange={onStatusChange}
                  onDelete={onDelete}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;