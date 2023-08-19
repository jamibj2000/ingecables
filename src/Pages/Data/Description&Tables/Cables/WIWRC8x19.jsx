import React from 'react'

const WIWRC8x19 = () => {
  return (
    <>
    <table className="table table-striped">
        <thead className="thead-dark">
            <tr className="bg-dark text-light">
                <td>
                    <p>Nominal</p>
                    <p>T.l.mm</p>
                </td>
                <td>
                    <p>Peso Aprox.</p>
                    <p>(kg/m)</p>
                </td>
                <td>
                    <p>Carga de Rotura</p>
                    <p>(kg)</p>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>6,0</p>
                </td>
                <td>
                    <p>0,163</p>
                </td>
                <td>
                    <p>2.734</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>6,5</p>
                </td>
                <td>
                    <p>0,191</p>
                </td>
                <td>
                    <p>3.214</p>
                </td>
            </tr>
        </tbody>
    </table> 
    </>
  )
}

export default WIWRC8x19
