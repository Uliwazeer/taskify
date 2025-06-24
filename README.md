
# 📋 Taskify - Smart Task Management API

Taskify is a backend API I built using Node.js, Express.js, and MongoDB to manage tasks with full CRUD functionality. It includes user authentication using JWT, 
password hashing with Bcrypt, and a clean, scalable project structure. The API is containerized with Docker and fully deployable on OpenShift using different strategies.

---

## 🚀 Features

- User registration and login using JWT
- Protected routes with JWT middleware
- Task management: Create, Read, Update, Delete
- Clean and modular folder structure
- Dockerized and OpenShift-ready

---

## 🛠️ Tech Stack

- Node.js / Express.js
- MongoDB / Mongoose
- JWT / Bcrypt
- Docker
- OpenShift CLI & Console
- dotenv / cors

---

## 🧾 Local Setup

```bash
git clone https://github.com/<your-username>/taskify.git
cd taskify
npm install
touch .env
````

### Example `.env` file:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskify
JWT_SECRET=your_jwt_secret
```

```bash
npm run dev
```

---

## 🐳 Docker Usage

```bash
docker build -t taskify-app .
docker run -p 5000:5000 taskify-app
```

---

## 🚀 Deploying Taskify on OpenShift

I deployed Taskify on OpenShift using several methods. Below are all supported ways to get the project running on OpenShift.

---

### 📦 Requirements

* OpenShift Cluster (Red Hat OpenShift Local, OpenShift Online, or remote)
* `oc` CLI installed and authenticated
* Docker installed (optional)
* GitHub repository for the project

---

### 🔧 Method 1: Using `oc new-app` (Docker Strategy)

```bash
oc login https://<your-cluster-api> --token=<your-token>
oc new-project taskify-project
oc new-app https://github.com/<your-username>/taskify.git --name=taskify-app
oc expose svc/taskify-app
```

```bash
oc get routes
# Use the route URL to access your API
```

---

### 🌐 Method 2: Using OpenShift Web Console

1. Open the OpenShift Console and log in.
2. Create or select a project (e.g. `taskify-project`).
3. Click **+Add** > **From Git**.
4. Enter your GitHub repo URL: `https://github.com/<your-username>/taskify.git`
5. Choose:

   * **Builder Image**: Node.js
   * **Build Strategy**: Docker or Source-to-Image (S2I)
6. Click **Create**.
7. Use the auto-generated route to access the API.

---

### 📄 Method 3: Using Kubernetes YAML Manifests

If you prefer using manifest files, you can deploy using:

```bash
oc apply -f k8s/deployment.yaml
oc apply -f k8s/service.yaml
oc apply -f k8s/route.yaml
```

> You can generate these YAML files manually or use `kompose` if you have a `docker-compose.yml`.

---

### 🔁 Method 4: GitHub Integration + OpenShift Pipelines (CI/CD)

If you're using OpenShift Pipelines (Tekton):

1. Create a Pipeline that pulls your code from GitHub.
2. Build and deploy your app using tasks like `buildah`, `s2i`, or `kubectl apply`.
3. Automate builds with GitHub webhooks or triggers.

---

### 🌐 Expose Your App

After deploying, make your service accessible:

```bash
oc expose service taskify-app
oc get routes
```

---

### 🧪 Logs & Debugging

```bash
oc get pods
oc logs deployment/taskify-app
```

---

## 📌 Notes

* This project is backend-only and can be connected to any frontend (React, Vue, etc.) or mobile app.
* Designed for scalability and deployment in real-world environments.
* Useful for learning DevOps workflows, containerization, and cloud-native deployment.

---
## Live Demo On Youtube Channel >> https://youtu.be/eY_A24v8N9c?si=wZa-33hOiUx_D7-q 
## 🙋‍♂️ Contact Me

🔗 [LinkedIn](https://www.linkedin.com/in/aliwazeer)
💻 [GitHub](https://github.com/Uliwazeer)


### SCREENSHOOT
# 0.1 Taskify In English
![Screenshot (109)](https://github.com/user-attachments/assets/0613ad11-8b66-40e3-980d-e89a9ebe7f70)

![Screenshot (111)](https://github.com/user-attachments/assets/72b10153-814b-471d-913c-f8c8669cce16)


![Screenshot (110)](https://github.com/user-attachments/assets/1fc28060-12fe-4054-bdc0-0222cf28d55d)


![Screenshot (112)](https://github.com/user-attachments/assets/1d6d976c-057c-46c1-8e24-fed161ae5fe1)

# When Site In Arabic Language
# 0.5
![Screenshot (113)](https://github.com/user-attachments/assets/b31a748b-75c6-4c32-b004-0337b822e8e4)


