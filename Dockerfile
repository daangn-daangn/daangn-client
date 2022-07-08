FROM nginx

# 해당 애플리케이션의 소스 코드가 이 디렉터리로 들어감
WORKDIR /app

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./build /usr/share/nginx/html