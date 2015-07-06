#!/usr/bin/env bash
java -jar ../selenium-server-standalone-2.46.0.jar -role node -nodeConfig ./chrome-node-config.json -Dwebdriver.chrome.driver=./chromedriver
