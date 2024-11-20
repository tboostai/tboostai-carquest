<template>
    <div class="car">
        <NavBar />
        <div class="container p-4">
            <div class="title row mb-1">
                <p class="col-12">&lt; &nbsp; Local Car Matches</p>
            </div>
            <div class="card p-3 border rounded">
                <p class="h5 mb-3">Quiz Results Summary</p>
                <div class="search mb-3 p-0">
                    <div class="sear d-flex align-items-center border border-dark rounded">
                        <div class="icon me-2">
                            <img src="../assets/images/search.png" alt="search icon" class="img-fluid">
                        </div>
                        <div class="text">
                            <input type="text m-0 p-0 h-100" placeholder="Quiz results: Toyota Camry & Honda...">
                        </div>
                    </div>
                </div>
                <div class="icons">
                    <ul class="list-unstyled d-flex justify-content-around" style="margin:0;padding:0;">
                        <li><img src="../assets/images/Reliability badge.png" alt="Reliability badge" class="icon-size"></li>
                        <li><img src="../assets/images/Fuel efficiency badge.png" alt="Fuel efficiency badge" class="icon-size"></li>
                        <li><img src="../assets/images/Comfort badge.png" alt="Comfort badge" class="icon-size"></li>
                        <li><img src="../assets/images/Safety badge.png" alt="Safety badge" class="icon-size"></li>
                    </ul>
                </div>
                <div class="text-end"><p class="reset-link">See full quiz results</p></div>
            </div>
            <div class="applied">
                <p class="h5 mb-3 mt-5">Applied Filters</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p>Based on your quiz results, we’ve set filters to guide your search. Use our filters or adjust them.</p>
                    <div class="fiters"><img src="../assets/images/Component 1.png" alt="" @click="changeFilter"> <p class="bageNumber">{{ tabs.length }}</p>
                        <ul class="filter_lis m-0 p-3" v-show="isFilter">
        <li v-for="item in fiters" :key="item.id" class="m-0 p-0">
            <p>{{ item.type }}</p>
            <ol class="m-0 p-0">
                <li v-for="items in item.lis" :key="items.id" class="m-0 p-0 lisn">
                    <p @click="sele(item.id, items.id)" class="items" :class="{ 'highlighted': selectedItems[item.id] === items.id }">{{ items.text }}</p>
                </li>
            </ol>
        </li>
        <li class="end"><button @click="end">verify</button></li>
    </ul>
                     </div>
                </div>
              <ul class="list-unstyled d-flex flex-wrap align-items-center mt-3">
                    <li class="small-text me-3 mt-2" v-for="item,index in tabs" :key="item.id">{{ item.text }} &nbsp; <span @click="remove(index,item)">X</span></li>   
                    <!-- <li class="small-text me-3 mt-2">Sedan &nbsp; X</li>    
                    <li class="small-text me-3 mt-2">5+ star safety &nbsp; X</li>    
                    <li class="small-text me-3 mt-2">Cargo space &nbsp; X</li>    
                    <li class="small-text me-3 mt-2">Apple Car &nbsp; X</li>     -->
                </ul>
            <div class="text-end"><p class="reset-link">Reset to Quiz Results Filters</p></div>       
        </div>
        <div class="changeNav">
            <div class="change mt-3  d-flex justify-content-center align-items-center">
                <ul class="list-unstyled d-flex align-items-center h-100 rounded-5" style="border:2px solid #2d5181; width:65%;">
                    <li style="height:2.6rem; cursor:pointer; width:60%" class="changebg d-flex align-items-center justify-content-center changes"  @click="change(0)">Totota Camry</li>
                    <li style="height:2.6rem; cursor:pointer; width:40%; color:#2d5181;" class="d-flex align-items-center justify-content-center p-2 changes" @click="change(1)"> Honda... </li>
                </ul>
            </div>
            <ul class="icons d-flex align-items-center mt-3 list-unstyled ">
                <li class="d-flex align-items-center flex-fill"> <div class="icon d-flex align-items-center"> <img src="../assets/images/Location icon.png" alt=""> </div><p class="mb-0 text-nowrap" style="font-size:.7rem">Los Angeles,CA</p>  </li>
                <li class="d-flex align-items-center flex-fill"> <div class="icon d-flex align-items-center" @click="sort"> <img src="../assets/images/Sort.png" alt=""> </div><p class="mb-0 text-nowrap" style="font-size:.7rem">Sort</p>  </li>
<li class="d-flex align-items-center flex-fill">
  <div class="icon d-flex align-items-center">
    <img :src="require('../assets/images/' + (aixin ? 'Vector.png' : 'aixin.png'))" alt="" @click="changeAixin" style="width:21px;height:19px;">
  </div>
  <p class="mb-0 text-nowrap" style="font-size:.7rem">&nbsp;Sava search</p>
</li>
            </ul>
        </div>
        <div class="cars">
    <p>Showing Your Top <b>5</b> out of <b>185 Results</b></p>
   <ul class="list-unstyled d-flex flex-wrap" style="gap: 10%;">
    <li class="card col-12 col-md-6 col-lg-3 border-dark border-3 mt-5" v-for="item in cars" :key="item.id" @click="jump(item.id)">
        <div class="top d-flex justify-content-between align-items-center">
            <img :src="require('../assets/images/'+item.src)" alt="" class="w-60 mx-auto">
        </div>
        <div class="btm d-flex w-100 p-3" style="height:8rem; border-top:2px solid black;"> 
            <div class="left w-50 h-100"> 
                <b>{{ item.name }}</b>
                <p class="m-0 p-0">{{ item.estimated }}</p>
                <p>{{ "$"+item.price }}</p>    
            </div>    
            <div class="right w-50 h-100"> 
                <p></p>
                <p class="m-0 p-0 text-end" style="font-size:.7rem">{{ item.miles }}</p>
                <p class="m-0 p-0 text-end" style="font-size:.7rem">{{ item.cash }}</p>
                <p class="m-0 p-0 text-end" style="font-size:.7rem">{{ item.milesAway }}</p>    
            </div>    
        </div>
    </li>
</ul>

</div>

        </div>
        <Footer/>
    </div>    
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        NavBar,
        Footer,
    },
    data(){
        return {
            fiters:[
                { id:0,type:'price',lis:[
                    { id:0,text:'0-10,000' },
                    { id:1,text:'10,000-30,000' },
                    { id:2,text:'30,000-50,000' },
                ] },
                { id:1,type:'brand',lis:[
                    { id:0,text:'BMW' },
                    { id:1,text:'HONDA' }
                ]},
                { id:2,type:"feature",lis:[
                    { id:0,text:"Sunroof" },
                    { id:1,text:"4WD" },
                    { id:2,text:"Navigate" },
                ] }
            ],
            selectedItems: {},
            aixin : true,
            tabs:[
                // { id:0,text:"Hybrid" },
                // { id:1,text:"Sedan" },
                // { id:2,text:"5+ star safety" },
                // { id:3,text:"Cargo space" },
                // { id:5,text:"Apple Car" },
            ],
            state : false,
            cars : [
                { id:0, name: '2023 Toyota Camry Hybrid',estimated: 'SE 45K miles', price: 19800, miles: '45K miles $409/mo',  cash: '$0 cash down', milesAway: '10 miles away', src: '2023_toyota_camry-hybrid_sedan_se-nightshade_s_oem_1_1600x1067 1.png' },
                { id:1, name: '2023 Toyota Camry Hybrid',estimated: 'SE 45K miles', price: 19800, miles: '45K miles $409/mo',  cash: '$0 cash down', milesAway: '11 miles away', src: 'Screenshot 2024-10-04 at 4.01.16 PM 1.png' },
                { id:2, name: '2021 Toyota Camry Hybrid',estimated: 'SE 90K miles', price: 16808, miles: '45K miles $409/mo',  cash: '$0 cash down', milesAway: '19 miles away', src: 'Image 17 1.png' },
                { id:3, name: '2023 Toyota Camry Hybrid',estimated: 'SE 40K miles', price: 19500, miles: '45K miles $409/mo',  cash: '$0 cash down', milesAway: '21 miles away', src: 'Image 18 1.png' },
            ],
            isFilter : false
        }
    },

    methods:{
        changeFilter(){
            this.isFilter = !this.isFilter;
        },
       end() {
        this.tabs = []
        for (const [typeId, itemId] of Object.entries(this.selectedItems)) {
            const selectedTab = this.fiters[typeId].lis.find(item => item.id === itemId);
            if (selectedTab) {
                const alreadyExists = this.tabs.some(tab => tab.text === selectedTab.text);
                if (!alreadyExists) {
                    this.tabs.push({ id: this.tabs.length, text: selectedTab.text });
                }
            }
        }
        this.changeFilter()
    },
        sele(typeId, itemId) {
            this.$set(this.selectedItems, typeId, itemId);
        },
        sort(){
            this.state = !this.state;
            if(this.state){
                this.cars.sort((a,b) => a.price - b.price);
            }else{
                this.cars.sort((a,b) => b.price - a.price);
            }
        },
        changeAixin(){
            this.aixin = !this.aixin;
        },
        remove(index){
            this.tabs.splice(index,1);
        },
        jump(id){
            this.$router.push({path:`/details/${id}`})
        },
        imageSrc(src) {
            return require(`../assets/images/${src}`);
        },
        change(i){
            const changes = document.querySelectorAll('.changes');
            changes.forEach((change, index) => {
                if(index === i){
                    change.classList.add('changebg');
                    change.style.color = 'white';
                }else{
                    change.classList.remove('changebg');
                    change.style.color = '#2d5181';
                }
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
.highlighted {
    background: blue;
    color: white;
}
.end{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    button{
        padding: .3rem 3rem;
        background: none;
        border: 2px solid #999;
        outline: none;
        border-radius: 1rem;
        background: white;
    }
}

.search{
    .sear{
        height: 3rem;
      
    }
    .icon{
        width: max-content;
        padding-left: .5rem;
    }
    .text{
        height: 100%;
        width: 100%;
          display: flex;
        align-items: center;
        input{
            width: 100%;
            height: 3rem;
            background: none;
            outline: none;
            border: none;
            &::placeholder{
                font-size: .8rem;
            }
    }
    }
}

.changebg{
    background: #2d5181;
    border-radius: 5rem;
    color: white;
    transition: all .3s ease-in-out;

}


.title p {
    font-size: 1.3rem;
}

.card {
    background-color: #f8f9fa;
    .sear {
    width: 100%;
    
}

.icons ul li {
    padding: 0.5rem;
    border-radius: 0.2rem;
}


.icons {
    width: 70%;
    margin:0 auto;
    padding: 0;
}

.icon-size {
    width: 2.5rem; 
    height: 2.5rem; 
}
}

.fiters{
    position: relative;
    .filter_lis{
        width: auto;
        height: auto;
        background: #c0d6f5;
        position: absolute;
        top: 100%;
        right: -10%;
        list-style: none;
        border-radius: .5rem;
        
        li{
            list-style: none;
          
        }
       
        .lisn{
            display: flex;
            width: max-content;
            font-size: .6rem;
            p{
                padding: .3rem 1rem;
                margin: 0 .5rem;
                border: 2px solid #2d5181;
                border-radius: .5rem;
            }
        }
        ol{
            display: flex;
        }
    }
    .bageNumber{
        position: absolute;
        right:-.3rem;
        top: -.8rem;
        background: black;
        color: white;
        border-radius: 100%;
        font-size: .6rem;
        width:1.2rem;
        height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
}

.small-text{
    background: #f5f5f5;
    font-size: .8rem;
    box-shadow: 0 0 5px #999;
    padding: .2rem .5rem;
    border-radius: .2rem;
}

.text-end{
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: flex-end;
     .reset-link{
        font-size: .8rem;
        border-bottom: 1px solid #999;
    }
}

</style>
