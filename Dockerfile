FROM node:17.3.0-alpine AS builder
WORKDIR /build

COPY . .
RUN npm ci --unsafe-perm
RUN npm run build

FROM caddy:2.4.6-alpine AS runner
EXPOSE 80

COPY --from=builder /build/dist /usr/share/caddy
COPY ./dev/Caddyfile /etc/caddy/Caddyfile
