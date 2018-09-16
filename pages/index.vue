<template>
  <component
    v-if="componentTemplate"
    :is="componentTemplate"/>
</template>

<script>
const components = {
  HomePage: () => import('@/components/templates/HomePage/HomePage'),
};

export default {
  components,
  computed: {
    componentTemplate() {
      return 'HomePage'; // This is just a default for now
    },
  },
};
</script>

<style scoped>
</style>
