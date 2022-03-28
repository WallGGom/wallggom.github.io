<template>
  <div>
    <v-container fluid class="test">
      <v-row dense>
        <v-col cols="10" offset="1">
          <v-card
            class="pa-3"
            outlined
            tile
            style="height: 100px"
            color="#385F73"
          >
            <v-card-title primary-title class="justify-start">
              <div>
                <h3 class="headline"># {{ project.title }}</h3>
                <h4>{{ project.content }}</h4>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense justify="center">
        <v-card
          class="preview"
          outlined
          tile
          :style="[
            project.isWeb
              ? {
                  width: '60vw',
                  height: '30vw',
                  'max-width': `1920 * 0.6`,
                  'max-height': `1920 * 0.3`,
                }
              : {
                  width: '30vw',
                  height: '60vw',
                  'max-width': `1920 * 0.3`,
                  'max-height': `1920 * 0.6`,
                },
          ]"
        >
          <v-img
            :aspect-ratio="project.isWeb ? 2 : 0.5"
            :src="project.tumbnail"
          ></v-img>
        </v-card>
      </v-row>
      <v-row dense>
        <v-col cols="10" offset="1">
          <v-card class="pa-3" outlined tile color="#385F73">
            <v-card-title primary-title class="justify-start">
              <div>
                <h3 class="headline"># 사용한 스택</h3>
              </div>
            </v-card-title>
            <div class="px-4">
              <v-chip
                class="ma-1"
                color="darkgrey"
                v-for="stack in project.stacks"
                :key="stack"
              >
                {{ stack }}
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: {
    project: { type: Object, required: true },
    // isWeb: { type: Boolean, required: true },
    // projectTitle: { type: String, required: true },
    // projectContent: { type: String, required: true },
    // tumbnail: { type: String, required: true },
    // imgList: { type: Array, required: true },
    // stacks: { type: Array, required: true },
  },

  data: () => ({
    tags: [
      "Work",
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing",
    ],
  }),
  methods: {},
};
</script>

<style scoped>
.test {
  /* background-color: white; */
}

v-card .preview {
  /* color:"#1F7087"; */
}
</style>