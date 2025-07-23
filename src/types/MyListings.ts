import type { Asset } from './Asset.js'
import type { BuyOrder } from './BuyOrder.js'
import type { Listing } from './Listing.js'
import type { MyListingsResponse } from './MyListingsResponse.js'

export interface MyListings {
  _data: MyListingsResponse
  success: boolean
  pageSize: number
  totalCount: number
  assets: Asset[]
  start: number
  numActiveListings: number
  listings: Listing[]
  listingsOnHold: Listing[]
  listingsToConfirm: Listing[]
  buyOrders: BuyOrder[]
}
