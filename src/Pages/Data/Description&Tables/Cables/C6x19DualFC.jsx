import React from 'react'

const C6x19DualFC = () => {
  return (
    <>
     <table className="table p-0 table-striped">
          <thead className="p-0 m-0">
            <tr className='table-dark m-0 ' 
                style = {{ 
                    position: "sticky",
                    top: "-3%",
                    zIndex: "1020"
                }}>
              <th className="text-center">
                  Diámetro nominal T.I.mm
              </th>
              <th className="text-center">
                  Peso aprox. (kg/m)
              </th>
              <th className="text-center">
                  Carga de rotura (kg)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                    8
                </td>
                <td>
                    0.22
                </td>
                <td>
                    2.864
                </td>
            </tr>
            <tr>
                <td>
                    9
                </td>
                <td>
                    0.28
                </td>
                <td>
                    3.629
                </td>
            </tr>
            <tr>
                <td>
                    10
                </td>
                <td>
                    0.34
                </td>
                <td>
                    4.485
                </td>
            </tr>
            <tr>
                <td>
                    11
                </td>
                <td>
                    0.41
                </td>
                <td>
                    5.423
                </td>
            </tr>
            <tr>
                <td>
                    12
                </td>
                <td>
                    0.49
                </td>
                <td>
                    6.453
                </td>
            </tr>
            <tr>
                <td>
                    13
                </td>
                <td>
                    0.58
                </td>
                <td>
                    7.573
                </td>
            </tr>
            <tr>
                <td>
                    14
                </td>
                <td>
                    0.67
                </td>
                <td>
                    8.777
                </td>
            </tr>
            <tr>
                <td>
                    16
                </td>
                <td>
                    0.87
                </td>
                <td>
                    11.519
                </td>
            </tr>
          </tbody>
        </table>
    </>
  )
}

export default C6x19DualFC
