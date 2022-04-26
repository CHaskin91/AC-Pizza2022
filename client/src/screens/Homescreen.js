import React from "react";
import pizzas from "../pizzasdata";

export default function Homescreen() {
  return (
    <div>
      <div className="row">

        {pizzas.map(pizza=>{

          return <div className="col-md-4">
              <div>
                <pizza pizza={pizza} />
              </div>

            </div>
        })}

      </div>
    </div>
  );
}
