import "./styles.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="Form">
        <form className="search-form">
          <input
            type="text"
            placeholder="City..."
            autoComplete="off"
            className="input-box"
          />
          <button type="button" className="location">
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <button className="search-box">Search</button>
        </form>
      </div>

      <div className="weather">
        <div className="d-flex flex-row justify-content-evenly">
          <div className="p-2">
            <div>
              <h1 className="city">...</h1>
              <h2 className="day-hour">
                Friday
                <br />
                20:54
              </h2>
            </div>
          </div>
          <div className="p-2">
            <div id="mainicon"></div>
          </div>

          <div className="p-2">
            <span className="temperature" id="temperature">
              ...
            </span>
            <span className="units">
              <a href="#" id="celsius-link" className="active">
                °C
              </a>
              |
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
            <div>
              <h3 className="weather-description">Sunny</h3>
            </div>
          </div>

          <div className="Forecast"></div>
          <div className="row"></div>
          <div className="col">
            Sat
            <br />
            11°
            <br />
            ...
          </div>
          <div className="col">
            Sun
            <br />
            -4°
            <br />
            ...
          </div>
          <div className="col">
            Mon
            <br />
            16°
            <br />
            ...
          </div>
          <div className="col">
            Tue
            <br />
            19°
            <br />
            ...
          </div>
          <div className="col">
            Wed
            <br />
            5°
            <br />
            ...
          </div>
        </div>
      </div>
    </div>
  );
}
