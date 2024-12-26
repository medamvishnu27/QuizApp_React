import React from 'react'

const Leaderboard = ({leaderBoard}) => {
  let category = Object.keys(leaderBoard)
  return (
    <div className='container my-3 p-2 '>
    <h2 className='text-center fw-bold p-3'>LeaderBoard</h2>
    {/* leaderboard start */}
    {
      (category.length == 0) ? (<p className='text-center '>your the first to score</p>) : (
        <>
          <table className="table table-bordered shadow my-3 ">
            {/* table header section */}
            <thead>
              <tr>
                <th scope="col" className='p-3 fs-2 text-center'>Subject</th>
                <th scope="col" className='p-3 fs-2 text-center'>scope</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {
                category.map((sub)=>(
                  <tr key={sub}>
                    <td className='p-3 fs-4 text-center'>{sub}</td>
                    <td className='p-3 fs-4 text-center'>{leaderBoard[sub]}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          </>
          )
    }

          {/* leaderboard end */}
        </div>
  )
}

export default Leaderboard