<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listIntegrations

query · domain `account` · requires the ADMIN scope

Every integration on the app's Integrations page and whether it is CONNECTED, in one read: currentUser.connectedEmailIntegrations (the key owner's own Google/Microsoft mailboxes; email is per person, so a teammate's mailbox is not here), oauthQuery.slackIntegrationStatus, Facebook Lead Ads through the key owner's own Facebook account (oauthQuery.listFacebookPages: Lead Ads is CONNECTED only when a Page has connected: true, the way the card reads it; facebookAccountConnected is just the account sign-in, and a null page list means Facebook did not answer), organizationQuery.getOrganization callTools / smrtPhone / enzo / readyMode (the dialers; a connected Enzo or ReadyMode lists its campaigns), directMailConnectionQuery.list (Lob, PostGrid, OLC: state ACTIVE | PENDING_VERIFICATION | DISCONNECTED, authHealth; rows outlive a disconnect, so an empty list means no account was ever connected), and phoneEnrichmentQuery.providers (phone enrichment such as Trestle: connectionStatus ACTIVE | NOT_CONNECTED | REVOKED | UNVERIFIED). Zapier, incoming webhooks and API keys are not listed. To connect anything, send the user the link from getIntegrationSetupUrls: connecting needs their own login. Organization admins only.

## Call

```ts
const result = await client.account.listIntegrations()
// → Promise<ListIntegrationsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListIntegrationsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "id": true,
    "connectedEmailIntegrations": {
      "provider": true,
      "email": true,
      "isDefaultForSending": true
    }
  },
  "oauthQuery": {
    "slackIntegrationStatus": {
      "connected": true,
      "teamId": true
    },
    "facebookAccountConnected": true,
    "listFacebookPages": {
      "id": true,
      "name": true,
      "connected": true
    }
  },
  "organizationQuery": {
    "getOrganization": {
      "id": true,
      "callToolsIntegrationStatus": {
        "connected": true
      },
      "smrtPhoneIntegrationStatus": {
        "connected": true
      },
      "enzo": {
        "connected": true,
        "campaignConfigs": {
          "id": true,
          "campaignName": true
        }
      },
      "readyMode": {
        "connected": true,
        "campaignConfigs": {
          "id": true,
          "campaignName": true
        }
      }
    }
  },
  "directMailConnectionQuery": {
    "list": {
      "id": true,
      "provider": true,
      "label": true,
      "state": true,
      "authHealth": true
    }
  },
  "phoneEnrichmentQuery": {
    "providers": {
      "provider": {
        "key": true,
        "displayName": true
      },
      "connectionStatus": true
    }
  }
}
```
