import React from 'react'

const EslabonTor = () => {
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Artículo</th>
                    <th>Diámetro (pulg.)</th>
                    <th>Pies por Tambor</th>
                    <th>Peso por Tambor (lbs.)</th>
                    <th>Carga Límite de Trabajo - WLL (lbs.)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ACCO-5201-40692</td>
                    <td>3/8”</td>
                    <td>400</td>
                    <td>620</td>
                    <td>6,600</td>
                </tr>
                <tr>
                    <td>ACCO-5201-40792</td>
                    <td>7/16”</td>
                    <td>300</td>
                    <td>687</td>
                    <td>8,750</td>
                </tr>
                <tr>
                    <td>ACCO-5201-40892</td>
                    <td>1/2”</td>
                    <td>200</td>
                    <td>541</td>
                    <td>11,300</td>
                </tr>
                <tr>
                    <td>ACCO-5201-41092</td>
                    <td>5/8”</td>
                    <td>150</td>
                    <td>605</td>
                    <td>15,800</td>
                </tr>
            </tbody>
        </table> 
    </>
  )
}

export default EslabonTor
