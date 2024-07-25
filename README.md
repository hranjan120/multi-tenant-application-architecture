# Multi-tenant application architecture with Express JS and Mongoose

This repo is the Implementation of Multiple Database Connecction with Express JS and Mongoose

# About

A multi-tenant application is customized for every group of users (so-called tenants) while the entire architecture and core functionality remain the same. Multi-tenancy is a typical approach for Software-as-a-Service (SaaS) vendors.

- SaaS (software as a service) or AaaS (applications as a service).
- PaaS (Platform as a Service).
- For all other applications where multiple clients use the same stack of algorithms.

## Getting started

To get the application running locally:

- Clone this repo
- Create Two Env File `.env.dev` and `.env.prod`. 
- Start Docker desktop
- Run the command `docker compose up` to start the Local Server (Redis and Express Application).
- The App will start on port `8002`.
- The App will auto refresh after code changes.