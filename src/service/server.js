export async function sendData(lat, long, vehicle) {
    console.log({"location": {"vehicle": vehicle, "latitude": lat, "longitude": long}})
    const uri = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Device-Token': '4ae63d25-4c3d-48b2-b53a-48746cd1e578'
        },
        body: JSON.stringify({
            "variable": "location",
            "value": vehicle,
            "location": {
                "lat": parseFloat(lat),
                "lng": parseFloat(long)
            }
        })
    }
    fetch('https://api.tago.io/data', uri)
        .then(res => JSON.stringify(res.body))
        .catch(error => JSON.stringify({"error": error}))
}