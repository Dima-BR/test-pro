<template>
  <div >
    
    <section  class="h-100 h-custom" style="background-color: #d2c9ff;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 class="mb-0 text-muted">{{ bagItemscount }} items</h6>
                  </div>
                  <hr class="my-4">
                  <div v-if="cartContent.length === 0" class="text-center font-italic">Your cart is empty, try to add items.</div>
                  <div v-else class="row mb-4 d-flex justify-content-between align-items-center"  v-for="thing in cartContent" :key="thing.id">
                    <div class="col-md-2 col-lg-2 col-xl-3">
                      <img
                      :src="thing.img"
                        class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2">
                      <h6 class="text-muted">category</h6>
                      <h6 class="text-black mb-0">{{ thing.title }}</h6>
                    </div>
                    <!-- <div class="col-md-3 col-lg-3 col-xl-2 d-flex"> -->
                      <!-- <button class="btn btn-link px-2" @click="dec">$
                        <i class="fas fa-minus"></i>
                      </button> -->

                      <!-- <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" /> -->

                      <!-- <button class="btn btn-link px-2" @click="inc">
                        <i class="bi bi-plus fa-lg"></i>
                      
                      </button> -->
                    <!-- </div> -->
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">{{thing.price}} JD</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <span class="text-muted" role="button" @click="removeThing(thing.id)"><i class="bi bi-trash"></i></span>
                    </div>
                  </div>

                  

                  <hr class="my-4">

                  <div class="pt-5">
                    <h6 class="mb-0">
                      <router-link class="text-body" to="/products"> Back to Shopping</router-link>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items {{ bagItemscount }}</h5>
                    <h5>{{cartPrice}} JD</h5>
                  </div>

                  <h5 class="text-uppercase mb-3">Shipping</h5>

                  <div class="mb-4 pb-2">
                    <select class="select">
                      <option value="1">Standard-Delivery- 50.00 JD</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>

                  <h5 class="text-uppercase mb-3">Discount Code</h5>

                  <div class="mb-5">
                    <div class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5>{{cartPrice}} JD</h5>
                  </div>

                  <button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  

    <!-- end  -->
  </div>
</template>


<script>
export default {
  name: 'Cart',
  data() {
    return {
      quan: 1,
    }
  },
  computed: {
    cartContent() {
      return this.$store.state.cartItems;
    },
    cartPrice() {
      return this.$store.getters.totalPrice;
    },
    bagItemscount() {
      return this.$store.getters.itemsNumber
    }
  },
  methods: {
    removeThing(id) {
      this.$store.commit('outCart', id);
    },
    inc() { // Info box Incrememnt button
      if (this.quan <= 8 )
       return this.quan ++
    },
    dec() { // Info box Decrememnt button
      if (this.quan >= 2)
       return this.quan --
    },
  },
};
</script>

<style scoped>
.cart {
  color: #eee;
  margin-left: 10px;
  margin-right: 15px;
}

hr {
    border-top: 1px solid #000;
}
.card {
  -webkit-transform: none ; /* Safari and Chrome */
       -moz-transform: none; /* Firefox */
        -ms-transform: none; /* IE 9 */
         -o-transform: none; /* Opera */
            transform: none !important;
}
/* new cart  */
@media (min-width: 1025px) {
.h-custom {
height: 100% !important;
width: 100%;
}
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}

.card-registration .select-arrow {
top: 13px;
}

.bg-grey {
background-color: #eae8e8;
}

@media (min-width: 992px) {
.card-registration-2 .bg-grey {
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
}
}

@media (max-width: 991px) {
.card-registration-2 .bg-grey {
border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
}
}

.control.number {
  border: 0.2px solid lightgrey;
  font-size: 19px;
  font-weight: bold;
  height: 35px;
  width: 55px;
  margin-bottom: 30px;
}
.control.number button{
  border:none;
  background: inherit;
  width: 25px;
  height: 35px;
  outline-style: none;
}
.control.number button:active{
  background-color: lightgrey;
}
.control.number h5 {
  margin-left: 13px;
  margin-right: 13px;
}

</style>
