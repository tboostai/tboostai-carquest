<template>
    <div class="details">
        <NavBar/>
        <div class="container">
            <div class="container_box">
            <div class="title d-flex align-items-center mt-3 mb-0 w-100">
                <p class="carName fs-4 flex-grow-7 mb-0">2023 Toyota Camry Hybrid</p>
                <p class="carPrice flex-grow-3 mb-0 d-flex justify-content-end align-items-center fs-5">$19,800</p>
            </div>
            <div class="info m-0 w-100 p-0 d-flex align-items-center mt-3" style="height:3rem;">
                <div class="info_text h-100" style="flex:7;">
                    <p class="m-0 p-0" style="color:#999;">SE . 45K miles</p>
                    <p class="m-0 p-0" style="color:#999;">Los Angeles,CA(10 miles away)</p>    
                </div>
                <ul class="info_icons m-0 p-0 h-100 d-flex align-items-center justify-content-center list-unstyled">
                    <li class="flex-grow-1 h-100 mx-1">
                        <div class="li_top h-50 w-100 d-flex justify-content-center align-items-center">     <img :src="require('../assets/images/' + (aixin ? 'Vector.png' : 'aixin.png'))" alt="" @click="changeAixin" style="width:21px;height:19px;">
 </div>
                        <p class="d-flex justify-content-center align-items-center h-50" style="font-size:0.7rem;">Favorite</p>
                    </li>
                    <li class="flex-grow-1 h-100 mx-1">
                         <div class="li_top h-50 w-100 d-flex justify-content-center align-items-center fs-1"> + </div>
                        <p class="d-flex justify-content-center align-items-center h-50" style="font-size:0.7rem;">Compare</p>
                    </li>
                </ul>
            </div>
              <div class="slier mt-3" style="height: 18rem;"> 
            <div class="d-flex align-items-center w-100" style="height:70%;">
                <div class="left h-90 d-flex align-items-center justify-content-center fs-1 fw-bold" style="flex:1" @click="change(0)"> < </div>
                <div class="slier_box h-90 d-flex align-items-center justify-content-center" style=" flex:8;">
                    <div class="car_img d-flex justify-content-center" style="width:100%;height:100%;" @click="jump"> <img :src="require('@/assets/images/'+main.src)" alt="" class="rounded img-fluid"> </div>
                </div>
                <div class="slier_right h-90 d-flex align-items-center justify-content-center fs-1 fw-bold" style=" flex:1;" @click="change(1)">></div>
            </div>
            <div class="car_lis w-100 mt-2" style="height:30%;">
            <ul class="lis_cars">
                <li v-for="item in lis" :key="item.id" @click="changeSrc(item.src)"> <img :src="require(`@/assets/images/${item.src}`)" alt=""> </li>        
            </ul>
            </div>
        </div>

        <div class="icons_lis mt-4">
            <p class="fs-4">Vehicle Highlights</p>
            <ul class="list-unstyled d-flex justify-content-between align-items-center" style="margin:auto; width:80%; height:3rem;">
                <li class="w-100 h-100"><img src="../assets/images/Reliability badge.png" alt=""></li>
                <li class="w-100 h-100"><img src="../assets/images/Fuel efficiency badge.png" alt=""></li>
                <li class="w-100 h-100"><img src="../assets/images/Comfort badge.png" alt=""></li>
                <li class="w-100 h-100"><img src="../assets/images/Safety badge.png" alt=""></li>
            </ul>
        </div>

       <div class="icons_words mt-5 mb-3">
    <p class="fs-4">Overview and Features</p>
    <ul class="lis_icons list-unstyled d-flex flex-wrap justify-content-between">
        <li class="col-6 col-md-3 d-flex align-items-center mb-3" style="height: 2.3rem;" v-for="item in icons" :key="item.id">
            <div class="lis_icons_left">
                <img :src="require('@/assets/images/'+item.src)" alt="">
            </div>
            <div class="lis_icons_right ms-2">
                <p class="fw-bold m-0" style="font-size:.9rem">{{ item.word }}</p>
                <p class="m-0" style="font-size:.7rem;color:#999;">{{ item.text }}</p>
            </div>
        </li>
      
    </ul>
</div>

        <div class="word mb-5" >
    <p class="fs-4">History</p>
    <div class="word_box w-100 ps-4">
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="word_lis d-flex mt-3" style="height: auto; padding: 0 .5rem; gap:.5rem;">
                    <div class="mt-2">
                        <img src="../assets/images/Checkmark Outline.png" alt="" style="width:1rem;height:1rem;">
                    </div>
                    <div>
                        <p class="m-0 p-0">Clean Title</p>
                        <p class="m-0 p-0">No Issues Reported</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="word_lis d-flex mt-3" style="height: auto; padding: 0 .5rem; gap:.5rem;">
                    <div class="mt-2">
                        <img src="../assets/images/Checkmark Outline.png" alt="" style="width:1rem;height:1rem;">
                    </div>
                    <div>
                        <p class="m-0 p-0">0 Accidents</p>
                        <p class="m-0 p-0">No Accidents or Damage Reported</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="word_lis d-flex mt-3" style="height: auto; padding: 0 .5rem; gap:.5rem;">
                    <div class="mt-2">
                        <img src="../assets/images/Checkmark Outline.png" alt="" style="width:1rem;height:1rem;">
                    </div>
                    <div>
                        <p class="m-0 p-0">1 Previous Owner</p>
                        <p class="m-0 p-0">Vehicle has One Previous Owner</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

            <div class="from">
                <div class="from_box">
                    <div class="from_box_left">
                        <p>Seller Infromation</p>
                        <div><img src="../assets/images/from.png" alt=""></div>
                    </div>
                    <div class="from_box_right"> <img src="../assets/images/shot.png" alt="">
                        <button>Contact</button>
                     </div>
                </div>
            </div>

         
           
           
        </div>
           <div class="cards mt-5">
                <div class="card pt-5">
                    <p class="text-center fs-4">Build Your Offer</p>
                    <ul class="change" style="margin:auto;">
                        <li class="change_1 changeLi changes" ref="change" @click="changeLi(0)">Lease/finance</li>
                        <li class="change_2 changes" ref="change" @click="changeLi(1)">Buy cash</li>
                    </ul>
                    <div class="ps-4">
                    <p class="mt-5">Listing price</p>
                    <p>Down payment</p>
                    <input type="text" style="width:90%;">
                    <p class="mt-4">Estimated trade-invalue</p>
                    <input type="text" style="width:90%;">
                    <p class="mt-4">Term</p>
                    <input type="text" style="width:90%;">
                    <div class="d-flex justify-content-between mt-4" style="width:90%;">
                        <p>Taxes & Fees</p>
                        <p class="text-decoration-underline">Calculate</p>
                    </div>
                    <div class="btn d-flex justify-content-center mt-4" style="width:90%; gap:5%;">
                        <button style="padding:.3rem 1.5rem; border:1px solid black; background:none;border-radius:1.5rem;">Calculate</button>
                        <button style="padding:.3rem 1.5rem; border:1px solid black; background:none;border-radius:1.5rem;">Send offer</button>
                    </div>
                    </div>
                    
                </div>
            </div>
        <div class="icon_s" >
    <p class="fs-5 mt-5">Have Peace of Mind When You Buy</p>
    <ul class="items" >
        <li><div class="imgI"> <img src="../assets/images/noun_0.png" alt=""> </div> <div class="txt"><p class="txt1">Factory</p><p class="txt2">Warranty</p><p class="txt3">See details</p></div> </li>
        <li><div class="imgI"> <img src="../assets/images/noun_1.png" alt=""> </div> <div class="txt"><p class="txt1">Optional</p><p class="txt2">add-on</p><p class="txt2">protections</p><p class="txt3">Explpre</p></div> </li>
        <li><div class="imgI"> <img src="../assets/images/noun_2.png" alt=""> </div> <div class="txt"><p class="txt1">Free Carfax </p><p class="txt2">ReportView</p><p class="txt3">View</p></div> </li>
        <li><div class="imgI"> <img src="../assets/images/noun_3.png" alt=""> </div> <div class="txt"><p class="txt1">No Safety </p><p class="txt2">Recalls</p><p class="txt3">Explpre</p></div> </li>
    </ul>
            </div>

<div class="car_lis_box mt-5">
    <p class="fs-4">You Might Also Like</p>
    <ul class="list-unstyled d-flex flex-wrap" style="gap:4%;">
        <li class="col-6 col-md-4 mb-4 d-flex" style="width:48%;" v-for="item in cars" :key="item.id">
            <div class="card border-dark border-3 w-100" >
                <img :src="require('../assets/images/'+item.src)" alt="" class="card-img-top">
                 <div class="btm d-flex w-100 p-3" style="height:8rem; border-top:2px solid black;"> 
            <div class="left w-50 h-100"> 
                <b style="font-size:.6rem" class="m-0 p-0">{{ item.name }}</b>
                <p style="font-size:.6rem" class="m-0 p-0">{{ item.estimated }}</p>
                <p style="font-size:.6rem" class="m-0 p-0">{{ item.price }}</p>    
            </div>    
            <div class="right w-50 h-100"> 
                <p></p>
                <p class="m-0 p-0 text-end" style="font-size:.6rem">{{ item.miles }}</p>
                <p class="m-0 p-0 text-end" style="font-size:.6rem">{{ item.cash }}</p>
                <p class="m-0 p-0 text-end" style="font-size:.6rem">{{ item.milesAway }}</p>    
            </div>    
        </div>
            </div>
        </li>
      
    </ul>
</div>


        </div>
                 <!-- <div class="cars mt-5" style="width:70%;margin:auto;">
    <p class="fs-5">You Might Also Like</p>
   <ul class="list-unstyled d-flex flex-wrap" style="gap: 10%;">
    <li class="card col-12 col-md-6 col-lg-3 border-dark border-3 mt-5" v-for="item in cars" :key="item.id">
        <div class="top d-flex justify-content-between align-items-center">
            <img :src="require('../assets/images/'+item.src)" alt="" class="w-60 mx-auto">
        </div>
        <div class="btm d-flex w-100 p-3" style="height:8rem; border-top:2px solid black;"> 
            <div class="left w-50 h-100"> 
                <b>{{ item.name }}</b>
                <p class="m-0 p-0">{{ item.estimated }}</p>
                <p>{{ item.price }}</p>    
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

                </div> -->
           
        <Footer/>
        </div>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            aixin : true,
            cars:[
                { id:0, name: '2023 Toyota Camry Hybrid',estimated: 'SE 45K miles', price: '$19,800', miles: '45K miles $409/mo',  cash: '$0 cash down', milesAway: '10 miles away', src: '2023_toyota_camry-hybrid_sedan_se-nightshade_s_oem_1_1600x1067 1.png' },
                { id:1, name: '2023 Toyota Camry Hybrid',estimated: 'SE 45K miles', price: '$19,800', miles: '45K miles $409/mo',  cash: '$0 cash down', milesAway: '11 miles away', src: 'Screenshot 2024-10-04 at 4.01.16 PM 1.png' },
                { id:2, name: '2021 Toyota Camry Hybrid',estimated: 'SE 90K miles', price: '$16,808', miles: '45K miles $409/mo',  cash: '$0 cash down', milesAway: '19 miles away', src: 'Image 17 1.png' },
                { id:3, name: '2023 Toyota Camry Hybrid',estimated: 'SE 40K miles', price: '$19,500', miles: '45K miles $409/mo',  cash: '$0 cash down', milesAway: '21 miles away', src: 'Image 18 1.png' },
            ],
            id: '',
            lis : [
                { id:0,src:'cars_0.png' },
                { id:1,src:'cars_1.png' },
                { id:2,src:'cars_4.png' },
                { id:3,src:'cars_3.png' },
                { id:4,src:'cars_2.png' },
            ],
            icons : [
                { id:0,src:'icon_0.png',word:'Fuel Type',text:'Hybrid' },
                { id:1,src:'icon_1.png',word:'Mileage',text:'Hybrid' },
                { id:2,src:'icon_2.png',word:'MPG',text:'58 MPG' },
                { id:3,src:'icon_3.png',word:'Transmission',text:'Automatic' },
                { id:4,src:'icon_4.png',word:'Exterior Color',text:'Navy' },
                { id:5,src:'icon_5.png',word:'Interior',text:'Leather' },
                { id:6,src:'icon_6.png',word:'Drivetrain',text:'Font Wheel Drive' },
                { id:7,src:'icon_7.png',word:'Engine',text:'4-Cyl,  2.0L' },
            ],
            main : { src:'cars_0.png',count:0 } 
        }
    },
    created() {
        this.id = this.$route.params.id
    },
    methods:{
         changeAixin(){
            this.aixin = !this.aixin;
        },
        changeSrc(src){
            this.main.src = src
            
        },
        jump(){
          this.$router.push('/favorites')  
        },
        changeLi(i){
            const changes = document.querySelectorAll('.changes')            
            changes.forEach((item,index)=>{
                item.classList.remove('changeLi')
            })
            changes[i].classList.add('changeLi')
        },
        change(flag){
            if(!flag){
                if(this.main.count>0){
                    this.main.count--
                    this.main.src = this.lis[this.main.count].src
                }
            }else{
                if(this.main.count<this.lis.length-1){
                    this.main.count++
                    this.main.src = this.lis[this.main.count].src
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.container_box{
    width: 90%;
    margin: auto;
}
.cars{
    width: 100%;
    height: 10rem;
    .car_lis{
        width: 100%;
    }
}
.items{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    height: 15rem;
    margin: 0;
    padding: 0;
    gap: 10%;
    justify-content: center;
    li{
        width: 40%;
        height: 40%;
        background: #f5f5f5;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding: .5rem;
    display: flex;
    .imgI{
        flex: 4;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .txt{
        flex: 6;
        height: 100%;
        padding-top: .3rem;
        .txt1,.txt2{
            margin: 0;
            padding: 0;
            font-size: .9rem;
        }
        .txt3{
            margin: 0;
            padding: 0;
            font-size: .6rem;
        }
    }
    }
}
.changeLi{
    background: black;
    color: white;
    transition: all .3s;
}
.change{
    width: 13rem;
    height: 2.5rem;
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 1.5rem;
    border: 1px solid black;
    .change_1{
        flex: 1.5;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;
        border-radius: 1.5rem;
    }
    .change_2{
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;
        border-radius: 1.5rem;
    }
}
.from{
    .from_box{
        width: 100%;
        height: 9rem;
        display: flex;
        .from_box_left{
            flex: 1.2;
            height: 100%;
            background: #2d5181;
            padding: .8rem;
            p{
                color: white;
                font-size: 1.2rem;
                height: 30%;
                margin: 0;
                padding: 0;
            }
            div{
                height: 70%;
                margin: 0;
                padding: 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .from_box_right{
            flex: 1;
            position: relative;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            button{
                position: absolute;
                z-index: 999;
                border: none;
                background: white;
                outline: none;
                padding: 3% 20%;
                border-radius: 1.5rem;
                margin-bottom: .5rem;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
.main{
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    .main_box{
        width: 100%;
        height: 100%;
        .main_box_top{
            width: 100%;
            height: 100%;
            .main_box_top_left{
                
            }
        }
    }
}
.lis_icons_left{
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;
    width: 2.5rem;
    height: 2.5rem;
}
.container {
    width: 100vw;
    margin: auto;
     @media (min-width: 768px) {
        width: 50vw;
    }
.car_lis {
    width: 100%;
    height: 30%; 
    overflow: hidden;
    display: flex;
    margin: 0;
    padding: 0;
    position: relative;

    .lis_cars {
        position: absolute;
        display: flex;
        width: 130%; 
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 2%; 
        li {
            width: 15%;
            height: 5.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 100%;
                height: 80%;
            }
        }
    }
}



    .title {
        .carName {
            flex: 7;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 100%;
        }

        .carPrice {
            flex: 3;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center; 
        }
    }
}
</style>
