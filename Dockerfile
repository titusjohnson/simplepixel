# Build stage: generate static site with Hugo
FROM hugomods/hugo:std AS builder

WORKDIR /src
COPY . .

RUN hugo --minify

# Runtime stage: serve with Caddy
FROM caddy:2-alpine

COPY --from=builder /src/public /srv

EXPOSE 3000

CMD ["caddy", "file-server", "--root", "/srv", "--listen", ":3000"]
