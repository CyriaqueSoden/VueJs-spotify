<template>
    <div class="bg">
        <img class="logo" src="../assets/Vector(1).png" alt=""> 
        <div class="te">
            <p class="un">Enjoy listening to music</p>
            <p class="deux">Spotify is a proprietary Swedish audio streaming and media services provider </p> 
            <button class="register" id="a">Register</button>
            <button class="register" id="b">sign in </button>
        </div>
        <img id="billie" src="../assets/leftCornerBillie.png" alt="">
    </div>
</template>

<style>
#b{
    left: 150px;
    background-color: #1c1b1b;
}
.register{
    color: white;
    position: absolute;
width: 147px;
height: 73px;
left: -30px;

background: #42C83C;
/* xzz */
box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04);
border-radius: 30px;
border: none;
}

.bg{
    height: 100%;
  width: 100%;
    background-color: #1c1b1b;
}

#billie{
    position: absolute;
width: 332.07px;
height: 453.73px;
left: 0px;
top: 500px;

background: url(.png);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.logo{
position: absolute;
left: 25%;
right: 19.74%;
top: 20.73%;
bottom: 70.85%;
}

.te
{
    position: absolute;
width: 295px;
height: 35px;
left: 75px;
top: 301px;
}
.un{
    

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 35px;
text-transform: capitalize;

color: #F2F2F2;
}

.deux{

font-family: 'Satoshi';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 23px;
text-align: center;

color: #A0A0A0;
}
</style>