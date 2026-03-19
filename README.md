# MovieCollection in a monorepo (frontend and backend in one project)!

Architecture:
- Backend (api-server) uses Express.js REST API, connecting to MongoDB
- Frontend uses Angular, interacts with the Backend api
- There is /data folder which contains `sample_mflix.movies.json` — a sample MongoDB's movies dataset used in this app

> **DON'T WORRY**! Running this application locally is as simple as it can be. See below:

## How To Run:
### 1. Download locally (using git and bash)

```bash
git clone https://github.com/WP1ATU/ca2-valerkahere
cd ./ca2-valerkahere
```
### 2. Backend Setup

2.1 You can follow the [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide, to learn how to create a free Atlas account, create your first cluster and get your Connection String to the database.
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

> [!IMPORTANT]  
> Once you created a free MongoDB cluster, and you can access it through Compass app for convenience.

2.2 In MongoDB Compass/Web app: Create a new collection, **call it "movies" otherwise the code won't work**

2.3 import the `/data/sample_mflix.movies.json` file. 

2.4 Create a `.env` file at `ca2-valerkahere/backend/.env`

2.5 Put the code from step 2.1 with your **connection string** into that file

2.6 Update the packages listed in package.json (including the root, /frontend and /backend) with
```bash
npm install
```


### 3. That's it!
Run the project with an elegant:

```bash
npm run dev
```

> [!NOTE]
> Both frontend and backend are **run together automatically**
> using *concurrently* when `npm run dev` is used (see "scripts" in package.json)
