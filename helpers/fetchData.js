export default async function fetchData() {
  try {
    const response = await fetch("/api/entries");
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}
