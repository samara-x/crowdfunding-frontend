// src/hooks/use-fundraiser.js
import { useState, useEffect, useCallback } from "react";
import getFundraiser from "../api/get-fundraiser";

export default function useFundraiser(fundraiserId) {
  const [fundraiser, setFundraiser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Stable fetch function using useCallback
  const fetchFundraiser = useCallback(async () => {
    if (!fundraiserId) {
      setError("No fundraiser ID provided");
      setIsLoading(false);
      return;
    }

    console.log("Starting fetch for ID:", fundraiserId); // log 1

    setIsLoading(true);
    setError(null);

    try {
      const data = await getFundraiser(fundraiserId);
      console.log("Fetch success – data:", data); // log 5
      setFundraiser(data);
    } catch (err) {
      console.error("Fetch failed:", err.message); // log 6
      setError(err.message || "Failed to load fundraiser");
      setFundraiser(null);
    } finally {
      console.log("Fetch finished – setting isLoading false"); // log 7
      setIsLoading(false);
    }
  }, [fundraiserId]);

  // Run fetch when ID changes or component mounts
  useEffect(() => {
    console.log("useEffect triggered for ID:", fundraiserId); // log 8
    fetchFundraiser();
  }, [fetchFundraiser]);

  return {
    fundraiser,
    isLoading,
    error,
    refetch: fetchFundraiser, // allows manual refresh (e.g. after pledge)
  };
}