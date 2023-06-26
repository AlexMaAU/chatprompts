// 在新建的api文件夹下添加 backend routes

// http://localhost:3000/api/users

export async function GET(request) {
    // Handle GET request for /api/users
    // Retrieve users from the database or any data source
    const users = [
        {id:1, name: 'john'},
        {id:2, name: 'Jane'},
        {id:3, name: 'Bob'}
    ]
    // send the users as a response
    return new Response(JSON.stringify(users))
}