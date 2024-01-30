import './ExpenceItem.css';

function ExpenceItem() {
    const spenceDate = new Date(2021, 2, 21);
    const spenceDetail = 'Car Inssurance';
    const cost = 249.0;

    return <div>
        <div className="row border-1 bg-danger align-content-center align-items-center mt-1">
            <div className="col-md-4">
                <p>{spenceDate.toISOString()}</p>
            </div>
            <div className="col-md-4">
                <h2>{spenceDetail}</h2>
            </div>
            <div className="col-md-4">
                <span>{cost} $</span>
            </div>
        </div>
    </div>;
}

export default ExpenceItem;