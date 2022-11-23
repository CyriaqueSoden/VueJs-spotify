
<template>
  <div class="p">
    <img src="../assets/Vector(1).png" alt="">
    <div>

      <p class="haut">Enjoy listening to music</p>
      <p class="bas">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.  </p>
    </div>
    <GreenButton />
  </div>
</template>

<script>
  import GreenButton from '@/components/greenButton.vue'
  export default GreenButton;
</script>


<style scoped>

.p{
  background-image: url("../assets/getStartedBg.png");
  background-size: cover;
  height:100%;
  width:100%;
}

img{
  position: absolute;
  left: 24.87%;
  right: 24.87%;
  top: 4.38%;
  bottom: 88.63%;
}

.haut{
  position: absolute;
width: 284px;
height: 34px;
left: 53px;
top: 499px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 34px;

/* identical to box height */
text-transform: capitalize;

color: #DADADA;
}

.bas{
  position: absolute;
width: 297px;
height: 92px;
left: 47px;
top: 554px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 23px;
text-align: center;

color: #797979;
}
</style>
