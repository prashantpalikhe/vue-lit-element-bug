<template>
  <div>
    <acme-label for="123" prop="appears" random-attribute="also appears">
      label that has the for attribute
    </acme-label>

    <ClientOnly>
      <acme-label
        for="123"
        prop="also does not appear"
        random-attribute="does appear"
      >
        label in Client only with no for attribute
      </acme-label>
    </ClientOnly>

    <FakeClientOnly>
      <acme-label
        for="123"
        prop="also does not appear"
        random-attribute="does appear"
      >
        label in FakeClientOnly with no for attribute
      </acme-label>
    </FakeClientOnly>

    <acme-label
      v-if="replaceWithAcmeLabel"
      for="123"
      prop="appears"
      random-attribute="also appears"
    >
      label that is dynamically replaced with no for attribute
    </acme-label>

    <div v-else>This will be replaced with acme-label in 2 seconds</div>
  </div>
</template>

<script setup>
import "./components/label.ts";
import "./vanilla-wc.js";

const replaceWithAcmeLabel = ref(false);

onMounted(() => {
  setTimeout(() => {
    replaceWithAcmeLabel.value = true;
  }, 2000);
});
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
