import {FC} from 'react'
import Loading from 'src/app/components/Loading'
import {useAppState} from 'src/business'

// - (done) User can see the stock logo or stock initials if no logo is available
// - (done) User can see the stock ticker and name
// - (done) User can see the following statistics (for the previous day)
//     - (done) Close
//     - (done) Open
//     - (done) High
//     - (done) Low
//     - (done) Volume
// - (done) User can see the following info about the stock
//     - (done) Button to open company website (if website is available)
//     - (done) Industry (if available)
//     - (done) Description (if available)
// - (done) User can go back to explore screen

const StockDetailsScreen: FC = () => {
  const {
    ticker,
    previousClose,
    isLoadingTickerDetails,
    isLoadingPreviousClose
  } = useAppState().stocks

  if (isLoadingTickerDetails) return <Loading center screen />

  if (!ticker) return <>No Data!</>

  const apiKey = process.env.REACT_APP_POLYGON_API_KEY
  const logoUrl = `${ticker.branding.logo_url}?apiKey=${apiKey}`

  return (
    <div className="flex flex-col gap-3 m-3 text-white">
      <a href="/stocks">&larr; Back</a>
      <img src={logoUrl} className="h-20 m-3 mx-auto" alt="Logo" />

      <div className="flex flex-col w-full">
        <h1 className="text-xl font-semibold">{ticker.ticker}</h1>
        <p>{ticker.name}</p>
      </div>

      <div className="w-full mt-3">
        <h1 className="text-3xl">Statistics</h1>

        {isLoadingPreviousClose && <Loading center />}

        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col">
            <div>Close</div>
            <div>
              {previousClose?.results[0].c} {ticker.currency_name}
            </div>
          </div>

          <div className="flex flex-col">
            <div>Open</div>
            <div>
              {previousClose?.results[0].o} {ticker.currency_name}
            </div>
          </div>

          <div className="flex flex-col">
            <div>High</div>
            <div>
              {previousClose?.results[0].h} {ticker.currency_name}
            </div>
          </div>

          <div className="flex flex-col">
            <div>Low</div>
            <div>
              {previousClose?.results[0].l} {ticker.currency_name}
            </div>
          </div>

          <div className="flex flex-col">
            <div>Volume</div>
            <div>
              {previousClose?.results[0].v} {ticker.currency_name}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-3">
        <h1 className="text-3xl">About</h1>

        <div className="flex justify-between">
          {!!ticker.sic_description && (
            <div className="flex flex-col">
              <div>Industry</div>
              <div>{ticker.sic_description}</div>
            </div>
          )}

          {!!ticker.homepage_url && (
            <a href={ticker.homepage_url} target="_blank" rel="noreferrer">
              Visit Website
            </a>
          )}
        </div>

        {!!ticker.description && (
          <div className="flex flex-col mt-3">
            <div>Description</div>
            <div>{ticker.description}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StockDetailsScreen
