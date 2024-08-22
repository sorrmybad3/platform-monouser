#!/bin/bash
sleep 5
#until mongosh --host monouser_mongo:27017 --file "$(dirname "$0")/init.js"
until mongosh --host e2e_mongo:27017 --file "$(dirname "$0")/init.js"
do
  sleep 5
done