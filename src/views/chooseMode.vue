<template>
    <div class="bg">
        <img class="un" src="../assets/Vector(1).png" alt=""/>
        <img class="deux" src="../assets/Group 24.png" alt="">
            <GreenButton class="btnV" message="Continue" route="/loading"/>
    </div>
</template>

<script> 
import GreenButton from "@/components/greenButton.vue"; 
export default {   
  components: {GreenButton}, 
}  
</script>


<style scoped>

.un{
    position: absolute;
left: 24.87%;
right: 24.87%;
top: 4.62%;
bottom: 88.39%;
}

.deux{
    position: absolute;
width: 233px;
height: 177px;
left: 100px;
top: 400px;


}

.bg{
  background-image: url("../assets/chooseModeBg.png");
  background-size: cover;
  height:100%;
  width:100%;
}

.btnV{
    position: absolute;
left: 50px;
top: 683px;

}

</style>