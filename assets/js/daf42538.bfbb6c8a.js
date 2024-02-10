"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1032],{1486:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var a=n(5893),r=n(1151);const t={sidebar_label:"cache_factory",title:"cache.cache_factory"},s=void 0,i={id:"reference/cache/cache_factory",title:"cache.cache_factory",description:"CacheFactory Objects",source:"@site/docs/reference/cache/cache_factory.md",sourceDirName:"reference/cache",slug:"/reference/cache/cache_factory",permalink:"/autogen/docs/reference/cache/cache_factory",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/cache/cache_factory.md",tags:[],version:"current",frontMatter:{sidebar_label:"cache_factory",title:"cache.cache_factory"},sidebar:"referenceSideBar",previous:{title:"cache",permalink:"/autogen/docs/reference/cache/"},next:{title:"disk_cache",permalink:"/autogen/docs/reference/cache/disk_cache"}},o={},h=[{value:"CacheFactory Objects",id:"cachefactory-objects",level:2},{value:"cache_factory",id:"cache_factory",level:4}];function d(e){const c={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.h2,{id:"cachefactory-objects",children:"CacheFactory Objects"}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-python",children:"class CacheFactory()\n"})}),"\n",(0,a.jsx)(c.h4,{id:"cache_factory",children:"cache_factory"}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-python",children:'@staticmethod\ndef cache_factory(seed, redis_url=None, cache_path_root=".cache")\n'})}),"\n",(0,a.jsx)(c.p,{children:"Factory function for creating cache instances."}),"\n",(0,a.jsx)(c.p,{children:"Based on the provided redis_url, this function decides whether to create a RedisCache\nor DiskCache instance. If RedisCache is available and redis_url is provided,\na RedisCache instance is created. Otherwise, a DiskCache instance is used."}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.strong,{children:"Arguments"}),":"]}),"\n",(0,a.jsxs)(c.ul,{children:["\n",(0,a.jsxs)(c.li,{children:[(0,a.jsx)(c.code,{children:"seed"})," ",(0,a.jsx)(c.em,{children:"str"})," - A string used as a seed or namespace for the cache.\nThis could be useful for creating distinct cache instances\nor for namespacing keys in the cache."]}),"\n",(0,a.jsxs)(c.li,{children:[(0,a.jsx)(c.code,{children:"redis_url"})," ",(0,a.jsx)(c.em,{children:"str or None"})," - The URL for the Redis server. If this is None\nor if RedisCache is not available, a DiskCache instance is created."]}),"\n"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.strong,{children:"Returns"}),":"]}),"\n",(0,a.jsx)(c.p,{children:"An instance of either RedisCache or DiskCache, depending on the availability of RedisCache\nand the provided redis_url."}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.strong,{children:"Examples"}),":"]}),"\n",(0,a.jsx)(c.p,{children:'Creating a Redis cache\n> redis_cache = cache_factory("myseed", "redis://localhost:6379/0")'}),"\n",(0,a.jsx)(c.p,{children:'Creating a Disk cache\n> disk_cache = cache_factory("myseed", None)'})]})}function l(e={}){const{wrapper:c}={...(0,r.a)(),...e.components};return c?(0,a.jsx)(c,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,c,n)=>{n.d(c,{Z:()=>i,a:()=>s});var a=n(7294);const r={},t=a.createContext(r);function s(e){const c=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(t.Provider,{value:c},e.children)}}}]);