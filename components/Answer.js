import React from 'react';
function Answer({value}) {
console.log(value)
  return (
    <div>
      {value.length===0?<>
        <h1>Please give your input</h1>
      </>:<>
      
      {value.a.map((i,j)=>{
        
        return(
          <div className='eqContainer' key={j}>
          {i.map((m,n)=>{
            return(
              <div key={n} className="equation">
              {m.map((k,l)=>{
                return(
                  <>
                  + {(Math.round(k * 100) / 100).toFixed(2)}x<sub>{l+1}</sub><sup>{"'".repeat(j)}</sup>
                  </>
                )
              })}
             = {(Math.round(value.b[j][n] * 100) / 100).toFixed(2)}
              
              </div>
            )
          })}
          </div>
          
        )
      })}
      <div className='answer-container'>
        {value.x.map((b,v)=>{
          console.log(b)
          return(
            <>
            {
              b.map((f,g)=>{
                return(
                  <div key={g}>
                  x<sub>{g+1}</sub> = {(Math.round(f * 100) / 100).toFixed(2)} 
                  
                  </div>
                )
              })
            }
            </>
          )
        })}
      </div>
      
      </>}
    </div>
  )
}

export default Answer