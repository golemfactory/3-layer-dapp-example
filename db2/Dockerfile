FROM debian:bookworm-slim

VOLUME /var/lib/postgresql/data

RUN apt-get update && apt-get install -y postgresql postgresql-contrib sudo

RUN sed -i "s/local .*all .*all .*peer/local all all md5/" /etc/postgresql/*/main/pg_hba.conf

ENV POSTGRES_PASSWORD=mysecretpassword
ENV POSTGRES_USER=postgres
ENV POSTGRES_DATABASE=postgres

RUN chmod 755 /

EXPOSE 5432
