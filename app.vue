<template>
  <div>
    <acme-label for="123" prop="appears" random-attribute="also appears">
      label
    </acme-label>

    <ClientOnly>
      <acme-label
        for="123"
        prop="also does not appear"
        random-attribute="does appear"
      >
        label in Client only
      </acme-label>
    </ClientOnly>

    <FakeClientOnly>
      <acme-label
        for="123"
        prop="also does not appear"
        random-attribute="does appear"
      >
        label in FakeClientOnly
      </acme-label>
    </FakeClientOnly>
  </div>
</template>

<script setup>
import "./components/label.ts";
</script>

<style>
acme-label[for] {
  color: green;
}

acme-label {
  display: block;
  color: red;
}
</style>
