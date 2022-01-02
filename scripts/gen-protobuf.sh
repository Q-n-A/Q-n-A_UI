#!/bin/bash

# .proto ファイルが入っている GitHub 上のフォルダ
sourceDir="https://github.com/Q-n-A/Q-n-A/tree/main/protobuf"
# .proto ファイルたちのダウンロード先 (後で削除されます)
tempDir="./protobuf"
# 生成したいコードのフォルダ
distDir="./src/protobuf"

rm -rf $distDir
mkdir -p $distDir

dlDir="${sourceDir/"tree/main"/"trunk"}"
svn export $dlDir $tempDir --force

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out="${distDir}" --ts_proto_opt=oneof=unions --ts_proto_opt=outputClientImpl=grpc-web --ts_proto_opt=esModuleInterop=true $tempDir/*.proto
rm -rf $tempDir
