import React from 'react'
import Header from '../../components/Header'
import millify from 'millify'

const MainPageView = ({coins}) => {
  return (
    <div>
      <Header/>
        {coins.loading===0 ? <p>Loading</p> : 
        <table className=' w-[100vw] table bg-slate-800 text-left text-gray-400 max-sm:text-xs' >
          <thead className='sticky top-[57px] text-gray-100 uppercase bg-gray-700 max-sm:text-[8px]'>
            <tr>
              <th>Rank</th>
              <th className='p-2'>Coin</th>
              <th>Price</th>
              <th>Market cap</th>
              <th>Volume</th>
              <th>Change %</th>
            </tr>
          </thead>
          <tbody className=''>
            {coins?.map((coin)=><tr 
            className=' border-b border-slate-500 max-sm:text-[10px]'
            key={coin.rank} >
              <td className='p-2'>{coin.rank} </td>
              <td className='flex p-2'>
                <p className=' text-yellow-600 mr-6'>{coin.symbol}</p>
                <p>{coin.name} </p>
              </td>
              <td>{millify(coin.priceUsd)} </td>
              <td>{millify(coin.marketCapUsd)} </td>
              <td>{millify(coin.volumeUsd24Hr)} </td>
              <td>{millify(coin.changePercent24Hr)} </td>
            </tr>)}
          </tbody>
        </table>
        }
    </div>
  )
}

export default MainPageView