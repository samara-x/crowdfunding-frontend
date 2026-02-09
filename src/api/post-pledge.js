// 09/02 8:20pm THIS IS WORKING! MAY NEED TO TOGGLE THE ANONYMOUS BOOLEAN VALUE TO TRUE OR FALSE TO TEST BOTH SCENARIOS
async function postPledge({ amount, comment = '', anonymous = false, fundraiserId }) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;

    const token = localStorage.getItem("token");

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Token ${token}`
        },
        body: JSON.stringify({
            "amount": Number(amount),
            "comment": comment,
            "anonymous": anonymous,
            "fundraiser": fundraiserId
        }),
    });

    if (!response.ok) {
        const fallbackError = `Error trying to post pledge`;

        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail ?? fallbackError);
    }

    return await response.json();
}

export default postPledge;