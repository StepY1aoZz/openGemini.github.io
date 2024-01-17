import{_ as i,X as n,Y as s,$ as e,a1 as t,Z as a,a0 as d,a3 as r,C as h}from"./framework-1e2d737a.js";const o={},f=e("h2",{id:"集群部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#集群部署","aria-hidden":"true"},"#"),t(" 集群部署")],-1),x=r('<h2 id="最小拓扑架构" tabindex="-1"><a class="header-anchor" href="#最小拓扑架构" aria-hidden="true">#</a> 最小拓扑架构</h2><h3 id="拓扑信息" tabindex="-1"><a class="header-anchor" href="#拓扑信息" aria-hidden="true">#</a> 拓扑信息</h3><table><thead><tr><th style="text-align:left;">实例</th><th style="text-align:left;">个数</th><th style="text-align:left;">物理机配置</th><th style="text-align:left;">IP</th><th style="text-align:left;">配置</th></tr></thead><tbody><tr><td style="text-align:left;">ts-meta</td><td style="text-align:left;">3</td><td style="text-align:left;">4 VCore 8 GiB 100 GiB 用于存储</td><td style="text-align:left;">10.0.1.11, 10.0.1.12, 10.0.1.12</td><td style="text-align:left;">默认端口 全局目录配置</td></tr><tr><td style="text-align:left;">ts-sql</td><td style="text-align:left;">3</td><td style="text-align:left;">16 VCore 32 GiB 100 GiB 用于存储</td><td style="text-align:left;">10.0.1.11, 10.0.1.12, 10.0.1.12</td><td style="text-align:left;">默认端口 全局目录配置</td></tr><tr><td style="text-align:left;">ts-store</td><td style="text-align:left;">3</td><td style="text-align:left;">16 VCore 32 GiB 2 TiB (NVMe SSD) 用于存储</td><td style="text-align:left;">10.0.1.11, 10.0.1.12, 10.0.1.12</td><td style="text-align:left;">默认端口 全局目录配置</td></tr></tbody></table><h3 id="拓扑文件配置" tabindex="-1"><a class="header-anchor" href="#拓扑文件配置" aria-hidden="true">#</a> 拓扑文件配置</h3>',4);function c(g,_){const l=h("RouterLink");return n(),s("div",null,[f,e("p",null,[t("请参考 "),a(l,{to:"/zh/guide/reference/gemix_manual.html"},{default:d(()=>[t("Gemix使用指南")]),_:1}),t(" 部署openGemini集群")]),x,e("p",null,[t("参考 "),a(l,{to:"/zh/guide/reference/gemix_manual.html#%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B"},{default:d(()=>[t("配置示例")]),_:1})])])}const m=i(o,[["render",c],["__file","deployment_using_gemix.html.vue"]]);export{m as default};