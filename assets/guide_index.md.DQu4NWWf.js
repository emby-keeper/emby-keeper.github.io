import{_ as i,o as r,c as o,a3 as s,j as t,a as d,G as l}from"./chunks/framework.C-yY9WsR.js";const n={},m={width:"100%",height:"auto",viewBox:"0 0 640 240",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"};function c(p,a){return r(),o("svg",m,a[0]||(a[0]=[s('<defs data-v-ae1b1268><linearGradient id="svg_2" x1="0" x2="0" y1="0.62" y2="0" data-v-ae1b1268><stop id="jq_stop_8839" offset="0" stop-color="#d299c2" data-v-ae1b1268></stop><stop id="jq_stop_4910" offset="1" stop-color="#fef9d7" data-v-ae1b1268></stop></linearGradient></defs><g class="layer" data-v-ae1b1268><title data-v-ae1b1268>Embykeeper</title><g id="svg_17" data-v-ae1b1268><path d="m127.9,62.92c0,0 -30.03,29.81 -30.15,29.65c-0.11,-0.16 4.85,4.67 4.85,4.67c0,0 -25.74,25.74 -25.85,25.59c-0.11,-0.16 29.92,30.19 29.92,30.19c0,0 4.52,-4.52 4.4,-4.67c-0.11,-0.16 26.08,25.67 26.08,25.67c0,0 30.03,-30.03 29.92,-30.19c-0.11,-0.16 -4.18,-3.91 -4.29,-4.06c-0.11,-0.16 26.08,-25.36 25.97,-25.52c-0.11,-0.16 -30.6,-30.1 -30.71,-30.26c-0.11,-0.16 -3.95,4.45 -3.95,4.45c0,0 -26.19,-25.52 -26.19,-25.52z" fill="url(#svg_2)" id="svg_13" stroke="#000000" stroke-width="0" data-v-ae1b1268></path><path d="m120.22,98.15c0,0 0,40.87 0,40.87c0,0 36.13,-20.32 36.13,-20.32c0,0 -36.13,-20.55 -36.13,-20.55z" fill="#ffffff" id="svg_14" stroke="#000000" stroke-width="0" data-v-ae1b1268></path><text fill="var(--vp-c-text-1)" font-family="Fantasy" font-size="24" id="svg_3" stroke="var(--text-color)" stroke-width="0" text-anchor="middle" transform="matrix(2.78428 0 0 2.78428 -449.017 -365.152)" x="303.91" xml:space="preserve" y="182.86" data-v-ae1b1268> Embykeeper </text><text fill="var(--subtext-color)" font-family="Fantasy" font-size="24" font-style="normal" id="svg_4" stroke="var(--vp-c-text-1)" stroke-width="0" text-anchor="middle" transform="matrix(1 0 0 0.73052 0 70.3264)" x="392.17" xml:space="preserve" y="132.01" data-v-ae1b1268> keep simple </text></g></g>',2)]))}const b=i(n,[["render",c],["__scopeId","data-v-ae1b1268"]]),f={align:"center"},h={href:"https://github.com/emby-keeper/emby-keeper"},k=JSON.parse('{"title":"什么是 Embykeeper?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),_={name:"guide/index.md"},v=Object.assign(_,{setup(p){return(a,e)=>(r(),o("div",null,[e[0]||(e[0]=t("h1",{id:"什么是-embykeeper",tabindex:"-1"},[d("什么是 Embykeeper? "),t("a",{class:"header-anchor",href:"#什么是-embykeeper","aria-label":'Permalink to "什么是 Embykeeper?"'},"​")],-1)),t("p",f,[t("a",h,[l(b)])]),e[1]||(e[1]=s('<p>Embykeeper 是一个专为 Emby 影视服务器设计的自动化工具. 它主要提供两大核心功能:</p><ol><li><p><strong>自动签到</strong> - 可以自动完成多个站点的 Telegram 机器人每日签到, 以获取积分.</p></li><li><p><strong>定时保号</strong> - 通过模拟登录和播放视频, 定期保持 Emby 账号的活跃状态, 避免因长期不使用而被回收.</p></li></ol><p>除此之外, Embykeeper 还提供了一些额外功能, 如自动监控抢注邀请码、自动水群、考核辅助等.</p><p>项目支持 Python 运行、Docker 部署或云部署, 且完全开源, 不存储任何密钥或隐私信息, 经两年的开发已经在稳定和安全性方面有一定保证.</p><div class="tip custom-block"><p class="custom-block-title">快速安装</p><p>希望安装 Embykeeper? 请前往 <a href="/guide/安装指南"><strong>🚀 安装指南</strong></a>.</p></div><h2 id="设计初衷与声明" tabindex="-1">设计初衷与声明 <a class="header-anchor" href="#设计初衷与声明" aria-label="Permalink to &quot;设计初衷与声明&quot;">​</a></h2><p>在中文 Emby 社群规则下, 保号要求逐渐苛刻 (部分要求每月登录或每日签到), 这使得休闲时间紧张的人士难以安心使用. 本项目仅旨在帮助该类人群保号, 不鼓励持有大量 Emby 账号而不使用, 导致真正需要的人、为中文影视资源分享和翻译有贡献的人难以获得账号的行为.</p><p>开发团队呼吁仅保留 1-2 个较全面质量较高的 Emby 服务器.</p><p>本项目仅提供工具, 具体使用形式及造成的影响和后果与开发团队无关.</p><p>当您安装并使用该工具, 默认您已经阅读并同意上述声明, 并确认自己并非出于&quot;集邮&quot;目的而安装.</p><h2 id="账户安全" tabindex="-1">账户安全 <a class="header-anchor" href="#账户安全" aria-label="Permalink to &quot;账户安全&quot;">​</a></h2><p>本项目涉及的一切 Emby 服务器与 Embykeeper 开发团队无关, 在使用 Embykeeper 时造成的一切损失 (包括但不限于 Emby 或 Telegram 账号被封禁或被群封禁) 与开发团队无关.</p><p>为了您的账号安全, 推荐使用小号. 运行该工具的 Telegram 账号若通过接码注册, 请使用一段时间再接入本工具.</p><p>Embykeeper 将自动向 Embykeeper Auth Bot (<a href="https://t.me/embykeeper_auth_bot" target="_blank" rel="noreferrer">@embykeeper_auth_bot</a>) 发送信息, 用于在线验证码解析、日志记录、用户验证等, 内容不含任何密码或密钥信息, 或其他敏感隐私信息.</p>',14))]))}});export{k as __pageData,v as default};
