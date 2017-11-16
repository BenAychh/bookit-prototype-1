#!/bin/bash

set -e -u -x

mv dependency-cache/node_modules bookit-prototype-1
cd bookit-prototype-1 && mv ./{.[!.],}* ../bookit-with-deps