const apiUrl = process.env.NEXT_PUBLIC_HYGRAPH_API;
const contentApi = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${apiUrl}/master`;

const fetchData = async (query: string) => {
  const queryParams = {
    query: query,
  };
  try {
    const request = await fetch(contentApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryParams),
    });
    const resp = await request.json();
    return resp?.data;
  } catch (err) {
    console.log("Something went wrong");
  }
};

export default fetchData;
