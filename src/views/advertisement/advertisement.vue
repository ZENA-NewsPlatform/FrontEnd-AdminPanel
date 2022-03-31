<template>
<h1>ADVERTISEMENTS</h1>
<h2>{{ads.advertiser}}</h2>
  <ReportTable :users='ads' >
      <template v-slot:th1>TITLE</template>
      <template v-slot:th2>COMPANY</template>
      <template v-slot:th3>TYPE</template>
      <template v-slot:th4>START DATE</template>
      <template v-slot:th5>END DATE</template>
      <template v-slot:th6>OPERATIONS</template>
  </ReportTable>
</template>

<script>
import axios from 'axios';
import ReportTable from '../components/utilities/ReportTable.vue'
export default {
    data(){
        return{
            ads:{},
        }
    },
components:{
    ReportTable
},
created(){
    // const Cookie = document.cookie;
var config = {
  method: 'get',
  url: 'v1/admins',
  headers: { 
    'Cookie': 'barer=' + localStorage.getItem('token')
    }
};
  const that = this
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  that.ads = response.data.data.doc
})
.catch(function (error) {
  console.log(error);
});

}


}
</script>

<style>



</style>