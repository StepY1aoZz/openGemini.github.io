import{_ as s,X as n,Y as a,a3 as e}from"./framework-1e2d737a.js";const t={},o=e(`<p>This chapter mainly introduces the data subscription feature. Data subscription means that the write request to one openGemini cluster will be forwarded to the subscriber endpoints. The following content will let you know how to use this feature.</p><h2 id="configuration-items" tabindex="-1"><a class="header-anchor" href="#configuration-items" aria-hidden="true">#</a> Configuration Items</h2><p>Configurations items are:</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">subscriber</span><span class="token punctuation">]</span>
  <span class="token key property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token key property">http-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;30s&quot;</span>
  <span class="token key property">insecure-skip-verify</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token key property">https-certificate</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>
  <span class="token key property">write-buffer-size</span> <span class="token punctuation">=</span> <span class="token number">100</span>
  <span class="token key property">write-concurrency</span> <span class="token punctuation">=</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>enabled</code>: this feature works only when <code>enabled</code> is true</li><li><code>http-timeout</code>: http timeout of http client</li><li><code>insecure-skip-verify</code>: whether to use unsafe https connection with subscribers or not.</li><li><code>https-certificat</code>: location of CA certs file, if this item is empty string, default cert of your system will be used.</li><li><code>write-buffer-size</code>: number of in-flight write requests buffered in the channel.</li><li><code>write-concurrency</code>: number of goroutines to consume a single write channel. Default value is 2 * cpu num.</li></ul><h2 id="create-subscriptions" tabindex="-1"><a class="header-anchor" href="#create-subscriptions" aria-hidden="true">#</a> Create Subscriptions</h2><p>You can use the following commands in ts-cli to create subscription:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Pattern:</span>
<span class="token keyword">CREATE</span> SUBSCRIPTION <span class="token string">&quot;&lt;subscription_name&gt;&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;&lt;db_name&gt;&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;&lt;retention_policy&gt;&quot;</span> DESTINATIONS <span class="token operator">&lt;</span><span class="token keyword">ALL</span><span class="token operator">|</span><span class="token keyword">ANY</span><span class="token operator">&gt;</span> <span class="token string">&quot;&lt;subscription_endpoint_host&gt;&quot;</span>
<span class="token comment">-- use default retention policy</span>
<span class="token keyword">CREATE</span> SUBSCRIPTION <span class="token string">&quot;&lt;subscription_name&gt;&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;&lt;db_name&gt;&quot;</span> DESTINATIONS <span class="token operator">&lt;</span><span class="token keyword">ALL</span><span class="token operator">|</span><span class="token keyword">ANY</span><span class="token operator">&gt;</span> <span class="token string">&quot;&lt;subscription_endpoint_host&gt;&quot;</span>

<span class="token comment">-- Examples:</span>
<span class="token comment">-- Create a SUBSCRIPTION on database &#39;mydb&#39; and retention policy &#39;autogen&#39; that sends data to &#39;example.com:9090&#39; via HTTP.</span>
<span class="token keyword">CREATE</span> SUBSCRIPTION <span class="token string">&quot;sub0&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;mydb&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;autogen&quot;</span> DESTINATIONS <span class="token keyword">ALL</span> <span class="token string">&#39;http://example.com:9090&#39;</span>

<span class="token comment">-- Create a SUBSCRIPTION on database &#39;mydb&#39; and default retention policy that round-robins the data to &#39;h1.example.com:9090&#39; and &#39;h2.example.com:9090&#39; via https.</span>
<span class="token keyword">CREATE</span> SUBSCRIPTION <span class="token string">&quot;sub0&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;mydb&quot;</span> DESTINATIONS <span class="token keyword">ANY</span> <span class="token string">&#39;https://h1.example.com:9090&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://h2.example.com:9090&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the subscriber have opened the authorization, you can change the url to set basic auth:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> SUBSCRIPTION <span class="token string">&quot;sub0&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;mydb&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;autogen&quot;</span> DESTINATIONS <span class="token keyword">ALL</span> <span class="token string">&#39;http://username:password@example.com:9090&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="show-subscription" tabindex="-1"><a class="header-anchor" href="#show-subscription" aria-hidden="true">#</a> Show Subscription</h2><p>Show subscription is quite simple, there is only one kind of sql pattern:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> subscriptions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="drop-subscription" tabindex="-1"><a class="header-anchor" href="#drop-subscription" aria-hidden="true">#</a> Drop Subscription</h2><p>You can use the following commands in ts-cli to drop subscription:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--Pattern:</span>
<span class="token comment">--Drop subscription on the specific db &amp; retention policy</span>
<span class="token keyword">DROP</span> SUBSCRIPTION <span class="token string">&quot;&lt;subscription_name&gt;&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;&lt;db_name&gt;&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;&lt;retention_policy&gt;&quot;</span>
<span class="token comment">--Example:</span>
<span class="token keyword">DROP</span> SUBSCRIPTION <span class="token string">&quot;sub0&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;db0&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;autogen&quot;</span>

<span class="token comment">--Pattern:</span>
<span class="token comment">--Find the specific subscription on the db, and drop it</span>
<span class="token keyword">DROP</span> SUBSCRIPTION <span class="token string">&quot;&lt;subscription_name&gt;&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;&lt;db_name&gt;&quot;</span>
<span class="token comment">--Example:</span>
<span class="token keyword">DROP</span> SUBSCRIPTION <span class="token string">&quot;sub0&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;db0&quot;</span>

<span class="token comment">--Pattern:</span>
<span class="token comment">--Drop all subscriptions on the specific database</span>
<span class="token keyword">DROP</span> <span class="token keyword">ALL</span> SUBSCRIPTIONS <span class="token keyword">ON</span> <span class="token string">&quot;&lt;db_name&gt;&quot;</span>
<span class="token comment">--Example:</span>
<span class="token keyword">DROP</span> <span class="token keyword">ALL</span> SUBSCRIPTIONS <span class="token keyword">ON</span> <span class="token string">&quot;db0&quot;</span>

<span class="token comment">--Pattern:</span>
<span class="token comment">--Drop all subscriptions</span>
<span class="token keyword">DROP</span> <span class="token keyword">ALL</span> SUBSCRIPTIONS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),i=[o];function p(l,c){return n(),a("div",null,i)}const d=s(t,[["render",p],["__file","subscription.html.vue"]]);export{d as default};