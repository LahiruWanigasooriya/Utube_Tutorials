// app/page.tsx
export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>SubSubCategory API</h1>
      <p>API is running successfully!</p>
      <h2>Available Endpoints:</h2>
      <ul>
        <li><code>GET /api/subsubcategory</code> - Get all subsubcategories</li>
        <li><code>GET /api/subsubcategory?subsubcategoryId=ID</code> - Get subsubcategory by ID</li>
        <li><code>POST /api/subsubcategory</code> - Create new subsubcategory</li>
        <li><code>PUT /api/subsubcategory?subsubcategoryId=ID</code> - Update subsubcategory</li>
        <li><code>DELETE /api/subsubcategory?subsubcategoryId=ID</code> - Delete subsubcategory</li>
        <li><code>GET /api/health</code> - Health check</li>
        <li><code>GET /api/debug/db</code> - Database connection test</li>
        <li><code>GET /api/debug/env</code> - Environment variables test</li>
      </ul>
    </div>
  )
}