const e=JSON.parse('{"key":"v-675e7bcb","path":"/guide/deploy_cluster/production_deployment_using_gemix.html","title":"使用 gemix 部署 openGemini 集群","lang":"en-US","frontmatter":{"description":"---; title: 使用 gemix 部署 order: 5 --- # 使用 gemix 部署 openGemini 集群 gemix 是 openGemini 官方开发的集群运维工具，gemix cluster 是 gemix 提供的使用 Golang 编写的集群管理组件，通过 gemix cluster 组件就可以进行日常的运维工作，包括安装...","head":[["meta",{"property":"og:url","content":"https://openGemini.github.io/guide/deploy_cluster/production_deployment_using_gemix.html"}],["meta",{"property":"og:site_name","content":"openGemini"}],["meta",{"property":"og:title","content":"使用 gemix 部署 openGemini 集群"}],["meta",{"property":"og:description","content":"---; title: 使用 gemix 部署 order: 5 --- # 使用 gemix 部署 openGemini 集群 gemix 是 openGemini 官方开发的集群运维工具，gemix cluster 是 gemix 提供的使用 Golang 编写的集群管理组件，通过 gemix cluster 组件就可以进行日常的运维工作，包括安装..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-23T03:42:13.000Z"}],["meta",{"property":"article:author","content":"openGemini"}],["meta",{"property":"article:modified_time","content":"2023-12-23T03:42:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 gemix 部署 openGemini 集群\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-23T03:42:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"openGemini\\",\\"url\\":\\"https://github.com/openGemini/openGemini\\"}]}"]]},"headers":[{"level":2,"title":"title: 使用 gemix 部署order: 5","slug":"title-使用-gemix-部署order-5","link":"#title-使用-gemix-部署order-5","children":[]},{"level":2,"title":"第 1 步：软硬件环境要求及前置检查","slug":"第-1-步-软硬件环境要求及前置检查","link":"#第-1-步-软硬件环境要求及前置检查","children":[]},{"level":2,"title":"第 2 步：在执行机上安装 gemix 组件","slug":"第-2-步-在执行机上安装-gemix-组件","link":"#第-2-步-在执行机上安装-gemix-组件","children":[{"level":3,"title":"在线部署","slug":"在线部署","link":"#在线部署","children":[]},{"level":3,"title":"离线部署","slug":"离线部署","link":"#离线部署","children":[]}]},{"level":2,"title":"第 3 步：初始化集群拓扑文件","slug":"第-3-步-初始化集群拓扑文件","link":"#第-3-步-初始化集群拓扑文件","children":[]},{"level":2,"title":"第 4 步：执行安装命令","slug":"第-4-步-执行安装命令","link":"#第-4-步-执行安装命令","children":[]},{"level":2,"title":"第 5 步：查看 gemix 管理的集群情况","slug":"第-5-步-查看-gemix-管理的集群情况","link":"#第-5-步-查看-gemix-管理的集群情况","children":[]},{"level":2,"title":"第 6 步：检查部署的 openGemini 集群情况","slug":"第-6-步-检查部署的-opengemini-集群情况","link":"#第-6-步-检查部署的-opengemini-集群情况","children":[]},{"level":2,"title":"第 7 步：启动集群","slug":"第-7-步-启动集群","link":"#第-7-步-启动集群","children":[]},{"level":2,"title":"第 8 步：验证集群运行状态","slug":"第-8-步-验证集群运行状态","link":"#第-8-步-验证集群运行状态","children":[]},{"level":2,"title":"探索更多","slug":"探索更多","link":"#探索更多","children":[]}],"git":{"createdTime":1698226509000,"updatedTime":1703302933000,"contributors":[{"name":"shilinlee","email":"836160610@qq.com","commits":3}]},"readingTime":{"minutes":4.37,"words":1311},"filePathRelative":"guide/deploy_cluster/production_deployment_using_gemix.md","localizedDate":"October 25, 2023","autoDesc":true,"excerpt":""}');export{e as data};