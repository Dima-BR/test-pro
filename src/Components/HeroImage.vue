<template>
   <div>
    <!-- Background image -->
    <section class="bgimage">
<div class="container-fluid">
    <div class="text-center flex justify-content-center align-items-center ">
      <div class="hero-text ">
        <h1 class="mb-3"></h1>
        <h4 class="mb-3">Comfort and Elegance Meet at Our Furniture Store</h4>
        <router-link to="/products" class="btn btn-outline-light btn-lg" role="button">Shop Now »</router-link>
      </div>
    </div>
</div>
</section>
</div>
<!-- Background image -->

</template>

<script>
export default {
name: 'HeroImage',
}

</script>
<style>
.bgimage {
width:100%;
height:100vh;
background: url('https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?w=740&t=st=1687599156~exp=1687599756~hmac=4b12c3ce8a4ec52fbc1e440c6aed2a6745c4046fa58153987c52547388eaf496');
background-repeat: no-repeat;
background-position: center;
background-size:cover;
background-attachment: fixed;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
</style>