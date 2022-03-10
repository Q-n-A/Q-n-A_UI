FROM node:16.14.0 AS builder
ARG TARGETARCH
WORKDIR /temp

RUN apt-get update && apt-get install jq unzip -y --no-install-recommends

SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN if [ "$TARGETARCH" = "amd64" ]; then PROTOC_ARCH="x86_64"; elif [[ "$TARGETARCH" = "arm"* ]]; then PROTOC_ARCH="aarch_64"; else exit 1; fi && \
  URI=$(wget -O - -q https://api.github.com/repos/protocolbuffers/protobuf/releases | \
  jq -r --arg arch "linux-$PROTOC_ARCH" '.[0].assets[] | select(.name | test($arch)) | .browser_download_url') && \
  wget --progress=dot:giga "$URI" -O "protobuf.zip" && \
  unzip -o protobuf.zip -d protobuf && \
  chmod -R 755 protobuf/*
ENV PATH $PATH:/temp/protobuf/bin

COPY ./package*.json .
RUN npm ci --unsafe-perm

COPY . .
RUN npm run gen && \
  npm run build

FROM caddy:2.4.6-alpine AS runner

COPY --from=builder /temp/dist /usr/share/caddy
COPY ./dev/Caddyfile /etc/caddy

EXPOSE 80
