async function deleteFundraiser(fundraiserId) {
    const url = `${import.meta.env.VITE_API_BASE_URL}/fundraisers/${fundraiserId}/`;

    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("User is not authenticated");
    }

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${token}`,
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to delete fundraiser");
    }

    return true;
}

export default deleteFundraiser;