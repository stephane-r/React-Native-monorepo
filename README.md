# Create React-Native apps monorepo with Yarn Workspaces

## Introduction

React App monorepo with Yarn workspaces. This project include React (packages/web) and React Native (packages/mobile).

Inspired by [devhub](https://github.com/devhubapp/devhub) architecture.

Great article about React monorepo : [Building large scale react applications in a monorepo](https://medium.com/@luisvieira_gmr/building-large-scale-react-applications-in-a-monorepo-91cd4637c131)

## Installation

Install all `packages` dependencies :

`yarn`

Run React web app :

`yarn web:start`

Run React-Native app on Android :

`yarn mobile:android:run`

## Using Docker

If you want use Dockerfile for your React/React-Native project, you can use [this Docker image](https://github.com/stephane-r/react-native-docker)
