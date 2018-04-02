const urlPath = "http://localhost:3001/"

export default async (url, options = {}) => {
    let response = await fetch(
        urlPath + url,
        {
            headers: new Headers({
                'Authorization': 'reactnd-gustavo-lee',
                'Content-Type': 'application/json'
            }),
            ...options
        }
    );

    return response.status === 200 ? response.text() : response.json()
}