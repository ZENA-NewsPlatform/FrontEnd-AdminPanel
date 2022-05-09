<template>
    <Dialog v-if="loading" class="z-50">
      <Spinner :animation-duration="4000" :size="60" color="#eeeeee"></Spinner>
    </Dialog>
  <div
    class="
      auth-layout-wrap
      flex
      justify-center
      min-h-screen
      flex-col
      bg-cover
      items-center
    "
    style="background-image: url(../../images/photo-wide-4.jpg)"
  >
    <div class="container-session-v1 max-w-2xl">
      <BaseCard noPadding class="overflow-hidden">
        <div class="grid grid-cols-6">
          <div class="col-span-6 lg:col-span-6">
            <div class="p-5">
             <MainLogo size="big" class="fill-current text-purple-500"></MainLogo>
              <h1 class="mb-3 text-lg">Sign In as an administrator</h1>
              <form action="">


                <!--SIGN IN FORM-->
                <div class="mb-3">
                  <!--USERNAME-->
                  <label class="text-xs text-gray-600" for="">User Name</label>
                  <input
                    v-model="email"
                    class="
                      w-full
                      px-4
                      py-1
                      bg-gray-100
                      focus:outline-none
                      border border-gray-400
                      rounded-full
                    "
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div class="mb-3">

                  <!--PASSWORD-->
                  <label class="text-xs text-gray-600" for="">Password</label>
                  <input
                    v-model="password"
                    class="
                      w-full
                      px-4
                      py-1
                      bg-gray-100
                      focus:outline-none
                      border border-gray-400
                      rounded-full
                    "
                    type="password"
                    placeholder="Enter admin password"
                  />
                </div>
                <div class="mb-4">
                  <!--SIGN IN BUTTON-->

                  <BaseBtn
                    @click="submitForm"
                    block
                    class="bg-purple-500 mb-2 text-white rounded-full"
                    >Sign In</BaseBtn
                  >
                  <!-- <BaseBtn block class="bg-purple-500 mb-2 text-white  rounded-full">Create an account</BaseBtn> -->
                </div>
                <div class="text-center">
                  <a
                    class="hover:text-purple-500 underline text-gray-600"
                    href="#"
                    >Forgot Password?</a
                  >
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>


<script>
import auth from "@/controllers/auth.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  created(){
    
  },
  
  methods: {
    async submitForm() {
      try {
        this.loading = true;
        const credentials = {
          email: this.email,
          password: this.password,
        };
        const response = await auth.login(credentials)
        const token = response.token;
        const user = response.user;
        this.$store.dispatch("login", { token, user});
        localStorage.setItem("token", token);
        this.$router.push("/");
        this.loading = false;
        
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
