import requests 

endpoint = "http://api.openweathermap.org/data/2.5/weather"
payload = { 'q': 'London,UK', 'units': 'metric','appid': '55a85479a5f94082be5e09580e8a530a' }

response = requests.get(endpoint, params=payload)


print response.url 
print response.status_code
print response.headers['content-type']
print response.text

