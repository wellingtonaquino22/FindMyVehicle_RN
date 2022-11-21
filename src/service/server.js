export async function sendData(location) {
    const uri = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Device-Token': '1e79c593-7943-4886-8c74-e7d7b0f7c92f'
        },
        body: JSON.stringify({
            "variable": "location",
            "value": location.vehicle,
            "location": {
                "lat": parseFloat(location.latitude),
                "lng": parseFloat(location.longitude)
            },
            "address": {
                "cep": location.postalCode,
                "street": location.street,
                "number": location.number,
                "district": location.district,
                "city": location.city,
                "region": location.region
            }
        })
    }
    fetch('https://api.tago.io/data', uri)
        .then(res => JSON.stringify(res.body))
        .catch(error => JSON.stringify({"error": error}))
}