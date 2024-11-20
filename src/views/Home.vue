<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="home">
      <div class="home_top_bg">
        <div class="title">
          <div class="title_word">
            <p>Shop Cars that fit</p>
            <p>your lifestyle</p>
          </div>
          <div class="word">
            <p>Let our CarQuest AI quiz help you find your</p>
            <p>perfect car match in three minutes or less!</p>
          </div>
          <button class="btn" @click="jump">Start AI Quiz</button>
        </div>
      </div>
      <div class="box">
        <p class="box_title">
          We gather data from various sources to find your car!
        </p>
        <ul class="icons row list-unstyled justify-content-center">
          <li
            v-for="item in icons"
            :key="item.id"
            class="col-4 col-md-4 col-lg-3 mb-3"
          >
            <img
              :src="require('../assets/images/' + item.src)"
              alt=""
              class="img-fluid"
            />
          </li>
        </ul>
      </div>
      
      <ul class="row content">
<li class="text-md-center text-start mds-title">
    <p class="fs-3 fw-bold">How It Works</p>
    <p style="font-size:.9rem;">We use AI to find you your perfect car match, and then guide you through finding the best one in your area</p>
</li>

        <li v-for="item in phones" :key="item.id" class="col-12 col-md-6 col-lg-4 mb-4">
          
          <ol :style="{ background: item.bg }">
            <img :src="require('../assets/images/' + item.src)" alt="" class="img-fluid">
          </ol>
          <p class="content_title mt-5">{{ item.title }}</p>
          <p class="content_word" style="height:3rem;">{{ item.word }}</p>
        </li>
      </ul>
      
      <div class="btns"><button>Try the Car Quiz</button></div>
      <div> <p style="margin: auto; width:15rem;  text-align:center; font-size:1.5rem;">CarQuest’s Customers Say:</p> </div>
     <ul class="persons row list-unstyled justify-content-center">
    <li
      v-for="item in persons"
      :key="item.id"
      class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
    >
      <div class="li_top">
        <img :src="require('../assets/images/' + item.src)" alt="" class="img-fluid" />
      </div>
      <div class="li_word">
        <p>{{ item.name }}</p>
        <p>{{ item.word }}</p>
      </div>
    </li>
  </ul>
  <Footer/>

    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import axios from 'axios';
export default {
  data() {
    return {
      icons: [
        { id: 0, src: "Cars 1.png" },
        { id: 1, src: "Carvana_20logo-2452930403-removebg-preview 1.png" },
        { id: 2, src: "CarMax-Logo-1058735071 1.png" },
        { id: 3, src: "autotrader_logo-1606845915-removebg-preview 1.png" },
        {
          id: 4,
          src: "61-610708_october-22-2018-start-selling-on-facebook-marketplace-3261780179-removebg-preview 1.png",
        },
        { id: 5, src: "Craigslist-Emblem-3527060028 1.png" },
      ],
      phones: [
        {
          id: 1,
          src: "Device 13PM.png",
          title: "1. Take the Quiz",
          word: "Get tailored recommendations in minutes, without endless searches.",
          bg:"linear-gradient(to bottom, #b3d9ff, #004080)"
        },
        {
          id: 2,
          src: "Screenshot 2024-10-05 at 6.42.50 PM 1.png",
          title: "2. View Car Results",
          word: "Every recommendation is customized to fit your lifestyle and needs.",
          bg: "linear-gradient(to bottom, #EBE4F8, #532C9B)",
        },
        {
          id: 3,
          src: "Device 13PM (1).png",
          title: "3. Find Your Dream Car",
          word: "Get back on the road faster with easy, informed car shopping.",
          bg: "linear-gradient(to bottom, #b3d9ff, #004080)",
        },
       
      ],
      persons:[
        { id:0,src:'Group 170.png',name:'Cindy, 29',word:'“CarQuest’s AI quiz made me feel like I was talking to a friend who knew me so well.”' },
        { id:1,src:'Group 149.png',name:'Tom, 44',word:'“I was never a ‘car guy.’ I just wanted something to get me from Point A to Point B. CarQuest delivered.' },
        { id:2,src:'Group 149 (1).png',name:'Padma, 38',word:'“I wasn’t sure what car to get and what to prioritize. CarQuest guided me through it all.”' }
      ]
    };
  },
  components: {
    NavBar,
    Footer
  },
  methods:{
    jump(){
      this.$router.push('/test') 
    },
   get() {
    axios.get('http://localhost:3000/')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
},
    post(){
      axios.post('http://localhost:3000/',{name:'test',age:18})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mds-title {
    background: linear-gradient(to bottom, white, #c5b0ea); 
}

@media (max-width: 768px) {
    .mds-title {
        background: none;
    }
}


.home_top_bg {
  width: 100vw;
  height: 25rem;
  background: pink;
  background: url("../assets/images/homeBg.png") no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .title {
    text-align: center;

    .title_word {
      color: white;
      font-family: Nunito;
      font-weight: bold;
      font-size: 1.3rem;
      p {
        margin: 0;
      }
    }
    .word {
      color: rgb(237, 235, 235);
      margin: 0.3rem 0;
      p {
        font-family: Rokkitt;
        font-weight: bold;
        font-size: 0.8rem;
        margin: 0;
      }
    }
  }
  .btn {
    padding: 0.3rem 1.3rem;
    background: white;
    border-radius: 2rem;
    margin: 0.3rem 0 1.4rem 0;
    color: #2d5181;
    font-weight: bold;
  }
}

.box {
  .box_title {
    padding-top: 2rem;
  }
  padding: 0rem 1rem;

  .box_title {
    font-size: 0.8rem;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}

.content {
  width: 100vw;
  height: auto;

  li {
    list-style: none;
    margin: 2rem 0;

    .content_title {
      font-weight: bold;
      font-size: 1.4rem;
    }

    .content_word {
      font-size: 0.8rem;
    }

    ol {
      border-radius: 0.5rem;
      width: 100%;
      height: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.btns {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    padding: .5rem 3rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    background: #2d5181;
    color: white;
  }
}
.persons {
  width: 96%;
  margin: 0 auto;

  li {
    height: 10rem;
    margin: 7rem 0;

    .li_top {
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 100%;
        width: auto; 
      }
    }

    .li_word {
      text-align: center;
      width: 100%; 
      margin: auto;

      p:nth-of-type(1) {
        margin-top: 1rem;
        font-weight: bold;
        font-size: 1.3rem;
      }

      p:nth-of-type(2) {
        font-size: 1rem;
        color: #666; 
      }
    }
  }
}

</style>
