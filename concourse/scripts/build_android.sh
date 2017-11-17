#!/bin/bash
SCRIPTPATH=$(dirname $(readlink -f $0))

wait_until_build_finishes () {
  COUNT=0

  while [ -z $ANDROID_APP_URL -a $COUNT -lt 20 ]; do  
    echo 'checking for the URL'
    ANDROID_APP_URL=`exp bs --config ./expo.integration.json | grep 'APK:' | awk -F ": " '{print$2}'`
    sleep 60
    COUNT=COUNT+1
  done  
}

apt-get update && apt-get install -y expect && \
yarn global add exp && \
${SCRIPTPATH}/login_exp.sh && \
cd bookit-prototype-1 && \
exp ba --config ./bookit-with-dependencies/expo.integration.json && \
wait_until_build_finishes

if [ -z $ANDROID_APP_URL ]; then
  exit 1
fi

echo `exp bs --config ./expo.integration.json | grep 'APK:' | awk -F ": " '{print$2}'`

