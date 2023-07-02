export async function fetchEntryData() {
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

export async function fetchTaskData() {
  try {
    const response = await fetch("/api/tasks");
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
