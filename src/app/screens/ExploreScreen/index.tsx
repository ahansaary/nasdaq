import {FC} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from 'src/app/components/Loading'
import {useActions, useAppState} from 'src/business'
import TickerCard from './TickerCard'

// - (done) User can see stocks listed in Nasdaq exchange with their ticker and full name
// - (done) User can load more stocks by scrolling through the screen
// - User can search for a stock
// - (done) User can click on a stock to open its details screen

const ExploreScreen: FC = () => {
  const {tickers, isLoadingTickers} = useAppState().stocks
  const {getStocks, getMoreStocks} = useActions().stocks

  if (isLoadingTickers) {
    return <Loading center screen />
  }

  if (!tickers?.count) return <>No Data!</>

  return (
    <InfiniteScroll
      dataLength={tickers.count}
      next={getMoreStocks}
      hasMore={!!tickers.next_url}
      loader={<Loading center />}
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      refreshFunction={() => getStocks('')}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
      }>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 text-white">
        {tickers?.results.map((ticker, i) => (
          <TickerCard
            key={`ticker-${ticker.ticker}`}
            ticker={ticker}
            index={i}
          />
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default ExploreScreen
