<template>
    <div class="favorites">
        <NavBar/>
        <div class="container">
            <p class="title fs-4 mt-4">Compare Your Favorites</p>
            <table class="table">
                <tbody>
                    <tr>
                        <td class="border text-center align-bottom">Price</td>
                        <td class="border tr_body text-center">
                            <div><img src="../assets/images/group_1.png" alt=""></div>
                            <div><p>Toyota Camry Hybrid 2023</p></div>
                            <div><p style="font-size:.7rem; text-decoration: underline;">Change</p></div>
                            <div class="align-bottom"><p>$18,886</p></div>
                        </td>
                        <td class="border tr_body text-center">
                            <div><img src="../assets/images/group_2.png" alt=""></div>
                            <div><p>Honda Accord Hybrid 2023</p></div>
                            <div><p style="font-size:.7rem; text-decoration: underline;">Change</p></div>
                            <div class="align-bottom"><p>$18,886</p></div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul class="xiala list-unstyled">
                <li v-for="item in lis" :key="item.id" class="mt-4">
                    <div 
                        class="d-flex align-items-center" 
                        style="border-bottom:1px solid #999; padding-bottom:.5rem;" 
                        @click="toggleCover(item.id)"
                    >
                        <img src="../assets/images/xia.png" alt="" style="margin-right: 10px;">
                        <p class="mb-0">{{ item.title }}</p>
                    </div>
                    <div v-if="item.showCover" class="cover" style="height:15rem;background:blue;"></div>
                </li>
            </ul>

        </div>
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
            lis: [
                { id: 0, title: 'Entertainment', showCover: false },
                { id: 1, title: 'Performance', showCover: false },
                { id: 2, title: 'Engine', showCover: false },
                { id: 3, title: 'Tires & Wheels', showCover: false },
                { id: 4, title: 'Weight & Capacity', showCover: false },
                { id: 5, title: 'Safety', showCover: false },
                { id: 6, title: 'Suspension', showCover: false },
                { id: 7, title: 'Brakes', showCover: false },
                { id: 8, title: 'Dimensions', showCover: false },
            ]
        }
    },
    methods: {
        toggleCover(id) {
            const item = this.lis.find(item => item.id === id);
            if (item) {
                item.showCover = !item.showCover; 
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.favorite-item {
    text-align: center;
}
.card-body img {
    max-width: 100%;
    height: auto; 
}
.table {
    border-collapse: collapse;
}
.border {
    border: 1px solid #999; 
    padding: 8px; 
    text-align: center;
}
</style>
