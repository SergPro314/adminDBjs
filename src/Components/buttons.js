let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1YW5AbmV4dGdlbmhxLmNvbSIsInVzZXJJZCI6IjYwZDllYmRhNTAwNTA5MGU3MDRkYTFiYSIsImlhdCI6MTYyNDkwNjExMCwiZXhwIjoxNjI0OTA5NzEwfQ.tMCTRmMTLTedxwu4f_94puxJDbJ4pSV1TrULybzA3tU'
let fullToken = 'Bearer ' + token
let requestOptions = {
  method: 'GET',
  headers: {'Content-Type': 'application/json', 'Authorization': fullToken, 'Accept': 'application/json'},

};

// be able to update table with new 

let url = 'http://localhost:4000/get-points'
const response = fetch(url, requestOptions)
  .then(response => {
      return response.text()})
  .then(json => {
      console.log(json)
      // let data = JSON.parse(json)
      // logins += data.points
      // console.log(logins)
  })
 
// call to 

// call to delete in postman



