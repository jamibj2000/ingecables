import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs';
const BOTAS4X4 = () => {
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Código artículo</th>
                <th>Talla</th>
                <th>Color</th>
                <th>Impermeable</th>
                <th>Antideslizante</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>BT-MB-T40</td>
                <td>40</td>
                <td>Amarillo</td>
                <td><BsCheckCircleFill /></td>
                <td><BsCheckCircleFill /></td>
            </tr>
            <tr>
                <td>BT-MB-T41</td>
                <td>41</td>
                <td>Amarillo</td>
                <td><BsCheckCircleFill /></td>
                <td><BsCheckCircleFill /></td>
            </tr>
            <tr>
                <td>BT-MB-T42</td>
                <td>42</td>
                <td>Amarillo</td>
                <td><BsCheckCircleFill /></td>
                <td><BsCheckCircleFill /></td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default BOTAS4X4
