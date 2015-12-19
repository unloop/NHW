FROM node:0.12.7

MAINTAINER team@lastbackend.com

ADD . /opt

EXPOSE 3000
EXPOSE 3003

RUN echo "in repo"
RUN rm -rf /opt/node_modules
RUN cd /opt && npm install
ENV DEBUG *

# Setup main workdir
WORKDIR /opt
VOLUME /opt

# Default command
CMD node app.js
