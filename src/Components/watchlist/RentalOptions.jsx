import prices from "../../assets/priceData/prices.json";
import "../../Styles/watchlistMovie.css";
const RentalOptions = ({
    rented,
    videoQuality,
    setVideoQuality,
    audioQuality,
    setAudioQuality,
    subtitles,
    setSubtitles,
    rentalTime,
    setRentalTime,
}) => {
    return (
        <>
            <div className="mb-2">
                <label className="form-label">Video quality</label>
                <select
                    disabled={rented}
                    className="form-select bg-dark text-white border-light"
                    value={videoQuality}
                    onChange={(e) => setVideoQuality(e.target.value)}
                >
                    {Object.entries(prices["video-quality"]).map(
                        ([key, val]) => (
                            <option key={key} value={key}>
                                {val.name} ({val.price} zł)
                            </option>
                        )
                    )}
                </select>
            </div>
            <div className="mb-2">
                <label className="form-label">Audio</label>
                <select
                    disabled={rented}
                    className="form-select bg-dark text-white border-light"
                    value={audioQuality}
                    onChange={(e) => setAudioQuality(e.target.value)}
                >
                    {Object.entries(prices["audio"]).map(([key, val]) => (
                        <option key={key} value={key}>
                            {val.name} ({val.price} zł)
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Subtitles</label>
                <select
                    disabled={rented}
                    className="form-select bg-dark text-white border-light"
                    value={subtitles}
                    onChange={(e) => setSubtitles(e.target.value)}
                >
                    {Object.keys(prices["subtitles"]).map((key) => (
                        <option key={key} value={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)} (
                            {prices["subtitles"][key]} zł)
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Rent for</label>
                <select
                    disabled={rented}
                    className="form-select bg-dark text-white border-light"
                    value={rentalTime}
                    onChange={(e) => setRentalTime(e.target.value)}
                >
                    {Object.entries(prices["rental-time"]).map(([key, val]) => (
                        <option key={key} value={key}>
                            {val.name} ({val.price} zł)
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default RentalOptions;
