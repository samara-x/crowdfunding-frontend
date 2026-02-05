async function postFundraiser(data) {
  const url = `${import.meta.env.VITE_API_URL}/fundraisers/`;

  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Token ${token}` }),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || "Failed to create fundraiser");
  }

  return response.json();
}
export default postFundraiser;