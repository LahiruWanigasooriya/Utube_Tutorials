# SubSubCategory API

A Next.js API for managing subsubcategories with MongoDB.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
# Edit .env.local with your MongoDB connection string
```

3. Run development server:
```bash
npm run dev
```

## Production Deployment (DigitalOcean)

### Method 1: Using DigitalOcean App Platform

1. **Connect your GitHub repository** to DigitalOcean App Platform
2. **Set environment variables** in DigitalOcean dashboard:
   - `NODE_ENV=production`
   - `MONGODB_URI=your-mongodb-connection-string`
   - `DATABASE_URL=your-mongodb-connection-string`

3. **Configure build settings**:
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - Source Directory: `/` (root)

### Method 2: Using App Spec File

1. Use the `.do/app.yaml` file provided
2. Update the GitHub repo details
3. Update the MongoDB connection strings
4. Deploy using DigitalOcean CLI or dashboard

## API Endpoints

- `GET /api/subsubcategory` - Get all subsubcategories
- `GET /api/subsubcategory?subsubcategoryId=ID` - Get by ID
- `POST /api/subsubcategory` - Create new
- `PUT /api/subsubcategory?subsubcategoryId=ID` - Update
- `DELETE /api/subsubcategory?subsubcategoryId=ID` - Delete
- `GET /api/health` - Health check
- `GET /api/debug/db` - Database test
- `GET /api/debug/env` - Environment test

## Troubleshooting

If you get 404 errors:

1. **Check if the app is building successfully** in DigitalOcean logs
2. **Verify environment variables** are set correctly
3. **Test the health endpoint** first: `/api/health`
4. **Check database connectivity** with `/api/debug/db`
5. **Review application logs** in DigitalOcean dashboard

## Required Environment Variables

- `MONGODB_URI` or `DATABASE_URL`: MongoDB connection string
- `NODE_ENV`: Set to `production` for production deployment