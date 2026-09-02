<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContentTemplate

mutation · domain `workflows` · requires the WRITE scope

Delete a template by id. Returns the remaining templates. A template that workflow steps or task sets still use is REFUSED unless you pass a dependencyResolution: call getDeletionImpact with targetKind CONTENT_TEMPLATE first, then hand back its impactVersion plus one replacement template (same type as the one being deleted) — every step and task set is repointed at it before the delete. Omit dependencyResolution for a template nothing references.

## Call

```ts
const result = await client.workflows.deleteContentTemplate({ templateId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteContentTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteContentTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `templateId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "deleteContentTemplate": {
      "listContentTemplates": {
        "id": true,
        "name": true
      }
    }
  }
}
```
