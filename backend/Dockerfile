# syntax=docker/dockerfile:1.4
FROM rust:buster AS base

WORKDIR /code
RUN cargo init
COPY Cargo.toml /code/Cargo.toml
RUN cargo fetch
COPY . /code

FROM base AS builder

RUN cargo build --release --offline

FROM debian:buster-slim

ENV ROCKET_ENV=production
ENV USER=root
ENV ROCKET_ADDRESS=0.0.0.0
ENV RUST_LOG=debug
ENV PG_DBNAME=postgres
ENV PG_HOST=192.168.0.2
ENV PG_USER=postgres
ENV PG_PASSWORD=mysecretpassword
ENV ADDRESS=0.0.0.0:8000

COPY --from=builder /code/target/release/react-rust-postgres /react-rust-postgres

EXPOSE 8000
