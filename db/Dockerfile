FROM postgres:14-alpine

ENV POSTGRES_PASSWORD=mysecretpassword
ENV POSTGRES_USER=postgres
ENV POSTGRES_DATABASE=postgres
ENV PGDATA=/var/lib/pg_data

# VOLUME /var/lib/postgresql/data

USER root

RUN chmod 755 /

EXPOSE 5432
