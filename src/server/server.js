
const path = require("path")
const express = require('express')
const app = express()
var request = require('request')
const si = require('systeminformation')

function sendData(temp) {
    var options = {
        'method': 'POST',
        'url': 'https://api.tago.io/data',
        'headers': {
            'Content-Type': 'application/json',
            'Device-Token': 'a381b1c3-f8ed-42bc-9273-81ead8afcf7f'
        },
        body: JSON.stringify({
            "variable": "temperature",
            "value": parseInt(temp)
        })

    }
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    })
}

setInterval(() => {
    si.cpuTemperature()
        .then(data => sendData(data.main))
        .catch(error => console.error(error))
}, 5000)
