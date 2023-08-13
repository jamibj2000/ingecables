import Data from "./data/data.json";

export default class API {
    constructor(endpoint) {
      this.endpoint = endpoint;
    }
  
    getData() {
      return fetch(this.endpoint)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  }
  
