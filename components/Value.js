import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Answer from "./Answer";
function Value({rows}) {
    const [value,setValue] = useState([])
    /* Creating a matrix of size n x n and initializing it with null values. */
    const [matrix, setMatrix] = useState(Array.from({length: rows},()=> Array.from({length: rows}, () => null)));
    const [matrixt, setMatrixt] = useState(Array.from({length: 1},()=> Array.from({length: rows}, () => null)));

    useEffect(()=>{
        setMatrix(Array.from({length: rows},()=> Array.from({length: rows}, () => null)))
        setMatrixt(Array.from({length: 1},()=> Array.from({length: rows}, () => null)))
        
    },[rows])
    const handleChange = (row, column, event) => {
        let data = [...matrix];
        data[row][column] = +event.target.value;
        setMatrix(data);
    
        console.log(matrix);
      };
      const handleChanget = (row, column, event) => {
        let data = [...matrixt];
        data[row][column] = +event.target.value;
        setMatrixt(data);
        
      };
    function getData(row,a,b){

  axios({
    method: 'post',
    url: `https://mathsolve.deta.dev/math/${row}`,
    data: {a: a, b: b[0]},
    headers: { "Access-Control-Allow-Origin": "*" },
  })
  .then(function (response) {
    setValue(response.data);
    
  })
  .catch(function (error) {
    console.log(error);
  })
  
      }
      const handle=(e)=>{
        e.preventDefault();
      }
  return (
    <form onSubmit={(e)=>handle(e)}>
    <div className='Input' onSubmit={handle}><div className='Input__container'>
    <div className='value__container'>
      {matrix.map((row, rowIndex) => (
        <div className='input__area' key={rowIndex}>
          {row.map((column, columnIndex) => (
            <div className='each__input' key={columnIndex}>
              <input
                type="number"
                onChange={e => handleChange(rowIndex, columnIndex, e)}
                className="each__input__form"
                placeholder={`X${columnIndex+1} in row ${rowIndex+1}`}
                value={matrix[rowIndex][columnIndex]}
                data-tip data-for='input1'

                required
              />
              <ReactTooltip id='input1' place="bottom" type="dark" textColor='#5F4B8BFF' backgroundColor='#E69A8DFF' effect="solid">
              {`X${columnIndex+1} in row ${rowIndex+1}`}
              </ReactTooltip>
              {/* <div className='number'>X<sub>{columnIndex+1}</sub></div> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  <div className='constant__part'>
    <div className='value__container'>
      {matrixt.map((row, rowIndex) => (
        <div className='input__areaTwo' key={rowIndex}>
          {row.map((column, columnIndex) => (
            <div className='each__input' key={columnIndex}>
              <div className='equalto'>
                =
              </div>
              <input
                type="number"
                onChange={e => handleChanget(rowIndex, columnIndex, e)}
                className="each__input__form"
                placeholder={`C${columnIndex+1} in row ${rowIndex+1}`}
                value={matrixt[rowIndex][columnIndex]}
                data-tip data-for='input'
                
                required
              />
              <ReactTooltip id='input' place="bottom" type="dark" textColor='#5F4B8BFF' backgroundColor='#E69A8DFF' effect="solid">
              {`C${columnIndex+1} in row ${rowIndex+1}`}
              </ReactTooltip>
              {/* <div className='number'>C<sub>{columnIndex+1}</sub></div> */}

            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  
  </div>
  <button className='form__button__rows main__button'   onClick={()=>getData(rows,matrix,matrixt)}>Get Answer</button>
  <Answer value={value}/>
  </form>
  )
}

export default Value