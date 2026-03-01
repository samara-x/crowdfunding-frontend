import { Link } from "react-router-dom";
import "./FundraiserCard.css";

function FundraiserCard(props) {
    const { fundraiserData} = props;
    const fundraiserLink = `fundraiser/${fundraiserData.id}`;

    return (
        <div className="fundraiser-card">
            <Link to={fundraiserLink} className="fundraiser-card">
                <img src={fundraiserData.image || "/images/placeholder.png"} alt={fundraiserData.title + " post cover image"} />
                <h3 className="card-title">{fundraiserData.title}</h3>
                <p className="card-description">{fundraiserData.description.slice(0, 100)}...
                </p>

                <div className="card-footer">
                <span className={fundraiserData.is_open ? "badge-open" : "badge-closed"}>
                    {fundraiserData.is_open ? "Open for helpers" : "No longer needed"}
                    </span>
                    <span className="card-supporters">
                    {fundraiserData.pledges?.length || 0} people joined
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default FundraiserCard;