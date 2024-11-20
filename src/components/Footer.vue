<template>
      <div class="footer">
    <div class="footer_left">
       <div class="footer_li">
         <h6> About CarQuest</h6>
        <p>About us</p>
        <p>Customer Reviews</p>
       </div>
       <div class="footer_li">
         <h6> How It Works</h6>
        <p>AI Quiz</p>
        <p>Car Aggregation</p>
       </div>
       <div class="footer_li">
         <h6> Support</h6>
        <p>Support</p>
        <p>Contact</p>
       </div>
    </div>
    <div class="footer_right">
        <h6>Connect With Us</h6>
        <ul class="footer_icons">
            <li> <img src="../assets/images/Facebook Social.png" alt=""> </li>
            <li> <img src="../assets/images/Linkedin.png" alt=""> </li>
            <li> <img src="../assets/images/Email Message Inbox.png" alt=""> </li>
            <li> <img src="../assets/images/Instagram Social.png" alt=""> </li>
        </ul>
        <div class="fonter_word">
            <div><img src="../assets/images/Copyright Circle.png" alt=""> <span>2024 CarQuest Inc.All Rights Reserved.</span> </div>
            <p>Sitemap | Privacy | English | $ USD</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.footer{
    width: 100vw;
    height: 30rem;
    background: #c0d6f5;
    margin-top: 5rem;
    padding: .8rem 2rem;
    display: flex;
    gap: 15%;
    .footer_left{
        flex: 1;
        .footer_li{
            margin: 1rem 0;
        }
        h6{
            color: #2d5181;
            border-bottom: 2px solid #2d5181;
        }
        p{
            color: #2d5181;
            margin: .3rem 0;
            font-size: .8rem;
            font-weight: bold;
        }
    }
    .footer_right{
        flex: 1;
        margin-top: 1rem;
        position: relative;
        h6{
            margin-top: 1rem;
            color: #2d5181;
            border-bottom: 2px solid #2d5181;
            height: max-content;
        }
        .footer_icons{
            width: 100%;
            height: 5rem;
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            li{
                width: 50%;
                height: 50%;
            }
        }
        .fonter_word{
            margin-top: 3rem;
            span{
                font-size: .42rem;
                @media screen and (min-width: 768px) {
                    font-size: .83rem;
                }
                
            }
            p{
                font-size: .53rem;
                @media screen and (min-width: 768px) {
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>