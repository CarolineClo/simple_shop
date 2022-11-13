export async function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZ2xuZW96amF0Y3Zham1uZmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2MzkwOTAsImV4cCI6MTk4MjIxNTA5MH0.5XX9jkZmpHLjQRl860FE-LldzTmlsyie-tn16yfJu7g";
  const url = "https://uiglneozjatcvajmnfdh.supabase.co";
  const res = await fetch(url + "/rest/v1/simple_shop", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZ2xuZW96amF0Y3Zham1uZmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2MzkwOTAsImV4cCI6MTk4MjIxNTA5MH0.5XX9jkZmpHLjQRl860FE-LldzTmlsyie-tn16yfJu7g",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZ2xuZW96amF0Y3Zham1uZmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2MzkwOTAsImV4cCI6MTk4MjIxNTA5MH0.5XX9jkZmpHLjQRl860FE-LldzTmlsyie-tn16yfJu7g",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
