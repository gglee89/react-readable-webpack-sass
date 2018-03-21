const urlPath = "http://localhost:3001/"

export default (url) => {
    fetch(
        urlPath + url,
        {
            headers: { 'Authorization': 'reactnd-gustavo-lee' }
        }
    )
}