FROM nginx:alpine
COPY ./welcome-to-osu/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx","-g","daemon off;"]