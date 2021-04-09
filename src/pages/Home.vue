<template>
  <div id="home">
<!--    <Login></Login>-->
    <div v-if="show" class="container">
      <div class="row">
        <div class="col-12">
          <div class="card card-body mb-3" v-for="(question,index) in questions" :key="index">
              <h4>{{ question.question_title}}
                <span class="badge bg-secondary ms-2">{{ question.category.categroy_name }}</span>
                <button @click="like(question.id)" class="badge bg-secondary btn ms-2"><i class="fa fa-thumbs-up me-2"></i><span>{{ question.like_count }}</span></button>
              </h4>
              <p>{{ question.question_description }}</p>
              <div>
                <a  class="btn btn-info my-2" @click.prevent="answer(question.id)">Details</a>
              </div>
          </div>
        </div>
      </div>
    </div>
    <Answer v-else :id="activeQuestionId"></Answer>
  </div>
</template>

<script>
  import Answer from "@/pages/Answer";
  import Login from "@/pages/Login";

  export default {
    name: "Home",
    components: {Answer, Login },
    data () {
      return {
        show : true,
        activeQuestionId : '',
        questions: [],
        likeCount: 0,
        userId: null
      }
    },
    methods:{
      answer(id){
        this.show = false;
        this.activeQuestionId = id;
      },
      // like(id){
      //   alert(id)
      // },
      like(id){
        this.$axios.post(`http://127.0.0.1:8000/api/like-store`)
            .then(response => console.log(response.data));
      }
    },
    mounted () {
      this.$axios.get('http://127.0.0.1:8000/api/question')
          .then(response => (this.questions = response.data));
    }
  }
</script>

<style>

</style>