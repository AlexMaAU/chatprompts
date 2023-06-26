// 'use client' - Next默认组件是server side component。
// 如果是使用 useState/useEffect/interactivity 等需要在浏览器端进行的功能，需要在文件顶部加上 'use client' 
// 最简单的判断方法，就是默认别加 use client，如果写代码时需要报错再加上 use client

// import {useState} from 'react'
 
export default function Home() {
  return (
    <h1>[Page Content]</h1>
  )
}
