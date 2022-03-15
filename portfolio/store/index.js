import Vuex from "vuex";

const store = () =>
  new Vuex.Store({
    state: {
      scrollOffset: 0,
    },
    mutations: {
      setScrollOffset: (state, offset) => {
        console.log("hello");
        state.scrollOffset = offset;
      },
    },
  });

export default store;
