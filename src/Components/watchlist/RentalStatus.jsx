import prices from "../../assets/priceData/prices.json";

const RentalStatus = ({ rented, timeLeft, startRental, rentalTime }) => {
    const formatTime = (seconds) => {
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${d}d ${h}h ${m}m ${s}s`;
    };

    return (
        <div style={{ height: "30px" }}>
            {rented ? (
                <p className="card-text text-success">
                    Time left: <strong>{formatTime(timeLeft)}</strong>
                </p>
            ) : (
                <button
                    className="btn btn-outline-light w-100"
                    onClick={startRental}
                >
                    Rent for {prices["rental-time"][rentalTime]?.name}
                </button>
            )}
        </div>
    );
};

export default RentalStatus;
