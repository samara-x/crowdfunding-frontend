import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import "./HomePage.css";

function HomePage() {
    const { fundraisers } = useFundraisers();
    const { isLoading, error } = useFundraisers();

    if (isLoading) {
        return <div>Page is loading...</div>;
    }
    if (error) {
        return <div>There was an error loading the fundraisers: {error.message}</div>;
    }

    return (
        <div id="fundraiser-list">
            {fundraisers.map((fundraiserData, key) => {
                return <FundraiserCard key={key} fundraiserData={fundraiserData} />;
            })}
        </div>
    );
}

export default HomePage;