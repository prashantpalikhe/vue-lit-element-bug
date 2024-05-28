<script lang="ts">
export default defineComponent({
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    onMounted(() => {
      mounted.value = true;
    });

    return (props: any) => {
      if (mounted.value) {
        return slots.default?.();
      }
      // return slots.default?.(); // WORKS!
    };
  },
});
</script>
