const API_URL = "http://localhost:5000"
export async function getMenu(){
    const res = await fetch(`${API_URL}/caps`)
    if (!res.ok) throw Error("Failed getting menu");
    const  data    = await res.json();
  return data;
}