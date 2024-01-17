import{_ as i,X as r,Y as d,$ as a,a1 as e,Z as n,a3 as t,C as o}from"./framework-1e2d737a.js";const l={},c=t(`<h1 id="测试教程" tabindex="-1"><a class="header-anchor" href="#测试教程" aria-hidden="true">#</a> 测试教程</h1><h2 id="如何运行单元测试" tabindex="-1"><a class="header-anchor" href="#如何运行单元测试" aria-hidden="true">#</a> 如何运行单元测试</h2><h3 id="运行所有测试" tabindex="-1"><a class="header-anchor" href="#运行所有测试" aria-hidden="true">#</a> 运行所有测试</h3><p>您始终可以通过在 Makefile 中执行 <code>gotest</code> 目标来运行所有测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> gotest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这几乎等同于 <code>go test ./...</code> 但它在运行测试之前和之后启用和禁用失败点。</p>`,6),p={href:"https://github.com/pingcap/failpoint",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.freebsd.org/cgi/man.cgi?query=fail",target:"_blank",rel:"noopener noreferrer"},u=t(`<h3 id="运行单个测试" tabindex="-1"><a class="header-anchor" href="#运行单个测试" aria-hidden="true">#</a> 运行单个测试</h3><p>要运行单个测试，您可以手动重复 <code>make gotest</code> 所做的并缩小一个测试或一个包的范围：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /path/to/dir/of/test
go <span class="token builtin class-name">test</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-run</span> TestSchemaValidator <span class="token comment"># or with any other test flags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想将测试编译成调试二进制文件以便在调试器中运行，还可以使用 <code>go test -gcflags=&quot;all=-N -l&quot; -o ./t</code>，它会删除所有优化并输出 <code> t</code> 准备好使用的二进制文件，如 <code>dlv exec ./t</code> 或将其与上述组合以仅调试单个测试 <code>dlv exec ./t -- -test.run &quot;^TestT$&quot; -check.f TestBinaryOpFunction</code>。</p><p>要显示有关所有测试标志的信息，请输入 <code>go help testflag</code>。</p>`,5),v=a("strong",null,"GoLand",-1),g={href:"https://www.jetbrains.com/help/go/performing-tests.html",target:"_blank",rel:"noopener noreferrer"},b=a("strong",null,"VS Code",-1),m={href:"https://code.visualstudio.com/docs/languages/go#_test",target:"_blank",rel:"noopener noreferrer"},f=t(`<h3 id="为拉取请求运行测试-todo" tabindex="-1"><a class="header-anchor" href="#为拉取请求运行测试-todo" aria-hidden="true">#</a> 为拉取请求运行测试 (TODO)</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果您还没有加入该组织，您应该等待成员用&quot;/ok-to-test&quot;评论您的拉取请求。</p></div><p>在合并拉取请求之前，它必须通过所有测试。</p><p>通常，持续集成 (CI) 会为您运行测试； 但是，如果你想运行有条件的测试或在失败时重新运行测试，你应该知道如何去做，当 CI 测试失败时，将发送<strong>重新运行</strong>指令。</p><h4 id="retest" tabindex="-1"><a class="header-anchor" href="#retest" aria-hidden="true">#</a> <code>/retest</code></h4><p>重新运行所有失败的 CI 测试用例。</p><h4 id="test-test1-testn" tabindex="-1"><a class="header-anchor" href="#test-test1-testn" aria-hidden="true">#</a> <code>/test {{test1}} {{testN}}</code></h4><p>运行给定的 CI 失败测试。</p><h2 id="如何找到失败的测试" tabindex="-1"><a class="header-anchor" href="#如何找到失败的测试" aria-hidden="true">#</a> 如何找到失败的测试</h2><p>测试失败的常见原因有几种。</p><h3 id="断言失败" tabindex="-1"><a class="header-anchor" href="#断言失败" aria-hidden="true">#</a> 断言失败</h3><p>测试失败的最常见原因是断言失败。 它的失败报告如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=== RUN   TestTopology
    info_test.go:72: 
            Error Trace:    info_test.go:72
            Error:          Not equal: 
                            expected: 1282967700000
                            actual  : 1628585893
            Test:           TestTopology
--- FAIL: TestTopology (0.76s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要查找此类故障，请输入 <code>grep -i &quot;FAIL&quot;</code> 以搜索报告输出。</p><h3 id="数据竞争" tabindex="-1"><a class="header-anchor" href="#数据竞争" aria-hidden="true">#</a> 数据竞争</h3><p>Golang 测试支持通过使用 <code>-race</code> 标志运行测试来检测数据竞争。 它的失败报告如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[2021-06-21T15:36:38.766Z] ==================
[2021-06-21T15:36:38.766Z] WARNING: DATA RACE
[2021-06-21T15:36:38.766Z] Read at 0x00c0055ce380 by goroutine 108:
...
[2021-06-21T15:36:38.766Z] Previous write at 0x00c0055ce380 by goroutine 169:
[2021-06-21T15:36:38.766Z]   [failed to restore the stack]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="协程泄漏" tabindex="-1"><a class="header-anchor" href="#协程泄漏" aria-hidden="true">#</a> 协程泄漏</h3><p>我们使用 goleak 来检测 goroutine 泄漏以进行测试。 它的失败报告如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>goleak: Errors on successful test run: found unexpected goroutines:
[Goroutine 104 in state chan receive, with go.etcd.io/etcd/pkg/logutil.(*MergeLogger).outputLoop on top of the stack:
goroutine 104 [chan receive]:
go.etcd.io/etcd/pkg/logutil.(*MergeLogger).outputLoop(0xc000197398)
    /go/pkg/mod/go.etcd.io/etcd@v0.5.0-alpha.5.0.20200824191128-ae9734ed278b/pkg/logutil/merge_logger.go:173 +0x3ac
created by go.etcd.io/etcd/pkg/logutil.NewMergeLogger
    /go/pkg/mod/go.etcd.io/etcd@v0.5.0-alpha.5.0.20200824191128-ae9734ed278b/pkg/logutil/merge_logger.go:91 +0x85

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),k={href:"https://github.com/uber-go/goleak/#determine-source-of-package-leaks",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="超时" tabindex="-1"><a class="header-anchor" href="#超时" aria-hidden="true">#</a> 超时</h3><p>每个测试用例最多应运行五秒钟。</p><p>如果测试用例花费的时间更长，其失败报告如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[2021-08-09T03:33:57.661Z] The following test cases take too long to finish:
[2021-08-09T03:33:57.661Z] PASS: server_test.go:874: serverTestSerialSuite.TestTLS  7.388s
[2021-08-09T03:33:57.661Z] --- PASS: TestCluster (5.20s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何运行集成测试" tabindex="-1"><a class="header-anchor" href="#如何运行集成测试" aria-hidden="true">#</a> 如何运行集成测试</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>openGemini的所有集成测试文件放在<code>tests</code>文件夹下面。</p></div><p>首先需要本地启动测试环境，推荐使用如下命令，快速启动本地伪集群：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. build source code</span>
<span class="token function">make</span> go-build
<span class="token comment"># 2. start cluster for test (prefer linux)</span>
<span class="token function">bash</span> scripts/install_cluster.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行所有测试-1" tabindex="-1"><a class="header-anchor" href="#运行所有测试-1" aria-hidden="true">#</a> 运行所有测试</h3><p>您始终可以通过在 Makefile 中执行 <code>integration-test</code> 目标来运行所有测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> integration-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="运行单个测试-1" tabindex="-1"><a class="header-anchor" href="#运行单个测试-1" aria-hidden="true">#</a> 运行单个测试</h3><p>要运行单个测试，您可以执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">URL</span><span class="token operator">=</span>http://127.0.0.1:8086 go <span class="token builtin class-name">test</span> <span class="token parameter variable">-mod</span><span class="token operator">=</span>mod <span class="token parameter variable">-test.parallel</span> <span class="token number">1</span> <span class="token parameter variable">-timeout</span> 10m ./tests <span class="token parameter variable">-run</span> TestServer_FullJoin  <span class="token parameter variable">-v</span> <span class="token assign-left variable">GOCACHE</span><span class="token operator">=</span>off 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如何编写集成测试" tabindex="-1"><a class="header-anchor" href="#如何编写集成测试" aria-hidden="true">#</a> 如何编写集成测试</h3><p>请参考已有的集成测试风格，新增您的测试用例。</p>`,16);function _(T,w){const s=o("ExternalLinkIcon");return r(),d("div",null,[c,a("p",null,[a("a",p,[e("pingcap/failpoint"),n(s)]),e(" 是 Golang 的 "),a("a",h,[e("failpoints"),n(s)]),e(" 的一个实现。 失败点用于添加可以注入错误的代码点。 失败点是一个代码片段，只有在相应的失败点处于活动状态时才会执行。")]),u,a("p",null,[e("如果您使用 "),v,e(" 进行开发，您还可以通过手动启用和禁用故障点的 IDE 运行测试。 有关详细信息，请参阅 "),a("a",g,[e("文档"),n(s)]),e("。")]),a("p",null,[e("如果您使用 "),b,e(" 进行开发，您还可以通过手动启用和禁用故障点的编辑器运行测试。 有关详细信息，请参阅 "),a("a",m,[e("文档"),n(s)]),e("。")]),f,a("p",null,[e("要确定包泄漏的来源，请参阅 "),a("a",k,[e("文档"),n(s)])]),x])}const C=i(l,[["render",_],["__file","test_tutorials.html.vue"]]);export{C as default};