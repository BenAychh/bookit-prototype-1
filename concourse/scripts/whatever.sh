#!/bin/bash
DIRPATH=$(dirname "$(readlink -f "$0")")
echo "$DIRPATH"