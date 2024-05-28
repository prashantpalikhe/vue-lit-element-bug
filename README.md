# Bug with Lit element and ClientOnly Nuxt component

## Steps

1. yarn
2. yarn dev

## Expected behavior

All `<acme-label />` should have `for` attribute and therefore be green in color.

But, the `acme-label` inside `<ClientOnly />` is red. And to ensure it is not a Nuxt issue, there is a `<FakeClientOnly />` that just emulates the behavior of `ClientOnly` and it also has the same issue. Indicating it maybe a Vue issue.
