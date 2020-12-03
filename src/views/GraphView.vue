<template>
  <div class="GraphView">
    <h1>GraphView</h1>
    <highcharts :options="chartOptions"></highcharts>

    <v-btn @click="changeQuery">ChangeQuery</v-btn>

    <v-text-field v-model="myText"></v-text-field>
    <v-text-field v-model="person.name"></v-text-field>

    {{ person.name | stringShortener(5)}}
  </div>
</template>
<script>
import { Chart } from "highcharts-vue";

export default {
  components: {
    highcharts: Chart,
  },
  data() {
    var desserts = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ];
    return {
      chartOptions: {
        yAxis: [
          {
            // Primary yAxis
            title: {
              text: "Calories",
            },
            opposite: true,
          },
          {
            // Secondary yAxis
            gridLineWidth: 0,
            title: {
              text: "Others",
            },
          },
        ],
        chart: {
          zoomType: "x",
        },
        credits: {
          enabled: false,
        },

        series: [
          {
            name: "Carbs",
            yAxis: 1,
            data: desserts.map((d) => [d.name, d.carbs]),
          },
          {
            name: "Protein",
            yAxis: 1,
            data: desserts.map((d) => [d.name, d.protein]),
          },
          {
            name: "Fat",
            yAxis: 1,
            data: desserts.map((d) => [d.name, d.fat]),
          },
          {
            name: "Calories",
            type: "spline",
            dashStyle: "shortdot",
            yAxis: 0,
            data: desserts.map((d) => [d.name, d.calories]),
          },
        ],
        exporting: {
          sourceWidth: 1920,
          sourceHeight: 1080,
          chartOptions: {
            subtitle: null,
          },
          buttons: {
            contextButton: {
              menuItems: ["downloadPNG", "downloadPDF"],
            },
          },
        },
      },
      myText: "Init value",
      person: {
        name: "Jozo",
        age: 30,
      },
    };
  },
  mounted() {
    console.log("mounteed");
  },
  watch: {
    $route(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
    myText: {
      handler(newVal) {
        console.log(newVal);
      },
      immediate: true,
    },
    // person: {
    //   handler(newVal) {
    //     console.log(newVal);
    //   },
    //   immediate: true, // after component load
    //   deep: true // watch also changes in object tree
    // },
    //specific property of object
    "person.name"(newVal) {
      console.log(newVal);
    },
  },
  methods: {
    changeQuery() {
      this.$router.push({ query: { test: "BBBBB" } });
    },
  },
};
</script>