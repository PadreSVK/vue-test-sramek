<template>
  <div class="home">
    <HelloWorld :myProp="prop" @myClick="test" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },

  methods: {
    async test(obj) {
      this.prop = {...obj, name: "Jozo"};
    },
  },
  data() {
    return {
      prop: { name: "Fero" },
    };
  },
};
</script>

