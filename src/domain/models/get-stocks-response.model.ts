import {ApiResponse} from './api-response.model'

export interface GetStocksResponse extends ApiResponse<Ticker[]> {}

export interface Ticker {
  /**
   * Whether or not the asset is actively traded. False means the asset has been delisted.
   */
  active: boolean
  /**
   * The exchange symbol that this item is traded under.
   */
  ticker: string
  /**
   * The type of the asset.
   */
  type: string
  /**
   * The name of the asset. For stocks/equities this will be the companies registered name. For crypto/fx this will be the name of the currency or coin pair.
   */
  name: string
  /**
   * The locale of the asset.
   */
  locale: 'us' | 'global'
  /**
   * The market type of the asset.
   */
  market: 'stocks' | 'crypto' | 'fx' | 'otc'
  /**
   * The CIK number for this ticker.
   */
  cik: string
  /**
   * The composite OpenFIGI number for this ticker.
   */
  composite_figi: string
  /**
   * The name of the currency that this asset is traded with.
   */
  currency_name: string
  /**
   * The last date that the asset was traded.
   */
  delisted_utc: string
  /**
   * The information is accurate up to this time.
   */
  last_updated_utc: string
  /**
   * The ISO code of the primary listing exchange for this asset.
   */
  primary_exchange: string
  /**
   * The share Class OpenFIGI number for this ticker.
   */
  share_class_figi: string
}
