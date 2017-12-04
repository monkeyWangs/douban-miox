<template>
  <div class="co-movie-tag">
    <ul>
      <li class="film-pic">
        <a @click="showDetail(subject.id)">
          <img class="movieImg" :src="subject.images.large" alt="">
        </a>
      </li>
      <li class="film-name">
        <a href="">{{subject.title}}</a>
      </li>
      <li class="film-rate">
        <span class="rateNum">评分：{{subject.rating.average}}</span>
      </li>
      <li class="film-button">
              <span>
                <a href="">特惠选座</a>
              </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props: {
      subject: {
        type: Object,
        default: {
          rating: {}
        }
      }
    },
    methods: {
      showDetail (id) {
        this.$router.push('/detail', {}, {subjectId: id})
      }
    }
  }
</script>
