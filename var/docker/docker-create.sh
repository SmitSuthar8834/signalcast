#!/usr/bin/env bash

docker kill signalcast || true 
docker rm signalcast || true 
docker create --name signalcast -p 3000:3000 -p 4200:4200 localhost/signalcast
