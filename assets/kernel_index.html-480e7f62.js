const e=JSON.parse('{"key":"v-35693212","path":"/zh/guide/kernel/kernel_index.html","title":"查询索引结构","lang":"zh-CN","frontmatter":{"title":"查询索引结构","order":1,"description":"本文主要介绍openGemini 索引组织结构设计的关键点。 为什么需要索引 在数据库中，数据往往按主键组织。在 openGemini 中，数据同样也是按照主键 sid 来组织，同一个时间线的数据组织在一起。如下是一张时序数据逻辑表结构： 图片 sid 代表时间线对应的 id，也就是时序数据的主键；tag 列是标签列，用于描述时序数据，常常用来做条件过...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://openGemini.github.io/guide/kernel/kernel_index.html"}],["meta",{"property":"og:url","content":"https://openGemini.github.io/zh/guide/kernel/kernel_index.html"}],["meta",{"property":"og:site_name","content":"openGemini"}],["meta",{"property":"og:title","content":"查询索引结构"}],["meta",{"property":"og:description","content":"本文主要介绍openGemini 索引组织结构设计的关键点。 为什么需要索引 在数据库中，数据往往按主键组织。在 openGemini 中，数据同样也是按照主键 sid 来组织，同一个时间线的数据组织在一起。如下是一张时序数据逻辑表结构： 图片 sid 代表时间线对应的 id，也就是时序数据的主键；tag 列是标签列，用于描述时序数据，常常用来做条件过..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-23T12:19:15.000Z"}],["meta",{"property":"article:author","content":"openGemini"}],["meta",{"property":"article:modified_time","content":"2023-10-23T12:19:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查询索引结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-23T12:19:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"openGemini\\",\\"url\\":\\"https://github.com/openGemini/openGemini\\"}]}"]]},"headers":[{"level":2,"title":"为什么需要索引","slug":"为什么需要索引","link":"#为什么需要索引","children":[]},{"level":2,"title":"多维倒排索引组织结构","slug":"多维倒排索引组织结构","link":"#多维倒排索引组织结构","children":[]},{"level":2,"title":"文件组织结构","slug":"文件组织结构","link":"#文件组织结构","children":[]},{"level":2,"title":"举个例子","slug":"举个例子","link":"#举个例子","children":[]}],"git":{"createdTime":1691113380000,"updatedTime":1698063555000,"contributors":[{"name":"XiangYu","email":"49023462+xiangyu5632@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":6.74,"words":2021},"filePathRelative":"zh/guide/kernel/kernel_index.md","localizedDate":"2023年8月4日","autoDesc":true,"excerpt":""}');export{e as data};