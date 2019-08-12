export async function handleResponse(response) {
    console.log(response);
    if(response.statusText === "OK" || response.statusText === "Created") {
        return response.data;
    }
    console.log(response);
    if(response.status === 400) {
        const error = await response.text();
        throw new Error(error)
    }
    throw new Error("Network response was not ok.")
}

export function handleError(error) {
    console.log("API call failed. " + error);
    throw error;
}
