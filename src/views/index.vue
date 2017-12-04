<template>
  <div class="moving">
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
      <h3 @click="$router.push('/login')">{{username || '登录'}}</h3>
      <h3 @click="logout" v-if="username">登出</h3>
    </div>
    <div class="moviesList">
      <div class="movie-container">
        <div class="movieTag" v-for="(subject,index) in moviesList" v-if="index < maxNum">
          <MovieTag :subject="subject"></MovieTag>
        </div>
        <div class="load-more" @click="maxNum = moviesList.length" v-if="maxNum < moviesList.length">加载更多</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Component, life} from 'miox-vue2x-classify'
  import MovieTag from '../components/movie-tag.vue'
  import * as Api from 'api'

  @Component({
    components: {
      MovieTag
    }
  })

  export default class Index {
    city = '杭州'
    username = localStorage.getItem('username')
    moviesList = []
    value = 0
    /**
     * 最多显示条目
     */
    maxNum = 12

    @life
    mounted () {
      Api.doubanApi.v2_movie_in_theaters_get().then(res => {
        this.moviesList = res.data.subjects
      })
    }
    logout () {
      localStorage.clear('username')
      this.username = null
    }
  }
</script>
<style lang="less" type="text/less">
  @import "../assets/style/color";
  @import "../assets/style/base";

  .moving {
    margin-bottom: 20px;
    margin: 0 auto;
    width: 960px;
    p {
      color: red;
    }
    .tit {
      width: 560px;
      margin: 0 auto;
      margin-top: 20px;
      h3 {
        display: inline-block;
        margin-left: 100px;
      }
      h1 {
        display: inline-block;
        width: 126px;
        font-size: 20px;
        color: #000;
      }
      .locat {
        position: relative;
        display: inline-block;
      }
    }
    .moviesList {
      width: 950px;
      margin: 10px auto 0;
      min-height: 500px;
      .movie-container {
        margin: 0 auto;
        width: 560px;
        border-top: 1px dashed #ccc;
        margin-top: -10px;
        .movieTag {
          padding-top: 20px;
          width: 118px;
          height: 270px;
          overflow: hidden;
          font-size: 12px;
          text-align: center;
          display: inline-block;
          margin: 0 20px 20px 0;
          ul {
            margin: 0 auto;
            padding: 0;
            li {
              list-style: none;
            }
          }
          a {
            cursor: pointer;
            text-decoration: none;
          }
          .film-pic {
            height: 180px;
            margin-bottom: 12px;
            overflow: hidden;
            a {
              img {
                width: 128px;
                vertical-align: middle;
              }
            }
          }
          .film-name {
            font-size: 14px;
            white-space: nowrap;
            height: 22px;
            overflow: hidden;
            a {
              display: inline-block;
              word-spacing: normal;
              height: 24px;
              line-height: 24px;
              text-decoration: none;
              color: black;
            }
          }
          .film-rate {
            display: inline-block;
            margin: 4px auto 2px;
            height: 19px;
            .el-rate {
              display: inline-block;
              .el-rate__icon {
                font-size: 12px;
              }
            }
            .rateNum {
              display: inline-block;
              font-size: 12px;
            }
          }
          .film-button {
            span {
              display: block;
              margin: 0 auto;
              text-align: center;
              width: 90px;
              height: 24px;
              line-height: 24px;
              background-color: #268dcd;
              border-radius: 2px;
              a {
                color: #fff;
              }
            }

          }

        }
        .load-more {
          cursor: pointer;
          width: 530px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: #eee;
          color: @doubanColor;
        }
      }

    }
  }
</style>

