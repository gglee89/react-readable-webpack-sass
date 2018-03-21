const urlPath = "http://localhost:3001/"

export default async (url) => {
    let response = await fetch(
        urlPath + url,
        {
            headers: { 'Authorization': 'reactnd-gustavo-lee' }
        }
    );

    return response.status === 200 ? response.text() : response.json()
}