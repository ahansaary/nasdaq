import {motion} from 'framer-motion'
import moment from 'moment'
import {FC} from 'react'
import {Ticker} from 'src/domain/models/get-stocks-response.model'

type Props = {
  index: number
  ticker: Ticker
}

const TickerCard: FC<Props> = ({ticker, index}) => {
  return (
    <a href={`/stocks/${ticker.ticker}`}>
      <motion.div
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0, transition: {delay: 0.1 + 0.1 * index}}}
        className="border rounded-lg p-3 h-full hover:shadow-xl">
        <div className="flex justify-between items-center">
          <div className="text-2xl">{ticker.ticker}</div>

          <div className="text-sm">
            {moment(ticker.last_updated_utc).fromNow()}
          </div>
        </div>
        <hr />
        <div className="text-base py-3">{ticker.name}</div>
      </motion.div>
    </a>
  )
}

export default TickerCard
