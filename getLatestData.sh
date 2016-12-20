#!/usr/bin/env bash
curl http://rubenalamina.mx/division/blueprints.json > ./src/data/blueprints.json
curl http://rubenalamina.mx/division/boo.json > ./src/data/boo.json
curl http://rubenalamina.mx/division/dz.json > ./src/data/dz.json
curl http://rubenalamina.mx/division/dz-east.json > ./src/data/dz-east.json
curl http://rubenalamina.mx/division/dz-west.json > ./src/data/dz-west.json
curl http://rubenalamina.mx/division/lz-east.json > ./src/data/lz-east.json
curl http://rubenalamina.mx/division/lz-west.json > ./src/data/lz-west.json
curl http://rubenalamina.mx/division/special-equipment.json > ./src/data/special-equipment.json

