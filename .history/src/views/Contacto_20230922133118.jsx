import React, { Component } from "react";

export class Contacto extends Component {
  render() {
    return (
      <div>
        <section id="Contacto">
          <div className="form-container container my-5">
            <h2 className="display-4 fw-bold text-center my-4">Cuentanos, ¿En que te podemos ayudar?</h2>

            <form>
              <div className="form-group mb-4">
                <label className="mb-2">Correo electrónico</label>
                <input
                  className="form-control"
                  placeholder="Correo electrónico"
                />
              </div>

              <div className="form-group">
                <label className="mb-2">Mensaje</label>
                <textarea
                  className="form-control"
                  placeholder="Escribe aquí tu mensaje"
                ></textarea>
              </div>

              <div className="my-3 text-end">
                <button className="btn bg-danger text-light">Enviar</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contacto;
