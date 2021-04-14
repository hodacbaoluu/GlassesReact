import React, { Component } from "react";

export default class GlassesApp extends Component {
    glassesImg = "";
    valueGlass = "";
    formGlass = ""
    state = {
        glassesImg : "./img/glassesImage/v2.png",
        valueGlass : "$50",
        formGlass : "GUCCI G8759H",
    }

  handleClick = (type) => {
      console.log("run");
    let urlGlass = "";
    let value = "";
    let form = "";
    switch (type) {
      case 'v1':
        urlGlass = "./img/glassesImage/v1.png";
        value = "$30";
        form = "GUCCI G8850U";
        break;
      case 'v2':
        urlGlass = "./img/glassesImage/v2.png";
        value = "$50";
        form = "GUCCI G8759H";
        break;
      case 'v3':
        urlGlass = "./img/glassesImage/v3.png";
        value = "$30";
        form = "DIOR D6700HQ";
        break;
      case 'v4':
        urlGlass = "./img/glassesImage/v4.png";
        value = "$30";
        form = "DIOR D6005U";
        break;
      case 'v5':
        urlGlass = "./img/glassesImage/v5.png";
        value = "$30";
        form = "PRADA P8750";
        break;
      case 'v6':
        urlGlass = "./img/glassesImage/v6.png";
        value = "$30";
        form = "PRADA P9700";
        break;
      case 'v7':
        urlGlass = "./img/glassesImage/v7.png";
        value = "$30";
        form = "FENDI F8750";
        break;
      case 'v8':
        urlGlass = "./img/glassesImage/v8.png";
        value = "$30";
        form = "FENDI F8500";
        break;
      case 'v9':
        urlGlass = "./img/glassesImage/v9.png";
        value = "$30";
        form = "FENDI F4300";
        break;
  
      default:
        break;
    }

    this.setState({
      glassesImg: urlGlass,
      valueGlass: value, 
      formGlass: form,
    })
  };

  render() {
    return (
      <div id="root">
        <div>
          <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
            <h2 className="text-center h2 text-white py-1">Glasses App</h2>
            <div className="d-flex justify-content-center align-items-center">
              <div className="container row">
                <section className="model d-flex justify-content-center col-5" >
                  <div
                    className="card text-left"
                    style={{ width: 300, position: "relative" }}
                  >
                    <img
                      className="card-img-top"
                      src="./img/glassesImage/model.jpg"
                      alt="hinh model"
                    />
                    <img
                      src={this.state.glassesImg}
                      alt="kinh"
                      style={{
                        width: 170,
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: "16%",
                      }}
                    />
                    <div className="card-body">
                      <span className="card-title badge-danger h3 px-2 rounded">
                        {this.state.valueGlass}
                      </span>
                      <p className="card-text mt-2">{this.state.formGlass}</p>
                    </div>
                  </div>
                </section>
                <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() => this.handleClick("v1")}>
                      <img
                        src="./img/glassesImage/v1.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() =>this.handleClick("v2")}>
                      <img
                        src="./img/glassesImage/v2.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() => this.handleClick("v3")}>
                      <img
                        src="./img/glassesImage/v3.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() => this.handleClick("v4")}>
                      <img
                        src="./img/glassesImage/v4.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() => this.handleClick("v5")}>
                      <img
                        src="./img/glassesImage/v5.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() => this.handleClick("v6")}>
                      <img
                        src="./img/glassesImage/v6.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() => this.handleClick("v7")}>
                      <img
                        src="./img/glassesImage/v7.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() => this.handleClick("v8")}>
                      <img
                        src="./img/glassesImage/v8.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={() => this.handleClick("v9")}>
                      <img
                        src="./img/glassesImage/v9.png"
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                      />
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
