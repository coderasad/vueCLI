<template>
  <div id="answer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card card-body question-area mb-3">
            <div><a class="btn btn-outline-secondary mb-3" @click.prevent="$parent.show = true">Back</a></div>
            <h4>{{ questions.question_title }}<span class="badge bg-primary ms-2"> {{ questions.category ? questions.category.categroy_name : '' }} </span></h4>
            <p>{{ questions.question_description }} </p>

            <div>
              <h5 class="bg-secondary p-2 text-light">Answers</h5>
              <div class="form-answer">
                <form>
                  <textarea type="text" name="answer" placeholder="Write a Answer..." class="form-control"></textarea>
                  <input type="hidden" name="question_id" value="">
                  <button class="btn btn-success mt-2">Submit</button>
                </form>
              </div>
              <div class="answer-list ml-5 mt-4">
                <div class="row" v-for="(answer,index) in questions.answer" :key="index">
                  <div class="col-2">
                    <span class="font-weight-bold text-center card card-body">Answer No {{ index+1 }} </span>
                  </div>
                  <div class="col-10">
                    <div class="card card-body mb-4">
                      <h5 class="text-capitalize text-primary">Author Name : {{ answer.user.name }}</h5>
                      <span class="mb-3 text-secondary"> time</span>
                      <p>{{ answer.answer}}1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Answer",
    props: ['id'],
    data () {
      return {
        questions: '',
      }
    },
    mounted () {
      this.$axios.get('http://127.0.0.1:8000/api/question/'+this.id)
          .then(response => (this.questions = response.data))
    },
  }
</script>

<style>

</style>