FROM debian:bookworm-slim

VOLUME /var/lib/postgresql/data

RUN apt-get update && apt-get install -y postgresql postgresql-contrib sudo

RUN sed -i "s/local .*all .*all .*peer/local all all md5/" /etc/postgresql/*/main/pg_hba.conf
RUN sed -i "\$a host  all  all 0.0.0.0/0 md5" /etc/postgresql/*/main/pg_hba.conf
RUN sed -i "\$a listen_addresses = '*'"  /etc/postgresql/*/main/postgresql.conf

ENV POSTGRES_PASSWORD=mysecretpassword
ENV POSTGRES_USER=postgres
ENV POSTGRES_DATABASE=postgres

RUN chmod 777 /

EXPOSE 5432
