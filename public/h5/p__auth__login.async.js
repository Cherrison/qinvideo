(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2U9O":function(e,t,a){"use strict";a.r(t);a("+L6B");var r=a("2/Rp"),o=(a("Pwec"),a("CtXQ")),s=(a("5NDa"),a("5rEg")),n=(a("y8nQ"),a("Vl3Y")),i=(a("miYZ"),a("tsqr")),l=a("mrSG"),m=a("q1tI"),c=a.n(m),p=a("MuoO"),d=a("mOP9"),g=a("aCH8"),u=a.n(g),h=a("vOnD"),f=a("LLXN"),b=a("mNhR"),y=a("XEok"),E=a("usdK"),w=h["a"].div`
  width: 100%;
  padding: 20px 40px;
  margin-top: 60px;
  .logo {
    text-align: center;
    font-size: 5em;
    margin-bottom: 60px;

    i {
      animation: rotate infinite 6s linear;
      color: ${e=>e.color};
    }

    @keyframes rotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,O=class extends m["Component"]{constructor(){super(...arguments),this.initData=(()=>{var e=localStorage.getItem("userInfo"),t=localStorage.getItem("token"),a=localStorage.getItem("refreshToken");e&&t&&a&&E["a"].replace({pathname:"/user"})}),this.login=(e=>{e.preventDefault(),this.props.form.validateFields((e,t)=>{if(e)return i["a"].error(Object(f["formatMessage"])({id:"common.form.error"}));var a=this.props.dispatch,r=t.name,o=t.password,s=u()(o);a({type:"auth/login",payload:{data:{name:r,password:s}}})})})}componentDidMount(){this.initData()}render(){var e=this.props.loading,t=this.props.form.getFieldDecorator;return c.a.createElement(w,{color:this.context},c.a.createElement("div",{className:"logo"},c.a.createElement(b["a"],{type:"icon-zhinengyouhua"})),c.a.createElement("div",{className:"form"},c.a.createElement(n["a"],{onSubmit:this.login,className:"login-form"},c.a.createElement(n["a"].Item,null,t("name",{rules:[{required:!0,message:Object(f["formatMessage"])({id:"auth.username.tips"})}]})(c.a.createElement(s["a"],{size:"large",prefix:c.a.createElement(o["a"],{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:Object(f["formatMessage"])({id:"auth.username"})}))),c.a.createElement(n["a"].Item,null,t("password",{rules:[{required:!0,message:Object(f["formatMessage"])({id:"auth.password.tips"})}]})(c.a.createElement(s["a"],{size:"large",prefix:c.a.createElement(o["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:Object(f["formatMessage"])({id:"auth.password"})}))),c.a.createElement(n["a"].Item,null,c.a.createElement(r["a"],{type:"primary",htmlType:"submit",className:"login-form-button",size:"large",style:{width:"100%"},loading:e},Object(f["formatMessage"])({id:"auth.login"}))))),c.a.createElement("div",{className:"bottom"},c.a.createElement(d["a"],{to:"/auth/register"},Object(f["formatMessage"])({id:"auth.register"})),c.a.createElement(d["a"],{to:"/auth/reset"},Object(f["formatMessage"])({id:"auth.reset"}))))}};O.contextType=y["a"],O=l["a"]([Object(p["connect"])(e=>{var t=e.auth,a=e.loading;return{auth:t,loading:a.effects["auth/login"]}})],O),t["default"]=n["a"].create()(O)}}]);