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
      label="邮箱"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      type='password'
      label="密码"
      required
    ></v-text-field>

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
      @click="register()"
    >
      注  册
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
      @click="SignIn()"
    >
      登  陆
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
        v => !!v || '邮箱 is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || '密码 is required',
        v => (v && v.length >= 8) || '账号 must be more than 8 characters',
      ],
      checkbox: false,
    }),

    methods: {
      register(){
        //{
        //     'id':3,
        //     'name':'testcase1',
        //     'steps':['step1','step2']
        // }
        let post_data={
            username : this.name,
            email : this.email,
            password : this.password
        }
        this.$api.user.SignUp(post_data).then(res=>{
            console.log(res)
        })
      },
      reset () {
        this.$refs.form.reset()
      },
      SignIn () {
        this.$router.push({name:'SignIn'})
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