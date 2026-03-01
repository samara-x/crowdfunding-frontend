//TO DO - NEED TO TEST THIS FUNCTION //
async function postCreateFundraiser(data) {
  const url = `${import.meta.env.VITE_API_URL}/fundraisers/`;
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Token ${token}`
    },

    body: JSON.stringify({
      // Removed "user: from back ends sets "owner" from token
      "title": data.title,
      "description": data.description,
      "goal": data.goal,
      "image": data.image,
      "is_open": data.is_open
    }),
  });
  
console.log("Data sent to postCreateFundraiser:", data);
console.log("Response from postCreateFundraiser:", response.status);

  if (!response.ok) {
    const fallbackError = `Error trying to post fundraiser`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    if (response.status === 401) {
      throw new Error("You will need to login first to create a post");
    }
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postCreateFundraiser;