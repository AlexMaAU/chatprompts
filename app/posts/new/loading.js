// 当用户导航到一个新的页面或刷新当前页面时，Next.js 会在服务器端或客户端渲染页面，并在加载期间显示一个加载指示器。这个加载指示器是通过 loading 文件来定义的。
// 在 Next.js 中，loading 文件应该被导出为一个 React 组件。该组件将用于在加载页面时进行展示，并在页面加载完成后自动被替换。

const Loading = ()=>{
    // You can add any UI inside loading, including a Skeleton
    return <LoadingSkeleton />
}

export default Loading