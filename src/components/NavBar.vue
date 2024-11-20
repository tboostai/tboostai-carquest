<template>
  <div class="nav">
    <div class="left">
      <div class="logo_container">
        <div class="logo"><img src="../assets/images/Logo.png" alt="Logo" /></div>
        <div class="logo_word"><p>CarQuest</p></div>
      </div>
    </div>
    <div class="right">
      <ul class="mens">
        <li>
          <el-input
            v-model="search"
            placeholder="请输入内容"
            v-show="isShow"
            @blur="change"
           style="padding-top:1.1rem;"></el-input>
        </li>
        <li v-show="!isShow">
          <img style="padding-top:1.7rem;" src="../assets/images/search.png" alt="Search" @click="change" />
        </li>
        <li class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" @click="changeMenu"  style="padding-top:1.3rem;">
            <img src="../assets/images/menu.png" alt="Menu" >
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-show="showMenu">
            <li><a class="dropdown-item" href="#">Quiz</a></li>
            <li><a class="dropdown-item" href="#">Search</a></li>
            <li><a class="dropdown-item" href="#">Compare Favorites</a></li>
            <li><a class="dropdown-item" href="#">About CarQuest</a></li>
            <li><a class="dropdown-item" href="#">How It Works</a></li>
            <li><a class="dropdown-item" href="#">Support & Contact</a></li>
            <li><a class="dropdown-item profile" href="#">My Profile</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      isShow: false,
      showMenu: false
    };
  },
  methods: {
    change() {
      this.isShow = !this.isShow;
    },
    changeMenu() {
      this.showMenu = !this.showMenu;
    }
  },
};
</script>

<style lang="scss" scoped>

.nav {
  width: 100vw;
  height: 3.5rem;
  display: flex;
  background: #c0d6f5;

  .left {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;

    .logo_container {
      display: flex;
      align-items: center;
      .logo {
        width: 3rem;
        height: 3rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .logo_word {
        margin-left: 0.5rem;
        p {
          line-height: 3rem;
          color: #2d5181;
          font-weight: bold;
        }
      }
    }
  }

  .right {
    flex: 2;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;


    ul {
      list-style: none;
      padding-right: 1rem;
      display: flex; 

      li {
        position: relative; 
      }

      .dropdown-menu {
        position: absolute; 
        z-index: 1000;
        right: 0%;
        display: block; 
        min-width: 10rem;
        border-radius: 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .profile {
        border-top: 1px solid #e0e0e0;
        margin-top: 0.5rem;
        font-weight: 600;
      }
    }
  }
}
</style>
