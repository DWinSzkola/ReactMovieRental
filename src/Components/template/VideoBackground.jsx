import BackgroundWelcomePage from "../../assets/BackgroundWelcomePage.mp4";
import "../../Styles/WelcomePage.css";

const VideoBackground = ({ children }) => {
    return (
        <div className="backgroundWelcomePage">
            <video muted loop autoPlay className="backgroundVideo">
                <source src={BackgroundWelcomePage} type="video/mp4" />
            </video>
            {children}
        </div>
    );
};
export default VideoBackground;
