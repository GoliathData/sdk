<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setDealLinkRole

mutation · domain `deals` · requires the WRITE scope

The ITEM_LINK role of a link between two deals (getDeal linkedItems id); the link's label becomes its name. roleId null clears the role AND the link's label. An Only-one role moves off its previous holder.

## Call

```ts
const result = await client.deals.setDealLinkRole({ linkId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetDealLinkRoleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetDealLinkRoleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `linkId` | `ID!` | yes | — |
| `roleId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "setDealLinkRole": {
      "id": true,
      "label": true,
      "role": {
        "id": true,
        "name": true
      }
    }
  }
}
```
