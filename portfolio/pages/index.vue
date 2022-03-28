<template >
  <div>
    <SingleCard
      v-for="(project, index) in projectList"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    projectList: [
      {
        index: 0,
        isWeb: true,
        title: "영화 추천 웹사이트",
        content: "사용자의 좋아요, 평가 점수 기반 영화 추천 서비스",
        tumbnail: "https://picsum.photos/300/600",
        imgList: [
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
        ],
        stacks: [
          "Vue.js",
          "Django",
          "KAKAO API",
          "HTML",
          "JavaScript",
          "CSS",
          "Python",
        ],
      },
      {
        index: 1,
        isWeb: true,
        title: "영화 추천 웹사이트",
        content: "사용자의 좋아요, 평가 점수 기반 영화 추천 서비스",
        tumbnail: "https://picsum.photos/300/600",
        imgList: [
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
        ],
        stacks: [
          "Vue.js",
          "Django",
          "KAKAO API",
          "HTML",
          "JavaScript",
          "CSS",
          "Python",
        ],
      },
      {
        index: 2,
        isWeb: true,
        title: "영화 추천 웹사이트",
        content: "사용자의 좋아요, 평가 점수 기반 영화 추천 서비스",
        tumbnail: "https://picsum.photos/300/600",
        imgList: [
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
          "https://picsum.photos/300/600",
        ],
        stacks: [
          "Vue.js",
          "Django",
          "KAKAO API",
          "HTML",
          "JavaScript",
          "CSS",
          "Python",
        ],
      },
      {
        index: 3,
        isWeb: false,
        title: "영화 추천 웹사이트",
        content: "사용자의 좋아요, 평가 점수 기반 영화 추천 서비스",
        tumbnail: "https://picsum.photos/600/300",
        imgList: [
          "https://picsum.photos/600/300",
          "https://picsum.photos/600/300",
          "https://picsum.photos/600/300",
          "https://picsum.photos/600/300",
        ],
        stacks: [
          "Vue.js",
          "Django",
          "KAKAO API",
          "HTML",
          "JavaScript",
          "CSS",
          "Python",
        ],
      },
    ],
  }),
  // created() {},
  // mounted() {},
  // destroyed() {},
  methods: {},
};
</script>
