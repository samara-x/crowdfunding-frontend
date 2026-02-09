import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import "./HomePage.css";
import { useEffect } from "react";

function HomePage() {
    const location = useLocation();
    // Call hook and get all from it
    const { fundraisers, isLoading, error, refetch } = useFundraisers();

    useEffect(() => {
        if (location.state?.justCreated) {
            // If the state indicates a refresh is needed, trigger a re-fetch/update logic
            refetch();
        }
    }, [location.state?.justCreated]);
    
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