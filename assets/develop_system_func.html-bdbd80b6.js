import{_ as t,X as l,Y as r,$ as e,a1 as o,Z as c,a0 as s,C as a}from"./framework-1e2d737a.js";const i={},_=e("h2",{id:"新增一个聚合算子步骤如下",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#新增一个聚合算子步骤如下","aria-hidden":"true"},"#"),o(" 新增一个聚合算子步骤如下")],-1),u=e("ol",null,[e("li",null,[e("p",null,"open_src/influx/query/compile.go, 在compileExpr()或者compileFunction()方法中添加新聚合函数名称和编译实现。编译的主要作用是完成函数的参数合法性检查，以及compiledStatement属性填充。")]),e("li",null,[e("p",null,"在engine/executor/agg_iterator.gen.go.tmpl中新增Iterator, 并实现对应的reduce()和merge()方法，再通过engine/executor/call_processor.go的NewProcessors()方法完成对迭代器的注册。")])],-1),d=e("p",null,"上述步骤暂不考虑算子能力下沉。",-1);function p(m,h){const n=a("RouterLink");return l(),r("div",null,[_,u,d,e("p",null,[o("在此之前，您需要先对整体的计算引擎框架和流程有所了解，参考"),c(n,{to:"/zh/guide/kernel/query_engine.html"},{default:s(()=>[o("openGemini计算引擎框架")]),_:1})])])}const g=t(i,[["render",p],["__file","develop_system_func.html.vue"]]);export{g as default};