<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listForms

query · domain `forms` · requires the READ scope

List your organization's lead-capture forms (embed forms) - name, slug, status (DRAFT | ACTIVE | INACTIVE), lifetime submission count, and public URL. Use the returned id with getForm, listFormSubmissions, and getFormAnalytics.

## Call

```ts
const result = await client.forms.listForms()
// → Promise<ListFormsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFormsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormQuery": {
    "list": {
      "id": true,
      "name": true,
      "slug": true,
      "status": true,
      "source": true,
      "ownerType": true,
      "publicUrl": true,
      "shortUrl": true,
      "submissionCount": true,
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
