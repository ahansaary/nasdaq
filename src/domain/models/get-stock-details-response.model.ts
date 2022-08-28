import {ApiResponse} from './api-response.model'

export interface GetStockDetailsResponse extends ApiResponse<TickerDetails> {}

export interface TickerDetails {
  /**
   * Whether or not the asset is actively traded. False means the asset has been delisted.
   */
  active: boolean
  /**
   * The exchange symbol that this item is traded under.
   */
  ticker: string
  /**
   * The root of a specified ticker. For example, the root of BRK.A is BRK.
   */
  ticker_root: string
  /**
   * The suffix of a specified ticker. For example, the suffix of BRK.A is A.
   */
  ticker_suffix: string
  /**
   * The approximate number of employees for the company.
   */
  total_employees: number
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
  address: {
    /**
     * The first line of the company's headquarters address.
     */
    address1: string
    /**
     * The city of the company's headquarters address.
     */
    city: string
    /**
     * The postal code of the company's headquarters address.
     */
    postal_code: string
    /**
     * The state of the company's headquarters address.
     */
    state: string
  }
  branding: {
    /**
     * A link to this ticker's company's icon. Icon's are generally smaller, square images that represent the company at a glance.
     */
    icon_url: string
    /**
     * A link to this ticker's company's logo.
     */
    logo_url: string
  }
  /**
   * A description of the company and what they do/offer.
   */
  description: string
  /**
   * The URL of the company's website homepage.
   */
  homepage_url: string
  /**
   * The phone number for the company behind this ticker.
   */
  phone_number: string
  /**
   * The date that the symbol was first publicly listed in the format YYYY-MM-DD.
   */
  list_date: string
  /**
   * The most recent close price of the ticker multiplied by weighted outstanding shares.
   */
  market_cap: number
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
  /**
   * The recorded number of outstanding shares for this particular share class.
   */
  share_class_shares_outstanding: number
  /**
   * The shares outstanding calculated assuming all shares of other share classes are converted to this share class.
   */
  weighted_shares_outstanding: number
  /**
   * The standard industrial classification code for this ticker.
   */
  sic_code: string
  /**
   * A description of this ticker's SIC code.
   */
  sic_description: string
}
