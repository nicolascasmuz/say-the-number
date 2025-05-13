import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3 className="digital-watch">{this.props.hora}</h3>;
  }
}

class Number extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3 className="digital-watch">{this.props.number}</h3>;
  }
}

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: 0,
      visible: false,
      play: false,
      number: "",
    };
    this.temporizador = null;
  }
  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: this.state.hora + 1,
      });
    }, 1000);
  };
  iniciar = () => {
    this.tictac();
    this.setState({
      hora: 0,
      visible: true,
      play: true,
      number: Math.floor(Math.random() * 10000),
    });
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      play: false,
    });
  };
  render() {
    return (
      <main className="main">
        <h2 className="title">Say the number!</h2>
        <div className="number-container">
          {this.state.visible && <Number number={this.state.number} />}
        </div>
        <div className="button-container">
          {this.state.play ? (
            <button className="stop-button" onClick={this.detener}>
              <img className="stop-button-img" src={this.props.stopButtonImg} />
            </button>
          ) : (
            <button className="play-button" onClick={this.iniciar}>
              <img className="play-button-img" src={this.props.playButtonImg} />
            </button>
          )}
          <div className="watch-container">
            {this.state.visible && <Reloj hora={this.state.hora} />}
          </div>
        </div>
      </main>
    );
  }
}
