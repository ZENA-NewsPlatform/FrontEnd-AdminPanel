<template>
  <div class="form-group row">

    <label class="col-form-label col-md-2"><slot name="Title">Title</slot></label>
    <div class="col-md-10">
      <select class="form-select">
        <option>-- Select --</option>
        <!-- <div v-for="option in options" :key="option" > -->
          <option v-for="option in options" :key="option" >{{option}}</option>
        <!-- </div> -->
        
        <!-- <option>{{option2}}</option>
        <option>{{option3}}</option>
        <option>{{option4}}</option> -->
        
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style>
.form-group {
  margin-bottom: 1.25rem;
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.col-md-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  /* background-image: url(
    data:image/svg + xml,
    %3csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16"%3e%3cpathfill="none"stroke="%23343a40"stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M2 5l6 6 6-6"/%3e%3c/svg%3e
  ); */
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select {
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  cursor: default;
  margin: 0em;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  border-radius: 0px;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
*,
::after,
::before {
  box-sizing: border-box;
}
</style>
