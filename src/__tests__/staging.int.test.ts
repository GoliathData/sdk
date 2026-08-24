// Opt-in integration suite against the staging developer API. Skipped unless
// GOLIATH_SDK_STAGING_KEY (a real staging key — mint one via
// server/src/cli/scripts/accounts/mintDeveloperApiKeys.ts, or Settings → API
// keys in the staging app) and GOLIATH_SDK_STAGING_URL (the staging API host)
// are both set. READ-scope operations only — running this must never mutate
// staging data. Not part of CI; mirrors scripts/dev/developer-api-matrix.sh's
// read slice.
import { describe, expect, it } from 'vitest'
import { GoliathBadRequestError, GoliathClient } from '../index'

const key = process.env.GOLIATH_SDK_STAGING_KEY
const baseUrl = process.env.GOLIATH_SDK_STAGING_URL

// Constructed per test, not at module/describe scope — construction validates
// the key and would throw on the empty string even when the suite is skipped.
function client(): GoliathClient {
  return new GoliathClient({ apiKey: key ?? '', baseUrl: baseUrl ?? '' })
}

describe.skipIf(!key || !baseUrl)('staging integration (GOLIATH_SDK_STAGING_KEY + GOLIATH_SDK_STAGING_URL)', () => {
  it('getMyProfile returns the key owner', async () => {
    const data = await client().account.getMyProfile()
    expect(data.currentUser?.email).toBeTruthy()
  })

  it('listCommunicationChannels returns the org channel inventory', async () => {
    const data = await client().communications.listCommunicationChannels()
    expect(data.currentUser?.organization?.twilioPhoneNumbers).toBeDefined()
  })

  it('findDeals respects the typed limit variable', async () => {
    const data = await client().deals.findDeals({ limit: 1 })
    expect((data.dealQuery?.findDeals?.deals ?? []).length).toBeLessThanOrEqual(1)
  })

  it('an unknown operationId maps to GoliathBadRequestError(unknown_operation)', async () => {
    const error = await client()
      .execute('definitelyNotAnOperation')
      .catch((e: unknown) => e)
    expect(error).toBeInstanceOf(GoliathBadRequestError)
    expect((error as GoliathBadRequestError).code).toBe('unknown_operation')
  })
})
