<template>
    <div>
      <button>
        <p>

          {{message}}
        </p>
      </button>
    </div>
</template>
  
<style scoped>
  button{
  width: 329px;
  height: 92px;
  
  background: #42C83C;
  border-radius: 30px;
  border: none;
  }
p{
  font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 30px;

/* identical to box height */
text-transform: capitalize;

color: #F7F7F7;


}

</style>


<script>
export default {
 props: ['message']
}
</script>