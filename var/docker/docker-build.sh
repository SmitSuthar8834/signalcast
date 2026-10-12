#!/bin/bash

set -o xtrace

docker rmi localhost/signalcast || true
docker build --target dist -t localhost/signalcast -f Dockerfile.dev .
docker build --target devcontainer -t localhost/signalcast-devcontainer -f Dockerfile.dev .
