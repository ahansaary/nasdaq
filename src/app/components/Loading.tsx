import classNames from 'classnames'
import {FC} from 'react'
import ClockLoader from 'react-spinners/ClockLoader'

type Props = {
  center?: boolean
  screen?: boolean
}

const Loading: FC<Props> = ({center, screen}) => {
  return (
    <div
      className={classNames(
        center ? 'flex justify-center items-center' : '',
        screen ? 'h-screen' : ''
      )}>
      <ClockLoader color="#fff" />
    </div>
  )
}

export default Loading
