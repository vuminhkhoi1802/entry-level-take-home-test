# Entry Level Take Home Test

### Introduction
- This project consists of 2 folders as 2 services: one for the frontend and one for backend
- Basically, I followed closely to the requirements of the test with minor changes

### Design Decisions
1. Backend:
- NestJs: This one is TypeScript based and this framework is flexible for both monolith and microservice approaches. This framework also has great documentation and highly customizable
- As NestJS is used, I could also easily apply the 3-tier architecture to make my codes highly structured as shown in this code base.
2. Frontend:
- Ant Design: it has comprehensive component library and features. Basically, any type of UI can be easily found and applied with Ant Design library with minimal css adjustment. The big downsize of this one is that it can lead to high bundle size

### How to run the project

- Make sure to clone your proe

1. Use Docker (please make sure you have [Docker](https://docs.docker.com/engine/install/) installed in your system)
```shell
$ docker image build react-app/ -t react-app

$ docker image build nodejs-app/ -t nodejs-app

$ docker compose up
```

2. Use `npm`
- In 2 separate Terminals/Shells, execute the commands below
```shell
$ cd nodejs-app && npm install && npm run start

$ cd react-app && npm install && npm run start
```

#### Please feel free to raise any questions regarding this.