import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h2>Welcome to InvoiceNudge!</h2>
            <p><i>As a freelancer, you should be able to manage your invoices efficiently and effortlessly.</i></p>
            <Link to="/board" className="btn-primary">Go to Board</Link>
        </div>
    )
}

export default Home;