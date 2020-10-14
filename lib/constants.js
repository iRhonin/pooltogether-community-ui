const PermitAndDepositDaiRinkeby = require(`@pooltogether/pooltogether-contracts/deployments/rinkeby/PermitAndDepositDai.json`)

export const SUPPORTED_NETWORKS = [3, 4, 42, 31337, 1234]

export const SECONDS_PER_BLOCK = 14

export const DEFAULT_TOKEN_PRECISION = 18

export const DAI_MAINNET_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'

export const CONTRACT_ADDRESSES = {
  1: {
  },
  3: {
  },
  4: {
    PermitAndDepositDai: PermitAndDepositDaiRinkeby.address
  },
  42: {
  },
  31337: {
  },
}