<template>
<div class="div1">
  <v-form ref="form"
    v-model="valid"
    lazy-validation 
  >
  
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="账号"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      type='password'
      label="密码"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="类型"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      登  录
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      重  置
    </v-btn>

    <v-btn
      color="warning"
      @click="signup"
    >
      注  册
    </v-btn>
  </v-form>
  </div>    
  
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || '账号 is required',
        v => (v && v.length <= 10) || '账号 must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || '密码 is required',
        v => /.+.+.+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      signup () {
        // this.$refs.form.resetValidation()
        this.$router.push('SignUp')
      },
    },
  }
</script>
<style scoped>
  .div1{
          display: flex;
          align-items: center;/*如果flex-direction：row；代表垂直居中 ；如果flex-direction：column；则代表水平居中*/
          justify-content: center;/*如果flex-direction：row；代表水平居中；如果flex-direction：column；则代表垂直居中*/
          width: 100% auto;
          height: 80% auto;       
      }
  .parent{display:flex;justify-content:center;width: 100%; height: 100%;}
  .child{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);}
</style>