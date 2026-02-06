//NEED TO TEST THIS FUNCTION
async function postFundraiser(data) {
  const url = `${import.meta.env.VITE_API_URL}/fundraisers/`;
  const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "title": data.title,
      "location": data.location,
      "description": data.description,
      "goal": data.goalAmount,
      "image_url": data.imageUrl,
      "is_open": data.isOpen
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to post fundraiser`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postFundraiser;