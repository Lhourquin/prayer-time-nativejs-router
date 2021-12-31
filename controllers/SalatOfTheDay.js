import SalatOfTheDaySearch from "../models/SalatOfTheDaySearch.js";
import GetPosition from "../models/GetPosition.js";

export default class SalatOfTheDay {
  constructor() {
    (this.name = "Today"), (this.url = "../views/salatOfTheDay.html");
  }

  executeHttpRequest() {
    document
      .getElementById("searchByCity")
      .addEventListener("click", (event) => {
        event.preventDefault();

        this.renderSalatOfTheDay();
      });

    document
      .getElementById("searchByLocalisation")
      .addEventListener("click", (event) => {
        event.preventDefault();

        this.getThePosition();
      });
  }

  getThePosition() {
    let getPosition = new GetPosition();

    function getCoords(pos) {
      let crds = pos.coords;
      let lat = crds.latitude;
      let lon = crds.longitude;

      console.log(
        `Dans la fonction getCoords la latitude ${lat} et la longitude ${lon}`
      );
      getPosition
        .getPosition(lon, lat)
        .then((result) => (document.getElementById("city").value = result));
    }

    navigator.geolocation.getCurrentPosition(getCoords);
  }

  renderSalatOfTheDay() {
    let salatOftheDaySearch = new SalatOfTheDaySearch();

    salatOftheDaySearch
      .searchByCity(document.getElementById("city").value)
      .then(function (obj) {
        document.getElementById("dateOfTheDay").textContent = obj.date;
        document.getElementById("fajr").textContent = obj.salat.fajr;
        document.getElementById("shourouk").textContent = obj.salat.shourouk;
        document.getElementById("dhor").textContent = obj.salat.dhor;
        document.getElementById("asr").textContent = obj.salat.asr;
        document.getElementById("maghreb").textContent = obj.salat.maghreb;
        document.getElementById("icha").textContent = obj.salat.icha;
        document.getElementById("midnight").textContent = obj.salat.midnight;
      });
  }
}
