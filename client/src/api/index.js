let urlPath = "http://localhost:3001/"

export default async (url) => {
    urlPath += url;
    let response = await fetch(
        urlPath,
        {
            headers: { 'Authorization': 'reactnd-gustavo-lee' }
        }
    );

    return (await (response.status === 200)) ? response.text() : response.json();
}