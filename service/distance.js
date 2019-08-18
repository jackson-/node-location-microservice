const request = require("request");

const apiKey =
  process.env.ZIPCODE_API_KEY ||
  "kOG5lF8QkczEUsfJLvwreaPQLLMAo5Wsp0orHvbfacQOgqRoafnwMP5mZvgQBU70";
const zipCodeURL = "https://www.zipcodeapi.com/rest/";

const distance = {
  find: function(req, res, next) {
    request(
      zipCodeURL +
        apiKey +
        "/distance.json/" +
        req.params.zipcode1 +
        "/" +
        req.params.zipcode2 +
        "/mile",
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
        } else {
          console.log(response.statusCode + response.body);
          res.send({ distance: -1 });
        }
      }
    );
  }
};

module.exports = distance;
