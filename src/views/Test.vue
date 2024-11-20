<template>
  <div class="test" style="padding-bottom: 12rem">
    <NavBar />

    <div class="one" v-show="isShow == 0">
      <div class="progress_container">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: progress + '%' }"
            style="width: 50%; background-color: #2d5181"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="title"><p>CarQuest Quiz</p></div>
      <ul class="container_box">
        <li>
          <div class="li_title">
            <p>1. <b>Where</b> are you shopping for a car?</p>
          </div>
          <div class="address">
            <input type="text" placeholder="e.g., Los Angeles or 90210" />
          </div>
        </li>
        <li>
          <div class="li_title">
            <p>2. What is your <b>budget?</b></p>
          </div>
          <div class="changeMenu">
            <div
              class="changeColorMenu"
              :class="{ active: selectedOption === 1 }"
              @click="changeOption(1)"
            >
              Finance
            </div>
            <div
              class="changeColorMenu"
              :class="{ active: selectedOption === 2 }"
              @click="changeOption(2)"
            >
              Cash
            </div>
          </div>
          <div class="slider">
<el-slider 
  ref="sliderRef" 
  :value="[minValue, maxValue]" 
  :min="mix" 
  :max="max" 
  @input="handleSliderChange"
  range
  :tooltip="false"
></el-slider>
<div class="number">
  <el-input
    v-model="minValue"
    :min="mix"
    @input="changeMinValue"
    :max="maxValue"
    style="margin-right: 30px; border-radius: 0.5rem; text-align: center;"
    class="rounded-input"
  ></el-input>
  <div class="dash">-</div>
  <el-input
    v-model="maxValue"
    :min="minValue"
    @input="changeMaxValue"
    :max="max"
    style="margin-left: 30px; border-radius: 0.5rem; text-align: center;"
    class="rounded-input"
  ></el-input>

            </div>
          </div>
        </li>
        <li>
          <div class="li_title">
            <p>
              3. <b>Describe a car</b> that would fit your life perfectly.
              What’s your:
            </p>
            <ul style="list-style-type: disc">
              <li style="margin: 0"><b>"Nice to haves?"</b></li>
              <li style="margin: 0"><b>"Must haves?"</b></li>
            </ul>
            <p style="margin-top: 1rem">Use a little or a lot of detail.</p>
            <div class="word_text">
              <textarea
                type="text"
                placeholder="e.g., I am a 34-year old parent living in Los Angeles. I have 2 kids, ages 2 and 7 who will be riding with me often. My must-haves are a reliable, fuel efficient, comfortable car. My nice-to-have: a sunroof."
              />
            </div>
          </div>
        </li>
      </ul>
      <div class="btn">
        <button>Exit quiz</button>
        <button type="primary" @click="next(0)">Next</button>
      </div>
    </div>
    <div class="two" v-show="isShow == 1">
      <div class="progress_container">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: progress + '%' }"
            style="width: 50%; background-color: #2d5181"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="title"><p>CarQuest Quiz</p></div>
      <p>We need few more details!</p>
      <ul>
        <li>
          <span
            >4. You mentioned a car that’s comfortable, but you didn’t mention
            the size. Which are you open to?</span
          >
          <div class="dis">
            <div
              class="dis_box"
              v-for="item in dis_one"
              :key="item.id"
              ref="dis_one"
              @click="highlightOne(item.id)"
            >
              <div class="dis_top">
                <img :src="require('../assets/images/' + item.src)" alt="" />
              </div>
              <div class="dis_btm">
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <span
            >5. You mentioned a car that’s <b>comfortable</b>, but you didn’t
            mention <b>the size</b>. Which are you open to?</span
          >
          <div class="dis">
            <div
              class="dis_box"
              v-for="item in dis_two"
              :key="item.id"
              ref="dis_two"
              @click="highlightTwo(item.id)"
            >
              <div class="dis_top">
                <img :src="require('../assets/images/' + item.src)" alt="" />
              </div>
              <div class="dis_btm">
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="btn" style="margin: 0; padding: 0; margin: auto">
        <button @click="back">Back</button>
        <button type="primary" @click="next(1)">Next</button>
      </div>
    </div>
    <div class="three" v-show="isShow == 2">
      <div class="title" style="margin-top: 2rem"><p>Quiz Results</p></div>
      <p class="on">Based on your preferences,</p>
      <p class="on">these 2 cars are a fit!</p>
      <ul class="cars">
        <li class="car"  ref="lis" v-for="item,index in items" :key="item.id" @click="changeCover(index)">
          <div class="cover" v-show="cover[index]"></div>
          <p class="m-0 p-0 text_w" style="font-weight: bold">
            {{ item.text }}
          </p>
          <div class="ca"><img :src="require('../assets/images/'+item.src)" alt="" /></div>
          <p class="m-0 p-0 word_w">{{ item.state }}</p>
        </li>
      

        <li class="add">
          <div class="jia">+</div>
          <div class="jiawen">Add car</div>
        </li>
      </ul>

      <div class="three_box">
        <p class="on" style="margin-bottom: 0.5rem">Why these results?</p>
        <ul class="lis">
          <li>
            <div class="lis_top">
              <img src="../assets/images/Reliability badge.png" alt="" />
            </div>
            <div class="lis_btm"><p>Reliability</p></div>
          </li>
          <li>
            <div class="lis_top">
              <img src="../assets/images/Fuel efficiency badge.png" alt="" />
            </div>
            <div class="lis_btm"><p>Fuel efficiency</p></div>
          </li>
          <li>
            <div class="lis_top">
              <img src="../assets/images/Comfort badge.png" alt="" />
            </div>
            <div class="lis_btm"><p>Comfort</p></div>
          </li>
          <li>
            <div class="lis_top">
              <img src="../assets/images/Safety badge.png" alt="" />
            </div>
            <div class="lis_btm"><p>Safety</p></div>
          </li>
        </ul>
        <p
          style="
            display: flex;
            justify-content: flex-end;
            color: #2d5181;
            font-size: 0.8rem;
            margin-top: 0.5rem;
          "
        >
          View all recommendations
        </p>
      </div>
      <div class="btn" style="margin: 0; padding: 0; margin: auto">
        <button @click="back">Back</button>
        <button type="primary" @click="jump">See matches</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      items : [
        { id:0,text:"Toyota Camry",state:"Unselect",src:"cars_0.png" },
        { id:1,text:"Toyota Camry",state:"Unselect",src:"cars_0.png" }
      ],
      cover: [false, false],
      mix: 0,
      max: 100000,
      selectedOption: 1,
    //   range: [0, 70000],
     minValue: 0,
    maxValue: 70000,
      isShow: 0,
      progress: 50,
      dis_one: [
        { id: 0, src: "noun-electric-7260483 1.png", text: "Fully electric" },
        {
          id: 1,
          src: "noun-hybrid-car-7066649 1.png",
          text: "Hybrid (all kinds)",
        },
        { id: 2, src: "noun-oil-4865436 1.png", text: "Gasoline" },
        {
          id: 3,
          src: "noun-type-6719917 1.png",
          text: "Other (e.g., hydrogen, diesel)",
        },
      ],
      dis_two: [
        { id: 0, src: "noun-sedan-6912534 1.png", text: "Sedan" },
        { id: 1, src: "noun-suv-6999801 1.png", text: "SUV" },
        { id: 2, src: "noun-minivan-5742163 1.png", text: "Minivan" },
        {
          id: 3,
          src: "noun-type-6719917 1.png",
          text: "Other (click to type)",
        },
      ],
    };
  },
  methods: {
    changeCover(index) {
  const cars = document.querySelectorAll('.car')  
  const text = document.querySelectorAll('.text_w')
  const word = document.querySelectorAll('.word_w')
  
    this.cover = [true, true];
    this.cover[index] = false; 

    this.cover.forEach((el,i)=>{
      if(!el){
        text[i].style.color = '#395a89'
        word[i].style.color = '#395a89'
      }else{
        text[i].style.color = '#999'
        word[i].style.color = '#999'
      }
      
    })
    
    cars.forEach((car, i) => {
      car.style.border = 'none'
    })
    cars[index].style.border = '3px solid blue'

    this.items.map(item=>{
      item.state = "Unselect"
    })
    this.items[index].state = "Select"
   
    
    
  },
   handleSliderChange(value) {
    this.minValue = value[0];
    this.maxValue = value[1];
  },
  changeMinValue() {
    if (this.minValue > this.maxValue) {
      this.minValue = this.maxValue;
    }
    this.$refs.sliderRef.$emit('input', [this.minValue, this.maxValue]);
  },
  changeMaxValue() {
    if (this.maxValue < this.minValue) {
      this.maxValue = this.minValue;
    }
    this.$refs.sliderRef.$emit('input', [this.minValue, this.maxValue]);
  },

    jump() {
      this.$router.push("/car");
    },
    changeOption(option) {
      this.selectedOption = option;
    },
    back(i) {
      this.isShow -= 1;
      if (this.isShow == 0) {
        this.progress = 50;
        return;
      }

      if (this.isShow == 1) {
        this.progress = 100;
      }
    },
    next(i) {
      this.isShow += 1;
      if (this.isShow == 1) {
        this.progress = 100;
      }
    },
    highlightOne(i) {
      this.$refs.dis_one.forEach((item, index) => {
        if (index == i) {
          item.classList.add("highlight");
        } else {
          item.classList.remove("highlight");
        }
      });
    },
    highlightTwo(i) {
      this.$refs.dis_two.forEach((item, index) => {
        if (index == i) {
          item.classList.add("highlight");
        } else {
          item.classList.remove("highlight");
        }
      });
    },
  },
  watch: {
  range: {
    handler(newVal) {
      this.$refs.sliderRef.$emit('input', newVal);
    },
    deep: true,
  },
  },
};
</script>

<style>
.text_w,.word_w{
  color: #395a89;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  border-radius: 0.2rem;
}
.one {
  width: 70%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .one {
    width: 100%;
  }
}
.rounded-input .el-input__inner {
  text-align: center !important;
  border: 2px solid black;
  border-radius: 0.5rem;
}
</style>

<style lang="scss" scoped>
.on {
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}
.highlight {
  background: #c0d6f5;
}
.three {
  .three_box {
    margin-top: 3rem;
    .lis {
      list-style: none;
      width: 100%;
      height: auto;
      display: flex;
      padding: 0;
      margin: 0;
      gap: 3%;
      li {
        // flex: 1;
        height: 6rem;
        .lis_top {
          width: 100%;
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lis_btm {
          width: 100%;
          height: 30%;
          display: flex;
          justify-content: center;
          p {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
  width: 88%;
  margin: auto;
  .cars {
    width: 100%;
    height: 7rem;
    margin-top: 1rem;
    list-style: none;
    display: flex;
    padding: 0;
    gap: 1rem;
    .car {
      width: 10rem;
      height: 100%;
      border-radius: 0.4rem;
      position: relative;
      border: 3px solid #2c5181;
      padding: 0.3rem;
      .ca {
        width: 100%;
        height: 60%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .add {
      // flex: 2;
      height: 100%;
      cursor: pointer;
      .jia {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        font-size: 3rem;
        color: #2d5181;
      }
      .jiawen {
        margin-top: 0.3rem;
        font-size: 0.8rem;
        color: #2d5181;
        text-align: center;
        white-space: nowrap;
      }
    }
  }
}
.two {
  width: 85%;
  height: auto;
  margin: auto;

  ul {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      list-style: none;
      margin: 0;
      .dis {
        margin: 1rem auto;
        width: 85%;
        height: 12rem;
        display: flex;
        flex-wrap: wrap;
        gap: 5%;
        justify-content: center;
        align-items: center;
        .dis_box {
          width: 45%;
          height: 45%;
          border-radius: 0.6rem;
          border: 1px solid #2d5181;
          .dis_top {
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dis_btm {
            width: 100%;
            height: 40%;
            text-align: center;
            p {
              font-size: 0.7rem;
              color: #2d5181;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}

.btn {
  width: 85%;
  display: flex;
  gap: 5%;
  margin: auto;
  justify-content: center;

  button {
    width: 45%;
    height: 2.3rem;
    border-radius: 1rem;
    margin: 1rem 0;
    background: #2d5181;
    color: white;
    font-size: 0.8rem;
  }
  button:nth-of-type(1) {
    background: white;
    color: #2d5181;
    border: 2px solid #2d5181;
  }
}
.slider {
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  .number {
    display: flex;
  }
}
.word_text {
  border: 2px solid black;
  // padding: 1rem;
  height: 5rem;
  border-radius: 0.8rem;
  textarea {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    padding: 0.5rem;
    outline: none;
  }
}
.changeColorMenu {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2d5181;
  font-size: 0.8rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.changeColorMenu.active {
  background: #c0d6f5;
  color: #2d5181;
}

.changeColorMenu:not(.active) {
  background: white;
  color: black;
}

.progress_container {
  width: 15%;
  margin: auto;
  margin-top: 2rem;
  height: auto;
}

.progress {
  height: 0.5rem;
  border: 2px solid #2d5181;
}

.progress-bar {
  background-color: #2d5181;
}
.title {
  text-align: center;
  p {
    color: #2d5181;
    font-size: 1.5rem;
  }
}

.container_box {
  width: 90%;
  height: auto;
  margin: auto;
  list-style: none;
  li {
    margin: 2rem 0;
  }
  .li_title {
  }
  .address {
    width: 80%;
    height: 2.5rem;
    input {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      padding-left: 0.5rem;
      font-size: 0.7rem;
      box-shadow: 0 0 5px #2d5181;
    }
  }
  .changeMenu {
    width: 50%;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 1rem;
    list-style: none;
    border: 1px solid #c0d6f5;
  }
  .number {
    display: flex;
    .dash {
      margin: 0 0.5rem 0 0rem;
      color: #2d5181;
      font-size: 1.2rem;
    }
  }
}
</style>
