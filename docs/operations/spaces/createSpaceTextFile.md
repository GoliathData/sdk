<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createSpaceTextFile

mutation · domain `spaces` · requires the WRITE scope

Save text as a new file — a report, notes, a JSON or CSV export, a memo — in a folder you can edit. The NAME decides the type (`.md`, `.json`, `.csv`, `.txt`, `.html`, `.ts` …); binary types are refused (they are uploaded in the app). Up to 5 MB. The file is yours, labelled as made by AI for you when an agent writes it. An `.html` file saved here is an ordinary file, never a Page (Pages are made only by Ask Goliath's page tools). Pass `creationKey` to make a retry safe. Default to the person's My files unless they named a folder.

## Call

```ts
const result = await client.spaces.createSpaceTextFile({ input: <CreateSpaceTextFileInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateSpaceTextFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateSpaceTextFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CreateSpaceTextFileInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "createTextFile": {
      "id": true,
      "spaceId": true,
      "spaceName": true,
      "parentId": true,
      "kind": true,
      "name": true,
      "description": true,
      "fileType": true,
      "sizeBytes": true,
      "accessMode": true,
      "systemLocked": true,
      "viewerRole": true,
      "abilities": {
        "addChildren": true,
        "edit": true,
        "move": true,
        "trash": true,
        "share": true
      },
      "owner": {
        "id": true,
        "name": true
      },
      "createdBy": {
        "kind": true,
        "label": true
      },
      "childCount": true,
      "shareCount": true,
      "currentVersion": {
        "id": true,
        "versionNumber": true
      },
      "path": {
        "id": true,
        "name": true
      },
      "updatedAt": true,
      "trashedAt": true
    }
  }
}
```
