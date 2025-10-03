const https = require("https");

let getResponse = "";

const doRequest = (country) => {
  if (country) {
    https
      .get("https://api.agify.io/?name[]=victor&name[]=milson&name[]=gabriela&name[]=patricia&name[]=wagner&name[]=brenda&country_id=" + country, (res) => {
        if (res.statusCode === 200) {
          res.on("data", (d) => {
            getResponse += d;
          });
          res.on("end", () => {
            json = JSON.parse(getResponse);
            for (let index = 0; index < json.length; index++) {
              console.log("Nome:", json[index].name);
              console.log("Idade média:", json[index].age);
              console.log("Quantidade de registros", json[index].count);
              console.log("-----------------------");
            }
          });
        }
      })
      .on("error", (e) => {
        console.error(e);
      });

  } else {
  
     https
      .get("https://api.agify.io/?name[]=victor&name[]=milson&name[]=gabriela&name[]=patricia&name[]=wagner&name[]=brenda", (res) => {
        if (res.statusCode === 200) {
          res.on("data", (d) => {
            getResponse += d;
          });
          res.on("end", () => {
            json = JSON.parse(getResponse);
            for (let index = 0; index < json.length; index++) {
              console.log("Nome:", json[index].name);
              console.log("Idade média:", json[index].age);
              console.log("Quantidade de registros", json[index].count);
              console.log("-----------------------");
            }
          });
        }
      })
      .on("error", (e) => {
        console.error(e);
      });


  }
};
  

doRequest("BR");