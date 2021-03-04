var app = new Vue({
  el: '#app',
  data: {
    todolists: [{
        id: 1,
        content: "歯磨き",
        isCompleted: false
      },
      {
        id: 1,
        content: "買い物",
        isCompleted: false
      },
      {
        id: 1,
        content: "勉強",
        isCompleted: false
      },
    ]
  },
  methods: {
    addTask: function () {
      var new_content = this.$refs.new_content.value;
      if (new_content.trim().length == 0 {

        })
    }
  }
});