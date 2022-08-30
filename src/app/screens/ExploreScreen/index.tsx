import {FC} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from 'src/app/components/Loading'
import {useActions, useAppState} from 'src/business'
import styled from 'styled-components'
import Search from './Search'
import TickerCard from './TickerCard'

// - (done) User can see stocks listed in Nasdaq exchange with their ticker and full name
// - (done) User can load more stocks by scrolling through the screen
// - (done) User can search for a stock
// - (done) User can click on a stock to open its details screen

const Wrapper = styled.div`
  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
`

const ExploreScreen: FC = () => {
  const {tickers, isLoadingTickers} = useAppState().stocks
  const {getStocks, getMoreStocks} = useActions().stocks

  const renderStates = () => {
    if (isLoadingTickers) {
      return <Loading center screen />
    }

    if (!tickers?.count) return <>No Data!</>

    return null
  }

  return (
    <Wrapper className="flex flex-col items-center">
      <Search />
      {renderStates()}
      <InfiniteScroll
        className="w-full text-white"
        dataLength={tickers?.count || 0}
        next={getMoreStocks}
        hasMore={!!tickers?.next_url}
        loader={<Loading center />}
        endMessage={
          <p className="text-center">
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={getStocks}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 className="text-center">&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 className="text-center">&#8593; Release to refresh</h3>
        }>
        <div className="grid gap-5 p-5 text-white">
          {tickers?.results.map((ticker, i) => (
            <TickerCard
              key={`ticker-${ticker.ticker}`}
              ticker={ticker}
              index={i}
            />
          ))}
        </div>
      </InfiniteScroll>
    </Wrapper>
  )
}

export default ExploreScreen
